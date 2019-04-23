<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 
	 $response=array();
if($con){
	 if($_SERVER['REQUEST_METHOD'] == 'POST'){
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
	             $id=test_input($obj);
				 $CA1=0;
				 $CA2=0;
				 $END=0;
				 $i=0;
             $sql="SELECT result.SUBJECT_ID,result.CA1,result.CA2,result.END_TERM,term_master.TERM,class_master.CLASS,subject.SUBJECT_NAME from result
						JOIN term_master ON(term_master.TERM_ID=result.TERM_ID)
						JOIN class_master ON(class_master.CLASS_MASTER_ID=result.CLASS_MASTER_ID)
						join subject on (subject.SUBJECT_ID=result.SUBJECT_ID) where result.REG_NO='$id'";
             $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
				 
		         if ($count == 0) {
					 
			         result(0,"Record Not available.");  
                    }
		          else{ 
					     
					   
								while($row=mysqli_fetch_assoc($query)){						   
								$data[$i]=$row;
								$CA1=$row["CA1"];
								$CA2=$row["CA2"];
								$END=$row["END_TERM"];
								$avg_of_ca=($CA1+$CA2)/2;
								$total=($avg_of_ca/2)+($END/2);
								$data[$i]['total']="$total";
								$i++;
								}
								
								
						$response['data']=$data;
						// $response['total']=$total;
						$response['statuscode']=1;
						echo json_encode($response);
                     }
					 
                       
				       
					
					   
					   
					   
    }
    }
	else{
		die("Connection failed: " . mysqli_connect_error());
	}

	
?>

