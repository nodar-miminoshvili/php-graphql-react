<?php

namespace App\GraphQL\Types;

use App\GraphQL\Resolvers\PriceResolver;
use App\Model\Product;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ProductType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Product',
            'fields' => function () {
                return [

                    'id' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Product $p) => $p->getId()
                    ],

                    'name' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Product $p) => $p->getName()
                    ],

                    'inStock' => [
                        'type' => Type::nonNull(Type::boolean()),
                        'resolve' => fn(Product $p) => $p->isInStock()
                    ],

                    'description' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Product $p) => $p->getDescription()
                    ],

                    'brand' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Product $p) => $p->getBrand()
                    ],

                    'category' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Product $p) => $p->getCategory()
                    ],

                    'gallery' => [
                        'type' => Type::nonNull(Type::listOf(Type::string())),
                        'resolve' => fn(Product $p) => $p->getGallery()
                    ],

                    'attributes' => [
                        'type' => Type::listOf(GraphQLTypes::attributeSet()),
                        'resolve' => ''
                    ],

                    'prices' => [
                        'type' => Type::listOf(GraphQLTypes::price()),
                        'resolve' => [PriceResolver::class, 'resolvePrice']
                    ]
                ];
            }
        ]);
    }
}
