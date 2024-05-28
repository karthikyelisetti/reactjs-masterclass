import React from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/");
  }

  return (
    <>
      <div className="component">Contact</div>
      <button onClick={handleNavigate}>Back to Home</button>
    </>
  );
};
