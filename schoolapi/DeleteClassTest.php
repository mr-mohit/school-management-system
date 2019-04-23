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
	             $class=test_input($obj['Class']);
				$Subject=test_input($obj['Subject']); 
				$tt=test_input($obj['TEST_TYPE']);		
				$tn=test_input($obj['TEST_NAME']);
				$date=test_input($obj['DATE']);

			$sql="UPDATE `class_test_master` SET IS_ACTIVE=0 WHERE CLASS_MASTER_ID='$class' and SUBJECT_ID='$Subject' 
			and TEST_TYPE='$tt' and TEST_NAME='$tn' and DATE='$date'";
             
		         if (!mysqli_query($con,$sql)) {
					 
			         result(0,"Unable to Delete This Test");  
                    }
		          else
				    { 
						result(1,"Test Deleted.");					
					}
					
				    
    }
    }
	else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>
