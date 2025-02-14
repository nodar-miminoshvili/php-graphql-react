<?php

namespace App;


class Database
{
    private static ?Database $instance = null;
    private ?\PDO $connection;


    private function __construct()
    {
        $host = $_ENV["MYSQL_HOST"];
        $port = $_ENV["MYSQL_PORT"];
        $db = $_ENV["MYSQL_DATABASE"];
        $username = $_ENV["MYSQL_USERNAME"];
        $password = $_ENV["MYSQL_PASSWORD"];

        $dsn =  "mysql:host=$host:$port;dbname=$db";

        $this->connection = new \PDO(
            $dsn,
            $username,
            $password
        );

        $this->connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance->connection;
    }
}
