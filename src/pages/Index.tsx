
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import PopularTopics from '../components/PopularTopics';
import WebProfile from '../components/WebProfile';
import newsData from '../data/newsData';

const Index = () => {
  useEffect(() => {
    // Animate content on page load
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-slideUp');
        }, index * 100);
      });
    };

    animateElements();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-news-gradient">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            <PopularTopics />
            <WebProfile />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <h2 className="text-2xl font-bold text-brandRed mb-6 animate-on-load">BERITA LAINNYA</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news, index) => (
                <div key={news.id} className="animate-on-load" style={{ animationDelay: `${index * 150}ms` }}>
                  <NewsCard
                    id={news.id}
                    title={news.title}
                    image={news.image}
                    category={news.category}
                    snippet={news.snippet}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
