import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";
// import {useDispatch}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="*" element={<App />} /> */}
        <Route path="/" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
