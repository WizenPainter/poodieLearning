"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [input, setInput] = useState('1')
  const [output, setOutput] = useState('')

  const generateStaircase = (direction : number) => {
    const steps = 5
    let staircase = ''

    if (direction === 1) {
      for (let i = 1; i <= steps; i++) {
        staircase += ' '.repeat(steps - i) + '#'.repeat(i) + '\n'
      }
    } else if (direction === -1) {
      for (let i = steps; i > 0; i--) {
        staircase += ' '.repeat(steps - i) + '#'.repeat(i) + '\n'
      }
    } else {
      staircase = '#'.repeat(steps) + '\n'
    }

    setOutput(staircase)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    generateStaircase(parseInt(input))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Staircase Project</h1>
      <p className="text-lg mb-8">
        In this project, we&apos;ll create a Python program that generates a staircase pattern based on user input. 
        The staircase will go up when the input is 1, down when the input is -1, and be flat when the input is 0.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Python Code</CardTitle>
          <CardDescription>Here&apos;s the Python code to generate the staircase pattern</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="language-python">
{`def generate_staircase(direction):
    steps = 5
    
    if direction == 1:
        for i in range(1, steps + 1):
            print(' ' * (steps - i) + '#' * i)
    elif direction == -1:
        for i in range(steps, 0, -1):
            print(' ' * (steps - i) + '#' * i)
    else:
        print('#' * steps)

# Example usage
direction = int(input("Enter direction (1 for up, -1 for down, 0 for flat): "))
generate_staircase(direction)`}
            </code>
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>Let&apos;s break down the code and understand how it works</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Function Definition:</strong> We define a function called <code>generate_staircase</code> that takes a <code>direction</code> parameter.
            </li>
            <li>
              <strong>Staircase Size:</strong> We set the number of steps to 5, but you can easily modify this to change the size of the staircase.
            </li>
            <li>
              <strong>Upward Staircase (direction == 1):</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>We use a for loop to iterate from 1 to 5 (inclusive).</li>
                <li>In each iteration, we print spaces followed by &apos;#&apos; symbols.</li>
                <li>The number of spaces decreases while the number of &apos;#&apos; symbols increases with each step.</li>
              </ul>
            </li>
            <li>
              <strong>Downward Staircase (direction == -1):</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>We use a for loop to iterate from 5 to 1 (inclusive).</li>
                <li>Similar to the upward staircase, but the pattern is reversed.</li>
              </ul>
            </li>
            <li>
              <strong>Flat Pattern (direction == 0):</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>We simply print a line of &apos;#&apos; symbols equal to the number of steps.</li>
              </ul>
            </li>
            <li>
              <strong>User Input:</strong> We use <code>input()</code> to get the direction from the user and convert it to an integer.
            </li>
            <li>
              <strong>Function Call:</strong> We call the <code>generate_staircase()</code> function with the user&apos;s input.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Try It Out</CardTitle>
          <CardDescription>Enter a direction and see the staircase pattern</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="direction">Direction</Label>
              <Input
                id="direction"
                type="number"
                placeholder="Enter 1, -1, or 0"
                value={input}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit">Generate Staircase</Button>
          </form>
          {output && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Output:</h3>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
                {output}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}