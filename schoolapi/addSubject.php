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
	   //$subject_id=test_input($_POST['subject_id']);
       $name=test_input($obj['subjectname']);
	   $type=test_input($obj['subjecttype']);  
       $material=test_input($obj['subjectmaterial']);
       //$isactive=test_input($_POST['isactive']);
		$sql = "INSERT INTO subject(SUBJECT_NAME,SUBJECT_TYPE,SUBJECT_MATERIAL,IS_ACTIVE) 
		VALUES('$name','$type','$material',1)";
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