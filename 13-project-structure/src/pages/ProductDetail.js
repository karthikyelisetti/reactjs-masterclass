import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  // useParams can be used to fetch the params from the application url
  const params = useParams();
  // console.log(params);

  return (
    <main>
      <div className="component">ProductDetail - {params.id}</div>
    </main>
  );
};
