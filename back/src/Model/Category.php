<?php

namespace App\Model;

class Category
{
    private string $name;

    public function __construct(array $row)
    {
        $this->name = $row['name'];
    }

    public function getName(): string
    {
        return $this->name;
    }
}
