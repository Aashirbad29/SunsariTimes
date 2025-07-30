import React from 'react';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import TrendingSection from '../component/TrendingSection';
import CategorySection from '../component/CategorySection';
import Footer from '../component/Footer';

export default function Home() {
  const sampleArticles = Array(4).fill({
    title: 'RELATIONS: TALKS WITH THE NEIGHBORING COUNTRIES',
    snippet: 'Ultricies montes dignissim morbi iaculis in. Bibendum aenean at et diam mattis faucibus ultricies sed ...',
    author: 'John Doe',
    date: 'Jan 22, 2024'
  });

  return (
    <>
      <Header />
      <Navbar />
      <TrendingSection />
      <CategorySection title="Politics" articles={sampleArticles} />
      <CategorySection title="Business" articles={sampleArticles} />
      <CategorySection title="Popular" articles={sampleArticles} />
      <CategorySection title="Sponsored" articles={sampleArticles} />
      <Footer />
    </>
  );
}