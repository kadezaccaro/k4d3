import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { useEffect } from "react";
import EmailCTA from "./components/EmailCTA";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
      <EmailCTA />
      <Footer />
    </Router>
  );
}

export default App;
