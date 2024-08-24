import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/categorySlice";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = ["HTML", "CSS", "JavaScript", "React"];

  const handleClick = (category) => {
    dispatch(setCategory(category));
    navigate("/continue");
  };

  return (
    <div className="categories-box">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-item"
          onClick={() => handleClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
