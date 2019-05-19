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
	   
	   $sid=test_input($obj['SID']);
	   $start=test_input($obj['START_DATE']);
	   $end=test_input($obj['END_DATE']);
	   
	   $sql="UPDATE session_master SET SESSION_START_DATE='$start',SESSION_END_DATE='$end',IS_ACTIVE='1' WHERE SESSION_MASTER_ID='$sid' ";
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