<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if(isset($_POST['submit'])){
    $to = "aserafin4@wp.pl";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $content = $_POST['content-message'];
    $message = $name . " wysłał wiadomość:" . "\n\n" . $content;
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>