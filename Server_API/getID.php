<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con)
{
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
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

			//echo"Connection Sucessfull";
             $postdata=file_get_contents("php://input");
	         $obj=json_decode($postdata);
			 
	         $userrole=test_input($obj);
             $sql="SELECT user.REG_NO  from user where ROLE='$userrole' ORDER BY user.REG_NO DESC LIMIT 1 "; // select the id of the last user inserted
             $query = mysqli_query($con,$sql);
			 if($query)
			 {
				$row=mysqli_fetch_assoc($query);
				$id = $row['REG_NO'] + 1;  // fetch or get the USER_ID into $id 
				
				
				$response['id']=$id;
				$response['statuscode']=1;
				echo json_encode($response);  
			 }
			 else
			 {
				$response['statuscode']=0;
				echo json_encode($response);
			 }
					 
             mysqli_close($con);
				      			   
					   
		}
}
else
{
	die("Connection failed: " . mysqli_connect_error());
}

	
?>
