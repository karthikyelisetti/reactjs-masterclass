import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  // useNavigation used to navigate within the components
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("keyword"));
  
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
