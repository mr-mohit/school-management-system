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
	   
	   $id=test_input($obj['CLASSID']);
	   $day=test_input($obj['DAY']);
	   $subid=test_input($obj['SUBJECT']);
	   $ts=test_input($obj['SLOT']);
	    
	   $sql="DELETE FROM time_table WHERE CLASS_MASTER_ID='$id' and DAY='$day' and SUBJECT_ID='$subid' and TIME_SLOT='$ts'";
	   
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