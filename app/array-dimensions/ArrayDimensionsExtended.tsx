'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle } from 'lucide-react'

export default function ArrayDimensionsExtended() {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  })
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [codeCompletion, setCodeCompletion] = useState('')
  const [codeSubmitted, setCodeSubmitted] = useState(false)

  const handleQuizSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuizSubmitted(true)
  }

  const handleCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCodeSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Understanding Dimensions in Python Arrays</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What are Dimensions in Python Arrays?</CardTitle>
          <CardDescription>Let&apos;s dive deep into the concept of dimensions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            In Python, the dimensions of an array refer to the number of indices needed to select an individual element. 
            Each dimension represents a level of nesting in the array structure.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>1D Array (Vector):</strong> A single row or column of elements. Example: [1, 2, 3, 4]</li>
            <li><strong>2D Array (Matrix):</strong> A table of rows and columns. Example: [[1, 2], [3, 4]]</li>
            <li><strong>3D Array (Cube):</strong> A cube of elements. Example: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]</li>
            <li><strong>N-D Array:</strong> Arrays with more than three dimensions, often used in complex scientific computations.</li>
          </ul>
          <p>
            The number of dimensions is also referred to as the &quot;rank&quot; of the array. 
            Understanding dimensions is crucial for data manipulation, especially in fields like data science and machine learning.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Visualizing Dimensions</CardTitle>
          <CardDescription>Let&apos;s see how different dimensions look</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="1d">
            <TabsList>
              <TabsTrigger value="1d">1D</TabsTrigger>
              <TabsTrigger value="2d">2D</TabsTrigger>
              <TabsTrigger value="3d">3D</TabsTrigger>
            </TabsList>
            <TabsContent value="1d">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code>
                  [1, 2, 3, 4, 5]
                </code>
              </pre>
              <p>A 1D array is like a single row or column of elements.</p>
            </TabsContent>
            <TabsContent value="2d">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code>
                  [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                  ]
                </code>
              </pre>
              <p>A 2D array is like a table with rows and columns.</p>
            </TabsContent>
            <TabsContent value="3d">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code>
                  [
                    [[1, 2], [3, 4]],
                    [[5, 6], [7, 8]]
                  ]
                </code>
              </pre>
              <p>A 3D array is like a cube or stack of 2D arrays.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Accessing Elements in Multi-Dimensional Arrays</CardTitle>
          <CardDescription>How to select elements based on dimensions</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="language-python">
              {`# 1D Array
array_1d = [1, 2, 3, 4, 5]
print(array_1d[2])  # Output: 3

# 2D Array
array_2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(array_2d[1][2])  # Output: 6

# 3D Array
array_3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
print(array_3d[1][0][1])  # Output: 6`}
            </code>
          </pre>
          <p>
            As the number of dimensions increases, we need to use more indices to access specific elements. 
            Each set of square brackets corresponds to a dimension.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quiz: Test Your Understanding</CardTitle>
          <CardDescription>Answer these questions about array dimensions</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleQuizSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="q1" className="text-base font-semibold">
                  1. What is the dimension (rank) of the array: [1, [2, 3], 4]?
                </Label>
                <RadioGroup id="q1" value={quizAnswers.q1} onValueChange={(value) => setQuizAnswers({...quizAnswers, q1: value})}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q1-1" />
                    <Label htmlFor="q1-1">1D</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q1-2" />
                    <Label htmlFor="q1-2">2D</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q1-3" />
                    <Label htmlFor="q1-3">3D</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="q2" className="text-base font-semibold">
                  2. How many indices do you need to access an element in a 3D array?
                </Label>
                <RadioGroup id="q2" value={quizAnswers.q2} onValueChange={(value) => setQuizAnswers({...quizAnswers, q2: value})}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q2-1" />
                    <Label htmlFor="q2-1">1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q2-2" />
                    <Label htmlFor="q2-2">2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q2-3" />
                    <Label htmlFor="q2-3">3</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="q3" className="text-base font-semibold">
                  3. What is the correct way to access the element 6 in the array: [[1, 2], [3, 4], [5, 6]]?
                </Label>
                <RadioGroup id="q3" value={quizAnswers.q3} onValueChange={(value) => setQuizAnswers({...quizAnswers, q3: value})}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="q3-1" />
                    <Label htmlFor="q3-1">array[2][1]</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="q3-2" />
                    <Label htmlFor="q3-2">array[1][2]</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="q3-3" />
                    <Label htmlFor="q3-3">array[6]</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button type="submit" className="mt-4">Submit Quiz</Button>
          </form>
          {quizSubmitted && (
            <div className="mt-4 space-y-2">
              <Alert variant={quizAnswers.q1 === '1' ? 'default' : 'destructive'}>
                <AlertTitle>Question 1: {quizAnswers.q1 === '1' ? 'Correct!' : 'Incorrect'}</AlertTitle>
                <AlertDescription>
                  The array [1, [2, 3], 4] is a 1D array containing mixed types (integer and list).
                </AlertDescription>
              </Alert>
              <Alert variant={quizAnswers.q2 === '3' ? 'default' : 'destructive'}>
                <AlertTitle>Question 2: {quizAnswers.q2 === '3' ? 'Correct!' : 'Incorrect'}</AlertTitle>
                <AlertDescription>
                  To access an element in a 3D array, you need 3 indices, one for each dimension.
                </AlertDescription>
              </Alert>
              <Alert variant={quizAnswers.q3 === '1' ? 'default' : 'destructive'}>
                <AlertTitle>Question 3: {quizAnswers.q3 === '1' ? 'Correct!' : 'Incorrect'}</AlertTitle>
                <AlertDescription>
                  The correct way to access 6 is array[2][1], as it&apos;s in the third sub-array (index 2) and the second position (index 1).
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code Completion Exercise</CardTitle>
          <CardDescription>Complete the code to create and manipulate a 3D array</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="language-python">
              {`import numpy as np

# Create a 3x3x3 array of zeros
array_3d = np.zeros((3, 3, 3))

# Fill the array with values
for i in range(3):
    for j in range(3):
        for k in range(3):
            array_3d[i][j][k] = i + j + k

# TODO: Write code to print the sum of all elements in the array
# Hint: Use np.sum()

print("Sum of all elements:", )`}
            </code>
          </pre>
          <form onSubmit={handleCodeSubmit}>
            <div className="space-y-4">
              <Label htmlFor="code-completion">Complete the code:</Label>
              <Input
                id="code-completion"
                value={codeCompletion}
                onChange={(e) => setCodeCompletion(e.target.value)}
                placeholder="np.sum(array_3d)"
              />
            </div>
            <Button type="submit" className="mt-4">Submit Code</Button>
          </form>
          {codeSubmitted && (
            <Alert variant={codeCompletion.trim() === 'np.sum(array_3d)' ? 'default' : 'destructive'} className="mt-4">
              <AlertTitle>
                {codeCompletion.trim() === 'np.sum(array_3d)' ? (
                  <CheckCircle className="inline mr-2" />
                ) : (
                  <XCircle className="inline mr-2" />
                )}
                {codeCompletion.trim() === 'np.sum(array_3d)' ? 'Correct!' : 'Incorrect'}
              </AlertTitle>
              <AlertDescription>
                {codeCompletion.trim() === 'np.sum(array_3d)'
                  ? 'Great job! np.sum(array_3d) correctly calculates the sum of all elements in the 3D array.'
                  : 'The correct answer is np.sum(array_3d). This function calculates the sum of all elements in the array, regardless of its dimensions.'}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}