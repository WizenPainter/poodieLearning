"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code } from 'lucide-react'

export default function Component() {
  const [activeTab, setActiveTab] = useState('numbers')

  const dataTypes = [
    { id: 'numbers', name: 'Numbers' },
    { id: 'strings', name: 'Strings' },
    { id: 'booleans', name: 'Booleans' },
    { id: 'lists', name: 'Lists' },
    { id: 'tuples', name: 'Tuples' },
    { id: 'dictionaries', name: 'Dictionaries' },
    { id: 'sets', name: 'Sets' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Variables and Data Types in Python</h1>
      <p className="text-lg mb-8">
        In Python, variables are used to store data, and the language supports various data types. 
        Let&apos;s explore how to work with variables and the different data types available.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Variables in Python</CardTitle>
          <CardDescription>How to declare and use variables</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            In Python, you don&apos;t need to declare a variable&apos;s type explicitly. 
            The interpreter infers the type based on the value assigned to it.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="language-python">
              {`# Variable assignment
name = "Poodie"
age = 3
knows_python = False

print(name)  # Output: Poodie
print(age)   # Output: 3
print(knows_python)  # Output: False

# You can change the value and type of a variable
age = "three years old"
print(age)  # Output: three years old`}
            </code>
          </pre>
          <p>
            Python uses dynamic typing, which means you can reassign variables to different data types.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Python Data Types</CardTitle>
          <CardDescription>Explore different data types in Python</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {dataTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id}>{type.name}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="numbers">
              <h3 className="text-xl font-semibold mb-2">Numbers</h3>
              <p className="mb-4">Python has three numeric types: int, float, and complex.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`# Integers
age = 25
print(type(age))  # Output: <class 'int'>

# Floats
pi = 3.14159
print(type(pi))  # Output: <class 'float'>

# Complex numbers
z = 2 + 3j
print(type(z))  # Output: <class 'complex'>`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="strings">
              <h3 className="text-xl font-semibold mb-2">Strings</h3>
              <p className="mb-4">Strings are sequences of characters, enclosed in single or double quotes.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`# String declaration
name = "Poodie"
description = 'A cute dog'

# String operations
full_name = name + " the Dog"
print(full_name)  # Output: Poodie the Dog

# String methods
print(name.upper())  # Output: POODIE
print(len(description))  # Output: 11`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="booleans">
              <h3 className="text-xl font-semibold mb-2">Booleans</h3>
              <p className="mb-4">Booleans represent two values: True and False.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`is_cute = True
is_big = False

print(is_cute and is_big)  # Output: False
print(is_cute or is_big)   # Output: True
print(not is_big)          # Output: True

# Comparison operators
x = 5
y = 10
print(x < y)  # Output: True`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="lists">
              <h3 className="text-xl font-semibold mb-2">Lists</h3>
              <p className="mb-4">Lists are ordered, mutable sequences of elements.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`# List creation
fruits = ["apple", "banana", "cherry"]

# Accessing elements
print(fruits[0])  # Output: apple

# Modifying lists
fruits.append("date")
fruits[1] = "blueberry"
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'date']

# List operations
print(len(fruits))  # Output: 4
print("cherry" in fruits)  # Output: True`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="tuples">
              <h3 className="text-xl font-semibold mb-2">Tuples</h3>
              <p className="mb-4">Tuples are ordered, immutable sequences of elements.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`# Tuple creation
coordinates = (10, 20)
person = ("Poodie", 3, "Dog")

# Accessing elements
print(coordinates[0])  # Output: 10

# Tuple unpacking
name, age, species = person
print(name)  # Output: Poodie

# Tuple operations
print(len(person))  # Output: 3
print("Poodie" in person)  # Output: True`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="dictionaries">
              <h3 className="text-xl font-semibold mb-2">Dictionaries</h3>
              <p className="mb-4">Dictionaries are unordered collections of key-value pairs.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`# Dictionary creation
dog = {
    "name": "Poodie",
    "age": 3,
    "breed": "Labrador"
}

# Accessing values
print(dog["name"])  # Output: Poodie

# Modifying dictionaries
dog["age"] = 4
dog["color"] = "Brown"

# Dictionary operations
print(len(dog))  # Output: 4
print("breed" in dog)  # Output: True

# Dictionary methods
print(dog.keys())  # Output: dict_keys(['name', 'age', 'breed', 'color'])
print(dog.values())  # Output: dict_values(['Poodie', 4, 'Labrador', 'Brown'])`}
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="sets">
              <h3 className="text-xl font-semibold mb-2">Sets</h3>
              <p className="mb-4">Sets are unordered collections of unique elements.</p>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code className="language-python">
                  {`# Set creation
fruits = {"apple", "banana", "cherry"}

# Adding elements
fruits.add("date")

# Set operations
print(len(fruits))  # Output: 4
print("banana" in fruits)  # Output: True

# Set methods
vegetables = {"carrot", "broccoli", "apple"}
print(fruits.union(vegetables))  # Output: {'apple', 'banana', 'cherry', 'date', 'carrot', 'broccoli'}
print(fruits.intersection(vegetables))  # Output: {'apple'}`}
                </code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Button asChild>
          <a href="/python-playground" className="inline-flex items-center">
            <Code className="mr-2 h-4 w-4" />
            Try it in Python Playground
          </a>
        </Button>
      </div>
    </div>
  )
}