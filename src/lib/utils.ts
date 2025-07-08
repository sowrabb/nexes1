import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to handle image paths with basePath for static export
export function getImagePath(path: string): string {
  // Handle empty or undefined paths
  if (!path) return '';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Check if it's an external URL (starts with http:// or https://)
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return path; // Return external URLs as-is
  }
  
  // In production, add the basePath prefix
  if (typeof window !== 'undefined' || process.env.NODE_ENV === 'production') {
    return `/nexes1/${cleanPath}`
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`
}
