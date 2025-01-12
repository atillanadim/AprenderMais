import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Aprender Mais</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
          <li><Link to="/sobre"><Button variant="ghost">Sobre</Button></Link></li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

