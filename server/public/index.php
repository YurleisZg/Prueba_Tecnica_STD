<?php

$request = $_SERVER['REQUEST_URI'];

switch (true) {
    case preg_match('/^\/api\/users\/?$/', $request):
        require __DIR__ . '/../api/users/index.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint Not Found']);
        break;
}
