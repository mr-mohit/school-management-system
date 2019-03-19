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
$mail ->setFrom('tvianeym2@gmail.com','ecoledirecte');
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
	         $obj=json_decode($postdata);
			 $process=$obj->process; // process is used to check at which step we are : 1 - generation of otp and sending to email, 
									 // 2- receiving the otp and resetting the password
			 if($process==1)
			 {
				 $regNo = $obj->regNo;
				 $email = $obj->email;
			     $otp = $obj->otp;
 				 // after receiving infos from the front-end, we get the user id , email,name , password of the user from the Database
			  $sql="SELECT REG_NO,E_MAIL,FIRST_NAME,PASSWORD FROM user WHERE REG_NO='$regNo' AND E_MAIL='$email'";
              $query = mysqli_query($con,$sql);
		      $count = mysqli_num_rows($query);
		         if ($count == 0) 
				 {
			        result(0,'invalid user');  
                 }
				else
				{
					$sql2="UPDATE user SET OTP='$otp' WHERE REG_NO='$regNo' AND E_MAIL='$email'"; // update the otp
					if(mysqli_query($con,$sql2)){
						
                       $mail ->addAddress($email);
                       $body="hello friend "."<br/>".$otp." "."is the otp to reset your password";
                       $mail ->isHTML(true);
                       $mail ->Subject='reset password';
                       $mail ->Body=$body;
                      if(!$mail->send())
					  {
                         	result(0,'sorry otp not sent');}
                     else{
						 // OTP has been sent successfully
						 $sql3="SELECT REG_NO,FIRST_NAME,OTP FROM user WHERE REG_NO='$regNo' AND E_MAIL='$email'";
						 $query3 = mysqli_query($con,$sql3);
						 while($row=mysqli_fetch_assoc($query3)){
                                 $data[]=$row; }
         
				         $response['data']=$data;
				         $response['statuscode']=1;
				         echo json_encode($response);
					     mysqli_close($con);
                         }
					}
					}
			 }else{
				   $newpswd=$obj->newpassword;
			       $id=$obj->regNo;
				   $sql4="UPDATE user SET PASSWORD='$newpswd',OTP=NULL WHERE REG_NO='$id'"; // reset the password
				   if(mysqli_query($con,$sql4)){
					   result(1,'password changed succesfull');
				   }
			 }
}
else{
	echo "no incoming data from post";
}
}
else{
	die("Connection failed: " . mysqli_connect_error());
}

?>
