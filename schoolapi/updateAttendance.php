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
		   
			while($i<$n)
			{		   
			    $reg=test_input($obj[$i]['REG_NO']);
				$statuss=test_input($obj[$i]['status']); 
				$class=test_input($obj[$i]['class']);		
				$subject=test_input($obj[$i]['subject']);
				$date=test_input($obj[$i]['date']);
				$slot=test_input($obj[$i]['slot']);		
				$sql = "UPDATE attendance SET STATUS='$statuss' WHERE REG_NO='$reg' AND CLASS_MASTER_ID='$class' AND SUBJECT_ID='$subject' AND DATE='$date' AND TIME_SLOT='$slot' ";

			mysqli_query($con,$sql);		 
			$i++;	
			$temp=1;
			}
			if($temp==1)
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