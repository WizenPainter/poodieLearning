'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GraduationCap, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { LessonsSidebar } from '@/components/sidebar'

export function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar className="hidden border-r lg:block">
          <SidebarHeader>
            <Link href="/" className="flex items-center space-x-2 px-4 py-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-lg font-bold">PoodieLearning</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <LessonsSidebar />
          </SidebarContent>
        </Sidebar>
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-[240px] sm:w-[300px] lg:hidden">
            <SheetHeader className="mb-4">
              <SheetTitle>PoodieLearning</SheetTitle>
              <SheetDescription>Python lessons for Poodie</SheetDescription>
            </SheetHeader>
            <LessonsSidebar />
          </SheetContent>
        </Sheet>
        <div className="flex-1 flex flex-col">
          <header className="flex h-14 items-center border-b px-4 lg:h-[60px]">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
            </Sheet>
            <SidebarTrigger />
            <nav className="ml-auto flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium">
                About
              </Link>
              <Link href="#" className="text-sm font-medium">
                Contact
              </Link>
            </nav>
          </header>
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}