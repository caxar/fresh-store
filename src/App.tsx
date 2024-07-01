import Cart from "./components/Cart";
import Heading from "./components/Heading";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Offer from "./components/Footer/Offer";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Top />
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/goods/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
      <Offer />
    </BrowserRouter>
  );
}

export default App;
