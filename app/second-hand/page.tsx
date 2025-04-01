import { BookCard } from '../components/book-card'

const secondHandBooks = [
  { id: 101, title: "Used Copy: The Great Gatsby", author: "F. Scott Fitzgerald", price: 5.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A classic novel about the American Dream in the Jazz Age. This copy is in good condition with minor wear.", isSecondHand: true },
  { id: 102, title: "Pre-owned: To Kill a Mockingbird", author: "Harper Lee", price: 6.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A powerful story of racial injustice and loss of innocence in the American South. This copy has some highlighting and notes.", isSecondHand: true },
  { id: 103, title: "Second-hand: 1984", author: "George Orwell", price: 4.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A dystopian novel set in a totalitarian society. This copy is well-read but still in acceptable condition.", isSecondHand: true },
  { id: 104, title: "Used: Pride and Prejudice", author: "Jane Austen", price: 3.99, imageUrl: "/placeholder.svg?height=200&width=150", description: "A romantic novel of manners set in Georgian England. This copy has a personalized inscription on the first page.", isSecondHand: true },
]

export default function SecondHandPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Second-Hand Books</h1>
      <p className="mb-6">Discover pre-loved books at great prices. All second-hand books are inspected for quality before being listed.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {secondHandBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}

