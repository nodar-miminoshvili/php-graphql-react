<?php

namespace App\Repository;


class OrderRepository extends Repository
{
    public function createOrder(array $items): bool
    {
        if (NULL == $this->connection) return [];

        $itemsToJSON = json_encode($items);

        $sql = "INSERT INTO order_table (items) values(:items);";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam('items', $itemsToJSON);

        $successfulOrder = $stmt->execute();

        return $successfulOrder;
    }
}
