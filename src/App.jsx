import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/contact-us" element={<ContactPage/>} />
            </Routes>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
