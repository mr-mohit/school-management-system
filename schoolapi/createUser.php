<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
if($con){

	   // post all the infos in data base
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
		  
		  function test_input($data)
		 {
			  global $con;
			  global $response;
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			$data = mysqli_real_escape_string($con,$data);
			return $data;
		 }

		 function result($status,$msg)
		 {
			global $response;
			global $con;
			mysqli_close($con);
			$response['statuscode']=$status;
			$response['msg']=$msg;
			echo json_encode($response);
		 }

		   $postdata=file_get_contents("php://input");
		   $obj=json_decode($postdata);
		  
			//basic infos
			$RegNo = test_input($obj->{'regNo'});
			$otp= test_input($obj->{'otp'});
			
		  
			$sql = "INSERT INTO rfshowbiz(OTP,NAME) 
					 VALUES ('$otp','$RegNo')";
			if(mysqli_query($con,$sql))
			{	
		
				result(1,"User Inserted Sucessfully");
			   
			}else{
				 result(0,"fail");
			}   
		}

}else{
		die("Connection failed: " . mysqli_connect_error());
	}
	
?>



