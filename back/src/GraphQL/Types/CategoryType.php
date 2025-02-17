<?php

namespace App\GraphQL\Types;

use App\Model\Category;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CategoryType extends ObjectType
{
    public function __construct()
    {
        parent::__construct([
            'name' => 'Category',
            'fields' => function () {
                return [
                    'name' => [
                        'type' => Type::nonNull(Type::string()),
                        'resolve' => fn(Category $c) => $c->getName()
                    ]
                ];
            }
        ]);
    }
}
