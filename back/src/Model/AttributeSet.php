<?php

namespace App\Model;

class AttributeSet
{
    private int $pkey;
    private string $id;
    private string $name;
    private string $type;
    private array $attributes = [];


    public function __construct(array $row)
    {
        $this->pkey = $row['pkey'];
        $this->id = $row['id'];
        $this->name = $row['name'];
        $this->type = $row['type'];
    }

    public  function getPkey(): int
    {
        return $this->pkey;
    }

    public  function getId(): string
    {
        return $this->id;
    }

    public  function getName(): string
    {
        return $this->name;
    }

    public  function getType(): string
    {
        return $this->type;
    }

    public function setAttributes(Attribute $attribute): void
    {
        $this->attributes[] = $attribute;
    }

    public function getAttributes(): array
    {
        return $this->attributes;
    }
}
