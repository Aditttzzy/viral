
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const WebProfile = () => {
  return (
    <div className="bg-gray-200 rounded-xl p-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-brandRed mb-4">PROFIL KAMI</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-800 mb-2">Sosial Media</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Facebook size={16} />
              </span>
              <span>@Viralin00Com</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-pink-600 transition-colors">
              <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                <Instagram size={16} />
              </span>
              <span>@Viralin00Com</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-red-600 transition-colors">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <Youtube size={16} />
              </span>
              <span>Viralin00Com</span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-800 mb-2">Kontak</h3>
          <div className="space-y-3">
            <a href="mailto:info@viralin00.com" className="flex items-center gap-3 text-gray-800 hover:text-green-600 transition-colors">
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Mail size={16} />
              </span>
              <span>info@viralin00.com</span>
            </a>
            <a href="tel:+6281234567890" className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone size={16} />
              </span>
              <span>+62 812-3456-7890</span>
            </a>
            <div className="flex items-center gap-3 text-gray-800">
              <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <MapPin size={16} />
              </span>
              <span>Jl. Media No. 123, Jakarta Pusat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProfile;
