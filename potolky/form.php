<?php

$message = '';
$subject = 'Заявка с сайта fklab.ru';

$to = 'zhd_max@mail.ru';
/*if (!empty($_POST["type"]) && $_POST["type"] == 'gen-dir') {
    $to = 'zhd_max@mail.ru';
    $subject .= ' : гендир';
} else {
    $to = 'ztl@fklab.ru';
}*/


if (!empty($_POST["name"])) {
    $message .= "Имя: " . $_POST["name"] . "<br>";
}
if (!empty($_POST["phone"])) {
    $message .= "Телефон: " . $_POST["phone"] . "<br>";
}
if (!empty($_POST["email"])) {
    $message .= "Email: " . $_POST["email"] . "<br>";
}
if (!empty($_POST["text"])) {
    $message .= "Сообщение: " . $_POST["text"] . "<br>";
}



$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: " . $to . "\r\n";

echo $to;
if ($message) mail($to, $subject, $message, $headers);


?>