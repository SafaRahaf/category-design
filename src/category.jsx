import React from 'react';
import { categorieGroups } from './categorieData';

const Category = () => {
  // const { categories } = categorieData;

  return (
    <div className="all-categories">
      <h2>---------categories---------</h2>
      <div className="categories-groups">
        {categorieGroups.map((item) => (
          <div key={item.title} className="category-container">
            <img src={item.image} alt={item.title} />
            <div className="categorie-btn-grp">
              <button className="title">{item.title}</button>
              <br />
              {item.categories.map((item) => (
                <button key={item.title} className="item">
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
