
import React from 'react'
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

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { OrderStatus } from '@/constants/order'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { format } from "date-fns"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, RefreshCw } from 'lucide-react'


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}


export default function OrdersTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [activeTab, setActiveTab] = React.useState("all")
    const [date, setDate] = React.useState<Date | undefined>()

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

    const filterByDate = (dt: Date | null) => {
        const selectedDate = dt && format(dt, 'yyyy/MM/dd').replaceAll("/", "-").toString()
        table.getColumn("date")?.setFilterValue(selectedDate)
        console.log(selectedDate)
    }

    const filterByStatus = (filterValue: string) => {
        table.getColumn("status")?.setFilterValue(filterValue)
        setActiveTab(filterValue == "" ? "all" : filterValue)
        console.log(cn("text-xs uppercase ", activeTab === "all" && "text-blue-400 font-bold underline underline-offset-1")
        )
    }

    const resetFilters = () => {
        table.resetColumnFilters()
        setActiveTab("all")
        setDate(undefined)
    }

    return (
        <div>
            <div className='p-4'>
                <h2 className='font-bold text-lg'>ORDERS</h2>

                <div className='flex items-center justify-between p-2 my-2 rounded-md bg-white'>
                    <div className="flex gap-3 ">
                        <button
                            onClick={() => filterByStatus("")}
                            className={cn("text-xs capitalize cursor-pointer ", activeTab === "all" && "text-blue-400 font-bold decoration-2 underline underline-offset-1",)}
                        >All Orders</button>
                        {Object.keys(OrderStatus).map((status) => (
                            <button
                                key={status}
                                onClick={() => filterByStatus(status)}
                                className={cn("text-xs capitalize cursor-pointer ", activeTab === status && "text-blue-400 font-bold decoration-2 underline underline-offset-1")}
                            >{status.toLowerCase()}</button>
                        ))}

                    </div>

                    <div className='hidden md:flex items-center justify-end space-x-2'>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal",
                                        date && "text-muted-foreground"
                                    )}
                                >
                                    {date ? (
                                        format(date, "PPP")
                                    ) : (
                                        <span>Filter by date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    // selected={date}
                                    onSelect={setDate}
                                    onDayClick={(dt) => filterByDate(dt)}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
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
