import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal, Download } from 'lucide-react'
import CompanyLogo from '@/components/company-logo'

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Introduction to Python</h1>
      <p className="text-lg mb-8">
        Python is a versatile, high-level programming language known for its simplicity and readability. 
        It&apos;s an excellent choice for beginners and experienced programmers alike. Let&apos;s get started by 
        installing Python on your computer!
      </p>

      <Tabs defaultValue="macos" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="macos">
          <CompanyLogo company="apple" className="text-gray-500" size={48} />
            macOS
          </TabsTrigger>
          <TabsTrigger value="windows">
          <CompanyLogo company="windows" className="text-blue-500" size={48} />
            Windows
          </TabsTrigger>
        </TabsList>
        <TabsContent value="macos">
          <Card>
            <CardHeader>
              <CardTitle>Installing Python on macOS</CardTitle>
              <CardDescription>Choose your preferred installation method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Method 1: Official Installer</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Visit the official Python website: <Link href="https://www.python.org/downloads/" className="text-blue-500 hover:underline">https://www.python.org/downloads/</Link></li>
                  <li>Click on the &quot;Download Python&quot; button for the latest version</li>
                  <li>Once downloaded, open the installer package and follow the installation wizard</li>
                  <li>Ensure &quot;Add Python to PATH&quot; is checked during installation</li>
                </ol>
                <Button className="mt-4">
                  <Download className="mr-2 h-4 w-4" />
                  Download Python for macOS
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Method 2: Using Homebrew (Terminal)</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Open Terminal</li>
                  <li>Install Homebrew if not already installed:
                    <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                      <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</code>
                    </pre>
                  </li>
                  <li>Install Python using Homebrew:
                    <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                      <code>brew install python</code>
                    </pre>
                  </li>
                </ol>
                <Button variant="outline" className="mt-4">
                  <Terminal className="mr-2 h-4 w-4" />
                  Open Terminal
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="windows">
          <Card>
            <CardHeader>
              <CardTitle>Installing Python on Windows</CardTitle>
              <CardDescription>Choose your preferred installation method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Method 1: Official Installer</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Visit the official Python website: <Link href="https://www.python.org/downloads/" className="text-blue-500 hover:underline">https://www.python.org/downloads/</Link></li>
                  <li>Click on the &quot;Download Python&quot; button for the latest version</li>
                  <li>Once downloaded, run the installer executable</li>
                  <li>Ensure &quot;Add Python to PATH&quot; is checked during installation</li>
                  <li>Click &quot;Install Now&quot; and follow the installation wizard</li>
                </ol>
                <Button className="mt-4">
                  <Download className="mr-2 h-4 w-4" />
                  Download Python for Windows
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Method 2: Using Microsoft Store</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Open the Microsoft Store</li>
                  <li>Search for &quot;Python&quot;</li>
                  <li>Select the latest version of Python</li>
                  <li>Click &quot;Get&quot; or &quot;Install&quot; to download and install Python</li>
                </ol>
                <Button variant="outline" className="mt-4">
                <CompanyLogo company="windows" className="text-blue-500" size={48} />
                  Open Microsoft Store
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Method 3: Using Windows Subsystem for Linux (WSL)</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Open PowerShell as Administrator</li>
                  <li>Enable WSL by running:
                    <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                      <code>wsl --install</code>
                    </pre>
                  </li>
                  <li>Restart your computer</li>
                  <li>Open Ubuntu on Windows and update packages:
                    <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                      <code>sudo apt update && sudo apt upgrade</code>
                    </pre>
                  </li>
                  <li>Install Python:
                    <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto">
                      <code>sudo apt install python3 python3-pip</code>
                    </pre>
                  </li>
                </ol>
                <Button variant="outline" className="mt-4">
                  <Terminal className="mr-2 h-4 w-4" />
                  Open PowerShell
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Verifying Your Installation</CardTitle>
          <CardDescription>Make sure Python is installed correctly</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">After installation, open a terminal (Command Prompt on Windows) and type:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>python --version</code>
          </pre>
          <p className="mt-4">You should see the installed Python version number. If you encounter any issues, please refer to the official Python documentation or seek help in the Python community forums.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>Start your Python journey</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Now that you have Python installed, you&apos;re ready to start coding! Here are some suggestions to begin your Python journey:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Try running Python in interactive mode by typing `python` in your terminal</li>
            <li>Write your first Python script using a text editor or an Integrated Development Environment (IDE)</li>
            <li>Explore online tutorials and courses to learn Python basics</li>
            <li>Join Python communities and forums to connect with other learners and developers</li>
          </ul>
          <Button className="mt-6">Start Learning Python</Button>
        </CardContent>
      </Card>
    </div>
  )
}