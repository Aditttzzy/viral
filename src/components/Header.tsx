
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { name: 'HOME', path: '/' },
  { name: 'NEWS', path: '/news' },
  { name: 'SPORTS', path: '/sports' },
  { name: 'HOT', path: '/hot' },
  { name: 'LIFESTYLE', path: '/lifestyle' },
  { name: 'BUSINESS', path: '/business' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('HOME');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-glass shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          {/* Logo */}
          <div className="md:col-span-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/bdf265f3-dc68-4b73-9d72-788102af4d70.png" 
                  alt="Viralin00 Logo" 
                  className="h-12 w-auto transition-all duration-300 hover:scale-105"
                />
                <h1 className="text-3xl font-bold ml-2">
                  <span className="text-brandPurple">viralin</span>
                  <span className="text-brandRed">00</span>
                  <span className="text-gray-700">.com</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="md:col-span-7">
            <div className="relative w-full">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Apa yang ingin anda baca hari ini?"
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
          
          {/* Auth buttons (hidden by default on mobile) */}
          <div className="hidden md:flex md:col-span-2 items-center justify-end">
            <button className="nav-button" onClick={handleSearch}>CARI</button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 min-w-max pb-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className={`${
                  activeCategory === category.name
                    ? 'nav-button'
                    : 'nav-button-outline'
                } whitespace-nowrap`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
