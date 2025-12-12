import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    );
};

export default App;