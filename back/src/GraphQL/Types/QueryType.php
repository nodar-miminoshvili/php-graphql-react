<?php

namespace App\GraphQL\Types;


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
                    'resolve' => ''
                ],

                'product' => [
                    'type' => GraphQLTypes::product(),
                    'args' => ['id' => Type::nonNull(Type::string())],
                    'resolve' => ''
                ]

            ]
        ]);
    }
}
