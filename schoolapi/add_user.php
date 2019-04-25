<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
if($con){

	   // post all the infos in data base
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
		  
		  function test_input($data)
		 {
			  global $con;
			  global $response;
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			$data = mysqli_real_escape_string($con,$data);
			return $data;
		 }

		 function result($status,$msg)
		 {
			global $response;
			global $con;
			mysqli_close($con);
			$response['statuscode']=$status;
			$response['msg']=$msg;
			echo json_encode($response);
		 }

		   $postdata=file_get_contents("php://input");
		   $obj=json_decode($postdata);
		  
			//basic infos
			$RegNo = test_input($obj->{'userRegNo'});
			$userfirstname= test_input($obj->{'userfirstname'});
			$userlastname= test_input($obj->{'userlastname'});
			$userpic = "http://localhost/schoolapi/image_uploads/".test_input($obj->{'userpic'});
			$role = test_input($obj->{'userrole'});
			$password=test_input($obj->{'userpassword'});  
			$dob=test_input($obj->{'userdob'});
			$gender = test_input($obj->{'usergender'});
			$email=test_input($obj->{'useremail'});
			$password=test_input($obj->{'userpassword'});
			$date=test_input($obj->{'date'});

			// address infos
			$address1=test_input($obj->{'useraddress1'});
			$address2=test_input($obj->{'useraddress2'});
			$addresstype=test_input($obj->{'useraddresstype'});
			$city=test_input($obj->{'usercity'});
			$contact=test_input($obj->{'usercontact'});
			$fathername=test_input($obj->{'userfathername'});
			$mothername=test_input($obj->{'usermothername'}); // should add this column in data base
			$pincode=test_input($obj->{'userpincode'});
			$state=test_input($obj->{'userstate'});
		  
			// Student section and class
			$studentclass = test_input($obj->{'studentclass'});
			$studentsection = test_input($obj->{'studentsection'});
			$studentsession = test_input($obj->{'studentsession'});
			
			// teacher DESIGNATION and DEPARTMENT
			$teacherdepart = test_input($obj->{'teacherdepart'});
			$teacherdesg = test_input($obj->{'teacherdesg'});
			
			//insert user into user table
			$sql = "INSERT INTO user (REG_NO,USER_PIC,ROLE,FIRST_NAME,LAST_NAME,DOB,GENDER,E_MAIL,PASSWORD,DATE_OF_AD,IS_ACTIVE) 
					 VALUES ('$RegNo','$userpic','$role','$userfirstname','$userlastname','$dob','$gender','$email','$password','$date','1')";
			if(mysqli_query($con,$sql))
			{	
		
				$sql1 = "SELECT user.REG_NO from user ORDER BY user.USER_ID DESC LIMIT 1"; // select the id of the last user inserted
				$query = mysqli_query($con,$sql1); // execute the query
				if($query)
				{
					$row=mysqli_fetch_assoc($query);
					$id = $row['REG_NO'];  // fetch or get the REG_NO into $id
					
					// insert user address in the data base
					$addr = "INSERT INTO user_address (REG_NO,FATHER_NAME,ADDRESS_TYPE,ADDRESS_LINE_1,ADDRESS_LINE_2,STATE,PINCODE,CITY,CONTACT_NO) 
							 VALUES ('$id','$fathername','$addresstype','$address1','$address2','$state','$pincode','$city','$contact')";
					if(mysqli_query($con,$addr))
					{ 
				              // insert infos into student-class-reg table
						if($role =='student')
						{
							$sql2 = " SELECT CLASS_MASTER_ID from class_master where CLASS ='$studentclass' and SECTION='$studentsection'";
							$query2 = mysqli_query($con,$sql2);
							if($query2)
							{
								$row=mysqli_fetch_assoc($query2);
								$idclass = $row['CLASS_MASTER_ID'];
								// insert infos into student-class-reg table
								$sql =" INSERT INTO student_class_reg (REG_NO,CLASS_MASTER_ID,SESSION_MASTER_ID,IS_ACTIVE)
								        VALUES('$id','$idclass','$studentsession',1)";
								$query=mysqli_query($con,$sql);
								if($query)
								{
									result(1,"student has been created and assigned to a class successfully");
								}
								else
								{
									result(0,"student not assigned to class");
								}										
							}
							else
							{
								result(0,"Class And Section are not matching ");
							}
						}
						elseif($role =='teacher')
						{
						  // insert the designation and department infos of the teacher into teacher_master table
							$sql2 = " INSERT INTO teacher_master(REG_NO,DESIGNATION,DEPARTMENT,IS_ACTIVE) 
										VALUES('$id','$teacherdesg','$teacherdepart',1)";
							$query2 = mysqli_query($con,$sql2);
							if($query2)
							{
								result(1,"teacher has been created successfully");

							}
							else
							{
								result(0," teacher not created ");
							}
						}
					}
					else
					{
						result(0," user_address insertion failed");
					}
				}
			   
			}else{
				 result(0,"fail");
			}   
		}

}else{
		die("Connection failed: " . mysqli_connect_error());
	}
	
?>



