import { Calendar, Home, Inbox, Package, Search, Settings, ShoppingCart } from "lucide-react"


export const mainMenu = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCart,
    },
    {
        title: "Products",
        url: "/products",
        icon: Package,
    },
    {
        title: "Search",
        url: "/search",
        icon: Search,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]