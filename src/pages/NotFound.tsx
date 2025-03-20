
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-news-gradient">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16 max-w-md mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-brandPurple">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Halaman yang Anda cari tidak ditemukan
          </p>
          <Link
            to="/"
            className="nav-button inline-flex"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
