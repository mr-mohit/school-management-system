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
	   
	   $classid=test_input($obj['CLASSID']);
	   $subjectid=test_input($obj['SUBJECTID']);
	   $slot=test_input($obj['SLOT']);
	   $day=test_input($obj['DAY']);
	   
	   
	   $sql="INSERT INTO time_table(CLASS_MASTER_ID,SUBJECT_ID,TIME_SLOT,DAY,IS_ACTIVE) VALUES ('$classid','$subjectid','$slot','$day',1)";
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