<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con)
{
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
                $cid=test_input($obj['CID']);
	            $sid=test_input($obj['SID']);				

				$sql="SELECT  DISTINCT user.REG_NO,user.FIRST_NAME, user.LAST_NAME,user.E_MAIL,student_class_reg.CLASS_MASTER_ID
						FROM user
						JOIN student_class_reg ON (student_class_reg.REG_NO = user.REG_NO)
						where student_class_reg.SESSION_MASTER_ID='$sid' AND student_class_reg.CLASS_MASTER_ID='$cid' ORDER BY user.REG_NO";
				$result=mysqli_query($con,$sql);
				$count = mysqli_num_rows($result);
				 
		         if ($count == 0) {
					 
			         result(0,"no row fetched.");  
                    }
		          else{ 				     
					   
								while($row=mysqli_fetch_assoc($result)){						   
								$data[]=$row;						
								}
								
								$response['data']=$data;
								$response['statuscode']=1;
								echo json_encode($response); 
						
                     }			   
    }
    }
	else
	{
		die("Connection failed: " . mysqli_connect_error());
	}
?>
