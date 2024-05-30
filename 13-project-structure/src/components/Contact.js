import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const Contact = () => {
  // useNavigation used to navigate within the components
  const navigate = useNavigate();

  // navigating from one page to another page (Component navigation)
  const handleNavigate = () => {
    return navigate("/");
  }

  return (
    <>
      <div className="component">Contact</div>
      {/* Outlet is used to connect between nested routes */}
      <Outlet />
      <button onClick={handleNavigate}>Back to Home</button>
    </>
  );
};
