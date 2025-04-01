import { Star } from 'lucide-react'

interface Review {
  id: number
  userId: number
  username: string
  rating: number
  comment: string
}

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4">
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">{review.username}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

