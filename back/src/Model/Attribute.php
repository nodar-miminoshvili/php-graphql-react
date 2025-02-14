<?php

namespace App\Model;

class Attribute
{
    private string $id;
    private int $setId;
    private string $value;
    private string $displayValue;


    public function __construct(array $row)
    {
        $this->id = $row['id'];
        $this->setId = $row['set_id'];
        $this->value = $row['value'];
        $this->displayValue = $row['display_value'];
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getSetId(): int
    {
        return $this->setId;
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public function getDisplayValue(): string
    {
        return $this->displayValue;
    }
}
