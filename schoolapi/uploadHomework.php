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

        $postdata=file_get_contents("php://input");
        $obj=json_decode($postdata,true);
	    
		    $reg=test_input($obj['REG_NO']);
			$cid=test_input($obj['class']);  
            $sid=test_input($obj['subject']);
            $dt=test_input($obj['date']);			
            $tt=test_input($obj['time']);
			$file ="http://localhost/schoolapi/image_uploads/".test_input($obj['userpic']);			
			$sqll = "SELECT * from homework where
			  REG_NO='$reg' and CLASS_MASTER_ID='$cid', and SUBJECT_ID='$sid' and FILE='$file' ";
			$query=mysqli_query($con,$sqll);	
				$count = mysqli_num_rows($query);				 
		         if ($count == 0) {					 
			         $temp=1;
                    }
					else
					{
						$response['statuscode']=0;
						$response['message'] = "This homework already exists in Data base";
						echo json_encode($response); 
					}
					
	  
		if($temp==1)
		{
			
		  $sql = "INSERT INTO homework(REG_NO,CLASS_MASTER_ID, SUBJECT_ID, FILE, DATE, TIME) 
		           VALUES ('$reg','$class','$subject','$file','$date','$time')";

			if(mysqli_query($con,$sql))
			{
				$response['statuscode']=1;
				echo json_encode($response); 
			}				
			else
			{
				$response['statuscode']=0;
				$response['message'] = "Error during the insertion process";
				echo json_encode($response); 
			}
			 
		}
	  
		  
	   
	   
	}
	else
	{
		$response['statuscode']=0;
		$response['message'] = "RESQUEST METHOD is not --- POST ---";
		echo json_encode($response); 
	}
}
?>