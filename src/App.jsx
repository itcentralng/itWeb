import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar/>
      {/* <div className="container"> */}
        <div className="App">
              <Routes>
                <Route exact path="/" element={<HomePage/>} />
              </Routes>
        </div>
      {/* </div> */}
      <Footer/>
    </Router>

  );
}

export default App;
