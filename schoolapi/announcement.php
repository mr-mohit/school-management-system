<?php
		 include 'connection.php';
		 header('Access-Control-Allow-Origin:*');
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
		   $User_id=test_input($obj['UserId']);
       $Category=test_input($obj['category']);
	     $Title=test_input($obj['AnnouncementsTitle']);  
       $Description=test_input($obj['AnnouncementsDescription']);
       $Start_Time=test_input($obj['timestarts']);
       $End_Time=test_input($obj['timeEnds']);
    
		$sql = "INSERT INTO announcement(USER_ID,CATEGORY,TITLE,DESCRIPTION,START_TIME,END_TIME) 
		VALUES('$User_id','$Category','$Title','$Description','$Start_Time','$End_Time')";
		if(mysqli_query($con,$sql))
		{
		   result(1,"success");
		   //$response['statuscode']=1;
		  // echo json_encode($response);
		}
		else
		{
			result(0,"fail");
			//$response['statuscode']=0;
		    //echo json_encode($response);
		}   
	}
}
?>