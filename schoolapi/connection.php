<?php
$con = mysqli_connect("localhost","root","","project_1");
 if($con){
    /*header('Content-type: application/json');
    $data= array();
    $data['message'] = 'connection sucessfull';
    echo json_encode($data); */
	echo"Connection Sucessfull";
   }else{
      die("Connection failed: " .mysqli_connect_error());
  }
?>

