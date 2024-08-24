import React from "react";
import "../pages/HomePage/HomePage.css";

const Categories = () => {
  const categories = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Java",
  ];

  return (
    <div className="categories-box">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
