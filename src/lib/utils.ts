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
  
  // In production, return path as-is (no base path needed for root domain)
  if (process.env.NODE_ENV === 'production') {
    return cleanPath;
  }
  
  return cleanPath;
}

// Helper function to handle navigation links 
export function getLinkPath(path: string): string {
  // Handle empty or undefined paths
  if (!path) return '';
  
  // Check if it's an external URL (starts with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path; // Return external URLs as-is
  }
  
  // For local paths, ensure they start with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Next.js automatically handles basePath for navigation links, so return as-is
  return cleanPath;
}

// Pricing data interface
export interface PricingData {
  currency: string;
  currencySymbol: string;
  starter: number;
  growth: number;
  fullStack: number;
  deployment: number;
  starterDisplay: string;
  growthDisplay: string;
  fullStackDisplay: string;
  deploymentDisplay: string;
}

// Get USD pricing (simplified - no location detection)
export function getPricingForUser(): PricingData {
  return {
    currency: 'USD',
    currencySymbol: '$',
    starter: 999,
    growth: 1499,
    fullStack: 1999,
    deployment: 200,
    starterDisplay: '$999',
    growthDisplay: '$1,499',
    fullStackDisplay: '$1,999',
    deploymentDisplay: '$200',
  };
}
