import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code, Terminal } from 'lucide-react'

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Setting Up Your Python Development Environment</h1>
      <p className="text-lg mb-8">
        A well-configured development environment is crucial for productive Python programming. 
        Let&apos;s set up your workspace with the best tools and practices!
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Choosing a Code Editor</CardTitle>
          <CardDescription>Select a powerful editor to write and manage your Python code</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vscode">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vscode">Visual Studio Code</TabsTrigger>
              <TabsTrigger value="cursor">Cursor</TabsTrigger>
            </TabsList>
            <TabsContent value="vscode">
              <div className="space-y-4">
                <p>
                  Visual Studio Code (VSCode) is a free, open-source code editor developed by Microsoft. 
                  It&apos;s highly customizable and has excellent support for Python development.
                </p>
                <h3 className="text-lg font-semibold">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Integrated terminal</li>
                  <li>Debugging support</li>
                  <li>Git integration</li>
                  <li>Rich ecosystem of extensions</li>
                </ul>
                <Button asChild>
                  <Link href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" />
                    Download Visual Studio Code
                  </Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="cursor">
              <div className="space-y-4">
                <p>
                  Cursor is an AI-powered code editor built on top of VSCode. It offers intelligent 
                  code completion and generation features, making it an excellent choice for Python developers.
                </p>
                <h3 className="text-lg font-semibold">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>AI-assisted coding</li>
                  <li>Built on VSCode, inheriting its powerful features</li>
                  <li>Collaborative editing</li>
                  <li>Integrated AI chat for coding assistance</li>
                </ul>
                <Button asChild>
                  <Link href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" />
                    Download Cursor
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Python Version Management with pyenv</CardTitle>
          <CardDescription>Easily manage multiple Python versions on your system</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            pyenv is a powerful tool that allows you to install and manage multiple Python versions on your system. 
            This is particularly useful when working on projects that require different Python versions.
          </p>
          <h3 className="text-lg font-semibold mb-2">Installation:</h3>
          <Tabs defaultValue="macos">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="linux">Linux</TabsTrigger>
            </TabsList>
            <TabsContent value="macos">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code>
                  brew install pyenv
                </code>
              </pre>
            </TabsContent>
            <TabsContent value="linux">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                <code>
                  curl https://pyenv.run | bash
                </code>
              </pre>
            </TabsContent>
          </Tabs>
          <p className="mb-4">
            After installation, add pyenv to your shell configuration file (.bashrc, .zshrc, etc.):
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code>
              {`export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"`}
            </code>
          </pre>
          <Button asChild>
            <Link href="https://github.com/pyenv/pyenv#installation" target="_blank" rel="noopener noreferrer">
              <Terminal className="mr-2 h-4 w-4" />
              pyenv Installation Guide
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>General Environment Guidelines</CardTitle>
          <CardDescription>Best practices for setting up your Python development environment</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Use virtual environments</h3>
                <p>Create isolated environments for each project to manage dependencies separately.</p>
                <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                  <code>python -m venv myproject_env</code>
                </pre>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Manage dependencies with requirements.txt</h3>
                <p>Keep track of your project&apos;s dependencies in a requirements.txt file.</p>
                <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                  <code>pip freeze `{'>'}` requirements.txt</code>
                </pre>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Use a consistent code style</h3>
                <p>Follow PEP 8 guidelines and use tools like Black or autopep8 for automatic formatting.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Implement version control</h3>
                <p>Use Git for version control and create a .gitignore file for your Python projects.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Set up linting and type checking</h3>
                <p>Use tools like pylint, mypy, or pyright to catch errors and improve code quality.</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}