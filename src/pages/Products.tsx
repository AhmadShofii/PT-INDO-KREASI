import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsData } from '../data/products';
import { productCategories } from '../data/categories';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductFilter } from '../components/products/ProductFilter';
import { ProductGrid } from '../components/products/ProductGrid';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get initial category from query param if any
  const categoryParam = searchParams.get('kategori') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Keep state synced if URL parameter changes
  useEffect(() => {
    const cat = searchParams.get('kategori');
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    } else if (!cat && selectedCategory !== 'all') {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    if (categorySlug === 'all') {
      searchParams.delete('kategori');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ kategori: categorySlug });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    searchParams.delete('kategori');
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic in pure client React state
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // 1. Category match
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }

      // 2. Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const inName = product.name.toLowerCase().includes(query);
        const inSummary = product.shortSummary.toLowerCase().includes(query);
        const inDesc = product.fullDescription.toLowerCase().includes(query);
        const inCategory = product.categoryName.toLowerCase().includes(query);
        const inSpecs = Object.entries(product.specifications).some(
          ([k, v]) => k.toLowerCase().includes(query) || v.toLowerCase().includes(query)
        );

        if (!inName && !inSummary && !inDesc && !inCategory && !inSpecs) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'category') {
        return a.categoryName.localeCompare(b.categoryName);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-[#E2E4E0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Beranda', href: '/' },
              { label: 'Katalog Produk' }
            ]}
          />
        </div>
      </div>

      {/* Hero Intro */}
      <section className="py-10 sm:py-14 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A36E53] mb-2 font-mono">
              Katalog Suplai B2B
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F3040] leading-tight text-balance">
              Katalog Produk PT Indo Kreasi
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#5C6B77] leading-relaxed">
              Jelajahi spesifikasi teknis barang industri, material kemasan pengiriman, dan perlengkapan keselamatan kerja. Gunakan tombol inquiry untuk meminta penawaran harga resmi (Quotation).
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Explorer Section */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <ProductFilter
            categories={productCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredProducts.length}
          />

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleResetFilters}
          />
        </div>
      </section>
    </div>
  );
};
