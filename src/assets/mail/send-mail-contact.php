<?php

require 'HEADER.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$name = $request->name;
@$email = $request->email;
@$phone = $request->phone;
@$subject = $request->subject;
@$message = $request->message;

$recipient = 'form@aliancario.org.br';
$subject = 'Cotação';

$body = '<strong>'.$subject.'</strong>
<p><b>Nome:</b> '.$name.'
<p><b>E-Mail:</b> '.$email.'
<p><b>Telefone:</b> '.$phone.'
<p><b>Mensagem:</b> '.$message.'
<hr>';

require 'SMTP.php';


?>


