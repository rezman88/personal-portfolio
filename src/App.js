import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Header from "./components/Header.js";

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
