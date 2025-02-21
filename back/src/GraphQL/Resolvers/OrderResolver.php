<?php

namespace App\GraphQL\Resolvers;

use App\Repository\OrderRepository;

class OrderResolver
{
    public static function resolveCreateOrder($_, array $args): bool
    {

        $orderRepo = new OrderRepository();
        $successfulOrder = $orderRepo->createOrder($args['items']);

        return $successfulOrder;
    }
}
