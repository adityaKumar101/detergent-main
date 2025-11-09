import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './styles/main.scss';
import Contact from './components/ContactForm';

// Create Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a3a6a',
    },
    secondary: {
      main: '#ff6b35',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detergent-main" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />

          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;