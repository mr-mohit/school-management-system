<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con)
{
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
		        $class=test_input($obj['CID']);
                $subject=test_input($obj['SID']);
                $test=test_input($obj['TID']);		

				$sql="SELECT class_test_master.CLASS_MASTER_ID,class_test_master.SUBJECT_ID,class_test_master.CLASS_TEST_ID,class_test_table.REG_NO,class_test_table.MARKS_OBTAINED, user.FIRST_NAME,user.LAST_NAME FROM class_test_table
                      JOIN class_test_master ON(class_test_master.CLASS_TEST_ID=class_test_table.CLASS_TEST_ID)
                      JOIN user ON(user.REG_NO=class_test_table.REG_NO)
                      WHERE class_test_master.CLASS_MASTER_ID='$class' AND class_test_master.SUBJECT_ID='$subject' AND class_test_master.CLASS_TEST_ID='$test' ORDER BY class_test_table.REG_NO";
				$query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) 
				 {	 
			         result(0,"Marks are not uploaded yet");  
                 }
		         else
				 { 
					while($row=mysqli_fetch_assoc($query))
					{
						$data[]=$row;
					}
					
					$response['data']=$data;
					$response['statuscode']=1;
					echo json_encode($response);
				 }			   
    }
    }
	else
	{
		die("Connection failed: " . mysqli_connect_error());
	}
?>
