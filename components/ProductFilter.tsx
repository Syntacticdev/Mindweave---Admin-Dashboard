
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useState } from "react"
import { ArrowDown } from "lucide-react"

function ProductFilter({ table, actions, label }: { table: any, actions: string[], label: string }) {
    const [selectedType, setSelectedType] = useState("")
    const filterAction = (filterValue: string) => {
        table.getColumn(label)?.setFilterValue(filterValue.toLocaleLowerCase())

    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className='flex items-center gap-2'>
                    {selectedType !== "" ? `${selectedType}` : `Filter by ${label}`}
                    <ArrowDown />
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {actions.map((action) => (
                    <DropdownMenuItem key={action} onClick={() => {
                        filterAction(action)
                        setSelectedType(action)
                    }}>{action}</DropdownMenuItem>

                ))}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProductFilter