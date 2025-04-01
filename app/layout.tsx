import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CartProvider } from './contexts/cart-context'
import { CartButton } from './components/cart-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookHaven - Your One-Stop Book Solution',
  description: 'Discover, purchase, and enjoy books from all genres',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">BookHaven</Link>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link href="/categories" className="hover:underline">Categories</Link></li>
                  <li><Link href="/bestsellers" className="hover:underline">Bestsellers</Link></li>
                  <li><Link href="/new-releases" className="hover:underline">New Releases</Link></li>
                  <li><Link href="/ebooks" className="hover:underline">E-Books</Link></li>
                  <li><Link href="/second-hand" className="hover:underline">Second-Hand</Link></li>
                </ul>
              </nav>
              <div className="flex items-center space-x-4">
                <input
                  type="search"
                  placeholder="Search books..."
                  className="px-4 py-2 rounded-md text-primary"
                />
                <CartButton />
                <Link href="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </header>
          <main className="container mx-auto py-8">
            {children}
          </main>
          <footer className="bg-primary text-primary-foreground p-4 mt-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <p>BookHaven is your ultimate destination for all things books. Discover new worlds, expand your knowledge, and fuel your passion for reading.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul>
                  <li><Link href="/about" className="hover:underline">About Us</Link></li>
                  <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                  <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                  <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                <p>Stay updated with our latest releases and promotions.</p>
                <form className="mt-2 flex">
                  <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md flex-grow text-primary" />
                  <Button type="submit" className="rounded-l-none">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="container mx-auto text-center mt-8">
              © 2023 BookHaven. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'