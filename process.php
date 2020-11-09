<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];

// Form mail
$to = 'danny@dannybarker.co.uk';
$from = '';

$subject = "BSML Enquiries";

$headers = "From: " . strip_tags($_POST['email']) . "\r\n";

$message = 'Firstname: ' . $firstname . '\n' . 'Lastname: ' . $lastname . '\n' . 'Email Address: ' . $email . '\n' . 'Telephone: ' . $telephone . '\n' . 'Message: ' . $message;

mail($to,$subject,$message,$headers);

?>