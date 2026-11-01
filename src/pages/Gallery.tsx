import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { FurnitureIllustration } from '../components/FurnitureIllustration';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import { BRAND_CONFIG } from '../config/brand';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const visibleItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="py-12 lg:py-16">
      <SEOHead
        title="Furniture & Interior Gallery | AANGAN FURNITURE Jaipur"
        description="Explore living room, bedroom, dining, wooden joinery details, craftsmanship and home interior inspiration from AANGAN FURNITURE Jaipur."
        canonicalPath="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="border-b border-[#C28A3D]/35 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
              Visual Showcase · {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName})
            </p>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#4A2818]">
              Craftsmanship &amp; Interior Gallery
            </h1>
            <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
              Explore design studies across living rooms, bedrooms, dining spaces, wooden joinery
              details, relief carvings and interior concepts.
            </p>
          </div>
          <WhatsAppButton
            message="Hello AANGAN FURNITURE, I would like to see actual workshop and finished product photographs on WhatsApp."
            label="Request Live Product Photos on WhatsApp"
            variant="forest"
          />
        </div>

        {/* Transparent Disclosure Banner */}
        <div className="bg-[#EFE2CE] rounded-lg border border-[#C28A3D]/45 px-4 py-3 text-xs text-[#4A2818]">
          <strong>Transparency Note:</strong> Items labelled as <em>Illustrative Reference</em> are
          curated architectural and furniture design illustrations representing our product
          categories and finishes. Contact us on WhatsApp at {BRAND_CONFIG.founder.phoneDisplay} for
          actual workshop and finished piece photographs.
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === category
                  ? 'bg-[#4A2818] text-[#F5EBDD]'
                  : 'bg-[#FFFDF9] text-[#4A2818] border border-[#C28A3D]/35 hover:bg-[#D8C3A5]/45'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/40 overflow-hidden flex flex-col"
            >
              <FurnitureIllustration
                artworkKey={item.illustrationKey}
                alt={`${item.title} — ${item.category}`}
                aspectRatio="4:3"
                className="w-full aspect-[4/3] border-b border-[#C28A3D]/30"
              />
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#8B573A] font-medium">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.materialNote}</span>
                    {item.isIllustrativeReference && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="italic text-[#4A2818]">Illustrative Reference</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C28A3D]/25 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#8B573A] font-hindi">
                    {BRAND_CONFIG.businessName} — {BRAND_CONFIG.tagline}
                  </span>
                  <WhatsAppButton
                    message={`Hello AANGAN FURNITURE, I liked the "${item.title}" (${item.category}) reference in your gallery. Please share similar designs and pricing.`}
                    label="Enquire Similar Design"
                    variant="outline"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
