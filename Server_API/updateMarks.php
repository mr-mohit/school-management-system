<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
if($con)
{
	if($_SERVER['REQUEST_METHOD'] == 'POST')
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
	    
			$reg=test_input($obj['REG']);
			$test=test_input($obj['TEST']);  
			$marks=test_input($obj['MARKS']);   
			$sql = "UPDATE class_test_table SET MARKS_OBTAINED='$marks' WHERE REG_NO='$reg' and CLASS_TEST_ID='$test'";
						
				if(mysqli_query($con,$sql))
				{
					$response['statuscode']=1;
		            echo json_encode($response);
					
				}
				else
				{
					 $response['statuscode']=0;
		            echo json_encode($response);
				}
				
			
			 
		
	  
		  
	   
	   
	}
}
?>