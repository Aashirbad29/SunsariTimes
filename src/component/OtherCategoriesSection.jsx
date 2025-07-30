
import React from 'react';

export default function OtherCategoriesSection({ categories }) {
  return (
    <section className="category">
      <div className="section-divider" />
      <div className="section-header">
        <h2>More Categories</h2>
      </div>
      <div className="section-divider" />
      <div className="articles">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <div className="card-image placeholder-image" />
            <h3 className="card-title">{category.name}</h3>
            <p className="meta">{category.articles} Articles</p>
          </div>
        ))}
      </div>
    </section>
  );
}
