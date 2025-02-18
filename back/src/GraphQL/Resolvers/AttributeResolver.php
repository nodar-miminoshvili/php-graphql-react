<?php

namespace App\GraphQL\Resolvers;

use App\Model\Product;
use App\Repository\AttributeRepository;

class AttributeResolver
{
    public static function resolveAttributes(Product $product)
    {
        $productId = $product->getId();
        $attributeRepo = new AttributeRepository();
        $attributes = $attributeRepo->getAttributes($productId);

        return $attributes;
    }
}
