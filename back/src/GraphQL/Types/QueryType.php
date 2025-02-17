<?php

namespace App\GraphQL\Types;

use App\GraphQL\Resolvers\CategoryResolver;
use App\GraphQL\Resolvers\ProductResolver;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class QueryType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Query',
            'fields' => [
                'products' => [
                    'type' => Type::listOf(GraphQLTypes::product()),
                    'args' => ['category' => Type::getNullableType(Type::string())],
                    'resolve' => [ProductResolver::class, 'resolveProducts']
                ],

                'product' => [
                    'type' => GraphQLTypes::product(),
                    'args' => ['id' => Type::nonNull(Type::string())],
                    'resolve' => [ProductResolver::class, 'resolveProduct']
                ],

                'categories' => [
                    'type' => Type::listOf(GraphQLTypes::category()),
                    'resolve' => [CategoryResolver::class, 'resolveCategory']
                ]

            ]
        ]);
    }
}
