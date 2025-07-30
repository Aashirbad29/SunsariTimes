import React, { useState } from 'react';

export default function TrendingSection() {
  const [activeCategory, setActiveCategory] = useState("विविध");
  const [showTrending, setShowTrending] = useState(true);

  const headlines = [
    "ed a historic climate change agreement",
    "Tech giants are tackling a major cybersecurity breach",
    "Financial markets experience..."
  ];

  const featuredArticle = {
    title: "What is Trello and How It Works?",
    author: "Niranjan Sharma",
    date: "1 day ago",
  };

  const sideArticles = [
    { title: "रेडियो अर्न किन्ने – निषेध व्यावसायिकको सौन्दर्यपूर्ण गुणस्तरमा", author: "Niranjan Sharma", date: "1 day ago" },
    { title: "रेडियो अर्न किन्ने – निषेध व्यावसायिकको सौन्दर्यपूर्ण गुणस्तरमा", author: "Niranjan Sharma", date: "1 day ago" },
  ];

  const categories = ["विविध", "सबैभन्दा लोकप्रिय", "अझै चर्चामा", "फर्स्यौटी"];

  const gridArticles = Array(8).fill({
    title: "पहिले र पछि – तेनो मेरोको मनोवैज्ञानिक स्थानान्तरण",
    author: "अरि शाह",
    date: "1 day ago",
  });

  return (
    <>
        {showTrending && (
        <div className="trending-outer">
        <div className="trending-section">
            <div className="trending-inner">
            <div className="trending-title">Trending</div>
            <div className="trending-items">
                {headlines.map((item, idx) => (
                <span key={idx} className="trending-item">{item}</span>
                ))}
                <span className="trending-close" onClick={() => setShowTrending(false)}>✕</span>
            </div>
            </div>
        </div>
        </div>

        )}

      <div className="main-content">
        <div className="top-featured">
          <div className="main-article">
            <div className="featured-image placeholder-image" />
            <div className="featured-info">
              <h2>{featuredArticle.title}</h2>
              <div className="author-date">
                <span>{featuredArticle.author}</span> • <span>{featuredArticle.date}</span>
              </div>
            </div>
          </div>

          <div className="side-featured">
            {sideArticles.map((art, i) => (
              <div key={i} className="side-article">
                <div className="side-image placeholder-image" />
                <div className="side-info">
                  <p>{art.title}</p>
                  <div className="author-date">
                    <span>{art.author}</span> • <span>{art.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="categories">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`category-button ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {gridArticles.map((art, i) => (
            <div key={i} className="card">
              <div className="card-image placeholder-image" />
              <h3>{art.title}</h3>
              <div className="meta">
                लेखक: {art.author} • {art.date}
              </div>
            </div>
          ))}
        </div>

        <h3 className="discussion-title">सबैभन्दा बढी चर्चा गरिएका</h3>

        <div className="discussion-grid">
          <div className="discussion-large">
            <div className="placeholder-image" />
            <h4>दक्षिणको रिसाएको मौन खतरा...</h4>
            <p>फेब्रुअरी १ | लेखक: इयान रेनोल्ड्स</p>
          </div>

          <div className="discussion-medium">
            <div className="discussion-card">
              <div className="placeholder-image" />
              <h4>Cute, Round, and Everywhere...</h4>
              <p>फेब्रुअरी १ | लेखक: इयान रेनोल्ड्स</p>
            </div>
            <div className="discussion-card">
              <div className="placeholder-image" />
              <h4>किन "सर्फ इन्स" नयाँ पुस्ताका...</h4>
              <p>फेब्रुअरी १ | लेखक: इयान रेनोल्ड्स</p>
            </div>
          </div>

          <div className="discussion-side">
            <div className="discussion-small">
              <div className="placeholder-image" />
              <div>
                <h5>ग्लास स्किन २.०</h5>
                <p>फेब्रुअरी १ | लेखक: इयान रेनोल्ड्स</p>
              </div>
            </div>
            <div className="discussion-small">
              <div className="placeholder-image" />
              <div>
                <h5>इस्ला मोनाको पुइन्साइ गयो...</h5>
                <p>फेब्रुअरी १ | लेखक: इयान रेनोल्ड्स</p>
              </div>
            </div>
            <div className="discussion-small">
              <div className="placeholder-image" />
              <div>
                <h5>चिट मिल कि स्वास्थ्यको खतरा?</h5>
                <p>फेब्रुअरी १ | लेखक: इयान रेनोल्ड्स</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
