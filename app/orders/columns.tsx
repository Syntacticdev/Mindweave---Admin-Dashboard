import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

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
import { OrdersType } from "@/types/order";
import Image from "next/image";


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
            return <div className="flex items-center gap-2">
                <div className="relative">
                    <Image
                        src={"/public/images/electronics.jpg"}
                        alt="Product Image"
                        width={40}
                        height={40}
                        className="rounded-md" />
                </div>
                <span className="font-medium">{row.getValue("productName")}</span>
            </div>
        }
    },
    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="font-semibold pl-4 text-start ">{formatted}</div>


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
                    className={` py-1 rounded-full text-sm  font-medium ${status ? statusColor[status] : " text-gray-800"}`}>
                    {status}
                </div>
            );
        },
    },
    {
        accessorKey: "customerName",
        header: "Customer Name"
    },
    {
        accessorKey: "address",
        header: "Address"
    },
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

