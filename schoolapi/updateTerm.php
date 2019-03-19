<?php
		 include 'connection.php';
		 header('Access-Control-Allow-Origin:*');
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
	   $tid=test_input($obj['TID']);
	   $session=test_input($obj['SESSION']);
	   $term=test_input($obj['TERM']);
	   $start=test_input($obj['START_DATE']);
	   $end=test_input($obj['END_DATE']);
	   
	   
	   $sql=" UPDATE term_master SET SESSION_MASTER_ID='$session',TERM='$term',START_DATE='$start',END_DATE='$end',IS_ACTIVE='1' WHERE TERM_ID='$tid' ";
	   if(mysqli_query($con,$sql))
		{
		   result(1,"success");
		   //$response['statuscode']=1;
		   //echo json_encode($response);
		}
		else
		{
			result(0,"fail");
			//$response['statuscode']=0;
			//echo json_encode($response);
		} 	   
	}
}
?>