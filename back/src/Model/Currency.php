<?php

namespace App\Model;


class Currency
{
    private string $label;
    private string $symbol;

    public function __construct(array $row)
    {
        $this->label = $row['label'];
        $this->symbol = $row['symbol'];
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getSymbol(): string
    {
        return $this->symbol;
    }
}
