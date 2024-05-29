import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* "Routes" is kind of package where we have multiple "Route" within the Routes
             "Route" is use to connect with different pages within a web application*/}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/details" element={<ProductDetail />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
