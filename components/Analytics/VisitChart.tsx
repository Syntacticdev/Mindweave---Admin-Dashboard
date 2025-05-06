"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", electronics: 1260, furniture: 870, shoes: 540, clothes: 720 },

]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function VisitChart() {
    const totalVisitors = chartData.reduce(
        (total, data) =>
            total +
            data.electronics +
            data.furniture +
            data.shoes +
            data.clothes,
        0
    );

    return (

        <CardContent className="flex flex-1 items-center pb-0">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[250px]"
            >
                <RadialBarChart
                    data={chartData}
                    endAngle={360}
                    innerRadius={80}
                    outerRadius={130}
                >
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) - 16}
                                                className="fill-foreground text-2xl font-bold"
                                            >
                                                {totalVisitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 4}
                                                className="fill-muted-foreground"
                                            >
                                                Profits
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 20}
                                                className="fill-muted-foreground text-green-600 font-bold"
                                            >
                                                +54%

                                            </tspan>

                                        </text>
                                    )
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                    <RadialBar
                        dataKey="desktop"
                        stackId="a"
                        cornerRadius={5}
                        fill="blue"
                        className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                        dataKey="mobile"
                        fill="red"
                        stackId="a"
                        cornerRadius={5}
                        className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                        dataKey="electronics"
                        stackId="a"
                        cornerRadius={5}
                        fill="hsl(210, 70%, 50%)" // Blue for electronics
                        className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                        dataKey="furniture"
                        stackId="a"
                        cornerRadius={5}
                        fill="hsl(120, 70%, 50%)" // Green for furniture
                        className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                        dataKey="shoes"
                        stackId="a"
                        cornerRadius={5}
                        fill="hsl(30, 70%, 50%)" // Orange for shoes
                        className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                        dataKey="clothes"
                        stackId="a"
                        cornerRadius={5}
                        fill="hsl(0, 70%, 50%)" // Red for clothes
                        className="stroke-transparent stroke-2"
                    />
                </RadialBarChart>
            </ChartContainer>
        </CardContent>

    )
}
