"use client"
import { OrdersType } from '@/types/order';
import React, { useEffect, useState } from 'react'
import OrdersTable from './orders-table';
import { columns } from './columns';

export default function Orders() {
    const [ordersdata, setOrdersData] = useState<OrdersType[]>([]);

    useEffect(() => {
        async function fetchOrders() {
            const response = await fetch('/api/orders'); // Replace with your API endpoint
            const data = await response.json();
            setOrdersData(data);
        }

        fetchOrders();
    }, []);

    return (
        <div>
            <OrdersTable columns={columns} data={ordersdata} />
        </div>
    );
}
