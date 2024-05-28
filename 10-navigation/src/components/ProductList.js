import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    return navigate("/");
  }

  return (
    <>
      <div className="component">ProductList</div>
      <button onClick={handleNavigation}>Back to Home</button>
    </>
  );
};
