import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Navigate } from "react-router-dom";
import { Admin } from "./components/Admin";

function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <main>
        {/* "Routes" is kind of package where we have multiple "Route" within the Routes
             "Route" is use to connect with different pages within a web application             
             the Navigate component redirects the user to posts section on getting rendered.
             This happend IF the user is logged in (user object is present).
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/details/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
