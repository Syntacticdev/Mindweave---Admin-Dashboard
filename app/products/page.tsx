"use client"
import { useProductsColumns } from "./columns"
import ProductsTable from "./products-table"
import { useEffect, useState } from "react";
import { ProductType } from "@/types/products";

const Products = () => {

    const [productsdata, setProductsData] = useState<ProductType[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProductsData(data);

        }

        fetchProducts();
    }, []);

    const columns = useProductsColumns(productsdata, setProductsData);

    return (
        <ProductsTable data={productsdata} columns={columns} />
    )
}

export default Products