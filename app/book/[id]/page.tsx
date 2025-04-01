import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { BookCard } from "@/app/components/book-card"
import { ReviewForm } from "@/app/components/review-form"
import { Reviews } from "@/app/components/reviews"

// Mock data - in a real app, this would come from a database or API
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99, imageUrl: "/placeholder.svg?height=400&width=300", description: "A classic novel about the American Dream in the Jazz Age.", genre: "Classic" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99, imageUrl: "/placeholder.svg?height=400&width=300", description: "A powerful story of racial injustice and loss of innocence in the American South.", genre: "Classic" },
  { id: 3, title: "1984", author: "George Orwell", price: 10.99, imageUrl: "/placeholder.svg?height=400&width=300", description: "A dystopian novel set in a totalitarian society, exploring themes of surveillance and control.", genre: "Science Fiction" },
  // ... add more books
]

const reviews = [
  { id: 1, bookId: 1, userId: 1, username: "JohnDoe", rating: 5, comment: "A timeless classic that never gets old." },
  { id: 2, bookId: 1, userId: 2, username: "JaneSmith", rating: 4, comment: "Beautifully written, captures the essence of the era." },
  // ... add more reviews
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === parseInt(params.id))

  if (!book) {
    notFound()
  }

  const bookReviews = reviews.filter(r => r.bookId === book.id)
  const similarBooks = books.filter(b => b.genre === book.genre && b.id !== book.id).slice(0, 4)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src={book.imageUrl} alt={book.title} className="w-full h-auto" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl mb-2">by {book.author}</p>
          <p className="text-2xl font-bold mb-4">${book.price.toFixed(2)}</p>
          <p className="mb-6">{book.description}</p>
          <div className="flex gap-4">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">Borrow</Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <Reviews reviews={bookReviews} />
        <ReviewForm bookId={book.id} />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Similar Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarBooks.map((similarBook) => (
            <BookCard key={similarBook.id} {...similarBook} />
          ))}
        </div>
      </div>
    </div>
  )
}

