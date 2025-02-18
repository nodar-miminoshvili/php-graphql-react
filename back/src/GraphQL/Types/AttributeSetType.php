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
                    'id' => [
                        'type' => Type::nonNull(Type::id()),
                        'resolve' => fn(AttributeSet $set) => $set->getId()
                    ],

                    'name' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(AttributeSet $set) => $set->getName()
                    ],

                    'type' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(AttributeSet $set) => $set->getType()
                    ],

                    'attributes' => [
                        'type' => Type::listOf(GraphQLTypes::attribute()),
                        'resolve' => fn(AttributeSet $set) => $set->getAttributes()
                    ],
                ];
            }
        ]);
    }
}
