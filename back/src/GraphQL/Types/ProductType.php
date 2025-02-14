<?php

namespace App\GraphQL\Types;


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
                        'resolve' => [Product::class, 'getId']
                    ],

                    'name' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Product::class, 'getName']
                    ],

                    'inStock' => [
                        'type' => Type::nonNull(Type::boolean()),
                        'resolve' => [Product::class, 'isInStock']
                    ],

                    'description' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Product::class, 'getDescription']
                    ],

                    'brand' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Product::class, 'getBrand']
                    ],

                    'category' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Product::class, 'getCategory']
                    ],

                    'gallery' => [
                        'type' => Type::nonNull(Type::listOf(Type::string())),
                        'resolve' => [Product::class, 'getGallery']
                    ],

                    'attributes' => [
                        'type' => Type::listOf(GraphQLTypes::attributeSet()),
                        'resolve' => ''
                    ],

                    'prices' => [
                        'type' => Type::listOf(GraphQLTypes::price()),
                        'resolve' => ''
                    ]
                ];
            }
        ]);
    }
}
