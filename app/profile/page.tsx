import { Button } from "@/components/ui/button"
import { BookCard } from '../components/book-card'

// Mock user data - in a real app, this would come from a database or API
const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  creditRating: 85,
  borrowedBooks: [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", dueDate: "2023-07-15" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", dueDate: "2023-07-22" },
  ],
  purchaseHistory: [
    { id: 3, title: "1984", author: "George Orwell", price: 10.99, purchaseDate: "2023-06-01" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", price: 8.99, purchaseDate: "2023-05-15" },
  ]
}

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Credit Rating:</strong> {user.creditRating}</p>
          <Button className="mt-4">Edit Profile</Button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Borrowed Books</h2>
          {user.borrowedBooks.map((book) => (
            <div key={book.id} className="mb-4 p-4 border rounded">
              <h3 className="font-semibold">{book.title}</h3>
              <p>by {book.author}</p>
              <p>Due: {book.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Purchase History</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {user.purchaseHistory.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  )
}

