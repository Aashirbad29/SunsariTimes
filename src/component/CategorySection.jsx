import React from 'react';

export default function CategorySection({ title, articles }) {
  return (
    <section className="category">
  <div className="section-divider" />
  <div className="section-header">
    <h2>{title}</h2>
    <a href="#">
      View All <span className="arrow">&rarr;</span>
    </a>
  </div>
  <div className="section-divider" />
  <div className="articles">
    {articles.map((article, index) => (
      <div key={index} className="card">
        <p className="top-meta">{title} · {article.date}</p>
        <h3 className="card-title">{article.title}</h3>
        <div className="card-image placeholder-image" />
        <p>{article.snippet}</p>
        <p className="meta">by {article.author}</p>
      </div>
    ))}
  </div>
</section>

  );
}
