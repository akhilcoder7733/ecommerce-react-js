import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Products from "./products/Products";
import ProductDetails from "./products/ProductDetails";
import BuyPage from "./products/BuyPage";
import HeaderSection from "./Components/HeaderSection";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AdminPage from "./AdminPages/AdminPage";
import NotLoggedIn from "./Pages/NotLoggedIn";
import About from "./Pages/About";
import Home2 from "./Pages/Home2";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/ecommerce-react-js" element={<Home2 />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home2" element={<Home2 />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/not-logged" element={<NotLoggedIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
