<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 //header("Refresh:0");
	 
	 $response=array();
if($con)
{
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
     function test_input($data1) 
	 {
				global $con;
				global $response;
  				$data1 = trim($data1);
  				$data1 = stripslashes($data1);
  				$data1 = htmlspecialchars($data1);
				$data1 = mysqli_real_escape_string($con,$data1);
  				return $data1;
		}

     function result($status,$msg){
				global $response;
				global $con;
				mysqli_close($con);
				$response['statuscode']=$status;
				$response['msg']=$msg;
				echo json_encode($response);
			}

        $postdata1=file_get_contents("php://input");
        $obj=json_decode($postdata1,true);
	    $subjectid=test_input($obj['SUBJECT']);
		$sql1 = "UPDATE subject SET IS_ACTIVE=0 WHERE SUBJECT_ID='$subjectid'";
		if (mysqli_query($con,$sql1)) 
		{
			$sql="UPDATE class_reg SET IS_ACTIVE=0 WHERE SUBJECT_ID='$subjectid'";
			if(mysqli_query($con,$sql))
			{
				result(1,'Deleted'); 
			}
			 
        }	
		else
		{
			result(0,'Not deleted');  
		}
	}	
}
else
	{
		die("Connection failed: " . mysqli_connect_error());
	}
?>