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
       $obj=json_decode($postdata);
	    $regNo=test_input($obj);
		$today = date("Y-m-d");
		//echo $today;
	  
	  
	 // $sql = "SELECT DISTINCT class_test_table.REG_NO, class_test_master.CLASS_TEST_ID,
	 // class_test_master.TEST_NAME,class_test_master.SUBJECT_ID,subject.SUBJECT_NAME,
	//  subject.SUBJECT_TYPE,class_test_table.MARKS_OBTAINED,
	//  class_test_master.DATE,class_test_table.WEIGHTAGE_MARKS_OBTAINED FROM class_test_master  JOIN class_reg 
	//  ON 
	 // (class_reg.CLASS_MASTER_ID = class_test_master.CLASS_MASTER_ID) 
	 // JOIN subject ON ( subject.SUBJECT_ID=class_test_master.SUBJECT_ID) 
	 // JOIN class_test_table ON( class_test_table.CLASS_TEST_ID=class_test_master.CLASS_TEST_ID) 
	 // JOIN student_class_reg ON (student_class_reg.CLASS_MASTER_ID = class_test_master.CLASS_MASTER_ID) 
	//  where class_test_table.REG_NO='$regNo' ORDER BY DATE DESC";
	$sql="SELECT class_test_master.CLASS_TEST_ID,class_test_master.CLASS_MASTER_ID,
	class_test_master.SUBJECT_ID,subject.SUBJECT_NAME,class_test_master.TEST_TYPE,class_test_master.TEST_NAME,
	class_test_master.TOPIC,class_test_master.TOTAL_MARKS,
	class_test_master.WEIGHT_MAX_MARKS,class_test_master.DATE,class_test_master.START_TIME,class_test_master.END_TIME,class_test_master.ROOM_NO from class_test_master
    JOIN subject ON(class_test_master.SUBJECT_ID=subject.SUBJECT_ID)
	JOIN student_class_reg ON(class_test_master.CLASS_MASTER_ID=student_class_reg.CLASS_MASTER_ID)
    WHERE student_class_reg.REG_NO='$regNo' AND class_test_master.DATE >='$today'";
		
     // $sql = "SELECT * FROM class_test_master WHERE CLASS_MASTER_ID IN (Select CLASS_MASTER_ID FROM student_class_reg WHERE REG_NO='$regNo')";
	  $query = mysqli_query($con,$sql);
	  $count = mysqli_num_rows($query);
				 
		         if ($count == 0) 
				 {
					 
			         result(0,"No Data Found");  
                    }
		          else{
					  while($row=mysqli_fetch_assoc($query))
					  {	
				         $data[]=$row;	
				      }
					  //print_r($data);
					  $response['data']=$data;
					  $response['statuscode']=1;
					  echo json_encode($response);
                     }
	}
    
    }
	else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>
