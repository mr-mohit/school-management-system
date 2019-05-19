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
	             $classid=test_input($obj['CLASSID']);
				 $subjectid=test_input($obj['SUBJECTID']);
				 $slot=test_input($obj['SLOT']);
				 $day=test_input($obj['DAY']);
				 
		$sqll="SELECT count(*) as data from time_table where SUBJECT_ID='$subjectid' AND TIME_SLOT='$slot' AND DAY='$day' AND IS_ACTIVE=1";
		 $result=mysqli_query($con,$sqll);
		$pass=mysqli_fetch_assoc($result);		
		$p=$pass['data'];
		
if($p==0){
	$sql="UPDATE time_table SET SUBJECT_ID='$subjectid',DAY='$day' WHERE CLASS_MASTER_ID='$classid' AND TIME_SLOT='$slot'";
       if (mysqli_query($con,$sql)) 
		{
			$response['msg']='Updated';
				$response['statuscode']=1;
				echo json_encode($response);
        }	
		else
		{
			$response['msg']='Unable to update';
				$response['statuscode']=0;
				echo json_encode($response);
		}
		}
else{
	$response['msg']='Cannot update with same data';
				$response['statuscode']=0;
				echo json_encode($response);
}		
    }
    }
	else{
		
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>
