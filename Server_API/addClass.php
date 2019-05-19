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
	   
	   $class=test_input($obj['CLASS']);
	   $section=test_input($obj['SECTION']);
	   
	   $sql1="SELECT CLASS_MASTER_ID from class_master where CLASS='$class' and SECTION='$section' and IS_ACTIVE=1 ";
             $query2 = mysqli_query($con,$sql1);
		         $count = mysqli_num_rows($query2);
				 if($count==0)
				 {
				 
					$sql="INSERT INTO class_master(CLASS,SECTION,IS_ACTIVE) VALUES ('$class','$section','1')";
					if(mysqli_query($con,$sql))
					{
					$response['statuscode']=1;
					echo json_encode($response);
					}
					else
					{
					result(0,"fail");

					} 
				 }
				else
				{
					$response['statuscode']=0;
					echo json_encode($response);
				}	
	}
}
?>