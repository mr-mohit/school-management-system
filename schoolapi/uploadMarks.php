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
	    $i=0;
		$n=sizeof($obj);
		$temp=0;
		   $regg=test_input($obj[0]['REG_NO']);
			$testt=test_input($obj[0]['TEST']);    
			$sqll = "SELECT REG_NO, CLASS_TEST_ID from class_test_table where REG_NO='$regg' and CLASS_TEST_ID='$testt'";
			$query=mysqli_query($con,$sqll);	
				$count = mysqli_num_rows($query);				 
		         if ($count == 0) {					 
			         $temp=1;
                    }
					else
					{
						$response['statuscode']=0;
						echo json_encode($response); 
					}
					
	  
		if($temp==1)
		{
			while($i<$n)
			{		   
			$reg=test_input($obj[$i]['REG_NO']);
			$test=test_input($obj[$i]['TEST']);  
			$marks=test_input($obj[$i]['MARKS']);   
			$sql = "INSERT INTO class_test_table(REG_NO, CLASS_TEST_ID, MARKS_OBTAINED, WEIGHTAGE_MARKS_OBTAINED) VALUES ('$reg','$test','$marks','5')";
			mysqli_query($con,$sql);		 
			$i++;	
			}
			 $response['statuscode']=1;
		   echo json_encode($response); 
		}
	  
		  
	   
	   
	}
}
?>