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
	   
	   $start=test_input($obj['START_DATE']);
	   $end=test_input($obj['END_DATE']);	   
	   $status=test_input($obj['STATUS']);
	   
	   $check="SELECT SESSION_MASTER_ID FROM `session_master` where SESSION_START_DATE='$start' and SESSION_END_DATE='$end'";
	   $qu=mysqli_query($con,$check);
	   $count = mysqli_num_rows($qu);
	   if($count!=0)
	   {
		   result(0,"This SESSION is already exist.");
		   
	   }
	   else
	   {
		  if($status==0)
	     {
			$sql="INSERT INTO session_master(SESSION_START_DATE, SESSION_END_DATE, IS_ACTIVE) VALUES ('$start','$end','$status')";
			if(mysqli_query($con,$sql))
			{
		      result(1,"Deactivated SESSION is added.");
			}
			else
			{
			  result(0,"fail");
			} 	
	     }
		 else
		 {
		    $sql1="SELECT SESSION_MASTER_ID FROM `session_master` where IS_ACTIVE=1";
			$query=mysqli_query($con,$sql1);
			$result=mysqli_fetch_assoc($query);
			$id=$result['SESSION_MASTER_ID'];
			$update_sql="UPDATE `session_master` SET IS_ACTIVE=0 WHERE SESSION_MASTER_ID='$id'";
			if(mysqli_query($con,$update_sql))
			{
				$new="INSERT INTO session_master(SESSION_START_DATE, SESSION_END_DATE, IS_ACTIVE) VALUES ('$start','$end','$status')";
				if(mysqli_query($con,$new))
				{
				result(1,"An active session added");
				}
				else
				{
				result(0,"fail");
				} 
			}
			else
			{
				result(0,"fail");
			}
		  
		  } 
	    }
	   
	   
	   			
	}
}
?>