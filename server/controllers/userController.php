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

        $newUser['id'] = count($users) ? $users[count($users) - 1]['id'] + 1 : 1;
        $newUser['createdAt'] = date('Y-m-d');

        $users[] = $newUser;

        file_put_contents($this->dataFile, json_encode($users, JSON_PRETTY_PRINT));

        jsonResponse($users);
    }
}
