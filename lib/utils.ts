import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDisplayByProductCategory(
  productCategory: string
): string {
  switch (productCategory) {
    case "Clothe":
      return "/images/clothe.jpg"
    case "Electronics":
      return "/images/elect.jpg"
    case "Furniture":
      return "/images/others.jpg"
    case "Sportswear":
      return "/images/shoe.jpg"
    default:
      return "/images/electronics.jpg"
  }
}