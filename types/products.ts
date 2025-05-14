export type ProductType = {
    id: number;
    productName: string;
    purchaseUnit: string;
    price: number;
    availableUnit: number;
    category: string;
    views: number;
    status: "Active" | "Inactive";
    description: string;
    createdAt: string;
    updatedAt: string;
};