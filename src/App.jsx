import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutPage";
import {
  createMuiTheme,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Presentations from "./pages/Presentations";
import People from "./pages/People";
import Person from "./pages/Person";
import { useEffect } from "react";
import SummerBootCamp from "./pages/SummerBootCamp";
import Confirmation from "./pages/Confirmation";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const theme = createTheme({
  palette: {
    primary: {
      main: "#0070c0",
      dark: "#012a47",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 100,
    fontWeightMedium: 300,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    h1: {
      fontSize: "4.5rem",
      color: "#012a47",
      fontWeight: 700,
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "3.2rem",
      color: "#012a47",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.8rem",
      color: "#012a47",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.4rem",
      color: "#012a47",
      fontWeight: 500,
    },
  },
});
function App() {
  // const Summer = () => {
  //   useEffect(() => {
  //     window.location.href = 'https://paystack.com/pay/itcentralng-summer';
  //   }, []);

  //   return <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/summer/summer.png'} />;
  // }

  // const SummerThanks = () => {
  //   return <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/summer/thanks.png'} />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        {/* <PopUp/> */}
        <div className="container">
          <div className="App">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/contactus" element={<ContactUs />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/presentations" element={<Presentations />} />
              <Route
                exact
                path="/summer-bootcamp"
                element={<SummerBootCamp />}
              />
              <Route
                exact
                path="/summer-confirmation"
                element={<Confirmation />}
              />

              {/* <Route exact path="/people" element={<People />} />
              <Route exact path="/people/:id" element={<Person />} />
              <Route exact path="/summer" element={<Summer />} />
              <Route
                exact
                path="/thanks-summer-2023"
                element={<SummerThanks />}
              /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
