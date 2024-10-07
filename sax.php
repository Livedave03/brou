<?php
// Configuración del bot de Telegram
$token = "7584579761:AAF_gz-XhA7nA9wSzN6OaWP6Ml1UX9DGgkU"; // Reemplaza con el token real
$chat_id = "5157616506"; // Reemplaza con el chat ID real

// Devuelve el token y chat ID en formato JSON
header('Content-Type: application/json');
echo json_encode([
    "token" => $token,
    "chat_id" => $chat_id
]);
?>
