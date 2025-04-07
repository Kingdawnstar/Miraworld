import React, { useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showTrends, setShowTrends] = useState(false);
  const [activeTrend, setActiveTrend] = useState(null);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleTrends = () => {
    setShowTrends(!showTrends);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleTrendClick = (trend) => {
    setActiveTrend(activeTrend === trend ? null : trend);
  };

  const categories = [
    {
      name: "Art works",
      subItems: [
        { name: "Painting", count: 5 },
        { name: "Sculpture", count: 3 },
        { name: "Photography", count: 7 },
      ],
    },
    {
      name: "Digital",
      subItems: [
        { name: "E-books", count: 10 },
        { name: "Software", count: 8 },
        { name: "Digital Art", count: 2 },
      ],
    },
    {
      name: "Electronics",
      subItems: [
        { name: "Phones", count: 12 },
        { name: "Laptops", count: 5 },
        { name: "Accessories", count: 15 },
      ],
    },
    {
      name: "Fashion",
      subItems: [
        { name: "Clothing", count: 20 },
        { name: "Accessories", count: 10 },
        { name: "Footwear", count: 8 },
      ],
    },
    {
      name: "Foods and Drinks",
      subItems: [
        { name: "Snacks", count: 25 },
        { name: "Beverages", count: 18 },
        { name: "Gourmet", count: 5 },
      ],
    },
    {
      name: "Home and Furniture",
      subItems: [
        { name: "Furniture", count: 7 },
        { name: "Decor", count: 4 },
        { name: "Kitchen", count: 6 },
      ],
    },
    {
      name: "Beauty and care",
      subItems: [
        { name: "Skincare", count: 9 },
        { name: "Makeup", count: 12 },
        { name: "Haircare", count: 7 },
      ],
    },
    {
      name: "Toys and Games",
      subItems: [
        { name: "Action Figures", count: 11 },
        { name: "Board Games", count: 5 },
        { name: "Puzzles", count: 9 },
      ],
    },
    {
      name: "Sports and Outdoors",
      subItems: [
        { name: "Equipment", count: 8 },
        { name: "Clothing", count: 10 },
        { name: "Accessories", count: 6 },
      ],
    },
    {
      name: "Books and Stationary",
      subItems: [
        { name: "Fiction", count: 15 },
        { name: "Non-Fiction", count: 10 },
        { name: "Notebooks", count: 20 },
      ],
    },
    {
      name: "Health and Wellness",
      subItems: [
        { name: "Vitamins", count: 5 },
        { name: "Supplements", count: 7 },
        { name: "Fitness", count: 3 },
      ],
    },
    {
      name: "Baby and kids",
      subItems: [
        { name: "Clothing", count: 10 },
        { name: "Toys", count: 15 },
        { name: "Gear", count: 5 },
      ],
    },
  ];

  const trends = [
    {
      name: "Latest Fashion",
      subItems: [
        { name: "Summer Collection", count: 30 },
        { name: "Winter Collection", count: 40 },
      ],
    },
    {
      name: "Tech Gadgets",
      subItems: [
        { name: "Smart Watches", count: 20 },
        { name: "Wireless Earbuds", count: 25 },
      ],
    },
    {
      name: "Home Decor",
      subItems: [
        { name: "Wall Art", count: 15 },
        { name: "Lighting", count: 10 },
      ],
    },
  ];

  // Calculate total items across all categories
  const totalItems = categories.reduce((sum, category) => {
    return (
      sum +
      category.subItems.reduce((subSum, subItem) => subSum + subItem.count, 0)
    );
  }, 0);

  // Calculate total items across all trends
  const totalTrends = trends.reduce((sum, trend) => {
    return (
      sum +
      trend.subItems.reduce((subSum, subItem) => subSum + subItem.count, 0)
    );
  }, 0);

  return (
    <div className="Categories">
      <div className="Categories-container">
        <h1>Shop by Categories</h1>
        <ul>
          <li className="cat-active" onClick={toggleCategories}>
            View All ({totalItems})
          </li>
          {showCategories &&
            categories.map((category) => {
              const categoryTotal = category.subItems.reduce(
                (sum, subItem) => sum + subItem.count,
                0
              );

              return (
                <li
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name} ({categoryTotal})
                  {activeCategory === category.name && (
                    <ul>
                      {category.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          {subItem.name} ({subItem.count})
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}

          <li className="cat-active" onClick={toggleTrends}>
            Shop by Trend ({totalTrends})
          </li>
          {showTrends &&
            trends.map((trend) => {
              const trendTotal = trend.subItems.reduce(
                (sum, subItem) => sum + subItem.count,
                0
              );

              return (
                <li
                  key={trend.name}
                  onClick={() => handleTrendClick(trend.name)}
                >
                  {trend.name} ({trendTotal})
                  {activeTrend === trend.name && (
                    <ul>
                      {trend.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          {subItem.name} ({subItem.count})
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
