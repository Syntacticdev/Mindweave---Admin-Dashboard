import { ChartConfig } from "@/components/ui/chart";

export const profitOverViewChartData = [
    { month: "January", orders: 186, revenue: 80 },
    { month: "February", orders: 305, revenue: 200 },
    { month: "March", orders: 237, revenue: 120 },
    { month: "April", orders: 73, revenue: 190 },
    { month: "May", orders: 209, revenue: 130 },
    { month: "June", orders: 214, revenue: 140 },
];

export const chartConfig = {
    orders: {
        label: "Orders",
        color: "red",
    },
    revenue: {
        label: "Revenue",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig