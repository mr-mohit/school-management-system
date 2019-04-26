<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con){
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

			
	
	 if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
			//echo"Connection Sucessfull";
             $postdata=file_get_contents("php://input");
	         $obj=json_decode($postdata);
			 
	         $regNo=test_input($obj);
	         
             $sql="SELECT * FROM user WHERE REG_NO='$regNo'";
             $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) {
					 
			         result(0,"Invalid username or Password");  
                    }
		          else
				  { 
						// fetch data from the data base
                       while($row=mysqli_fetch_assoc($query))
					   {						   
							$data[]=$row;
							//print_r($data);
					   }
			
						 $role = $data[0]['ROLE'];
						 // get address infos from address table
						 $query1="SELECT * FROM user_address WHERE REG_NO='$regNo'";
					     $result = mysqli_query($con,$query1);
                         while($row=mysqli_fetch_assoc($result))
						 {						   
                           $data1[]=$row;
						 }
						 // end of getting address infos from user_address table
						 //if the user is student 
						 
						 if($role == 'student')
						 {
							 ////////////////// class name and section
							 $query = "SELECT class_master.CLASS, class_master.SECTION, student_class_reg.CLASS_MASTER_ID
										from student_class_reg INNER JOIN class_master ON 
									    class_master.CLASS_MASTER_ID = student_class_reg.CLASS_MASTER_ID AND REG_NO='$regNo' ";
										
							 $result = mysqli_query($con,$query);
							 while($row=mysqli_fetch_assoc($result))
							 {						   
							   $class[] = $row;
							 }
							 $response['class'] = $class ; // send the class_name and section to the front-end
							 
							 // get the session 
								 $query = "SELECT session_master.SESSION_START_DATE, session_master.SESSION_END_DATE, 
									 student_class_reg.SESSION_MASTER_ID from student_class_reg INNER  JOIN session_master ON 
									 session_master.SESSION_MASTER_ID = student_class_reg.SESSION_MASTER_ID AND REG_NO='$regNo' ";
								 $result = mysqli_query($con,$query);
							 while($row=mysqli_fetch_assoc($result))
							 {						   
							   $session[] = $row;
							 }
							 $response['session'] = $session ; // send the session starting  and ending date to the front-end	 
						 }
						 else if($role == 'teacher') // if the user is teacher
						 {
							$query = "SELECT * from teacher_master WHERE REG_NO = '$regNo' "; 
							 $result = mysqli_query($con,$query);
							  $count = mysqli_num_rows($result);
				 
							 if($count == 0) {
								 
								 result(0,"teacher infos in table");  
								}
							  else
							  { 
									// fetch data from the data base
								   while($row=mysqli_fetch_assoc($result))
								   {						   
										$teacher[]=$row;
										//print_r($data);
								   }
							  }
							 $response['teacher'] = $teacher; // send the designation and department to front-end 
						 }
                       mysqli_close($con);
				       $response['data']=$data; // basics user infos
					   $response['address']=$data1; //user address
				       $response['statuscode']=1; // status Code
				       echo json_encode($response);
					   
                    }
					 						   
		}
		else
		{
			result(0,"Error With POST Method");  
		}
					   
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>