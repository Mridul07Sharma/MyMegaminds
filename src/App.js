import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import Login from "./Components/Forms/Login";
import Student from "./Components/Forms/Student";
import Tutor from "./Components/Forms/Tutor";
import Signup from "./Components/Signup";
import About from "./Components/Pages/About";
import Careers from "./Components/Pages/Careers";
import Blog from "./Components/Pages/Blog";
import Faq from "./Components/Pages/Faq.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/student" element={<Student />} />
        <Route path="/signup/tutor" element={<Tutor />} />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
        <Route
          path="/blog"
          element={
            <div>
              <Header />
              <Blog />
              <Footer />
            </div>
          }
        />
        <Route
          path="/careers"
          element={
            <div>
              <Header />
              <Careers />
              <Footer />
            </div>
          }
        />
        <Route
          path="/faq"
          element={
            <div>
              <Header />
              <Faq />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
