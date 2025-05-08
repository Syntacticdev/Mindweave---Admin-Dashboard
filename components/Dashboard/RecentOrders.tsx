'use client';

import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';
import { columns } from '@/datas/orders';
import { OrdersType } from '@/types/order';

export default function RecentOrders() {
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
            <OrderTable columns={columns} data={ordersdata} />
        </div>
    );
}
