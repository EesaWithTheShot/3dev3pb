import Navb from '@/components/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: '400',subsets: ['latin'] })


export const metadata = {
  title: '3DEStore',
  description: 'by Eesa A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
      rel="icon"
      href="/icon?<generated>"
      type="image/<generated>"
      sizes="<generated>"
      />
      <body className={inter.className}>
      <ShoppingCartProvider>
        <Navb ></Navb> 
      
          {children}
      </ShoppingCartProvider>
      </body>
    </html>
  )
}
