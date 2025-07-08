import { redirect } from 'next/navigation'

export default function CookiesRedirect() {
  redirect('/legal#cookie-policy')
} 