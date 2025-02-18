<?php

namespace App\Repository;


use App\Model\Attribute;
use App\Model\AttributeSet;
use App\Model\ProductAttributeSet;

class AttributeRepository extends Repository
{
    public function getProductAttributeSets(string $productId): array
    {

        if (NULL == $this->connection) return [];

        $sql = "SELECT * FROM product_attribute_set WHERE product_id = '$productId' ";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();

        $productAttributeSets = [];

        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $productAttributeSets[] = new ProductAttributeSet($row);
        }

        return $productAttributeSets;
    }


    public function getAttributeSets(array $productAttributeSets): array
    {

        if (NULL == $this->connection) return [];

        $attributeSets = [];

        /** @var ProductAttributeSet $pAttrSet */
        foreach ($productAttributeSets as $pAttrSet) {
            $pAttrSetId = $pAttrSet->getAttributeSetsId();

            $sql = "SELECT * FROM attribute_set WHERE id = '$pAttrSetId'";

            $stmt = $this->connection->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch(\PDO::FETCH_ASSOC);
            $attributeSets[] = new AttributeSet($row);
        }

        return $attributeSets;
    }


    public function fetchAndInsertInSets($sets)
    {

        if (NULL == $this->connection) return;

        /** @var AttributeSet $set */
        foreach ($sets as $set) {
            $sql = "SELECT * FROM attribute WHERE set_id = '{$set->getId()}'";
            $stmt = $this->connection->prepare($sql);
            $stmt->execute();

            while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
                $attr = new Attribute($row);
                $set->setAttributes($attr);
            }
        }
    }


    public function getAttributes(string $productId): array
    {
        $productAttributeSets = $this->getProductAttributeSets($productId);
        $sets = $this->getAttributeSets($productAttributeSets);
        $this->fetchAndInsertInSets($sets);

        return $sets;
    }
}
