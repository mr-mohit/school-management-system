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
			$regNo = test_input($obj->{'userRegNo'});
			$userfirstname= test_input($obj->{'userfirstname'});
			$userlastname= test_input($obj->{'userlastname'});
			$userpic = "http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/image_uploads/".test_input($obj->{'userpic'});
			$role = test_input($obj->{'userrole'});
			$password=test_input($obj->{'userpassword'});  
			$dob=test_input($obj->{'userdob'});
			$gender = test_input($obj->{'usergender'});
			$email=test_input($obj->{'useremail'});
			$password=test_input($obj->{'userpassword'});

			// address infos
			$address1=test_input($obj->{'useraddress1'});
			$address2=test_input($obj->{'useraddress2'});
			$addresstype=test_input($obj->{'useraddresstype'});
			$city=test_input($obj->{'usercity'});
			$contact=test_input($obj->{'usercontact'});
			$fathername=test_input($obj->{'userfathername'});
			$mothername=test_input($obj->{'usermothername'}); 
			$pincode=test_input($obj->{'userpincode'});
			$state=test_input($obj->{'userstate'});
		  
			// Student section and class
			$studentclass = test_input($obj->{'studentclass'});
			$studentsection = test_input($obj->{'studentsection'});
			$studentsession = test_input($obj->{'studentsession'});
			
			// teacher DESIGNATION and DEPARTMENT
			$teacherdepart = test_input($obj->{'teacherdepart'});
			$teacherdesg = test_input($obj->{'teacherdesg'});
			
			//update user into user table
			$sql = "UPDATE user SET USER_PIC='$userpic',ROLE='$role',FIRST_NAME='$userfirstname',LAST_NAME='$userlastname',
							DOB='$dob',GENDER='$gender',E_MAIL='$email',PASSWORD='$password'
										WHERE REG_NO='$regNo' ";
					 
			if(mysqli_query($con,$sql))
			{	
		
				// update user address in the data base
				$addr = "UPDATE user_address SET  FATHER_NAME='$fathername',MOTHER_NAME='$mothername',ADDRESS_TYPE='$addresstype',ADDRESS_LINE_1='$address1',
									ADDRESS_LINE_2='address2',STATE='$state',PINCODE='$pincode',CITY='$city',CONTACT_NO='$contact' 
									   WHERE REG_NO='$regNo'";
					if(mysqli_query($con,$addr))
					{ 
				              // update infos into student-class-reg table
						if($role =='student')
						{
							$sql2 = " SELECT CLASS_MASTER_ID from class_master where CLASS ='$studentclass' and SECTION='$studentsection'";
							$query2 = mysqli_query($con,$sql2);
							if($query2)
							{
								$row=mysqli_fetch_assoc($query2);
								$idclass = $row['CLASS_MASTER_ID'];
								// update infos into student-class-reg table
								$sql =" UPDATE student_class_reg SET CLASS_MASTER_ID='$idclass',
										SESSION_MASTER_ID='$studentsession' WHERE REG_NO='$regNo'";
								$query=mysqli_query($con,$sql);
								if($query)
								{
									result(1,"student has been updated and assigned to a class successfully");
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
						  // update the designation and department infos of the teacher into teacher_master table
							$sql2 = "UPDATE teacher_master SET DESIGNATION='$teacherdesg',DEPARTMENT='$teacherdepart'
											WHERE REG_NO='$regNo' ";
							$query2 = mysqli_query($con,$sql2);
							if($query2)
							{
								result(1,"teacher has been updated successfully");

							}
							else
							{
								result(0," teacher not updated ");
							}
						}
						else
						{
								result(1,"admin has been updated successfully");
						}
					}
					else
					{
						result(0," user_address updation failed");
					}
				
			   
			}else{
				 result(0,"fail");
			}   
		}

}else{
		die("Connection failed: " . mysqli_connect_error());
	}
	
?>



