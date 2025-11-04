import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"; // make sure this exists

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="resume"><Resume /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
