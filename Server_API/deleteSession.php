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
	   
	   $session=test_input($obj['SESSION']);
	   
	   
	   $sql="UPDATE session_master SET IS_ACTIVE=0 WHERE SESSION_MASTER_ID='$session'";
	   if(mysqli_query($con,$sql))
		{
		   result(1,"success");

		}
		else
		{
			result(0,"fail");

		} 	   
	}
}
?>