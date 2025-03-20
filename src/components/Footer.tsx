
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Tentang Viralin00</h2>
            <p className="text-gray-600">
              Portal berita terdepan yang menyajikan informasi terkini, akurat, dan terpercaya dari berbagai kategori untuk pembaca Indonesia.
            </p>
            <div className="pt-2">
              <p className="text-gray-500 text-sm">© 2023 Viralin00. Hak Cipta Dilindungi.</p>
            </div>
          </div>

          {/* Kategori */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Kategori</h2>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/news" className="text-gray-600 hover:text-brandPurple transition-colors">Berita</Link>
              <Link to="/sports" className="text-gray-600 hover:text-brandPurple transition-colors">Olahraga</Link>
              <Link to="/hot" className="text-gray-600 hover:text-brandPurple transition-colors">Viral</Link>
              <Link to="/lifestyle" className="text-gray-600 hover:text-brandPurple transition-colors">Gaya Hidup</Link>
              <Link to="/business" className="text-gray-600 hover:text-brandPurple transition-colors">Bisnis</Link>
              <Link to="/entertainment" className="text-gray-600 hover:text-brandPurple transition-colors">Hiburan</Link>
            </div>
          </div>

          {/* Kontak & Sosial Media */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Kontak</h2>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@viralin00.com" className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                <span className="social-icon">
                  <Mail size={20} />
                </span>
                <span>info@viralin00.com</span>
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="social-icon">
                  <Phone size={20} />
                </span>
                <span>+62 812-3456-7890</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="social-icon">
                  <MapPin size={20} />
                </span>
                <span>Jl. Media No. 123, Jakarta Pusat</span>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-gray-800 mb-2">Sosial Media</h3>
                <div className="flex gap-4">
                  <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook size={20} />
                  </Link>
                  <Link to="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                    <Instagram size={20} />
                  </Link>
                  <Link to="#" className="text-gray-600 hover:text-red-600 transition-colors">
                    <Youtube size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
