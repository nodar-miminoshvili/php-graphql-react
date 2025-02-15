<?php

namespace App\GraphQL\Resolvers;


use App\Model\Product;
use App\Repository\ProductRepository;

class ProductResolver
{
    public static function resolveProducts($root, $args)
    {
        $category = $args['category'] ?? "";
        $productRepo = new ProductRepository();
        $products = $productRepo->getProducts($category);
        return $products;
    }

    public static function resolveProduct($root, $args): ?Product
    {
        $productId = $args['id'] ?? NULL;

        if (!$productId) return NULL;

        $productRepo = new ProductRepository();
        $product = $productRepo->getProduct($productId);
        return $product;
    }
}
