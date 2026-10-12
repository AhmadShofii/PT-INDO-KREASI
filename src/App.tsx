import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingThemeDock } from './components/common/FloatingThemeDock';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#24303A] transition-colors duration-200">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang-kami" element={<About />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/produk/:slug" element={<ProductDetail />} />
              <Route path="/layanan" element={<Services />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingThemeDock />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
