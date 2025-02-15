<?php

namespace App\Repository;


use App\Database;

abstract class Repository
{
    protected ?\PDO $connection = NULL;

    public function __construct()
    {
        $this->connection = Database::getInstance();
    }
}
