<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
	 
	
if($con)
{
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
	
	 if($_SERVER['REQUEST_METHOD'] == 'POST')
	 {
     

            $postdata=file_get_contents("php://input");
		    $obj=json_decode($postdata);
		  
			 //basic infos
			 $RegNo = test_input($obj);
			 
			 $sql="SELECT attempted_quiz FROM user where REG_NO='$RegNo' "; // select all the element from the database according to id
             $query = mysqli_query($con,$sql); // execute the query
			 if($query)
			 {
				 $row=mysqli_fetch_assoc($query);
				 $attempted = $row["attempted_quiz"];
				  
				 if($attempted == 0)
				 {
					 
					  $sql1="SELECT * from quiz_table"; // select all the element from the database 
					  $query = mysqli_query($con,$sql1);
					  $count = mysqli_num_rows($query);	 
					  if ($count == 0)
					  {
					  result(0,"quiz table is empty");  
					  }
					  else
					  {  
							 $sql1="UPDATE user set attempted_quiz = 1 WHERE REG_NO = '$RegNo' "; // select all the element from the database 
							 $query1 = mysqli_query($con,$sql1);
							 if($query1)
							 {
								 while($row = mysqli_fetch_assoc($query))
								 {						   
										 $data[] = $row;  					
								 }
								//		print_r($data);
								 $response['data']=$data;
								 $response['statuscode']=1;
								 echo json_encode($response);   
								 // mysql_close();
								 
							 }
							 else
							 {
								 result(0,"error during user table updation");
							 }
														
					  }
				 }
				else
				{
					result(0,"You have already attempted the quiz");
				}
			}
			
    }
}
else
{
	die("Connection failed: " . mysqli_connect_error());
}
	 
?>