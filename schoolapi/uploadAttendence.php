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
		

		
		$sql1="select distinct  term_master.TERM_ID from term_master inner join student_class_reg on
		term_master.SESSION_MASTER_ID=student_class_reg.SESSION_MASTER_ID and student_class_reg.CLASS_MASTER_ID=9
		and term_master.IS_ACTIVE=1";
		$q=mysqli_query($con,$sql1);
		if($q)
		{
			$row=mysqli_fetch_assoc($q);
			$term=$row['TERM_ID'];
		}
		
		
		$class=test_input($obj[0]['class']);		
		$subject=test_input($obj[0]['subject']);
		$time=test_input($obj[0]['time']);
		$date=test_input($obj[0]['date']);
		$slot=test_input($obj[0]['slot']);
		
		
	    $i=0;
		$n=sizeof($obj);
		$temp=0;
			
		   // $regg=test_input($att[0]['REG_NO']);
			// $status=test_input($att[0]['status']);    
			// $sqll = "SELECT REG_NO, TERM_ID, CLASS_MASTER_ID, SUBJECT_ID, DATE, TIME, TIME_SLOT, STATUS from attendance 
						// where REG_NO='$regg' and TERM_ID='$term' and CLASS_MASTER_ID='$class' and SUBJECT_ID='$subject' 
						   // and DATE='$date' and TIME='$time' and TIME_SLOT='$slot' and STATUS='$status'";
			// $query=mysqli_query($con,$sqll);	
				// $count = mysqli_num_rows($query);				 
		         // if ($count == 0) {					 
			         // $temp=1;
                    // }
					// else
					// {
						// $response['statuscode']=0;
						// echo json_encode($response); 
					// }
					
							
	  
		// if($temp==1)
		// {
			while($i<$n)
			{	
				
				$reg=test_input($obj[$i]['REG_NO']);
				$statuss=test_input($obj[$i]['status']);    
				$sql = "INSERT INTO attendance(REG_NO, TERM_ID, CLASS_MASTER_ID, SUBJECT_ID, DATE, TIME, TIME_SLOT, STATUS) 
								VALUES ('$reg','$term','$class','$subject','$date','$time','$slot','$statuss')";

				
			    if(mysqli_query($con,$sql))
				{
					$i=$i+1;
				}
				else
				{
					$response['statuscode']=0;
					$response['i']=$i;
					echo json_encode($response);
				}
				
				
			}
			if($i == $n)
			{ 
			  $response['statuscode']=1;
			  echo json_encode($response);
			}			 
		// }
	  
		  
	  
	   
	}
}
?>

