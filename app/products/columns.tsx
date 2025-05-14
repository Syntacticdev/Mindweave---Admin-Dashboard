
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, PenLine, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/products";
import { toast } from "sonner";
import products from "@/datas/products";
import React from "react";
import { getDisplayByProductCategory } from "@/lib/utils";


export const useProductsColumns = (products: ProductType[], setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>) => {
    const columns: ColumnDef<ProductType>[] = [
        {
            accessorKey: "id",
            header: "ID",
            cell: ({ row }) => {
                return <div className="font-semibold">{row.getValue("id")}</div>
            }
        },

        {
            accessorKey: "productName",
            header: " Product Name",
            cell: ({ row }) => {
                return <div className="flex items-center gap-2">
                    <div className="relative">
                        <Image
                            src={getDisplayByProductCategory(row.getValue("category"))}
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
            accessorKey: "category",
            header: "Category",
            cell: ({ row }) => {
                return <div className="font-semibold">{row.getValue("category")}</div>
            }
        },
        {
            accessorKey: "availableUnit",
            header: "Available Unit",
        },

        {
            accessorKey: "price",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Price
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("price"))
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)

                return <div className="font-semibold pl-4 text-start ">{formatted}</div>


            },
        },

        {
            accessorKey: "views",
            header: "Views",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            id: "actions",
            header: "Action",
            cell: ({ row }) => {
                const product = row.original

                return (
                    <div className="flex items-center gap-2">
                        <Button variant="default" className="w-[80px] bg-blue-600 cursor-pointer " asChild>

                            <Link href={`/products/${product.id}`} className="flex items-center justify-center text-white">
                                <PenLine className="text-white" />
                                Edit
                            </Link>

                        </Button>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="ghost" className="w-[80px]" asChild>
                                    <Trash2 />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-red-400">Are you absolutely sure you want to delete <span className="text-black">{product.productName}</span> ?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        product and remove it from the database.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => {
                                            setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
                                            toast("Product has been deleted")
                                        }
                                        }
                                    >
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>



                    </div>
                )
            }
        }
    ]

    return columns
}

