import React from "react";
import "../../assets/css/common/Loading.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};
