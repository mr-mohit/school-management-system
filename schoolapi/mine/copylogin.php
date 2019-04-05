<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con){
	 

			//echo"Connection Sucessfull";
             //$postdata=file_get_contents("php://input");
	         //$obj=json_decode($postdata);
	         $username="11706374";//test_input($obj->{'username'});
	         $password="Chanda@143";//test_input($obj->{'password'});
             $sql="SELECT * FROM user WHERE USER_NAME='$username' and PASSWORD='$password'";
             $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) {
					 
			         result(0,"Invalid username or Password");  
                    }
		          else{ 
					     
					   $query="SELECT * FROM user WHERE USER_NAME='$username'";
					   $result = mysqli_query($con,$query);
                       while($row=mysqli_fetch_assoc($result)){						   
                        $data[]=$row;
						
						print_r($data);
					   }
						 $temp=$data[0]['USER_ID'];
						 $query1="SELECT * FROM user_address WHERE USER_ID='$temp'";
					   $result = mysqli_query($con,$query1);
                       while($row=mysqli_fetch_assoc($result)){						   
                        $data1[]=$row;
						
						echo"<br>";
						print_r($data1);
										
                     }
					  
						//print($temp);
					 //print_r($data);
                       mysqli_close($con);
				       /*$response['data']=$data;
				       $response['statuscode']=1;
				       echo json_encode($response);*/
					
					   
					   }
					   
    
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>
