<?php

namespace App\GraphQL\Types;


class GraphQLTypes
{
    private static $types = [];

    public static function attribute()
    {
        return self::$types['productAttribute'] ??= new AttributeType();
    }

    public static function product()
    {
        return self::$types['product'] ??= new ProductType();
    }

    public static function attributeSet()
    {
        return self::$types['productAttributeSet'] ??= new AttributeSetType();
    }

    public static function currency()
    {
        return self::$types['currencyType'] ??= new CurrencyType();
    }

    public static function price()
    {
        return self::$types['priceType'] ??= new PriceType();
    }
}
