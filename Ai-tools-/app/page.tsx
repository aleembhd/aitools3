import Header from '@/components/Header'
import ToolList from '@/components/ToolList'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ToolList />
      </div>
    </main>
  )
}