<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
if($con){

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
     
	 include 'myfunction.php';
	 
       $postdata=file_get_contents("php://input");
       $postdata=json_decode($postdata,true);
	
       $subject_id=test_input($_POST['subject_id']);
       $subject_name=test_input($_POST['subject_name']);
       $subject_type=test_input($_POST['subject_type']);  
       $subject_material=test_input($_POST['subject_material']);
       $isactive=test_input($_POST['isactive']);
      
	   
        $sql = "INSERT INTO student (SUBJECT_ID,SUBJECT_NAME,SUBJECT_TYPE,SUBJECT_MATERIAL,IS_ACTIVE) 
		VALUES ('$subject_id','$subject_name','$subject_type','$subject_name','$isactive')";
		if(mysqli_query($con,$sql))
		{
		   result(1,"success");
		}else{
			 result(0,"fail");
		}   
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}
?>

