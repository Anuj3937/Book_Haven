'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ReviewForm({ bookId }: { bookId: number }) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    console.log({ bookId, rating, comment })
    // Reset form
    setRating(0)
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
      <div className="mb-4">
        <Label htmlFor="rating">Rating</Label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          <option value={0}>Select a rating</option>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} star{value !== 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <Label htmlFor="comment">Comment</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1"
          rows={4}
        />
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  )
}

