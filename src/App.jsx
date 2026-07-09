import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Models from './pages/Models'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/global.css'
import Dealerships from './pages/Dealerships'
import Company from "./pages/Company";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dealerships" element={<Dealerships />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App