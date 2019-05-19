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
				
				$reg=test_input($obj);
                
                $sql="SELECT COUNT(REG_NO) FROM attendance WHERE REG_NO='$reg'";				
				$result=mysqli_query($con,$sql);
				$count = mysqli_fetch_assoc($result);
				$total=$count['COUNT(REG_NO)'];
				// echo ("total : ".$total);
				// echo"<br>";
		         
					 
			    $sql1="SELECT COUNT(REG_NO) FROM attendance WHERE REG_NO='$reg' and STATUS='P'";				
			    $result1=mysqli_query($con,$sql1);
				$count1 = mysqli_fetch_assoc($result1);
				
				$p=$count1['COUNT(REG_NO)'];
				// echo ("p : ".$p);
				// echo"<br>";				

				$sql2="SELECT COUNT(REG_NO) FROM attendance WHERE REG_NO='$reg' and STATUS='A'";				
			    $result2=mysqli_query($con,$sql2);
				$count2 = mysqli_fetch_assoc($result2);
				$a=$count2['COUNT(REG_NO)'];
				// echo ("a : ".$a);
				// echo"<br>";
				
				$att=(int)(($p/$total)*100);
				// echo("att : ".$att);
				
								$response['data']=$att;
								$response['statuscode']=1;
								echo json_encode($response);
                    
		         		   
    }
    }
	else
	{
		die("Connection failed: " . mysqli_connect_error());
	}
?>
