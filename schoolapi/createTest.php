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
	   
	   $class=test_input($obj['CLASS']);
	   $term=test_input($obj['TERM']);
	   $name=test_input($obj['NAME']);
	   $date=test_input($obj['DATE']);
	   $subject=test_input($obj['SUBJECT']);
	   $type=test_input($obj['TYPE']);
	   $topic=test_input($obj['TOPIC']);
	   $tm=test_input($obj['TM']);
	   $wm=test_input($obj['WM']);
	   $st=test_input($obj['ST']);
	   $et=test_input($obj['ET']);
	   $rm=test_input($obj['RM']);
	   
	   
	   $sql="INSERT INTO class_test_master(CLASS_MASTER_ID, TERM_ID, SUBJECT_ID,TEST_TYPE, TEST_NAME, TOPIC, TOTAL_MARKS, WEIGHT_MAX_MARKS, DATE, START_TIME, END_TIME, ROOM_NO, IS_ACTIVE)
	   VALUES ('$class','$term','$subject','$type','$name','$topic','$tm','$wm','$date','$st','$et','$rm',1)";
	   if(mysqli_query($con,$sql))
		{
		   result(1,"success");
		   //$response['statuscode']=1;
		   //echo json_encode($response);
		}
		else
		{
			result(0,"fail");
			//$response['statuscode']=0;
			//echo json_encode($response);
		} 	   
	}
}
?>