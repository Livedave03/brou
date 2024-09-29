<?php
// Configuración del bot de Telegram
$token = "6808586807:AAH5KvJxwCHbxVecJJ1D2fQyiVCK4u_RuBQ"; // Reemplaza con el token real
$chat_id = "5157616506"; // Reemplaza con el chat ID real

// Devuelve el token y chat ID en formato JSON
header('Content-Type: application/json');
echo json_encode([
    "token" => $token,
    "chat_id" => $chat_id
]);
?>
