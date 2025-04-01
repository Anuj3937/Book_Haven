'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from '../contexts/cart-context'
import Link from 'next/link'

export function CartButton() {
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link href="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}

