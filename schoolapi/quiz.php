<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 session_start();
	 $response=array();
if($con){
	
	 if($_SERVER['REQUEST_METHOD'] == 'GET'){
     function test_input($data) {
				  global $con;
				  global $response;
  				$data = trim($data);
  				$data = stripslashes($data);
  				$data = htmlspecialchars($data);
				$data = mysqli_real_escape_string($con,$data);
  				return $data;
			}

            function result($status,$msg)
			{
				global $response;
				global $con;
				mysqli_close($con);
				$response['statuscode']=$status;
				$response['msg']=$msg;
				echo json_encode($response);
			}

             $sql="SELECT * FROM quiz_table"; // select all the element from the database according to id
             $query = mysqli_query($con,$sql);
		     $count = mysqli_num_rows($query);
				 
			 if ($count == 0) {
				 
				 result(0,"Invalid username or Password");  
				}
			 else
			    {  
				   $result = mysqli_query($con,$sql); // store the result of the query inside $result
				   while($row=mysqli_fetch_assoc($result))
				   {						   
					   $data[]=$row;
				   }
				  // print_r(data);
				   mysqli_close($con);
				   $response['data']=$data;  
				   $response['statuscode']=1;
				   echo json_encode($response); // send the response to the front end (ionic) 
						   
			    }
					   
    }
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}
	 
?>