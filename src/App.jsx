import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



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
        {/* <div className="container"> */}
          <div className="App">
                <Routes>
                  <Route exact path="/" element={<HomePage/>} />
                  <Route exact path="/contactus" element={<ContactUs/>} />
                  
                </Routes>
          </div>
        {/* </div> */}
        <Footer/>
      </Router>

    </ThemeProvider>

  );
}

export default App;
