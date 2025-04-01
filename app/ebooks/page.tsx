import { BookCard } from '../components/book-card'
import { Button } from "@/components/ui/button"

const ebooks = [
  { id: 1, title: "Digital Dreams", author: "Alex Cyber", price: 4.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A thrilling cyberpunk adventure.", isFree: false },
  { id: 2, title: "The Virtual Voyage", author: "Sarah Net", price: 0, imageUrl: "/placeholder.svg?height=200&width=150", description: "Explore the wonders of virtual reality.", isFree: true },
  { id: 3, title: "Code Chronicles", author: "Tom Turing", price: 6.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A journey through the history of computing.", isFree: false },
  { id: 4, title: "Web Wizardry", author: "Lisa Link", price: 0, imageUrl: "/placeholder.svg?height=200&width=150", description: "Master the art of web development.", isFree: true },
  // ... add more e-books
]

export default function EbooksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">E-Books</h1>
      <div className="mb-8">
        <Button className="mr-4">All E-Books</Button>
        <Button variant="outline">Free E-Books</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ebooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}

