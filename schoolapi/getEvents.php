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
				                
                $sql="SELECT YEAR(EVENT_DATE),MONTH(EVENT_DATE),DAY(EVENT_DATE) from event";
				
				$result=mysqli_query($con,$sql);
				$count = mysqli_num_rows($result);
				 
		         if ($count == 0) {
					 
			         result(0,"no row fetched.");  
                    }
		          else{ 				     
					   
					   $i=0;
								while($row=mysqli_fetch_assoc($result)){											
								$data[$i]['year']=intval($row['YEAR(EVENT_DATE)']);
								$data[$i]['month']=intval($row['MONTH(EVENT_DATE)']);
								$data[$i]['day']=intval($row['DAY(EVENT_DATE)']);
								$i++;
								}
								 // print_r($data);
								
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
