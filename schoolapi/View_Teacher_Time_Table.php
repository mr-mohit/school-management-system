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
	   $d=test_input($obj['Sub_Id']);
	   $day=test_input($obj['Day']);
	 
		
     $sql="SELECT time_table.CLASS_MASTER_ID,class_master.CLASS,time_table.SUBJECT_ID,time_table.TIME_SLOT,time_table.DAY from class_master
	  JOIN
	 time_table on(class_master.CLASS_MASTER_ID=time_table.CLASS_MASTER_ID) WHERE time_table.SUBJECT_ID='$d' and time_table.DAY='$day'";
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
