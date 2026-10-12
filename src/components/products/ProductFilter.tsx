import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { ProductCategory } from '../../data/categories';
import { useTheme } from '../../context/ThemeContext';

export interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategory: string; // 'all' or category slug
  onSelectCategory: (categorySlug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults
}) => {
  const { themeMode, playPixelSound } = useTheme();
  const isMinecraft = themeMode === 'minecraft';

  return (
    <div className={`p-4 sm:p-5 mb-8 transition-colors ${
      isMinecraft
        ? 'mc-panel text-white'
        : 'bg-white border border-[#E2E4E0] rounded-lg shadow-xs'
    }`}>
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#76847B]">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={isMinecraft ? "Ketik nama blok / barang industri..." : "Cari nama produk, spesifikasi, atau kata kunci..."}
            className={`w-full pl-10 pr-9 py-2.5 text-sm transition-colors ${
              isMinecraft
                ? 'bg-[#1e1f22] border-2 border-[#585b63] text-white placeholder-gray-500'
                : 'bg-[#F7F5F0] border border-[#E2E4E0] rounded text-[#24303A] placeholder-[#76847B] focus:bg-white focus:border-[#1F3040] focus:ring-1 focus:ring-[#1F3040]'
            }`}
            aria-label="Cari produk"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                if (isMinecraft) playPixelSound('click');
                onSearchChange('');
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#76847B] hover:text-[#24303A] cursor-pointer"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown & Total Results Count */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <div className="text-xs text-[#5C6B77] dark:text-[#AAAAAA] whitespace-nowrap">
            Menampilkan <strong className="font-semibold tabular-nums">{totalResults}</strong> produk
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#76847B] hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => {
                if (isMinecraft) playPixelSound('click');
                onSortChange(e.target.value);
              }}
              className={`text-xs font-medium py-2 px-3 cursor-pointer ${
                isMinecraft
                  ? 'bg-[#1e1f22] text-white border-2 border-[#585b63]'
                  : 'bg-[#F7F5F0] border border-[#E2E4E0] rounded text-[#24303A] focus:border-[#1F3040] focus:bg-white'
              }`}
              aria-label="Urutkan produk"
            >
              <option value="featured">Pilihan Unggulan</option>
              <option value="name-asc">Nama Produk (A – Z)</option>
              <option value="name-desc">Nama Produk (Z – A)</option>
              <option value="category">Berdasarkan Kategori</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Segmented Tabs with Motion Animated Active Indicator */}
      <div className={`mt-4 pt-4 flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none ${
        isMinecraft ? 'border-t-2 border-[#1e1f22]' : 'border-t border-[#E2E4E0]'
      }`}>
        <span className="text-xs font-medium mr-1.5 hidden sm:inline whitespace-nowrap opacity-70">
          {isMinecraft ? 'FILTER BLOK:' : 'Kategori:'}
        </span>

        {/* All Products Tab */}
        <button
          type="button"
          onClick={() => {
            if (isMinecraft) playPixelSound('click');
            onSelectCategory('all');
          }}
          className={`relative px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedCategory === 'all'
              ? isMinecraft
                ? 'mc-btn-gold text-white font-bold'
                : 'text-white font-semibold'
              : isMinecraft
                ? 'mc-btn text-gray-300'
                : 'text-[#5C6B77] hover:text-[#1F3040] hover:bg-[#F7F5F0]'
          }`}
        >
          {selectedCategory === 'all' && !isMinecraft && (
            <motion.div
              layoutId="activeFilterTab"
              className="absolute inset-0 bg-[#1F3040] rounded shadow-xs"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
            />
          )}
          <span className="relative z-10">
            Semua Produk ({categories.reduce((acc, c) => acc + c.itemCount, 0)})
          </span>
        </button>

        {/* Individual Category Tabs */}
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.slug;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                if (isMinecraft) playPixelSound('click');
                onSelectCategory(cat.slug);
              }}
              className={`relative px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? isMinecraft
                    ? 'mc-btn-gold text-white font-bold'
                    : 'text-white font-semibold'
                  : isMinecraft
                    ? 'mc-btn text-gray-300'
                    : 'text-[#5C6B77] hover:text-[#1F3040] hover:bg-[#F7F5F0]'
              }`}
            >
              {isActive && !isMinecraft && (
                <motion.div
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-[#1F3040] rounded shadow-xs"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                />
              )}
              <span className="relative z-10">
                {cat.name} ({cat.itemCount})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
