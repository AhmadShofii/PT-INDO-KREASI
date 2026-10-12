import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles, Pickaxe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { companyData } from '../../data/company';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { themeMode, toggleTheme, soundEnabled, setSoundEnabled, playPixelSound } = useTheme();

  const isMinecraft = themeMode === 'minecraft';

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '/tentang-kami' },
    { label: 'Produk', to: '/produk' },
    { label: 'Layanan', to: '/layanan' },
    { label: 'Kontak', to: '/kontak' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
      isMinecraft
        ? 'bg-[#313338] border-b-4 border-[#1e1f22] text-white shadow-md'
        : 'border-b border-[#E2E4E0] bg-white/95 backdrop-blur-md text-[#24303A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-18">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            onClick={() => isMinecraft && playPixelSound('click')}
            className={`flex items-center gap-2.5 text-xl font-bold tracking-tight whitespace-nowrap shrink-0 transition-colors ${
              isMinecraft
                ? 'text-[#55FF55] hover:text-[#55FFFF]'
                : 'text-[#1F3040] hover:text-[#A36E53]'
            }`}
            aria-label="PT Indo Kreasi Beranda"
          >
            <div className={`w-8 h-8 flex items-center justify-center font-bold text-sm tracking-tighter ${
              isMinecraft
                ? 'bg-[#8B5A2B] border-2 border-t-[#c6894d] border-l-[#c6894d] border-r-[#543517] border-b-[#543517] text-white'
                : 'rounded bg-[#1F3040] text-white'
            }`}>
              {isMinecraft ? '⛏' : 'IK'}
            </div>
            <span>PT Indo Kreasi</span>
          </Link>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => isMinecraft && playPixelSound('click')}
                className={({ isActive }) =>
                  `transition-colors py-1.5 whitespace-nowrap shrink-0 relative ${
                    isMinecraft
                      ? isActive
                        ? 'text-[#FFAA00] font-bold border-b-2 border-[#FFAA00]'
                        : 'text-[#AAAAAA] hover:text-white'
                      : isActive
                        ? 'text-[#1F3040] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#A36E53]'
                        : 'text-[#5C6B77] hover:text-[#1F3040]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Interactive Style Switcher & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Style Switcher Toggle */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              title={isMinecraft ? 'Beralih ke Tampilan Modern Animasi' : 'Beralih ke Tampilan Minecraft Voxel'}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded cursor-pointer transition-all ${
                isMinecraft
                  ? 'mc-btn text-yellow-300 border-yellow-500'
                  : 'bg-[#EFF2F0] hover:bg-[#E2E4E0] text-[#1F3040] border border-[#E2E4E0]'
              }`}
            >
              {isMinecraft ? (
                <>
                  <Pickaxe className="w-3.5 h-3.5 text-[#FFAA00]" />
                  <span className="hidden sm:inline">Minecraft Mode</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#A36E53]" />
                  <span className="hidden sm:inline">Gaya: Modern Animasi</span>
                </>
              )}
            </motion.button>

            {/* Audio Toggle in Minecraft mode */}
            {isMinecraft && (
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Matikan Suara 8-Bit' : 'Nyalakan Suara 8-Bit'}
                className="p-1.5 rounded mc-btn text-white hover:text-yellow-300"
              >
                {soundEnabled ? (
                  <Volume2 className="w-3.5 h-3.5" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-red-400" />
                )}
              </button>
            )}

            {/* Primary Action Button */}
            <Link
              to="/kontak"
              onClick={() => isMinecraft && playPixelSound('click')}
              className={`hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                isMinecraft
                  ? 'mc-btn-gold'
                  : 'text-white bg-[#1F3040] rounded hover:bg-[#2A4259] active:bg-[#162330]'
              }`}
            >
              <span>{isMinecraft ? 'Kirim Inquiry' : 'Hubungi Kami'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => {
                if (isMinecraft) playPixelSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`p-2 rounded focus-visible:outline-2 ${
                isMinecraft
                  ? 'mc-btn text-white'
                  : 'text-[#1F3040] hover:bg-[#F7F5F0]'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden border-t px-4 pt-3 pb-6 shadow-lg ${
              isMinecraft
                ? 'bg-[#313338] border-[#1e1f22] text-white'
                : 'bg-white border-[#E2E4E0] text-[#24303A]'
            }`}
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => isMinecraft && playPixelSound('click')}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                      isMinecraft
                        ? isActive
                          ? 'bg-[#4e5058] text-[#FFAA00] font-bold border-l-4 border-[#FFAA00]'
                          : 'text-[#AAAAAA] hover:bg-[#404249] hover:text-white'
                        : isActive
                          ? 'bg-[#F7F5F0] text-[#1F3040] font-semibold border-l-2 border-[#A36E53]'
                          : 'text-[#5C6B77] hover:bg-[#F7F5F0] hover:text-[#1F3040]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Style Switcher */}
              <div className="pt-3 pb-1 border-t border-gray-200/20">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`w-full py-2.5 px-3 rounded text-xs font-semibold flex items-center justify-between ${
                    isMinecraft
                      ? 'mc-btn text-yellow-300'
                      : 'bg-[#EFF2F0] text-[#1F3040]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isMinecraft ? <Pickaxe className="w-4 h-4 text-[#FFAA00]" /> : <Sparkles className="w-4 h-4 text-[#A36E53]" />}
                    <span>Gaya: {isMinecraft ? 'Minecraft Voxel' : 'Modern Animasi'}</span>
                  </span>
                  <span className="text-[11px] underline">Ganti Mode &rarr;</span>
                </button>
              </div>

              <div className="pt-3">
                <Link
                  to="/kontak"
                  onClick={() => isMinecraft && playPixelSound('click')}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider ${
                    isMinecraft
                      ? 'mc-btn-gold'
                      : 'text-white bg-[#1F3040] hover:bg-[#2A4259]'
                  }`}
                >
                  <span>Hubungi Tim Pengadaan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="mt-3 text-center text-xs opacity-75">
                  WhatsApp: {companyData.contact.whatsappDisplay}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
