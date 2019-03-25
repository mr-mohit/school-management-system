<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
	
	 
	 
if($con)
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

	   // post all the infos in data base
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
		
		   $postdata=file_get_contents("php://input");
		   $obj=json_decode($postdata);
		   
			$regNo = test_input($obj->{'userRegNo'});
			$role = test_input($obj->{'userrole'});
			
			
			//update user into user table
			$sql = "UPDATE user SET  IS_ACTIVE=0 WHERE REG_NO='$regNo' ";
					 
			if(mysqli_query($con,$sql))
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
								$sql =" UPDATE student_class_reg SET  IS_ACTIVE=0 WHERE REG_NO='$regNo'";
								$query=mysqli_query($con,$sql);
								if($query)
								{
									result(1,"student has been deleted and removed from a class successfully");
								}
								else
								{
									result(0,"student not removed from a class");
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
							$sql2 = "UPDATE teacher_master SET  IS_ACTIVE=0 WHERE REG_NO='$regNo' ";
							$query2 = mysqli_query($con,$sql2);
							if($query2)
							{
								result(1,"teacher has been deleted successfully");

							}
							else
							{
								result(0," teacher not deleted ");
							}
						}
						else
						{
								result(1,"admin has been deleted successfully");
						}
					
				
			   
			}else{
				 result(0,"fail");
			}   
		}

}else
{
	die("Connection failed: " . mysqli_connect_error());
}
	
?>



