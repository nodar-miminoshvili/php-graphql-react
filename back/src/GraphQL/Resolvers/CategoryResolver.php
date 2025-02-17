<?php

namespace App\GraphQL\Resolvers;

use App\Repository\CategoryRepository;

class CategoryResolver
{
    public static function resolveCategory(): array
    {
        $categoryRepo = new CategoryRepository();
        $categories = $categoryRepo->getCategories();

        return $categories;
    }
}
