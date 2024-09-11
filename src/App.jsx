// import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Pagespage from "./pages/Pagespage";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/Contactpage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/pages" element={<Pagespage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </>
  );
}

export default App;
