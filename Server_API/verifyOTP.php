<?php
     require 'Mailfolder/PHPMailerAutoload.php';
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 $response=array();
$mail = new PHPMailer;
$mail ->isSMTP();
$mail ->Host='smtp.gmail.com';
$mail ->Port=587;
$mail ->SMTPAuth=true; 
$mail ->SMTPSecure='tls';
$mail ->Username='tvianeym2@gmail.com';
$mail ->Password='TotoIndeV@2017';
$mail ->setFrom('tvianeym2@gmail.com','Royal Family #RF');
if($con)
{

	   // post all the infos in data base
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

		 function result($status,$msg)
		 {
			global $response;
			global $con;
			mysqli_close($con);
			$response['statuscode']=$status;
			$response['msg']=$msg;
			echo json_encode($response);
		 }

		   $postdata=file_get_contents("php://input");
		   $obj=json_decode($postdata);
		  
			//basic infos
			$email = test_input($obj->{'email'});
			$otp= test_input($obj->{'otp'});
			
		  
			$sql = "SELECT * from rfshowbiz where OTP = '$otp' and CHECKED = 0  ";
			$query = mysqli_query($con,$sql);
		    $count = mysqli_num_rows($query);
				 
			 if ($count == 0) 
			 { 
				 result(0,"Sorry My Friend This OTP is not valid / Or already used");  
			 }
			 else
			 {
				 $sql1 = " UPDATE rfshowbiz set email='$email', CHECKED = 1 WHERE OTP = '$otp' ";
				 if(mysqli_query($con,$sql1))
				 {
						
                       $mail ->addAddress($email);
                       $body="hello my friend "."<br/>"." "."Royal Family thanks You for being a part of the black party";
                       $mail ->isHTML(true);
                       $mail ->Subject="Tout ca c'est le showbizz #RF";
                       $mail ->Body=$body;
                      if(!$mail->send())
					  {
                         	result(0,'sorry message not sent');
					 }
                     else{
				         result(1,'Valid OTP and email updated');
					     
                         }
				}
			 }
			
		}
}
else{
		die("Connection failed: " . mysqli_connect_error());
	}
	
?>



