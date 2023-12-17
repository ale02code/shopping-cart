import React from "react";
import Header from "./components/Header.jsx";
import WelcomeSection from "./components/Home.jsx";
import Comments from "./components/Comments.jsx";
import PreviewCatalog from "./components/Preview-catalog.jsx";
import Catalog from "./components/Catalog.jsx";
import { CatalogVisibilityProvider } from "./context/catalogVisibility.jsx";
import Cart from "./components/Cart.jsx";
import { CartVisibilityProvider } from "./context/cartVisibility.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import AboutUs from "./components/About-us.jsx";
import Footer from "./components/Footer.jsx";
import "./scroll.css";

function App() {
  return (
    <div className="w-screen font-oxygen relative">
      <CartVisibilityProvider>
        <CartProvider>
          <Header />
          <Cart />
          <CatalogVisibilityProvider>
            <WelcomeSection />
            <PreviewCatalog />
            <Catalog />
          </CatalogVisibilityProvider>
        </CartProvider>
      </CartVisibilityProvider>
      <Comments />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
