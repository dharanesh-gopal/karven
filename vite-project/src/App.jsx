import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TrainingPage from './pages/TrainingPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen dark:bg-black dark:text-white bg-white text-black">
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
