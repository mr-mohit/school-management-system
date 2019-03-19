<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con){
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

			
	
	 if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
			//echo"Connection Sucessfull";
             $postdata=file_get_contents("php://input");
	         $obj=json_decode($postdata);
			 
	         $regNo=test_input($obj);
	         
             $sql="SELECT * FROM user WHERE REG_NO='$regNo'";
             $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) {
					 
			         result(0,"Invalid username or Password");  
                    }
		          else{ 

                       while($row=mysqli_fetch_assoc($query)){						   
                       $data[]=$row;
						
						//print_r($data);
					   }
						 $temp=$data[0]['REG_NO'];
						 
						 $query1="SELECT * FROM user_address WHERE REG_NO='$regNo'";
					     $result = mysqli_query($con,$query1);
                         while($row=mysqli_fetch_assoc($result)){						   
                         $data1[]=$row;
						
						//echo"<br>";
						//print_r($data1);
                     }
					 
                       mysqli_close($con);
				       $response['data']=$data;
					   $response['address']=$data1;
				       $response['statuscode']=1;
				       echo json_encode($response);
					   
                     }
					 						   
		}
					   
    
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>
