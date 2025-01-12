import { ThemeProvider } from "./theme-provider"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from "./Footer"
import LessonContent from "./LessonContent"
import Sobre from "./Sobre"

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<LessonContent />} />
              <Route path="/licoes" element={<LessonContent />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App

