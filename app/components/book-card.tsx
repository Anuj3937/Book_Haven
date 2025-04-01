'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useCart } from '../contexts/cart-context'

interface BookProps {
  id: number
  title: string
  author: string
  price: number
  imageUrl: string
  description: string
  isFree?: boolean
  isSecondHand?: boolean
}

export function BookCard({ id, title, author, price, imageUrl, description, isFree, isSecondHand }: BookProps) {
  const [showQuickView, setShowQuickView] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, title, price, quantity: 1 })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
        <p className="text-sm text-muted-foreground">{author}</p>
        <p className="font-bold mt-2">${price.toFixed(2)}</p>
        {isSecondHand && <p className="text-sm text-muted-foreground mt-1">Second-hand</p>}
        {showQuickView && (
          <div className="mt-4">
            <p className="text-sm line-clamp-3">{description}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        {isFree !== undefined ? (
          isFree ? (
            <Button className="w-full">Read Now</Button>
          ) : (
            <Button className="w-full" onClick={handleAddToCart}>Buy E-Book</Button>
          )
        ) : (
          <>
            <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
            <Button variant="outline" className="w-full">Borrow</Button>
          </>
        )}
        <div className="flex w-full space-x-2">
          <Button variant="outline" className="flex-1" onClick={() => setShowQuickView(!showQuickView)}>
            {showQuickView ? "Hide Details" : "Quick View"}
          </Button>
          <Link href={`/book/${id}`} className="flex-1">
            <Button variant="outline" className="w-full">View Book</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

