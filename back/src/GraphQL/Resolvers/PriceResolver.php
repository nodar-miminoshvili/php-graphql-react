<?php

namespace App\GraphQL\Resolvers;


use App\Model\Product;
use App\Repository\PriceRepository;

class PriceResolver
{
    public static function resolvePrice(Product $product)
    {
        $productId = $product->getId();
        $priceController = new PriceRepository();
        $price = $priceController->getPrice($productId);

        return $price;
    }
}
