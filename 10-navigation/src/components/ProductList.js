import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {

  // useNavigation used to navigate within the components
  const navigate = useNavigate();
  
  // navigating from one page to another page (Component navigation)
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
