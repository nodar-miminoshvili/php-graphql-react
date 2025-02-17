<?php

namespace App\GraphQL\Resolvers;


use App\Model\Product;
use App\Repository\PriceRepository;

class PriceResolver
{
    public static function resolvePrice(Product $product)
    {
        $productId = $product->getId();
        $priceRepo = new PriceRepository();
        $price = $priceRepo->getPrice($productId);

        return $price;
    }
}
