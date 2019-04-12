<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
	 
if($con){
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
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
	   $REG_NO=test_input($obj['REG_NO']);
	   $SUBJECT_ID=test_input($obj['SUBJECT_ID']);
	   
	   
	   $sql="INSERT INTO teacher_table(REG_NO,SUBJECT_ID,IS_ACTIVE) VALUES('$REG_NO','$SUBJECT_ID',1)";
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
	else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>
