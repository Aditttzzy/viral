
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: string;
  title: string;
  image: string;
  category?: string;
  snippet?: string;
  link?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  image,
  category,
  snippet,
  link = `/article/${id}`,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="news-card group"
      style={{ animationDelay: `${parseInt(id) * 100}ms` }}
    >
      <Link to={link} className="block">
        <div className="relative overflow-hidden">
          <div 
            className={`news-card-image-placeholder bg-gray-200 h-48 w-full ${
              imageLoaded ? 'hidden' : 'block animate-shimmer'
            }`}
            style={{
              backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
              backgroundSize: '800px 104px',
              backgroundPosition: '0 0',
            }}
          />
          <img 
            src={image} 
            alt={title}
            className={`news-card-image ${imageLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {category && (
            <div className="absolute top-3 left-3">
              <span className="bg-brandRed text-white text-xs font-bold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-brandPurple transition-colors">
            {title}
          </h3>
          {snippet && (
            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{snippet}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
