<?php

require_once __DIR__ . '/../utils/response.php';

class UserController {

    private $dataFile = __DIR__ . '/../data/users.json';

    public function getUsers() {
        $users = json_decode(file_get_contents($this->dataFile), true);
        jsonResponse($users);
    }

    public function saveUser($newUser) {
        $users = json_decode(file_get_contents($this->dataFile), true);

         foreach ($users as $user) {
        if ($user['id'] == $newUser['id']) {
            http_response_code(400);
            echo json_encode(['error' => 'Ya existe un usuario con esa identificación']);
            exit;
        }
    }
        $users[] = $newUser;

        file_put_contents($this->dataFile, json_encode($users, JSON_PRETTY_PRINT));

        jsonResponse($users);
    }
}
