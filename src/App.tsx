import { Provider } from "react-redux";

import Cart from "./components/Cart";
import Heading from "./components/Heading";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Offer from "./components/Footer/Offer";
import SingleProduct from "./components/SingleProduct";
import ErrorSite from "./components/404";
import Goods from "./components/Goods";
import { store } from "./redux/store";
import CategoryProduct from "./components/CategoryProduct";
import Fav from "./components/Fav";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Top />
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/goods/:slug" element={<SingleProduct />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/favorite" element={<Fav />} />
          <Route path="/*" element={<ErrorSite />} />
        </Routes>
        <Footer />
        <Offer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
