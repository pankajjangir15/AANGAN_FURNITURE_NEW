import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FurnitureIllustration } from '../components/FurnitureIllustration';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CATEGORIES } from '../data/categories';
import { BRAND_CONFIG } from '../config/brand';

export const Categories: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      <SEOHead
        title="Product Categories | AANGAN FURNITURE Jaipur — Living, Bedroom, Dining & Carvings"
        description="Explore all 7 furniture categories at AANGAN FURNITURE Jaipur: Living Room, Bedroom, Dining, Storage, Study & Office, Special Collection (Cane & Wooden Carvings) and Custom Furniture."
        canonicalPath="/categories"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#C28A3D]/35 pb-8 space-y-3">
          <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
            Complete Taxonomy · {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName})
          </p>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#4A2818]">
            Product Categories &amp; Special Collections
          </h1>
          <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
            Every room in an Indian home serves a distinct purpose. Browse our structured furniture
            categories and click any subcategory to filter the catalogue or request a custom build.
          </p>
        </div>

        {/* Detailed Category Sections */}
        <div className="space-y-10">
          {CATEGORIES.map((category, index) => {
            const isCustom = category.id === 'custom-furniture';
            const mainLink = isCustom
              ? '/custom-furniture'
              : `/catalogue?category=${category.id}`;

            return (
              <section
                key={category.id}
                className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/40 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#C28A3D]/30">
                    <FurnitureIllustration
                      artworkKey={category.artworkKey}
                      alt={`${category.name} collection by AANGAN FURNITURE`}
                      aspectRatio="4:3"
                      className="w-full h-full min-h-[240px]"
                    />
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#8B573A] font-semibold">
                        <span>0{index + 1}. Collection</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-hindi text-sm text-[#4A2818]">
                          {category.hindiSubtitle}
                        </span>
                      </div>

                      <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#4A2818]">
                        {category.name}
                      </h2>

                      <p className="text-sm text-[#292522]/85 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Subcategory Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {category.subCategories.map((sub) => {
                        const subUrl = isCustom
                          ? `/custom-furniture?focus=${encodeURIComponent(sub.name)}`
                          : `/catalogue?category=${category.id}&sub=${encodeURIComponent(sub.name)}`;

                        return (
                          <Link
                            key={sub.id}
                            to={subUrl}
                            className="p-3.5 rounded-lg bg-[#F5EBDD]/60 border border-[#C28A3D]/30 hover:border-[#4A2818] transition-colors space-y-1 group"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="text-sm font-semibold text-[#4A2818] group-hover:text-[#8B573A]">
                                {sub.name}
                              </h3>
                              <ArrowRight className="w-3.5 h-3.5 text-[#C28A3D] shrink-0" />
                            </div>
                            <p className="text-xs text-[#292522]/75 leading-relaxed">
                              {sub.description}
                            </p>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="pt-4 border-t border-[#C28A3D]/25 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        to={mainLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
                      >
                        <span>
                          {isCustom
                            ? 'Open Custom Furniture Configurator'
                            : `View All ${category.name} Products`}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
                      </Link>

                      <WhatsAppButton
                        message={`Hello AANGAN FURNITURE, I would like to explore your ${category.name} collection.`}
                        label={`Enquire About ${category.name}`}
                        variant="outline"
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
