import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Pickaxe, MessageCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { companyData } from '../../data/company';

export const FloatingThemeDock: React.FC = () => {
  const { themeMode, toggleTheme, playPixelSound } = useTheme();
  const isMinecraft = themeMode === 'minecraft';

  return (
    <aside aria-label="Aksi Cepat & Tema" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* WhatsApp Quick Chat */}
      <motion.a
        href={`https://wa.me/${companyData.contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => isMinecraft && playPixelSound('click')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-3 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isMinecraft
            ? 'mc-btn-gold text-white'
            : 'bg-[#25D366] text-white hover:bg-[#20ba5a]'
        }`}
        title="Chat WhatsApp Procurement"
        aria-label="Buka WhatsApp Pengadaan"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      {/* Theme Switcher Quick Toggle */}
      <motion.button
        type="button"
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3.5 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold cursor-pointer border transition-all ${
          isMinecraft
            ? 'mc-panel text-[#FFAA00] border-2 border-black'
            : 'bg-[#1F3040] text-white hover:bg-[#2A4259] border-white/20'
        }`}
        title="Ganti gaya website"
      >
        {isMinecraft ? (
          <>
            <Pickaxe className="w-4 h-4 text-[#FFAA00]" />
            <span className="hidden sm:inline">Minecraft Mode</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-[#A36E53]" />
            <span className="hidden sm:inline">Modern Animasi</span>
          </>
        )}
      </motion.button>
    </aside>
  );
};
