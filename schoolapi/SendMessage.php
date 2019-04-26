<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con)
{
  if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
     function test_input($data) {
				  global $con;
				  global $response;
  				$data = trim($data);
  				$data = stripslashes($data);
  				$data = htmlspecialchars($data);
				$data = mysqli_real_escape_string($con,$data);
  				return $data;
				}

	 function result($status,$msg){
				global $response;
				global $con;
				mysqli_close($con);
				$response['statuscode']=$status;
				$response['msg']=$msg;
				echo json_encode($response);
				}

			//echo"Connection Sucessfull";
			 $postdata=file_get_contents("php://input");
	         $obj=json_decode($postdata);
			 
			 $sender = test_input($obj->{'messageSender'});
			 $receiv = test_input($obj->{'messageReceiver'});
			 $title = test_input($obj->{'messageTitle'});
			 $desc = test_input($obj->{'messageDescription'});
             $date =  date("Y/m/d");
			 $time =  date("h:i:sa");
			  
			 $sql = "INSERT INTO message(SENDER,TITLE,DESCRIPTION,RECIPIENT,DATE,TIME) 
					 VALUES ('$sender','$title','$desc','$receiv','$date','$time')";
		                  
			if(mysqli_query($con,$sql))
			{	
		
				result(1,"message sent Sucessfully");
			   
			}else{
				 result(0,"fail to send message");
			}  			  
    }
	else
	{
			 result(0,"data was not posted properly");
	}
}
else{
	die("Connection failed: " . mysqli_connect_error());
}

	
?>
