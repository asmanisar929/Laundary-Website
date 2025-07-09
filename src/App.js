import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Aboutpage from "./Components/Aboutpage";
import Services from "./Components/Services";
import Blogpage from "./Components/Blogpage";
import BlogDetails from "./Components/BlogDetails";
import Element from "./Components/Element";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogpage" element={<Blogpage />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/Element" element={<Element />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
