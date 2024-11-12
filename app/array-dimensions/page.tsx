import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ArrayDimensionsWrapper from './ArrayDimensionsWrapper'

export default function ArrayDimensionsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Understanding Multiple Dimensions in Python Arrays</CardTitle>
          <CardDescription>Interact with the 3D visualization to explore array dimensions</CardDescription>
        </CardHeader>
        <CardContent>
          <ArrayDimensionsWrapper />
        </CardContent>
      </Card>
    </div>
  )
}