"use client"
import VisitChart from "@/components/Analytics/VisitChart";
import SalesVolumeCard from "@/components/Cards/SalesVolumeCard";
import Header from "@/components/Dashboard/Header";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import TopSellingProductCard from "@/components/Dashboard/TopSellingProductCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useSidebar } from "@/components/ui/sidebar";
import { chartConfig, profitOverViewChartData } from "@/datas/chartdata";
import { Archive, CircleDollarSign, MoveDownRight, MoveUpRight, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function Home() {
  const { state } = useSidebar()
  return (
    <div>
      <Header />
      <div className={`grid p-3 grid-cols-1 gap-4 ${state == "expanded" ? "lg:grid-cols-2" : "lg:grid-cols-3"} `}>
        <div className="grid gap-2 ">
          <SalesVolumeCard increasing={false} icon={<Target />} title={"Total Product Sales"} linkTitle={"View Sales Details"} value={"118,594"} pageLink="/" percent={10} />
          <SalesVolumeCard increasing={true} icon={<Archive />} title={"Total Volume of Products"} linkTitle={"View All Products"} value={"257,361"} pageLink="/" percent={54} />
        </div>

        <div className="flex flex-col justify-between  gap-2 bg-white rounded-lg p-4">
          <h3 className="text-sm font-bold">Total Profit Overview</h3>
          <div className='grid '>
            <div className='flex gap-2 items-center'>
              <span className='text-2xl font-semibold'>$96,715</span>
              <div className={`flex items-center rounded-full gap-1 p-1 ${true ? "bg-green-400" : 'bg-red-500'}`}>
                <span className='text-xs font-semibold'>{true ? "+" : "-"} 10%</span>
                {true ? <MoveUpRight className="w-3 h-3" /> : <MoveDownRight className="w-3 h-3" />}
              </div>
            </div>
          </div>
          <div className='flex gap-2 justify-end'>
            <div className='flex gap-1 items-center'>
              <div className='bg-gray-200 w-3 h-3 rounded-full' />
              <span className="text-xs font-semibold">Total Revenue</span>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-blue-200 w-3 h-3 rounded-full' />
              <span className="text-xs font-semibold">Total Profit</span>
            </div>
          </div>
          <ChartContainer className="h-60" config={chartConfig}>
            <BarChart accessibilityLayer data={profitOverViewChartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="orders" fill="var(--color-gray-200)" radius={4} />
              <Bar dataKey="revenue" fill="var(--color-blue-200)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>


        <div className={`grid bg-white rounded-lg p-4 ${state == "expanded" && "col-span-2"}  `}>
          <div>
            <h3 className="text-sm font-bold">Total Sales Statistics</h3>
          </div>
          <div className={` grid-cols-1 grid ${state == "expanded" ? "grid-cols-2" : "grid-cols-1`"}`}>
            <div className=" ">
              <VisitChart />
            </div>

            <div >
              <div className="flex  items-center justify-between">
                <div className='grid gap-1 py-4'>
                  <h3 className='text-gray-500 font-bold text-xs'>Total Number of Sales</h3>
                  <span className='text-2xl font-semibold'>$37,715</span>
                </div>
                <CircleDollarSign />
              </div>

              <div className="divider" />

              <div className="grid gap-y-3 grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className='flex gap-1 items-center'>
                    <div className='bg-[#2680d9] w-3 h-3 rounded-full' />
                    <span className="text-xs font-semibold">Electronics</span>
                  </div>
                  <span className="font-bold text-sm">$14,349</span>
                </div>
                <div>
                  <div className='flex gap-1 items-center'>
                    <div className='bg-[#26d926] w-3 h-3 rounded-full' />
                    <span className="text-xs font-semibold">Furnitures</span>
                  </div>
                  <span className="font-bold text-sm">$29,153</span>
                </div>
                <div>
                  <div className='flex gap-1 items-center'>
                    <div className='bg-[#d92626] w-3 h-3 rounded-full' />
                    <span className="text-xs font-semibold">Clothes</span>
                  </div>
                  <span className="font-bold text-sm">$11,682</span>
                </div>
                <div>
                  <div className='flex gap-1 items-center'>
                    <div className='bg-[#d98026] w-3 h-3 rounded-full' />
                    <span className="text-xs font-semibold">Shoes</span>
                  </div>
                  <span className="font-bold text-sm">$35,715</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 p-2 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white rounded-lg">
          <div className="flex justify-between items-center p-4">
            <div className="w-3/5">
              <h3 className="font-bold ">Recent Orders</h3>
              <p className="text-xs text-muted-foreground ">Keep track of recent order data and other informations.</p>
            </div>

            <Link className="text-sm h-fit w-fit flex shadow-md px-3 py-2 rounded-full  hover:bg-black hover:text-white" href="/orders">View All</Link>
          </div>
          <RecentOrders />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="w-3/5">
            <h3 className="font-bold ">Top Selling Products</h3>
          </div>
          <div className="mt-4  ">
            {Array.from({ length: 3 }).map((_, i) => (
              <TopSellingProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}