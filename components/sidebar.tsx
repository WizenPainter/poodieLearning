import Link from 'next/link'
import { Book, ChevronDown } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// You can move this to a separate file if you want to reuse it elsewhere
export const lessons = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction to Python', href: 'introduction' },
      { title: 'Setting Up Your Environment', href: 'setting-up' },
    ],
  },
  {
    title: 'Python Basics',
    items: [
      { title: 'Variables and Data Types', href: 'variables-dtypes' },
      { title: 'Array Dimensions', href: '/array-dimensions' },
      { title: 'Control Structures', href: '#' },
      { title: 'First Test', href: '/test-one' },
    ],
  },
  {
    title: 'Advanced Topics',
    items: [
      { title: 'Functions and Modules', href: '#' },
      { title: 'Object-Oriented Programming', href: '#' },
    ],
  },
]

export function LessonsSidebar() {
  return (
    <>
      {lessons.map((section, index) => (
        <SidebarGroup key={index}>
          <Collapsible>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between p-2">
                {section.title}
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item, itemIndex) => (
                    <SidebarMenuItem key={itemIndex}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          <Book className="mr-2 h-4 w-4" />
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      ))}
    </>
  )
}