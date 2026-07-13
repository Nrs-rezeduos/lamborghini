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
import Beyond from './pages/Beyond'
import Motorsport from './pages/Motorsport'
import Museum from './pages/Museum'
import Store from './pages/Store'
import News from './pages/News'

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
        <Route path="/beyond" element={<Beyond />} />
        <Route path="/motorsport" element={<Motorsport />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/store" element={<Store />} />
        <Route path="/news" element={<News />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App