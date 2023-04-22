import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import AboutPage from './pages/AboutPage'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PopUp from './components/PopUp';
import Presentations from './pages/Presentations';
import People from './pages/People';
import Person from './pages/Person';



const theme = createMuiTheme({
  palette:{
    primary:{
      main: "#0070c0",
      dark: '#012a47'
    }
  },typography:{
    fontFamily:'Poppins',
    fontWeightLight:100,
    fontWeightMedium:300,
    fontWeightRegular:400,
    fontWeightBold:500,

  }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        {/* <PopUp/> */}
        <div className="container">
          <div className="App">
                <Routes>
                  <Route exact path="/" element={<HomePage/>} />
                  <Route exact path="/contactus" element={<ContactUs/>} />
                  <Route exact path="/about" element={<AboutPage/>} />
                  <Route exact path="/presentations" element={<Presentations/>} />
                  <Route exact path="/people" element={<People/>} />
                  <Route exact path="/people/:id" element={<Person/>} />
                  
                </Routes>
          </div>
        </div>
        <Footer/>
      </Router>

    </ThemeProvider>

  );
}

export default App;
