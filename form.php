<?php
    function redirect_to($location){
        header("Location: ".$location);
        exit;
    }
	if(isset($_POST['submit'])){ 
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$subject=$_POST['subject'];
		$msg=$_POST['msg'];

		$to='urosdltd@gmail.com'; // Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Subject :".$subject."\n"."Message :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
            		redirect_to("thank-you.html");
		}
		else{
			echo "Something went wrong!";
		}
	}
?>