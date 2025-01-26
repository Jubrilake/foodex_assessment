import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a number to Naira currency format
 * @param amount - The number to convert
 * @returns A string formatted as Naira (₦)
 */
export const toNaira = (amount: number): string => {
  if (isNaN(amount)) return "₦0.00";
  return `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

