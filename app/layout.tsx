import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa]/90 no-scrollbar" >
        <NavBar/>
      
        {children}
        
        
        <Analytics/>
        </body>
    </html>
  )
}
