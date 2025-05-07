import { orders } from "@/datas/orders";

export async function GET() {
    return Response.json(orders)
}