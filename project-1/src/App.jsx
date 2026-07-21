import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import Menu from "./components/Menu";
import Location from "./components/Location";
import About from "./components/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;