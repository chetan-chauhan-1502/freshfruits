import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Foods from "./Components/Foods/Foods";
import FoodData from "./Components/Foods/FoodData";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";
import { Provider } from "react-redux";
import Store from "./Components/Store/Store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Foods" element={<Foods value={{ FoodData }} />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
