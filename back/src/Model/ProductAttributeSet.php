<?php

namespace App\Model;

class ProductAttributeSet
{
    private int $pkey;
    private string $productId;
    private string $attributeSetId;

    public function __construct(array $row)
    {
        $this->pkey = $row['pkey'];
        $this->productId = $row['product_id'];
        $this->attributeSetId = $row['attribute_set_id'];
    }

    public function getPkey(): int
    {
        return $this->pkey;
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
