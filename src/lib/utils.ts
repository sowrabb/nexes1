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
  
  // In production, manually add basePath for images (Next.js doesn't do this automatically for Image components)
  if (process.env.NODE_ENV === 'production') {
    return `/nexes1${cleanPath}`;
  }
  
  // In development, return path as-is
  return cleanPath;
}

// Helper function to handle navigation/link paths
export function getLinkPath(path: string): string {
  // Handle empty or undefined paths
  if (!path) return '';
  
  // Check if it's an external URL (starts with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path; // Return external URLs as-is
  }
  
  // For local paths, ensure they start with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Next.js automatically adds basePath from next.config.js to links
  // So we don't need to manually add it here - just return the clean path
  return cleanPath;
}
