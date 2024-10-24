import React from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/Form";
import About from "./components/About";
import Career from "./Career";
import Help from "./Help";
import ContactUs from "./ContactUs";
import Desk from "./Desk";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
           
              <RegistrationForm />
            
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cmd" element={<Desk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

