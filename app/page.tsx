import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle className="text-3xl">Welcome to PoodieLearning!</CardTitle>
        <CardDescription>Your journey to Python mastery begins here, Poodie!</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Get ready to embark on an exciting adventure into the world of Python programming. 
          Whether you&apos;re a curious beginner or looking to enhance your coding skills, 
          PoodieLearning is here to guide you every step of the way.
        </p>
        <h2 className="text-xl font-semibold mb-2">Why Learn Python?</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Simple and easy to learn syntax</li>
          <li>Versatile language used in various fields</li>
          <li>Large community and extensive libraries</li>
          <li>High demand in the job market</li>
        </ul>
        <p>
          Start your learning journey today by exploring our carefully crafted lessons. 
          Don&apos;t forget to check out our first lesson on Array Dimensions!
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/array-dimensions">Start Learning Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}