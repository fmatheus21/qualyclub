<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
error_reporting(E_ALL);

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host       = 'mail.qualyclubnordeste.com.br';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'form@qualyclubnordeste.com.br';
    $mail->Password   = 'XXXXXXXXXXXXXXXXX';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    //Recipients
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($email, $name);
    $mail->addAddress('contato@qualyclubnordeste.com.br', $subject);
    $mail->addReplyTo($email, $name);

    //Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();

    } catch (Exception $e) {

}


?>
