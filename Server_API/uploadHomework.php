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
	    
		    $reg=test_input($obj['teacherID']);
			$cid=test_input($obj['class']);  
            $sid=test_input($obj['subject']);
            $title=test_input($obj['title']);
			$dt =  date("Y/m/d");
            $tt=  date("h:i:sa");;
			$file ="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/image_uploads/".test_input($obj['file']);			
			$sqll = "SELECT * from homework where
			  REG_NO='$reg' and CLASS_MASTER_ID='$cid' and SUBJECT_ID='$sid' and FILE='$file' ";
			$query=mysqli_query($con,$sqll);	
				$count = mysqli_num_rows($query);				 
		         if ($count == 0) {					 
			         $temp=1;
					  // $response['message'] = "Error during the insertion process";
					  // $response['statuscode']=1;
					  // echo json_encode($response); 
                    }
					else
					{
						$response['statuscode']=0;
						$response['message'] = "This homework already exists in Data base";
						echo json_encode($response); 
					}
					
	  
		if($temp==1)
		{
			
		  $sql = "INSERT INTO homework(CLASS_MASTER_ID,SUBJECT_ID,TITLE,REG_NO,FILE,DATE,TIME) 
		           VALUES ('$cid','$sid','$title','$reg','$file','$dt','$tt')";

			if(mysqli_query($con,$sql))
			{
				$response['statuscode']=1;
				$response['message'] = "Homeword Uploaded sucessfully";
				echo json_encode($response); 
			}				
			else
			{
				$response['statuscode']=0;
				$response['message'] = "Error during the insertion process";
				echo json_encode($response); 
			}
			 
		}
	  
		 
	   
	}
	else
	{
		$response['statuscode']=0;
		$response['message'] = "RESQUEST METHOD is not --- POST ---";
		echo json_encode($response); 
	}
}
?>