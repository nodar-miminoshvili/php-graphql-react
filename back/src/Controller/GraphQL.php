<?php

namespace App\Controller;

use App\GraphQL\Types\QueryType;
use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Schema;
use RuntimeException;
use Throwable;

class GraphQL
{
    static public function handle()
    {
        try {
            $schema = new Schema(
                ['query' => new QueryType()]
            );

            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }

            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;

            $rootValue = ['' => ''];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray();
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        header('Content-Type: application/json; charset=UTF-8');
        return json_encode($output);
    }
}
