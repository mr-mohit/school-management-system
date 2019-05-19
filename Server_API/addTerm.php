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
	   
	   $session=test_input($obj['SESSION']);
	   $term=test_input($obj['TERM']);
	   $start=test_input($obj['START_DATE']);
	   $end=test_input($obj['END_DATE']);	   
	   $status=test_input($obj['STATUS']);
	   
	   $check="SELECT TERM_ID FROM term_master where START_DATE='$start' and END_DATE='$end'";
	   $qu=mysqli_query($con,$check);
	   $count = mysqli_num_rows($qu);
	   if($count!=0)
	   {
		   result(0,"This TERM is already exist.");
		   
	   }
	   else
	   {
		  if($status==0)
	     {
			$sql="INSERT INTO term_master(SESSION_MASTER_ID,TERM,START_DATE, END_DATE,IS_ACTIVE) VALUES ('$session','$term','$start','$end','$status')";
			if(mysqli_query($con,$sql))
			{
		      result(1,"Deactivated TERM is added");
			}
			else
			{
			  result(0,"fail");
			} 	
	     }
		 else
		 {
		    $sql1="SELECT TERM_ID FROM `term_master` WHERE IS_ACTIVE=1";
			$query=mysqli_query($con,$sql1);
			$result=mysqli_fetch_assoc($query);
			$id=$result['TERM_ID'];
			$update_sql="UPDATE `term_master` SET IS_ACTIVE=0 WHERE TERM_ID='$id'";
			if(mysqli_query($con,$update_sql))
			{
				$new="INSERT INTO term_master(SESSION_MASTER_ID,TERM,START_DATE, END_DATE,IS_ACTIVE) VALUES ('$session','$term','$start','$end','$status')";
				if(mysqli_query($con,$new))
				{
				result(1,"An active TERM is added");
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