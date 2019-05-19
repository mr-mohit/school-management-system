<?php
$con = mysqli_connect("185.98.131.90","cpcki1089673_119s9m","1jp10hvvaw","cpcki1089673_119s9m");
 if($con){
    /*header('Content-type: application/json');
    $data= array();
    $data['message'] = 'connection sucessfull';
    echo json_encode($data); */
	//echo"Connection Sucessfull";
   }else{
      die("Connection failed: " .mysqli_connect_error());
  }
?>

