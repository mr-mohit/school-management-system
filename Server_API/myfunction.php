<?php
	 $response=array();
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



?>