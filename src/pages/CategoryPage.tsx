
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import PopularTopics from '../components/PopularTopics';
import WebProfile from '../components/WebProfile';
import newsData from '../data/newsData';

const categoryTitles: Record<string, string> = {
  news: 'BERITA TERKINI',
  sports: 'OLAHRAGA',
  hot: 'BERITA VIRAL',
  lifestyle: 'GAYA HIDUP',
  business: 'BISNIS & EKONOMI',
};

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const title = category ? categoryTitles[category] || category.toUpperCase() : 'KATEGORI';
  
  // Filter news based on category
  const filteredNews = newsData.filter(news => {
    if (category === 'news') {
      return news.category === 'News';
    } else if (category === 'sports') {
      return news.category === 'Sports';
    } else if (category === 'hot') {
      return news.category === 'Viral' || news.category === 'Entertainment';
    } else if (category === 'lifestyle') {
      return news.category === 'Lifestyle' || news.category === 'Religion';
    } else if (category === 'business') {
      return news.category === 'Business' || news.category === 'Jobs';
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-news-gradient">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-brandPurple mb-8 animate-fadeIn">{title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9 order-2 lg:order-1">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news, index) => (
                  <div key={news.id} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
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
            ) : (
              <div className="bg-white rounded-xl p-8 text-center animate-fadeIn">
                <h3 className="text-xl text-gray-700">Tidak ada berita untuk kategori ini saat ini.</h3>
                <p className="text-gray-500 mt-2">Silakan coba kategori lain atau kembali lagi nanti.</p>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
            <PopularTopics />
            <WebProfile />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
