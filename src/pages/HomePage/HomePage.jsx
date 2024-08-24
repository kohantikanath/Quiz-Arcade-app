import React from "react";
import "./HomePage.css";

import homepagebg from "../../assets/HomePage.png";
import Categories from "../../components/Categories/Categories";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-l">
        <h1>Quizes</h1>
        <Categories />
      </div>
      <div className="homepage-r">
        <img src={homepagebg} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
