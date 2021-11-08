<?php

require 'HEADER.php';

$name = $_GET['name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$subject = $_GET['subject'];
$message = $_GET['message'];

$body =
'<p><b>Assunto:</b> '.$subject.
'<p><b>Nome:</b> '.$name.
'<p><b>E-Mail:</b> '.$email.
'<p><b>Telefone:</b> '.$phone.
'<p><b>Mensagem:</b> '.$message.
'<hr>';

echo $body;

require 'SMTP.php';

?>
