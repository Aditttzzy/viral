
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import PopularTopics from '../components/PopularTopics';
import WebProfile from '../components/WebProfile';
import newsData from '../data/newsData';
import { NewsItem } from '../data/newsData';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Search logic
    const performSearch = () => {
      if (!query) {
        setSearchResults([]);
        return;
      }

      const lowerCaseQuery = query.toLowerCase();
      const results = newsData.filter(
        news => 
          news.title.toLowerCase().includes(lowerCaseQuery) || 
          news.content.toLowerCase().includes(lowerCaseQuery) || 
          news.snippet.toLowerCase().includes(lowerCaseQuery) ||
          news.category.toLowerCase().includes(lowerCaseQuery)
      );
      
      setSearchResults(results);
    };

    performSearch();
  }, [query]);

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
            <h2 className="text-2xl font-bold text-brandRed mb-6 animate-on-load">
              Hasil Pencarian: "{query}"
            </h2>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((news, index) => (
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
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center animate-on-load">
                <h3 className="text-xl font-semibold mb-2">Tidak ada hasil yang ditemukan</h3>
                <p className="text-gray-600">
                  Maaf, tidak ada berita yang sesuai dengan pencarian "{query}". 
                  Silakan coba kata kunci lain.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
