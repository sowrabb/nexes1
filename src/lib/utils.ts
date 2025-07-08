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

// Detect if user is from India using IP geolocation API
export async function detectIndianUserByIP(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  try {
    // Use FreeIPAPI.com to detect user location
    const response = await fetch('https://freeipapi.com/api/json');
    const data = await response.json();
    
    // Check if the user is from India
    if (data && data.countryCode === 'IN') {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error detecting location via IP:', error);
    // Fallback to timezone detection if IP API fails
    return detectIndianUserByTimezone();
  }
}

// Fallback detection using timezone and language (keep as backup)
export function detectIndianUserByTimezone(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    // Check timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const indianTimezones = ['Asia/Kolkata', 'Asia/Calcutta'];
    
    if (indianTimezones.includes(timezone)) {
      return true;
    }
    
    // Check language preferences for Hindi/Indian languages
    const language = navigator.language.toLowerCase();
    const indianLanguages = ['hi', 'hi-in', 'en-in', 'ta', 'te', 'bn', 'mr', 'gu', 'kn', 'ml', 'or', 'pa', 'as'];
    
    if (indianLanguages.some(lang => language.includes(lang))) {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error detecting user location via timezone:', error);
    return false;
  }
}

// Get pricing based on user location
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

export async function getPricingForUser(): Promise<PricingData> {
  // Try IP-based detection first
  const isIndianByIP = await detectIndianUserByIP();
  
  if (isIndianByIP) {
    return {
      currency: 'INR',
      currencySymbol: '₹',
      starter: 78000,
      growth: 122000,
      fullStack: 140000,
      deployment: 14000,
      starterDisplay: '₹78,000',
      growthDisplay: '₹1,22,000', 
      fullStackDisplay: '₹1,40,000',
      deploymentDisplay: '₹14,000',
    };
  }
  
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
