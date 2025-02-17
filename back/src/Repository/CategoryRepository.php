<?php

namespace App\Repository;

use App\Model\Category;

class CategoryRepository extends Repository
{
    public function getCategories(): array
    {
        if (NULL == $this->connection) return [];

        $sql = 'SELECT * FROM category';
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();

        $categories = [];

        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $category = new Category($row);
            $categories[] = $category;
        }

        return $categories;
    }
}
