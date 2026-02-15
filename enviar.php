<?php

$numeroWhatsApp = "5541984534917";

$nome = isset($_POST["nome"]) ? trim($_POST["nome"]) : "";
$servico = isset($_POST["observacao"]) ? trim($_POST["observacao"]) : "";

if ($nome == "" || $servico == "") {
    header("Location: index.html");
    exit;
}

$mensagem = urlencode(
    "Olá! Meu nome é $nome.\n" .
    "Serviço procurado: $servico"
);

$link = "https://wa.me/$numeroWhatsApp?text=$mensagem";

header("Location: $link");
exit;

?>