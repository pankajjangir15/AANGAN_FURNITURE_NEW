import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { FurnitureIllustration } from './FurnitureIllustration';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5EBDD] border-b border-[#C28A3D]/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-medium text-[#8B573A] tracking-wide">
                {BRAND_CONFIG.businessName} · Jaipur, Rajasthan ·{' '}
                <span className="font-hindi text-[#4A2818] font-semibold">
                  {BRAND_CONFIG.hindiName} — {BRAND_CONFIG.tagline}
                </span>
              </p>

              <h1
                className="font-serif-heading text-[#4A2818] font-bold tracking-tight leading-[1.12]"
                style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)' }}
              >
                Furniture That Makes a House a Home
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#292522]/90 leading-relaxed max-w-xl">
              Discover thoughtfully designed furniture that brings comfort, elegance and warmth into
              every home.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#4A2818] text-[#F5EBDD] border border-[#C28A3D]/60 text-sm font-semibold tracking-wide hover:bg-[#381d10] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
              </Link>

              <Link
                to="/custom-furniture"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-transparent text-[#4A2818] border border-[#4A2818]/45 text-sm font-semibold tracking-wide hover:border-[#4A2818] hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4 text-[#8B573A]" />
                <span>Custom Furniture</span>
              </Link>
            </div>

            {/* Quiet Unboxed Heritage Metadata */}
            <div className="pt-4 border-t border-[#C28A3D]/30 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#8B573A]">
              <span>Handcrafted Wooden Furniture</span>
              <span aria-hidden="true">·</span>
              <span>Bespoke Room Dimensions</span>
              <span aria-hidden="true">·</span>
              <span>Direct Consultation on WhatsApp</span>
            </div>
          </div>

          {/* Right Courtyard Showcase Visual (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-xl overflow-hidden border border-[#C28A3D]/50 shadow-sm bg-[#EFE2CE]">
              <FurnitureIllustration
                artworkKey="hero-courtyard"
                alt="AANGAN FURNITURE Jaipur courtyard living room featuring handcrafted solid walnut wood sofa set and traditional arch architecture"
                aspectRatio="16:9"
                className="w-full h-full min-h-[280px] sm:min-h-[360px]"
              />
              <div className="bg-[#4A2818] text-[#F5EBDD] px-5 py-3.5 border-t border-[#C28A3D]/40 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span>
                  Featured Concept: Aangan Heritage Courtyard Living Room · Sirsi, Jaipur
                </span>
                <span className="font-hindi text-[#D8C3A5] text-sm">
                  {BRAND_CONFIG.tagline}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
