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
	             $id=test_input($obj);
				
			//echo"Connection Sucessfull";
             $sql="SELECT subject.SUBJECT_ID,subject.SUBJECT_NAME,subject.SUBJECT_MATERIAL from subject inner JOIN
					class_reg ON (class_reg.SUBJECT_ID=subject.SUBJECT_ID)
						join student_class_reg on (student_class_reg.CLASS_MASTER_ID=class_reg.CLASS_MASTER_ID) 
						where student_class_reg.REG_NO='$id'";
					   
             $query = mysqli_query($con,$sql);
		     $count = mysqli_num_rows($query);				 
		         if ($count == 0) {
					 
			         result(0,"User Table is Empty.");  
                    }
		          else{ 
					     
					   
								while($row=mysqli_fetch_assoc($query)){						   
								$data[]=$row;								
								}
								//print_r($data);
						$response['data']=$data;
						$response['statuscode']=1;
						echo json_encode($response);
                     }
					 
                       
				       
					
					   
					   
					   
    }
    }
	else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>




