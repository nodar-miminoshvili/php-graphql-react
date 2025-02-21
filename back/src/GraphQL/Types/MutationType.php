<?php

namespace  App\GraphQL\Types;

use App\GraphQL\Resolvers\OrderResolver;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

// use GraphQL\Type\Definition\Type;
// use GraphQL\Type\Definition\ObjectType;
// use App\GraphQL\Types\OrderType;

class MutationType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Mutation',
            'fields' => [
                'createOrder' => [
                    'type' => Type::nonNull(Type::boolean()),
                    'args' => [
                        'items' => Type::listOf(Type::string())
                    ],
                    'resolve' => [OrderResolver::class, 'resolveCreateOrder']
                ],

            ]
        ]);
    }
}
