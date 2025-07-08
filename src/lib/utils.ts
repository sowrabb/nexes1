import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to handle image paths with basePath for static export
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production, add the basePath prefix
  if (process.env.NODE_ENV === 'production') {
    return `/nexes1/${cleanPath}`
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`
}
