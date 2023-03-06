import React from "react";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { userInfo, created } = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/login"
          element={userInfo.user ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/register"
          element={
            userInfo.user && created ? <Navigate to="/" /> : <Register />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
