import { BookCard } from './components/book-card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Mock data for books
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A classic novel about the American Dream in the Jazz Age." },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A powerful story of racial injustice and loss of innocence in the American South." },
  { id: 3, title: "1984", author: "George Orwell", price: 10.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A dystopian novel set in a totalitarian society, exploring themes of surveillance and control." },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 8.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A romantic novel of manners set in Georgian England, focusing on the Bennet family." },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A coming-of-age novel following the experiences of Holden Caulfield in New York City." },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A fantasy novel about the adventures of Bilbo Baggins, setting the stage for The Lord of the Rings." },
]

export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.slice(2, 6).map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section className="bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Our Book Club</h2>
        <p className="mb-6">Get exclusive access to new releases, author interviews, and special discounts.</p>
        <Link href="/book-club">
          <Button size="lg">Learn More</Button>
        </Link>
      </section>
    </div>
  )
}

