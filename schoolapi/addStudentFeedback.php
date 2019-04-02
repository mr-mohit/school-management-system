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
	   $reg=test_input($obj['reg_no']);
	   $dat=test_input($obj['date']);
	   $subject=test_input($obj['subject']);
	   $description=test_input($obj['description']);
	   
	   $sql="INSERT INTO feedback (ID, REG_NO, DATE, SUBJECT, DESCRIPTION) VALUES (NULL, '$reg', '$dat', '$subject','$description')";
	   if(mysqli_query($con,$sql))
		{
//			echo "Inserted";
		   result(1,"success");
		}
		else
		{
			result(0,"fail");
		} 	   
	}
}
?>