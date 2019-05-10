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
				$reg=test_input($obj);   

				$sql="SELECT
					class_master.CLASS,
					class_master.SECTION,
						YEAR(session_master.SESSION_START_DATE),
						YEAR(session_master.SESSION_END_DATE) from student_class_reg
							join class_master on (class_master.CLASS_MASTER_ID=student_class_reg.CLASS_MASTER_ID)
								join session_master on(session_master.SESSION_MASTER_ID=student_class_reg.SESSION_MASTER_ID)
									where student_class_reg.REG_NO='$reg'";
				$result=mysqli_query($con,$sql);
				$count = mysqli_num_rows($result);
				 
		         if ($count == 0) {
					 
			         result(0,"no row fetched.");  
                    }
		          else{ 				     
					   
								while($row=mysqli_fetch_assoc($result)){						   
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



