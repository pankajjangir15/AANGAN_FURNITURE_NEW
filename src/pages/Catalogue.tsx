import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProductGrid } from '../components/ProductGrid';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { filterProducts } from '../utils/catalogueLogic';
import { BRAND_CONFIG } from '../config/brand';

export const Catalogue: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedSubCategory = searchParams.get('sub') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const customisableOnly = searchParams.get('custom') === '1';

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === '0') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    if (key === 'category') {
      next.delete('sub');
    }
    setSearchParams(next);
  };

  const resetAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const activeCategoryGroup = useMemo(
    () => CATEGORIES.find((c) => c.id === selectedCategory && c.id !== 'custom-furniture'),
    [selectedCategory]
  );

  const filteredProducts = useMemo(
    () =>
      filterProducts(PRODUCTS, {
        category: selectedCategory,
        subCategory: selectedSubCategory,
        searchQuery,
        customisableOnly,
      }),
    [selectedCategory, selectedSubCategory, searchQuery, customisableOnly]
  );

  const catalogueCategories = CATEGORIES.filter((c) => c.id !== 'custom-furniture');

  return (
    <div className="py-10 lg:py-14">
      <SEOHead
        title="Furniture Catalogue | AANGAN FURNITURE Jaipur — Sofa Sets, Beds, Dining & Carvings"
        description="Browse the complete furniture catalogue of AANGAN FURNITURE, Jaipur. Filter sofa sets, sofa cum beds, TV units, beds, dining sets, study tables, cane furniture and wooden carvings."
        canonicalPath="/catalogue"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#C28A3D]/35 pb-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
              Official Product Catalogue · {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName})
            </p>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#4A2818]">
              Furniture Collection &amp; Catalogue
            </h1>
            <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
              Explore our furniture designs across living, bedroom, dining, storage, study and
              handcrafted wooden carvings. Click <strong>Get Price on WhatsApp</strong> on any item
              for pricing, exact measurements and finish options.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <WhatsAppButton label="General Catalogue Enquiry" variant="forest" />
            <Link
              to="/custom-furniture"
              className="px-4 py-2.5 rounded-md border border-[#4A2818]/40 text-[#4A2818] text-xs sm:text-sm font-semibold hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap"
            >
              Customise a Design
            </Link>
          </div>
        </div>

        {/* Transparent Demonstration Data Notice */}
        <div className="bg-[#EFE2CE] rounded-lg border border-[#C28A3D]/45 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#4A2818]">
          <p>
            <strong>Catalogue Note:</strong> Product entries, materials and dimensions shown below
            include clearly labelled demonstration placeholders until final studio specifications are
            supplied. All pricing is shared directly upon request.
          </p>
          <span className="font-semibold tabular-nums shrink-0">
            Showing {filteredProducts.length} of {PRODUCTS.length} items
          </span>
        </div>

        {/* Interactive Filter & Search Controls */}
        <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/40 p-5 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <label htmlFor="catalogue-search-input" className="sr-only">
                Search products by name, code, category or material
              </label>
              <Search className="w-4 h-4 text-[#8B573A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="catalogue-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => updateParam('q', e.target.value)}
                placeholder="Search by product name, code (e.g. AF-LR-101), Krishna, Buddha, Sofa, Bed..."
                className="w-full pl-10 pr-4 py-2.5 rounded-md bg-[#F5EBDD]/70 border border-[#C28A3D]/50 text-sm text-[#292522] placeholder:text-[#8B573A] focus:outline-none focus:border-[#4A2818]"
              />
            </div>

            {/* Subcategory Dropdown */}
            <div className="md:col-span-4">
              <label htmlFor="catalogue-subcategory-select" className="sr-only">
                Filter by subcategory
              </label>
              <select
                id="catalogue-subcategory-select"
                value={selectedSubCategory}
                onChange={(e) => updateParam('sub', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/70 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
              >
                <option value="all">All Subcategories</option>
                {(activeCategoryGroup
                  ? activeCategoryGroup.subCategories
                  : catalogueCategories.flatMap((c) => c.subCategories)
                ).map((sub) => (
                  <option key={sub.id} value={sub.name}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Customisable Toggle */}
            <div className="md:col-span-2 flex items-center justify-end">
              <label className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A2818] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={customisableOnly}
                  onChange={(e) => updateParam('custom', e.target.checked ? '1' : '0')}
                  className="rounded border-[#C28A3D] text-[#4A2818] focus:ring-[#4A2818]"
                />
                <span>Customisable Only</span>
              </label>
            </div>
          </div>

          {/* Segmented Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#C28A3D]/25">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B573A] mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>

            <button
              type="button"
              onClick={() => updateParam('category', 'all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#4A2818] text-[#F5EBDD]'
                  : 'bg-[#F5EBDD] text-[#4A2818] hover:bg-[#D8C3A5]/60'
              }`}
            >
              All Collections
            </button>

            {catalogueCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => updateParam('category', cat.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#4A2818] text-[#F5EBDD]'
                    : 'bg-[#F5EBDD] text-[#4A2818] hover:bg-[#D8C3A5]/60'
                }`}
              >
                {cat.name}
              </button>
            ))}

            {(selectedCategory !== 'all' ||
              selectedSubCategory !== 'all' ||
              searchQuery.trim() !== '' ||
              customisableOnly) && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="ml-auto inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-[#8B573A] hover:text-[#4A2818] transition-colors whitespace-nowrap"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} onResetFilters={resetAllFilters} />
      </div>
    </div>
  );
};
