export const OrderStatus = {
    DELIVERED: "Delivered",
    SHIPPED: "Shipped",
    PROCESSING: "Processing",
    CANCELLED: "Cancelled",
} as const;

export type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus];