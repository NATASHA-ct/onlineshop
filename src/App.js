import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./COMPONENTS/HEADER/Header";
import Home from "./COMPONENTS/HOME/Home";
import Productdetails from "./COMPONENTS/PRODUCTSDETAILS/productdetails";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Pagenotfound from "./PAGENOTFOUND/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route component={<Pagenotfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
