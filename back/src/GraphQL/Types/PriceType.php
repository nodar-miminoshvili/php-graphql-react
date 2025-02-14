<?php

namespace App\GraphQL\Types;


use App\Model\Price;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class PriceType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Price',
            'fields' => function () {
                return [
                    'id' => [
                        'type' => Type::nonNull(Type::id()),
                        'resolve' => [Price::class, 'getId']
                    ],

                    'productId' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Price::class, 'getProductId']
                    ],

                    'amount' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Price::class, 'getAmount']
                    ],

                    'currency' => [
                        'type' =>  Type::nonNull(GraphQLTypes::currency()),
                        'resolve' => [Price::class, 'getCurrency']
                    ],
                ];
            }
        ]);
    }
}
