<?php

namespace App\GraphQL\Types;


use App\Model\AttributeSet;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeSetType extends ObjectType
{

    public function __construct()
    {
        parent::__construct([
            'name' => 'AttributeSet',
            'fields' => function () {
                return [
                    'pkey' => [
                        'type' => Type::nonNull(Type::id()),
                        'resolve' => [AttributeSet::class, 'getPkey']
                    ],

                    'id' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [AttributeSet::class, 'getId']
                    ],

                    'name' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [AttributeSet::class, 'getName']
                    ],

                    'type' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => [AttributeSet::class, 'getType']
                    ],

                    'attributes' => [
                        'type' => Type::listOf(GraphQLTypes::attribute()),
                    ],
                ];
            }
        ]);
    }
}
