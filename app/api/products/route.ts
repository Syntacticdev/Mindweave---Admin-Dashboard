import products from "@/datas/products";

export async function GET() {
    return Response.json(products)
}