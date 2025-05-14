
import React, { useEffect } from 'react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    ColumnFiltersState,
    getFilteredRowModel,
    SortingState,
    getSortedRowModel
} from "@tanstack/react-table"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'

import { CalendarIcon, RefreshCw } from 'lucide-react'
import { ProductType } from '@/types/products'
import ProductFilter from '@/components/ProductFilter'


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}


export default function ProductsTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [activeTab, setActiveTab] = React.useState("all")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters,
        }
    })

    const resetFilters = () => {
        table.resetColumnFilters()
        setActiveTab("all")
        table.setSorting([])
    }

    return (
        <div>
            <div className='p-4'>
                <h2 className='font-bold text-lg px-2'>PRODUCT LISTS</h2>

                <div className='flex items-center justify-between p-2 my-2 rounded-md bg-white'>
                    <div className="flex gap-3 ">
                        <div className='flex flex-col gap-1.5'>
                            <span className='text-sm font-medium pl-1'>Category</span>
                            <ProductFilter table={table} actions={["Furniture", "Electronic"]} label='category' />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <span className='text-sm font-medium pl-1'>Status</span>
                            <ProductFilter table={table} actions={["Active", "Inactive"]} label='status' />
                        </div>

                    </div>

                    <div className='hidden md:flex items-center justify-end space-x-2'>
                        <Button onClick={() => resetFilters()} variant={"outline"}>
                            <RefreshCw />
                        </Button>
                    </div>
                </div>


            </div>
            <div className='px-4'>
                <Table className='bg-white'>
                    <TableHeader className=' bg-slate-100 '>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows?.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className=" h-12 lg:h-24 w-full flex items-center justify-center">
                                    <span className='text-center'>No results.</span>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-between py-4 px-2">
                <span className='hidden lg:block text-sm'>Showing 1 to 10 of <span className='font-semibold'>{data.length}</span> entries</span>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="text-sm text-muted-foreground">
                        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
