import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { id: 1, name: "Fiction", description: "Explore imaginative worlds and compelling narratives" },
  { id: 2, name: "Non-Fiction", description: "Discover real-world knowledge and insights" },
  { id: 3, name: "Mystery", description: "Unravel intriguing puzzles and suspenseful plots" },
  { id: 4, name: "Science Fiction", description: "Journey through futuristic and speculative scenarios" },
  { id: 5, name: "Romance", description: "Experience love stories and emotional connections" },
  { id: 6, name: "Biography", description: "Learn about remarkable lives and personal journeys" },
]

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Book Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

