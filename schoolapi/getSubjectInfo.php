<?php
     include 'connection.php';
	 header("Refresh:0");
     header('Access-Control-Allow-Origin: *');
	 $response=array();
if($con)
{
		
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
     function test_input($data) 
	 {
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
	    //$name=""//test_input($obj['subjectname']);
		$sql1 = "SELECT SUBJECT_ID,SUBJECT_NAME FROM subject where IS_ACTIVE=1";
		$query = mysqli_query($con,$sql1);
		$count = mysqli_num_rows($query);
		if($count==0) 
		{
			result(0,"No subjects");  
        }	
		else
		{
			//$sql2="SELECT SUBJECT_ID,SUBJECT_NAME FROM subject where IS_ACTIVE=1";
			//$result = mysqli_query($con,$sql2);
            while($row=mysqli_fetch_assoc($query))	{					   
            $data[]=$row;
			//$data1[]=$row['SUBJECT_ID','SUBJECT_NAME'];
			}
			$response['data']=$data;
			//$response['data1']=$data1;
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