<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
if($con)
{	
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
    
        $postdata=file_get_contents("php://input");
        $obj=json_decode($postdata,true);
	    
		    $reg= $obj;
			
			

			$sqll = "SELECT `CLASS_MASTER_ID` FROM `student_class_reg` WHERE `REG_NO`='$reg' ";
			$query=mysqli_query($con,$sqll);	
			$count = mysqli_num_rows($query);				 
			if ($count == 0)
			{					 
				 
				   $response['message'] = "Fatal error, Student is not assigned to any class";
				   $response['statuscode']=0;
				   echo json_encode($response); 
			}
			else
			{
				
				$class=mysqli_fetch_assoc($query);
				
				$classID = $class['CLASS_MASTER_ID'];
				
				// select subject list of the corresponding class
				$sqls = "SELECT DISTINCT SUBJECT_ID FROM `homework` WHERE `CLASS_MASTER_ID`=  '$classID' ";
				$query=mysqli_query($con,$sqls);
				if ($count == 0)
				{					 
				   $response['message'] = "No Subjects, No Homework";
				   $response['statuscode']=0;
				   echo json_encode($response); 
				}
				else
				{
					while($row=mysqli_fetch_assoc($query))
					{						   
						$sbj[]=$row;						
					}
							
				}
				
				// select homework
				$sql = "SELECT * FROM `homework` WHERE `CLASS_MASTER_ID` = '$classID' ORDER BY DATE DESC";
				$query=mysqli_query($con,$sql);	
				if ($count == 0)
				{					 
				   $response['message'] = "No Homework Available for this class";
				   $response['statuscode']=0;
				   echo json_encode($response); 
				}
				else
				{
					while($row=mysqli_fetch_assoc($query))
					{						   
						$data[]=$row;						
					}
						//print_r($data);
					$response['data']=$data;
					$response['subject']=$sbj;
					$response['statuscode']=1;
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