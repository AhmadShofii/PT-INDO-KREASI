import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, PackageCheck, Eye, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductItem } from '../../data/products';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';

export interface ProductCardProps {
  product: ProductItem;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { themeMode, playPixelSound } = useTheme();

  const isMinecraft = themeMode === 'minecraft';

  // Take first 2 specifications for clean preview
  const specEntries = Object.entries(product.specifications).slice(0, 2);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        whileHover={!isMinecraft ? { y: -4, transition: { duration: 0.15 } } : undefined}
        className={`group flex flex-col transition-all duration-200 ${
          isMinecraft
            ? 'mc-panel p-3 text-white'
            : 'bg-white border border-[#E2E4E0] rounded-lg overflow-hidden hover:border-[#76847B] hover:shadow-md'
        } ${className}`}
      >
        {/* Product Image slot with fallback resilience */}
        <div className="relative aspect-4/3 overflow-hidden bg-[#EFF2F0]">
          <Link
            to={`/produk/${product.slug}`}
            onClick={() => isMinecraft && playPixelSound('click')}
            className="block w-full h-full"
            aria-label={`Lihat detail produk ${product.name}`}
          >
            {!imageError ? (
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ${
                  isMinecraft ? 'mc-pixel-img' : ''
                }`}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F7F5F0]">
                <PackageCheck className="w-10 h-10 text-[#76847B] mb-2" />
                <span className="text-xs font-medium text-[#5C6B77]">{product.categoryName}</span>
              </div>
            )}
          </Link>

          {/* Quick View Button overlay on hover */}
          <button
            type="button"
            onClick={() => {
              if (isMinecraft) playPixelSound('equip');
              setQuickViewOpen(true);
            }}
            className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 text-white text-[11px] font-medium px-2.5 py-1.5 rounded flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
            aria-label="Lihat ringkasan cepat produk"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          {/* Indicator for featured */}
          {product.featured && (
            <div className={`absolute top-2.5 left-2.5 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 ${
              isMinecraft
                ? 'bg-[#FFAA00] text-black font-bold border-2 border-black'
                : 'bg-[#1F3040] text-white rounded-sm'
            }`}>
              {isMinecraft ? '⭐ UNGGULAN' : 'Unggulan'}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className={`flex flex-col flex-1 ${isMinecraft ? 'pt-3' : 'p-5'}`}>
          {/* Category kicker */}
          <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1.5 font-mono ${
            isMinecraft ? 'text-[#55FFFF]' : 'text-[#A36E53]'
          }`}>
            {product.categoryName}
          </div>

          {/* Title */}
          <h3 className={`text-base font-bold transition-colors leading-snug line-clamp-2 mb-2 ${
            isMinecraft
              ? 'text-white group-hover:text-[#FFAA00]'
              : 'text-[#1F3040] group-hover:text-[#A36E53]'
          }`}>
            <Link
              to={`/produk/${product.slug}`}
              onClick={() => isMinecraft && playPixelSound('click')}
            >
              {product.name}
            </Link>
          </h3>

          {/* Short Summary */}
          <p className={`text-xs leading-relaxed line-clamp-2 mb-4 ${
            isMinecraft ? 'text-[#AAAAAA]' : 'text-[#5C6B77]'
          }`}>
            {product.shortSummary}
          </p>

          {/* Specs Preview */}
          {specEntries.length > 0 && (
            <div className={`mt-auto pt-3 space-y-1 text-xs mb-4 ${
              isMinecraft ? 'border-t-2 border-[#1e1f22]' : 'border-t border-[#E2E4E0]'
            }`}>
              {specEntries.map(([key, val]) => (
                <div key={key} className="flex justify-between items-baseline gap-2">
                  <span className={`text-[11px] ${isMinecraft ? 'text-[#AAAAAA]' : 'text-[#76847B]'}`}>{key}:</span>
                  <span className={`font-medium text-right truncate text-[11px] ${isMinecraft ? 'text-[#55FF55]' : 'text-[#24303A]'}`}>{val}</span>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex items-center justify-between gap-2">
            <Link
              to={`/produk/${product.slug}`}
              onClick={() => isMinecraft && playPixelSound('click')}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors py-1.5 whitespace-nowrap ${
                isMinecraft ? 'text-[#FFAA00] hover:text-white' : 'text-[#1F3040] hover:text-[#A36E53]'
              }`}
            >
              <span>{isMinecraft ? 'Buka Resep &rarr;' : 'Lihat Detail'}</span>
              {!isMinecraft && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
            </Link>

            <a
              href={getProductWhatsAppUrl(product.name, product.slug)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => isMinecraft && playPixelSound('click')}
              title="Inquiry via WhatsApp"
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                isMinecraft
                  ? 'mc-btn text-white'
                  : 'text-[#1F3040] bg-[#EFF2F0] hover:bg-[#E2E4E0]'
              }`}
              aria-label={`Tanya produk ${product.name} melalui WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tanya B2B</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Interactive Quick View Modal with Motion */}
      <AnimatePresence>
        {quickViewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className={`relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto ${
                isMinecraft ? 'mc-panel p-6 text-white' : 'bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-[#E2E4E0]'
              }`}
            >
              <button
                type="button"
                onClick={() => setQuickViewOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 cursor-pointer rounded-full"
                aria-label="Tutup pratinjau"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <div className="aspect-4/3 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-1 font-mono ${
                    isMinecraft ? 'text-[#55FFFF]' : 'text-[#A36E53]'
                  }`}>
                    {product.categoryName}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-balance">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {product.fullDescription}
                  </p>

                  <div className="border-t border-b border-gray-200/50 py-3 mb-4 space-y-1.5 text-xs">
                    {Object.entries(product.specifications).slice(0, 3).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="opacity-75">{k}:</span>
                        <span className="font-semibold">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      asLink
                      href={`/produk/${product.slug}`}
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Buka Halaman Lengkap
                    </Button>
                    <Button
                      asLink
                      href={getProductWhatsAppUrl(product.name, product.slug)}
                      target="_blank"
                      variant="copper"
                      size="sm"
                      icon={<MessageCircle className="w-3.5 h-3.5" />}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
