<?php

require_once __DIR__ . '/../../controllers/userController.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Content-Type: application/json');

$controller = new UserController();

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $controller->getUsers();
        break;

    case 'POST':
        $input = file_get_contents('php://input');
        $newUser = json_decode($input, true);

        if (!$newUser) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid JSON']);
            exit;
        }

        $controller->saveUser($newUser);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}
