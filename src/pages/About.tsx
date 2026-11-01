import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BrandLogo } from '../components/BrandLogo';
import { FurnitureIllustration } from '../components/FurnitureIllustration';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BRAND_CONFIG } from '../config/brand';

export const About: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      <SEOHead
        title="About AANGAN FURNITURE Jaipur | आँगन फर्नीचर — रिश्तों का अपना आँगन।"
        description="Learn about AANGAN FURNITURE in Sirsi, Jaipur, founded by Pankaj Jangir and Director Prem Chand Jangid. Dedicated to elegant, functional and custom wooden furniture for Indian homes."
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Editorial Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
              About Us · Jaipur, Rajasthan, India
            </p>
            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#4A2818] leading-tight">
              Crafting Warmth, Function &amp; Enduring Character for Indian Homes
            </h1>
            <p className="font-hindi text-lg sm:text-xl text-[#8B573A] font-semibold">
              {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName}) — {BRAND_CONFIG.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#292522]/90 leading-relaxed">
              <strong>{BRAND_CONFIG.businessName}</strong> is a Jaipur-based furniture brand focused
              on elegant, functional and thoughtfully designed furniture for Indian homes. Located in
              Karni Vatika-2nd, Sirsi, Jaipur, we serve homeowners and families seeking furniture
              that feels welcoming, personal and built with genuine care.
            </p>
            <p className="text-sm sm:text-base text-[#292522]/85 leading-relaxed">
              In traditional Indian architecture, the <em>Aangan</em> is the heart of the household
              — a sunlit courtyard where generations gather, conversations unfold and relationships
              are nurtured. Every sofa set, bed, dining table, storage cabinet and wooden carving in
              our collection is conceived with that same sense of belonging and hospitality.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 overflow-hidden shadow-sm">
              <FurnitureIllustration
                artworkKey="hero-courtyard"
                alt="AANGAN FURNITURE Jaipur courtyard-inspired living space"
                aspectRatio="4:3"
                className="w-full aspect-[4/3] border-b border-[#C28A3D]/30"
              />
              <div className="p-6 space-y-3">
                <BrandLogo variant="header" showTagline={true} />
                <p className="text-xs text-[#292522]/80 leading-relaxed">
                  Plot No. 149-B, Karni Vatika-2nd, Sirsi, Jaipur, Rajasthan – 302041, India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Brand Pillars */}
        <section className="space-y-8 pt-8 border-t border-[#C28A3D]/30">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
              Our Philosophy &amp; Approach
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
              What Guides Every Piece We Create
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 p-6 space-y-2.5">
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                01. Brand Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                To offer homeowners in Jaipur and across India a trustworthy destination for
                furniture that unites architectural elegance with everyday family comfort.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 p-6 space-y-2.5">
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                02. Indian-Inspired Design
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                Drawing inspiration from Rajasthan’s courtyard arches, jharokha proportions, woven
                cane craft and sacred wooden relief carvings (including Krishna &amp; Cow and Buddha
                &amp; Bodhi Tree motifs).
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 p-6 space-y-2.5">
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                03. Practical Functionality
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                Thoughtful storage compartments, convertible sofa-cum-bed layouts, ventilated shoe
                racks and ergonomic seating heights suited to real Indian households.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 p-6 space-y-2.5">
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                04. Custom Furniture Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                Every home has distinct room layouts. We work with customers on custom dimensions,
                preferred design adaptations and wood finish selections.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 p-6 space-y-2.5">
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                05. Quality &amp; Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                Careful wood joinery, balanced structural framing and warm walnut and teak finishes
                that highlight the natural character of wood.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 p-6 space-y-2.5">
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                06. Customer Satisfaction
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                Direct, transparent communication from initial WhatsApp inquiry and specification
                review through to final order coordination.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
              Leadership &amp; Personal Consultation
            </p>
            <h2 className="font-serif-heading text-3xl font-bold text-[#4A2818]">
              Meet the Team Behind {BRAND_CONFIG.businessName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-[#F5EBDD]/60 border border-[#C28A3D]/35 space-y-3">
              <p className="text-xs font-semibold text-[#8B573A]">{BRAND_CONFIG.founder.role}</p>
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                {BRAND_CONFIG.founder.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                {BRAND_CONFIG.founder.description}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BRAND_CONFIG.founder.phoneTel}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A2818] hover:underline tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C28A3D]" />
                  <span>{BRAND_CONFIG.founder.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#F5EBDD]/60 border border-[#C28A3D]/35 space-y-3">
              <p className="text-xs font-semibold text-[#8B573A]">{BRAND_CONFIG.director.role}</p>
              <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                {BRAND_CONFIG.director.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
                {BRAND_CONFIG.director.description}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BRAND_CONFIG.director.phoneTel}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A2818] hover:underline tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C28A3D]" />
                  <span>{BRAND_CONFIG.director.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#C28A3D]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292522]/85">
              <MapPin className="w-4 h-4 text-[#C28A3D] shrink-0 mt-1" />
              <span>{BRAND_CONFIG.address.full}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppButton label="Chat on WhatsApp" variant="forest" />
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs sm:text-sm font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
              >
                <span>Explore Furniture Catalogue</span>
                <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
