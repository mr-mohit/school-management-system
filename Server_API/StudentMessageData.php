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
			
			

			$sqll = "SELECT user.FIRST_NAME,user.LAST_NAME,message.* FROM `message` INNER JOIN user 
						ON user.REG_NO = message.SENDER where RECIPIENT='$reg' ";
			$query=mysqli_query($con,$sqll);	
			$count = mysqli_num_rows($query);				 
			if ($count == 0)
			{					 
				 
				   $response['message'] = "No messages avalaible for You";
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
				$response['statuscode']=1;
				echo json_encode($response);
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