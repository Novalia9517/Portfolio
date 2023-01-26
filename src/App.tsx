import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";
import {
  Box,
  Fade,
  Slide,
  ThemeProvider,
  Paper,
  CssBaseline,
} from "@mui/material";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);
  const certificate = useRef(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const onToggleDark = () => {
    setDarkMode(!darkMode);
  };

  const scrollTo = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Paper
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Nav onToggleDark={onToggleDark} />
          <Home address={home} />
          <About address={about} />
          <Projects address={projects} />
          <Skills address={skills} />
          <Services address={services} />
          <Contact address={contact} />
          <Certificate address={certificate} />
          <BottomNav
            home={home}
            about={about}
            projects={projects}
            skills={skills}
            services={services}
            contact={contact}
            certificate={certificate}
            onClick={scrollTo}
          />
          <Footer />
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
