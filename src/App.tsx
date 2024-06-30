import Cart from "./components/Cart";
import Heading from "./components/Heading";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Offer from "./components/Footer/Offer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
