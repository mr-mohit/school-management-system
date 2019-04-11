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
		$class=test_input($obj);   

				$sql="select distinct term_master.TERM_ID from term_master inner join student_class_reg on
		term_master.SESSION_MASTER_ID=student_class_reg.SESSION_MASTER_ID and student_class_reg.CLASS_MASTER_ID='$class'
		and term_master.IS_ACTIVE=1";
				$query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) 
				 {	 
			         result(0,"TERM is empty.");  
                 }
		         else
				 { 
					$row=mysqli_fetch_assoc($query);
					$term=$row['TERM_ID'];
					
					$response['data']=$term;
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
