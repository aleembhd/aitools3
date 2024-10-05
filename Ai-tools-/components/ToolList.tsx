"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AddToolForm from './AddToolForm'

const initialTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'AI-powered chatbot for natural language conversations',
    url: 'https://chat.openai.com',
    category: 'Natural Language Processing'
  },
  {
    id: 2,
    name: 'DALL-E',
    description: 'AI system that creates images from textual descriptions',
    url: 'https://openai.com/dall-e-2',
    category: 'Computer Vision'
  },
]

const categories = [
  "All",
  "Natural Language Processing",
  "Computer Vision",
  "Generative Models",
  "Machine Learning",
  "Robotics",
  "Data Analysis",
  "Other"
]

export default function ToolList() {
  const [tools, setTools] = useState(initialTools)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleAddTool = (newTool) => {
    setTools([...tools, { ...newTool, id: tools.length + 1 }])
  }

  const handleCardClick = (url: string) => {
    window.open(url, '_blank')
  }

  const filteredTools = selectedCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <div>
      <AddToolForm onAddTool={handleAddTool} />
      <div className="mb-6">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Card 
            key={tool.id} 
            className="cursor-pointer transition-shadow hover:shadow-lg"
            onClick={() => handleCardClick(tool.url)}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${tool.url}`}
                  alt={`${tool.name} favicon`}
                  className="w-6 h-6 mr-2"
                />
                {tool.name}
              </CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{tool.category}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}