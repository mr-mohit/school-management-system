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
	             $cid=test_input($obj['CLASS']);
				 $st=test_input($obj['SLOT']);  
			     $sub=test_input($obj['SUBJECT']);
	             $date=test_input($obj['DATE']);
				 $row_count=0;
				 
             $sql="SELECT user.FIRST_NAME,user.LAST_NAME,user.REG_NO,attendance.status from attendance
inner join user ON (user.REG_NO=attendance.REG_NO)
where attendance.CLASS_MASTER_ID='$cid' and attendance.SUBJECT_ID='$sub' and attendance.DATE='$date' and attendance.TIME_SLOT='$st' ORDER BY attendance.REG_NO";
             $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) {
					 
			         result(0,"No row fetched");  
                    }
		          else{ 
					     
					   
								while($row=mysqli_fetch_assoc($query)){						   
								$data[]=$row;
								$row_count++;								
								}
								//print_r($data);
						$response['row']=$row_count;
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

