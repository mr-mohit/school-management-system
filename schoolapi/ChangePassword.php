<?php
		 include 'connection.php';
		 header('Access-Control-Allow-Origin:*');
	     $response=array();
if($con)
{
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
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
	   
	   $PASSWORD=test_input($obj['PASSWORD']);
	   $REG_NO=test_input($obj['REG_NO']);
	   $NEWPASSWORD=test_input($obj['NEWPASSWORD']);
	   
        $sqll="Select PASSWORD from user where REG_NO='$REG_NO'";
        $result=mysqli_query($con,$sqll);
		//echo "$result";
		$pass=mysqli_fetch_assoc($result);		
		$p=$pass['PASSWORD'];
		//echo "$p";
		if($p==$PASSWORD)
		{		
			$sql="UPDATE user SET PASSWORD='$NEWPASSWORD' WHERE REG_NO='$REG_NO' and PASSWORD='$PASSWORD'";		
			if(mysqli_query($con,$sql))
			{
				//echo "changed";
				$response['msg']='Password changed';
				$response['statuscode']=1;
			   echo json_encode($response);
             }
			 else{
				 // echo "not updated";
				 $response['msg']='Password not matched';
				 $response['statuscode']=0;
			   echo json_encode($response);
			 }
		}
		else
		{
			// echo"password not matched";
			$response['msg']='Current Password not Match';
			$response['statuscode']=0;
			echo json_encode($response);
		}
			
}
}
?>