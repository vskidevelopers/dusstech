import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";

import './Details.css'
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("description");
  //  Functions to handle Tab Switching
  const handleDescription = () => {
    // update the state to tab1
    setActiveTab("description");
  };
  const handleReview = () => {
    // update the state to review
    setActiveTab("review");
  };
  return (
    <div className="Tabs">
      <ul className="nav nav-tabs border-0">
        <li 
          className={activeTab === "description" ? "active nav-link" : "nav-link"}
          onClick={handleDescription}
        >
          Description
        </li>
        <li
          className={activeTab === "review" ? "active nav-link" : "nav-link"}
          onClick={handleReview}
        >
          Reviews
        </li>
      </ul>
 
      <div className="outlet p-4 p-lg-5 bg-white">
        {activeTab === "description" ? <Description /> : <Reviews />}
      </div>
    </div>
  );
};
export default Tabs;