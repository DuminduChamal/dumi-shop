// packages
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// styling
import "./Categories.scss";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

// assets
import bakery from "../../assets/categories/bakery.jpeg";
import beverages from "../../assets/categories/beverages.jpeg";
import chicken from "../../assets/categories/ChickenProducts_Lead.jpeg";
import dairy from "../../assets/categories/dairy.jpeg";
import produce from "../../assets/categories/produce.jpeg";
import seafood from "../../assets/categories/seafood.jpeg";
import logo from "../../assets/pngShop.png";
import { allData } from "../../assets/data";

const categories = [
  {
    title: "Meat and Poultry",
    image: chicken,
    linkPath: "meat",
  },
  {
    title: "Dairy",
    image: dairy,
    linkPath: "dairy",
  },
  {
    title: "Seafood",
    image: seafood,
    linkPath: "seafood",
  },
  {
    title: "Produce",
    image: produce,
    linkPath: "produce",
  },
  {
    title: "Bakery and Desserts",
    image: bakery,
    linkPath: "bakery",
  },
  {
    title: "Beverages",
    image: beverages,
    linkPath: "beverages",
  },
];

const CategoryCard = ({ title, image }) => {
  const navigate = useNavigate();

  const [{ userData }, dispatch] = useStateValue();

  const categoryClick = (categoryName) => {
    // console.log('messages - ', data[chatIndex]);
    dispatch({
      type: "SET_SELECTEDCATEGORY",
      category: categoryName,
    });
    navigate("/productsList");
  };

  return (
    <div className="Home__categoryCard" onClick={() => categoryClick(title)}>
      <div className="Home__cardTitle">{title}</div>
      <img src={image} className="Home__cardImage" />
    </div>
  );
};

export const Categories = () => {
  const [array, setArray] = useState(categories);

  const search = (searchTerm) => {
    console.log("searchTerm", searchTerm);
  };
  return (
    <div className="Home">
      <img className="Home__logo" src={logo} />
      <div className="Home__logoText">Dumi Shop</div>
      <div className="Home__tagline">Your Order.... Our Service....</div>
      {/* <div className="Home__search">
        <input
          type="text"
          name="name"
          className="Home__searchInput"
          placeholder="Type here to browse"
          onChange={(e) => search(e.target.value)}
        />
        <button className="Home__searchButton">Search</button>
      </div> */}
      <div className="Home__categories">
        <div className="Home__categoriesTitle">
          <span></span>
          <p>Our Categories</p>
          <span></span>
        </div>
        <div className="Home__categoriesContent">
          {array.map((item, index) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              image={item.image}
              path={item.linkPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
