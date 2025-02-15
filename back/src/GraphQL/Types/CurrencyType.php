<?php

namespace App\GraphQL\Types;


use App\Model\Currency;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CurrencyType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Currency',
            'fields' => function () {
                return [
                    'label' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Currency $c) => $c->getLabel()
                    ],

                    'symbol' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Currency $c) => $c->getSymbol()
                    ],
                ];
            }
        ]);
    }
}
