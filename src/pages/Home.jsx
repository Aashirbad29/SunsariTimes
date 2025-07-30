import React from 'react';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import TrendingSection from '../component/TrendingSection';
import CategorySection from '../component/CategorySection';
import OtherCategoriesSection from '../component/OtherCategoriesSection';
import Footer from '../component/Footer';

export default function Home() {
  const politicsArticles = [
    {
      title: 'Government Discusses New Constitution Amendments',
      snippet: 'The ruling party has initiated talks on revising key articles of the constitution to promote inclusiveness...',
      author: 'Aarav Sharma',
      date: 'Jan 15, 2024',
    },
    {
      title: 'Opposition Criticizes Foreign Policy Decisions',
      snippet: 'Leaders of the opposition expressed concern over recent diplomatic decisions made without parliamentary approval...',
      author: 'Meera Koirala',
      date: 'Jan 17, 2024',
    },
    {
      title: 'Federal Budget to Focus on Infrastructure Projects',
      snippet: 'The upcoming budget is expected to prioritize road networks, energy, and digital transformation...',
      author: 'Bikash Acharya',
      date: 'Jan 20, 2024',
    },
    {
      title: 'Election Commission Announces New Guidelines',
      snippet: 'New voting regulations and safety measures to be implemented ahead of the 2025 general elections...',
      author: 'Ritika Thapa',
      date: 'Jan 22, 2024',
    },
  ];

  const businessArticles = [
    {
      title: 'Tech Startups Boom in Nepal’s Capital',
      snippet: 'Kathmandu sees a surge in technology startups thanks to foreign investment and local innovation hubs...',
      author: 'Suman Thapa',
      date: 'Jan 19, 2024',
    },
    {
      title: 'Gold Prices Reach New Highs',
      snippet: 'Market analysts report a sharp rise in gold prices, impacting jewelry businesses and import strategies...',
      author: 'Nisha Shrestha',
      date: 'Jan 21, 2024',
    },
    {
      title: 'Tourism Sector Sees Post-Pandemic Recovery',
      snippet: 'With increased domestic travel and safety protocols, the tourism industry shows signs of steady rebound...',
      author: 'Kripa Maharjan',
      date: 'Jan 23, 2024',
    },
    {
      title: 'Digital Wallet Transactions Hit Record High',
      snippet: 'E-wallet usage in Nepal has increased dramatically, changing the face of small business payments...',
      author: 'Ashok Poudel',
      date: 'Jan 25, 2024',
    },
  ];

  const popularArticles = [
    {
      title: 'Viral Story Unites Communities',
      snippet: 'A local hero’s story goes viral, drawing attention to rural education development in western Nepal...',
      author: 'Rajendra Bista',
      date: 'Jan 10, 2024',
    },
    {
      title: '10 Must-Visit Places in Eastern Nepal',
      snippet: 'From Pathivara to Koshi Tappu, explore the hidden gems drawing in tourists this season...',
      author: 'Sabina Rai',
      date: 'Jan 13, 2024',
    },
    {
      title: 'New Health Trends Among Nepalese Youth',
      snippet: 'Plant-based diets and home workouts are becoming the new normal among the younger generation...',
      author: 'Rojina Shrestha',
      date: 'Jan 16, 2024',
    },
    {
      title: 'Social Media Challenges and Mental Health',
      snippet: 'Experts warn about the impact of online trends and encourage mindful digital consumption...',
      author: 'Amit Joshi',
      date: 'Jan 18, 2024',
    },
  ];

  const sponsoredArticles = [
    {
      title: 'Upgrade Your Internet with FiberLink',
      snippet: 'Experience blazing fast internet with 24/7 support — brought to you by FiberLink, Nepal’s trusted ISP...',
      author: 'Sponsored',
      date: 'Jan 18, 2024',
    },
    {
      title: 'Save Big on Winter Travel Deals',
      snippet: 'Fly high with major discounts on domestic and international routes from TravelWings Nepal...',
      author: 'Sponsored',
      date: 'Jan 20, 2024',
    },
    {
      title: 'Enjoy Fresh Meals Delivered to Your Doorstep',
      snippet: 'Order from your favorite local restaurants with FastEats — now delivering in 20+ cities across Nepal...',
      author: 'Sponsored',
      date: 'Jan 24, 2024',
    },
    {
      title: 'Secure Your Home with SmartCam Solutions',
      snippet: 'Protect your property with motion-sensor cameras and 24/7 cloud monitoring at affordable rates...',
      author: 'Sponsored',
      date: 'Jan 26, 2024',
    },
  ];

  const otherCategories = [
    { name: 'TECHNOLOGY', articles: 8 },
    { name: 'SPORTS', articles: 10 },
    { name: 'LIFESTYLE', articles: 7 },
    { name: 'CULTURE', articles: 6 },
    { name: 'ENVIRONMENT', articles: 5 },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <TrendingSection />
      <CategorySection title="Politics" articles={politicsArticles} />
      <CategorySection title="Business" articles={businessArticles} />
      <CategorySection title="Popular" articles={popularArticles} />
      <CategorySection title="Sponsored" articles={sponsoredArticles} />
      <OtherCategoriesSection categories={otherCategories} />
      <Footer />
    </>
  );
}
