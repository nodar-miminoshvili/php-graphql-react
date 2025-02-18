<?php

namespace App\Model;

class ProductAttributeSet
{
    private int $id;
    private string $productId;
    private string $attributeSetId;

    public function __construct(array $row)
    {
        $this->id = $row['id'];
        $this->productId = $row['product_id'];
        $this->attributeSetId = $row['attribute_set_id'];
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getProductId(): string
    {
        return $this->productId;
    }

    public function getAttributeSetsId(): string
    {
        return $this->attributeSetId;
    }
}
