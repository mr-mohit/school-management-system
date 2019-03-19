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
	   $cid=test_input($obj['CID']);
	   $class=test_input($obj['CLASS']);
	   $section=test_input($obj['SECTION']);
	   
	   $sql="UPDATE class_master SET CLASS='$class',SECTION='$section' WHERE CLASS_MASTER_ID='$cid'";
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