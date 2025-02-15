<?php

namespace App\Repository;


use App\Model\Product;

class ProductRepository extends Repository
{
    public function getProducts(string $category): array
    {
        if (NULL == $this->connection) return [];

        $sql = "SELECT * FROM product WHERE category = :category OR :category = ''";

        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam('category', $category);
        $stmt->execute();
        $products = [];

        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $products[] = new Product($row);
        }

        return $products;
    }


    public function getProduct(string $id): Product
    {
        if (NULL == $this->connection) return [];

        $sql = "SELECT * FROM product WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam('id', $id);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        return new Product($row);
    }
}
