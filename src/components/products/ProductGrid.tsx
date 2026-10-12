import React from 'react';
import { ProductItem } from '../../data/products';
import { ProductCard } from './ProductCard';
import { PackageX, RotateCcw } from 'lucide-react';
import { Button } from '../common/Button';

export interface ProductGridProps {
  products: ProductItem[];
  onResetFilters?: () => void;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onResetFilters,
  className = ''
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white border border-[#E2E4E0] rounded-lg max-w-xl mx-auto my-6">
        <PackageX className="w-12 h-12 text-[#76847B] mx-auto mb-3" aria-hidden="true" />
        <h3 className="text-lg font-bold text-[#1F3040] mb-1">
          Tidak Ada Produk yang Ditemukan
        </h3>
        <p className="text-sm text-[#5C6B77] mb-6 max-w-md mx-auto">
          Tidak ada produk yang cocok dengan kriteria pencarian atau filter yang dipilih. Coba gunakan kata kunci lain atau setel ulang filter.
        </p>
        {onResetFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onResetFilters}
            icon={<RotateCcw className="w-4 h-4" />}
          >
            Reset Pencarian & Filter
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
