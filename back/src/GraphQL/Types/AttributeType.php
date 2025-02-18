<?php

namespace App\GraphQL\Types;

use App\Model\Attribute;
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
                        'resolve' => fn(Attribute $attr) => $attr->getId()
                    ],

                    'setId' => [
                        'type' => Type::nonNull(Type::int()),
                        'resolve' => fn(Attribute $attr) => $attr->getSetId()
                    ],

                    'value' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Attribute $attr) => $attr->getValue()
                    ],

                    'displayValue' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Attribute $attr) => $attr->getDisplayValue()
                    ],

                ];
            }
        ]);
    }
}
