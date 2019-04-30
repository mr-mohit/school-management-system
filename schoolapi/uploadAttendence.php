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
			$cid=test_input($obj[0]['class']);  
            $sid=test_input($obj[0]['subject']);
            $dt=test_input($obj[0]['date']);			
			$sqll = "SELECT REG_NO, CLASS_MASTER_ID from attendance where REG_NO='$regg' and CLASS_MASTER_ID='$cid' and SUBJECT_ID='$sid' and DATE='$dt'";
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
				$statuss=test_input($obj[$i]['status']); 
				$class=test_input($obj[$i]['class']);		
				$subject=test_input($obj[$i]['subject']);
				$time=test_input($obj[$i]['time']);
				$date=test_input($obj[$i]['date']);
				$slot=test_input($obj[$i]['slot']);		
				$term=test_input($obj[$i]['term']);
				$sql = "INSERT INTO attendance(REG_NO, TERM_ID, CLASS_MASTER_ID, SUBJECT_ID, DATE, TIME, TIME_SLOT, STATUS) VALUES 
				('$reg','$term','$class','$subject','$date','$time','$slot','$statuss')";

			mysqli_query($con,$sql);		 
			$i++;	
			}
			 $response['statuscode']=1;
		   echo json_encode($response); 
		}
	  
		  
	   
	   
	}
}
?>