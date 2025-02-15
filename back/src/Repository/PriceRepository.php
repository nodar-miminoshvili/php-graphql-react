<?php

namespace App\Repository;


use App\Model\Price;

class PriceRepository extends Repository
{
    public function getPrice(string $productId)
    {
        if (NULL == $this->connection) return [];

        $sql = "SELECT * FROM price WHERE product_id = '$productId'";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        $price = new Price($row);

        return [$price];
    }
}
