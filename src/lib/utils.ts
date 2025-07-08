import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to handle image paths for both development and production
export function getImagePath(path: string): string {
  // Handle empty or undefined paths
  if (!path) return '';
  
  // Check if it's an external URL (starts with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path; // Return external URLs as-is
  }
  
  // For local paths, ensure they start with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // In development, return path as-is
  // In production, we'll handle this at build time with Next.js configuration
  return cleanPath;
}
