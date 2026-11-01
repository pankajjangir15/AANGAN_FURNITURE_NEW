import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: ProductItem[];
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onResetFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/40 p-10 text-center space-y-4">
        <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
          No Matching Catalogue Items Found
        </h3>
        <p className="text-sm text-[#292522]/80 max-w-md mx-auto">
          We could not find a catalogue item matching your current search or filter selection. We
          also craft custom furniture according to your exact dimensions and reference designs.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          {onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="px-5 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
            >
              Reset Catalogue Filters
            </button>
          )}
          <Link
            to="/custom-furniture"
            className="px-5 py-2.5 rounded-md border border-[#4A2818]/45 text-[#4A2818] text-xs font-semibold hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap"
          >
            Request Custom Furniture
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
