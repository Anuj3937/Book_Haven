'use client'

import { useCart } from '../contexts/cart-context'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/">
          <Button className="mt-4">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <div className="mt-4 space-x-4">
          <Button onClick={clearCart} variant="outline">Clear Cart</Button>
          <Button>Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  )
}

