
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import newsData from '../data/newsData';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(newsData.find(news => news.id === id));
  const [relatedArticles, setRelatedArticles] = useState(
    newsData.filter(news => news.id !== id).slice(0, 3)
  );

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setArticle(newsData.find(news => news.id === id));
    setRelatedArticles(newsData.filter(news => news.id !== id).slice(0, 3));
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-news-gradient">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Artikel tidak ditemukan</h1>
            <Link to="/" className="nav-button inline-flex">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-news-gradient">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn">
          <div className="relative">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-brandRed text-white text-sm font-bold px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>5 menit membaca</span>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700">
                {article.content}
              </p>
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in sem finibus, at placerat turpis ullamcorper. Aliquam maximus neque ac egestas consequat. Morbi in consectetur massa, vel tincidunt nisi. Proin vel tellus quam. Ut porttitor tortor ut arcu suscipit, eget finibus arcu suscipit.
              </p>
              <p className="text-gray-700 mt-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vestibulum, leo a tempor commodo, neque neque efficitur dui, a finibus eros libero sit amet nulla. Proin ultrices semper metus, non commodo eros finibus vitae. Vestibulum lacinia magna sit amet diam egestas dictum.
              </p>
              <p className="text-gray-700 mt-4">
                Donec congue fringilla sapien, nec fringilla augue bibendum ut. Aenean rhoncus augue sed rutrum posuere. Integer condimentum convallis felis, et condimentum odio facilisis in. Ut et justo libero. Pellentesque hendrerit imperdiet augue, et fringilla nisl accumsan a. Duis vel gravida dolor.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-brandRed mb-6">Berita Terkait</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((news, index) => (
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
