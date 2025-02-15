<?php

namespace App\Model;

class Price
{
    private int $id;
    private string $productId;
    private float $amount;
    private Currency $currency;

    public function __construct(array $row)
    {
        $this->id = $row['id'];
        $this->productId = $row['product_id'];
        $this->amount = $row['amount'];

        $currencyJSON = $row['currency'];
        $currency = json_decode($currencyJSON, true);
        $this->currency = new Currency($currency);
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getProductId(): string
    {
        return $this->productId;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }

    public function getCurrency(): Currency
    {
        return $this->currency;
    }
}
