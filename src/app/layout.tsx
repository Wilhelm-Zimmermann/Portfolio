import { Header } from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className='bg-gradient-to-br from-background via-primary to-secondary'> */}
      <body className='bg-background'>
      <Header />
        {children}
      </body>
    </html>
  )
}
