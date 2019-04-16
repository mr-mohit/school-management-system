<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 //header("Refresh:0");
	 
	 $response=array();
if($con)
{
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
     function test_input($data1) 
	 {
				global $con;
				global $response;
  				$data1 = trim($data1);
  				$data1 = stripslashes($data1);
  				$data1 = htmlspecialchars($data1);
				$data1 = mysqli_real_escape_string($con,$data1);
  				return $data1;
		}

     function result($status,$msg){
				global $response;
				global $con;
				mysqli_close($con);
				$response['statuscode']=$status;
				$response['msg']=$msg;
				echo json_encode($response);
			}

        $postdata1=file_get_contents("php://input");
        $obj=json_decode($postdata1,true);
	    $A_ID=test_input($obj['A_ID']);
		$CATEGORY=test_input($obj['CATEGORY']);
		$TITLE=test_input($obj['TITLE']);
		$DESCRIPTION=test_input($obj['DESCRIPTION']);
		$START_TIME=test_input($obj['START_TIME']);
		$END_TIME=test_input($obj['END_TIME']);
		
		
		$sql1 = "UPDATE announcement SET CATEGORY='$CATEGORY',TITLE='$TITLE',DESCRIPTION='$DESCRIPTION',START_TIME='$START_TIME',END_TIME='$END_TIME' 
		WHERE A_ID='$A_ID'";
		if (mysqli_query($con,$sql1)) 
		{
			result(1,'Updated'); 
        }	
		else
		{
			result(0,'Not Updated');  
		}
	}	
}
else
	{
		die("Connection failed: " . mysqli_connect_error());
	}
?>