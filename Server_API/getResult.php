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
				$reg=test_input($obj['REG']);
	            $term=test_input($obj['TERM']);				
                
                $sql="SELECT  DISTINCT class_test_master.CLASS_TEST_ID,class_test_master.TEST_NAME, 
				class_test_master.TEST_TYPE,class_test_master.SUBJECT_ID,subject.SUBJECT_NAME,
				class_test_table.MARKS_OBTAINED,term_master.TERM,
                      class_test_table.WEIGHTAGE_MARKS_OBTAINED
						FROM class_test_master
						JOIN class_reg ON (class_reg.CLASS_MASTER_ID = class_test_master.CLASS_MASTER_ID)
						JOIN subject ON ( subject.SUBJECT_ID=class_test_master.SUBJECT_ID)
						JOIN class_test_table ON( class_test_table.CLASS_TEST_ID=class_test_master.CLASS_TEST_ID)
						JOIN student_class_reg ON (student_class_reg.CLASS_MASTER_ID = class_test_master.CLASS_MASTER_ID)
                        JOIN term_master ON(term_master.TERM_ID=class_test_master.TERM_ID)
						where class_test_table.REG_NO='$reg' AND term_master.TERM='$term' ORDER BY subject.SUBJECT_NAME";
				
				$result=mysqli_query($con,$sql);
				$count = mysqli_num_rows($result);
				 
		         if ($count == 0) {
					 
			         result(0,"no row fetched.");  
                    }
		          else{ 				     
					      
					   
								while($row=mysqli_fetch_assoc($result)){						   
								$data[]=$row;						
								}
								
								
								// get different terms available in result table
								$sql = "SELECT DISTINCT TERM_ID FROM class_test_master";
								$result = mysqli_query($con,$sql);
								while($row = mysqli_fetch_assoc($result))
								{
									$term = $row;
								}
								
								$response['term'] = $term; 
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
