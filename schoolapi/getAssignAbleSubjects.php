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
	   $REG_NO=test_input($obj['REG_NO']);
	   $CLASS_ID=test_input($obj['CLASS_ID']);
	   
	   $sql="SELECT * from class_reg WHERE SUBJECT_ID NOT IN (SELECT SUBJECT_ID FROM teacher_table WHERE REG_NO='$REG_NO')
	   AND class_reg.CLASS_MASTER_ID='$CLASS_ID' AND class_reg.IS_ACTIVE=1";
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
