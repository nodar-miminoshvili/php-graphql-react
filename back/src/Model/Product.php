<?php

namespace App\Model;

class Product
{
    private string $id;
    private string $name;
    private bool $inStock;
    private string $description;
    private string $brand;
    private string $category;
    private array $gallery;

    public function __construct(array $row)
    {
        $this->id = $row['id'];
        $this->name = $row['name'];
        $this->inStock = $row['inStock'];
        $this->description = $row['description'];
        $this->category = $row['category'];
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function isInStock(): bool
    {
        return $this->inStock;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getBrand(): string
    {
        return $this->brand;
    }

    public function getCategory(): string
    {
        return $this->category;
    }

    public function getGallery(): array
    {
        return $this->gallery;
    }
}
