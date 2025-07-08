import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to handle image paths for root domain deployment
export function getImagePath(path: string): string {
  // Handle empty or undefined paths
  if (!path) return '';
  
  // Check if it's an external URL (starts with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path; // Return external URLs as-is
  }
  
  // For local paths, ensure they start with /
  return path.startsWith('/') ? path : `/${path}`;
}
