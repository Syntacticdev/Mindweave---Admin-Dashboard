import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export const orders = [
    {
        orderId: "ORD001",
        productName: "Wireless Headphones",
        date: "2025-05-01",
        payment: "Credit Card",
        amount: 120.99,
        status: "Delivered",
        customerName: "John Doe",
        address: "123 Main St, Springfield",
        quantity: 1,
    },
    {
        orderId: "ORD002",
        productName: "Gaming Laptop",
        date: "2025-05-02",
        payment: "PayPal",
        amount: 1499.99,
        status: "Shipped",
        customerName: "Jane Smith",
        address: "456 Elm St, Metropolis",
        quantity: 1,
    },
    {
        orderId: "ORD003",
        productName: "Smartphone",
        date: "2025-05-03",
        payment: "Debit Card",
        amount: 799.99,
        status: "Processing",
        customerName: "Alice Johnson",
        address: "789 Oak St, Gotham",
        quantity: 2,
    },
    {
        orderId: "ORD004",
        productName: "Bluetooth Speaker",
        date: "2025-05-04",
        payment: "Credit Card",
        amount: 49.99,
        status: "Cancelled",
        customerName: "Bob Brown",
        address: "321 Pine St, Star City",
        quantity: 1,
    },
    {
        orderId: "ORD005",
        productName: "4K Monitor",
        date: "2025-05-05",
        payment: "Bank Transfer",
        amount: 299.99,
        status: "Delivered",
        customerName: "Charlie Davis",
        address: "654 Maple St, Central City",
        quantity: 1,
    },
    {
        orderId: "ORD006",
        productName: "Mechanical Keyboard",
        date: "2025-05-06",
        payment: "Credit Card",
        amount: 89.99,
        status: "Shipped",
        customerName: "Diana Prince",
        address: "987 Cedar St, Coast City",
        quantity: 1,
    },
    {
        orderId: "ORD007",
        productName: "Fitness Tracker",
        date: "2025-05-07",
        payment: "PayPal",
        amount: 129.99,
        status: "Delivered",
        customerName: "Ethan Hunt",
        address: "159 Birch St, Hill Valley",
        quantity: 1,
    },
    {
        orderId: "ORD008",
        productName: "Smartwatch",
        date: "2025-05-08",
        payment: "Debit Card",
        amount: 199.99,
        status: "Processing",
        customerName: "Fiona Gallagher",
        address: "753 Walnut St, Riverdale",
        quantity: 1,
    },
    {
        orderId: "ORD009",
        productName: "Electric Scooter",
        date: "2025-05-09",
        payment: "Credit Card",
        amount: 499.99,
        status: "Delivered",
        customerName: "George Miller",
        address: "852 Chestnut St, Smallville",
        quantity: 1,
    },
    {
        orderId: "ORD010",
        productName: "Noise-Cancelling Earbuds",
        date: "2025-05-10",
        payment: "PayPal",
        amount: 149.99,
        status: "Shipped",
        customerName: "Hannah Baker",
        address: "951 Spruce St, Hawkins",
        quantity: 1,
    },
];

export type OrdersType = {
    orderId: string,
    productName: string,
    date: string,
    payment: string,
    amount: number,
    status: string,
    customerName: string,
    address: string,
    quantity: number
}



export const columns: ColumnDef<OrdersType>[] = [
    {
        accessorKey: "orderId",
        header: "Order ID",
        cell: ({ row }) => {
            return <div className="font-semibold">{row.getValue("orderId")}</div>
        }
    },
    {
        accessorKey: "productName",
        header: " Product Name",
        cell: ({ row }) => {
            return <div className="font-bold">{row.getValue("productName")}</div>
        }
    },
    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "payment",
        header: "Payment",
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="font-semibold">{formatted}</div>
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status")?.toString();
            const statusColor: Record<string, string> = {
                Delivered: "text-green-800",
                Shipped: "text-blue-800",
                Processing: "text-yellow-800",
                Cancelled: "text-red-800",
            };

            return (
                <div
                    className={`px-2 py-1 rounded-full text-sm bg-gray-100 text-center font-medium ${status ? statusColor[status] : "bg-gray-100 text-gray-800"}`}>
                    {status}
                </div>
            );
        },
    },
    // {
    //     accessorKey: "customerName",
    //     header: "Customer Name"
    // },
    // {
    //     accessorKey: "address",
    //     header: "Address"
    // },
    // {
    //     accessorKey: "quantity",
    //     header: "Quantity"
    // }
    {
        id: "actions",
        header: "Action",
        cell: ({ row }) => {
            const order = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(order.orderId)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href={`/order/${order.orderId}`}>View Order</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]

