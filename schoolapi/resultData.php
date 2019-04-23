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
			$test=test_input($obj[$i]['TEST']);  
			$marks=test_input($obj[$i]['MARKS']);
            $class=test_input($obj[$i]['CLASS']);
            $term=test_input($obj[$i]['TERM']);
            $type=test_input($obj[$i]['TYPE']);
            $subject=test_input($obj[$i]['SUBJECT']);
            
            if($type=='CA1')
			{
			$sql = "INSERT INTO result (ID, REG_NO, TERM_ID, CLASS_MASTER_ID, SUBJECT_ID, CA1, CA2, END_TERM) 
			VALUES (NULL, '$reg', '$term', '$class', '$subject', '$marks', '0', '0')";
			mysqli_query($con,$sql);
			}
			else if($type=='CA2')
			{
				$sql1="UPDATE result SET CA2='$marks' WHERE REG_NO='$reg' and TERM_ID='$term' and CLASS_MASTER_ID='$class' and SUBJECT_ID='$subject'";
				mysqli_query($con,$sql1);
			}
			else 
			{
				$sql2="UPDATE result SET END_TERM='$marks' WHERE REG_NO='$reg' and TERM_ID='$term' and CLASS_MASTER_ID='$class' and SUBJECT_ID='$subject'";
				mysqli_query($con,$sql2);
			}
			$i++;
			$temp=1;
			}
			
			
			if($temp=1)
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