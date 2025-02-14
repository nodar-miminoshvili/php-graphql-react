<?php

namespace App\GraphQL\Types;


use Attribute;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Attribute',
            'fields' => function () {
                return [
                    'id' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Attribute::class, 'getId']
                    ],

                    'setId' => [
                        'type' => Type::nonNull(Type::int()),
                        'resolve' => [Attribute::class, 'getSetId']
                    ],

                    'value' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Attribute::class, 'getValue']
                    ],

                    'displayValue' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [Attribute::class, 'getDisplayValue']
                    ],

                ];
            }
        ]);
    }
}
