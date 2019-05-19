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
			$cid=test_input($obj[0]['class']);  
            $sid=test_input($obj[0]['subject']);
            $term=test_input($obj[0]['term']);	
			// $cid=3;//test_input($obj[0]['class']);  
             // $sid='CAP932';//test_input($obj[0]['subject']);
             // $term=10;//test_input($obj[0]['term']);
		//$dat=0;			
			$sqll = "SELECT NO_OF_CLASSES,ID FROM attendance_master WHERE TERM_ID='$term' AND CLASS_MASTER_ID='$cid' AND SUBJECT_ID='$sid'";
			$query=mysqli_query($con,$sqll);
			$d=mysqli_fetch_assoc($query);
			// echo "mysqli_affected_rows";
			// print_r($d);
			// echo"<br>";
				$dat=$d['NO_OF_CLASSES'];
				$id=$d['ID'];
				// echo $dat;
				// echo"<br>";
				$count = mysqli_num_rows($query);				 
		         if ($count == 0) {					 
			         $sql2=" INSERT INTO attendance_master(TERM_ID, CLASS_MASTER_ID, SUBJECT_ID, NO_OF_CLASSES) VALUES ('$term','$cid','$sid','1')";
					 mysqli_query($con,$sql2);
					 // echo"sql2 run";
					 // echo"<br>";
					 $response['statuscode']=1;
					 echo json_encode($response);
                    }
					else
					{
						$dat++;
						$sql3="UPDATE `attendance_master` SET `NO_OF_CLASSES`='$dat' WHERE `ID`='$id'";
						mysqli_query($con,$sql3);
						// echo"sql3 run";
						// echo"<br>";
						// echo "dat value ",$dat;
						$response['statuscode']=1;
						echo json_encode($response); 
					}
					
	  
		
	  
		  
	   
	   
	}
}
?>