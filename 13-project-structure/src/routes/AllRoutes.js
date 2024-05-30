import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
    Home,
    Contact,
    ProductList,
    ProductDetail,
    Admin,
    PageNotFound,
    ContactIN,
    ContactUS,
    ContactEU,
  } from "../pages/index";

export const AllRoutes = () => {
  const user = true;

  return (
    <main>
      {/* "Routes" is kind of package where we have multiple "Route" within the Routes
        "Route" is use to connect with different pages within a web application.            
            The Navigate component redirects the user to posts section on getting rendered.
            This happend IF the user is logged in (user object is present).
    */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIN />} />
          <Route path="us" element={<ContactUS />} />
          <Route path="eu" element={<ContactEU />} />
        </Route>
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
