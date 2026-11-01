import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { CategoryCard } from '../components/CategoryCard';
import { ProductGrid } from '../components/ProductGrid';
import { FurnitureIllustration } from '../components/FurnitureIllustration';
import { EnquiryForm } from '../components/EnquiryForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { GALLERY_ITEMS } from '../data/gallery';
import { BRAND_CONFIG } from '../config/brand';
import {
  filterProducts,
  generateCustomFurnitureWhatsAppMessage,
} from '../utils/catalogueLogic';

export const Home: React.FC = () => {
  const featuredProducts = filterProducts(PRODUCTS, { featuredOnly: true }).slice(0, 6);
  const previewGallery = GALLERY_ITEMS.slice(0, 4);

  return (
    <div>
      <SEOHead
        title="AANGAN FURNITURE Jaipur | Premium Furniture & Custom Designs"
        description="Discover elegant furniture for modern Indian homes at AANGAN FURNITURE, Jaipur. Explore sofa sets, beds, dining furniture, TV units, wooden décor and custom furniture solutions."
        canonicalPath="/"
      />

      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Shop by Categories Section */}
      <section className="py-16 lg:py-20 border-b border-[#C28A3D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
                01. Curated Collections · {BRAND_CONFIG.hindiName}
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
                Shop by Categories
              </h2>
              <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
                Explore thoughtfully structured collections for living rooms, bedrooms, dining
                spaces, study rooms and devotional or artistic wooden carvings.
              </p>
            </div>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A2818] hover:text-[#8B573A] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All 7 Categories &amp; Subcategories</span>
              <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="py-16 lg:py-20 bg-[#EFE2CE]/55 border-b border-[#C28A3D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
                02. Signature Pieces · Price on Request
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
                Featured Furniture &amp; Artistic Carvings
              </h2>
              <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
                Browse featured pieces from our demonstration catalogue. Every item can be discussed
                directly on WhatsApp for pricing, dimensions and finish options.
              </p>
            </div>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs sm:text-sm font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Browse Full Catalogue</span>
              <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* 4. Why Choose AANGAN & Craftsmanship Section */}
      <section className="py-16 lg:py-20 border-b border-[#C28A3D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
                  03. Why Choose AANGAN · Craftsmanship &amp; Quality
                </p>
                <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
                  Rooted in Jaipur’s Tradition of Warm Hospitality &amp; Woodcraft
                </h2>
                <p className="text-sm sm:text-base text-[#292522]/85 leading-relaxed">
                  In Indian homes, the <em>Aangan</em> (courtyard) is where family bonds deepen and
                  guests are welcomed with warmth. At {BRAND_CONFIG.businessName}, we design
                  furniture that honours this spirit through enduring wooden joinery, balanced
                  proportions and practical everyday comfort.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#C28A3D]/35 space-y-2">
                  <h3 className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    01. Indian Contemporary Design
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292522]/80 leading-relaxed">
                    Subtle courtyard arches, fluted shutters, woven cane and traditional relief
                    carvings adapted for modern apartments and residences.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#C28A3D]/35 space-y-2">
                  <h3 className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    02. Made-to-Measure Flexibility
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292522]/80 leading-relaxed">
                    Customise width, height, depth, storage layout and wood finish so your furniture
                    fits your room dimensions accurately.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#C28A3D]/35 space-y-2">
                  <h3 className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    03. Honest Material Guidance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292522]/80 leading-relaxed">
                    Clear discussions on timber selection, upholstery fabrics, hardware and polish
                    care before your order is finalized.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#C28A3D]/35 space-y-2">
                  <h3 className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    04. Direct Leadership Access
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292522]/80 leading-relaxed">
                    Consult directly with Founder {BRAND_CONFIG.founder.name} and Director{' '}
                    {BRAND_CONFIG.director.name} in Sirsi, Jaipur.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 rounded-xl overflow-hidden border border-[#C28A3D]/45 bg-[#FFFDF9] flex flex-col">
                <FurnitureIllustration
                  artworkKey="carving-buddha-bodhi"
                  alt="Handcrafted wooden carving and joinery craftsmanship at AANGAN FURNITURE Jaipur"
                  aspectRatio="4:3"
                  className="w-full flex-1 min-h-[280px]"
                />
                <div className="p-6 bg-[#4A2818] text-[#F5EBDD] space-y-2">
                  <p className="font-hindi text-base text-[#C28A3D] font-medium">
                    {BRAND_CONFIG.businessName} — {BRAND_CONFIG.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#D8C3A5] leading-relaxed">
                    From full living and dining suites to intricate Krishna &amp; Cow and Buddha
                    &amp; Bodhi Tree wooden carvings, every piece is prepared with close attention
                    to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Custom Furniture Section */}
      <section className="py-16 lg:py-20 bg-[#4A2818] text-[#F5EBDD] border-b border-[#C28A3D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold text-[#C28A3D] tracking-wide">
                04. Bespoke Orders · Custom Dimensions &amp; Finishes
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#F5EBDD]">
                Have a Specific Room Dimension or Design Reference in Mind?
              </h2>
              <p className="text-sm sm:text-base text-[#D8C3A5] leading-relaxed max-w-2xl">
                Whether you need a sofa set sized for a specific living room wall, a king bed with
                custom storage drawers, or a carved wooden wall panel tailored to your foyer, share
                your measurements and preferred design with us.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#D8C3A5] pt-1">
                <span>Custom Width, Height &amp; Depth</span>
                <span aria-hidden="true">·</span>
                <span>Choice of Walnut &amp; Teak Finishes</span>
                <span aria-hidden="true">·</span>
                <span>Reference Sketch / Photo Discussion</span>
              </div>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/custom-furniture"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C28A3D] text-[#292522] text-xs sm:text-sm font-semibold hover:bg-[#d19a4c] transition-colors whitespace-nowrap"
                >
                  <span>Specify Custom Furniture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <WhatsAppButton
                  message={generateCustomFurnitureWhatsAppMessage()}
                  label="Discuss Custom Order on WhatsApp"
                  variant="forest"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#C28A3D]/50 bg-[#F5EBDD]">
                <FurnitureIllustration
                  artworkKey="dimension-guide"
                  alt="Custom furniture architectural dimensions and specification guide"
                  aspectRatio="4:3"
                  className="w-full aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lifestyle Interior Gallery & About Preview Section */}
      <section className="py-16 lg:py-20 border-b border-[#C28A3D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
                05. Interior Inspiration &amp; About AANGAN
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
                Lifestyle Interior Gallery
              </h2>
              <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
                Illustrative design references showcasing how warm walnut and teak tones pair with
                Indian contemporary interiors.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A2818] hover:text-[#8B573A] transition-colors whitespace-nowrap"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 overflow-hidden flex flex-col"
              >
                <FurnitureIllustration
                  artworkKey={item.illustrationKey}
                  alt={item.title}
                  aspectRatio="4:3"
                  className="w-full aspect-[4/3] border-b border-[#C28A3D]/25"
                />
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <p className="text-[11px] text-[#8B573A] font-medium">
                      {item.category} · Illustrative Reference
                    </p>
                    <h3 className="font-serif-heading text-lg font-bold text-[#4A2818] mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#292522]/80 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About AANGAN Summary Banner */}
          <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="font-hindi text-base text-[#8B573A] font-semibold">
                {BRAND_CONFIG.hindiName} — {BRAND_CONFIG.tagline}
              </p>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#4A2818]">
                About {BRAND_CONFIG.businessName}, Jaipur
              </h3>
              <p className="text-sm sm:text-base text-[#292522]/85 leading-relaxed">
                Based in Sirsi, Jaipur, {BRAND_CONFIG.businessName} was established by Founder{' '}
                <strong>{BRAND_CONFIG.founder.name}</strong> and Director{' '}
                <strong>{BRAND_CONFIG.director.name}</strong> with a clear purpose: to craft
                dependable, welcoming and aesthetically refined furniture for Indian families.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs sm:text-sm font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#C28A3D]" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-[#4A2818]/40 text-[#4A2818] text-xs sm:text-sm font-semibold hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap"
              >
                <span>Visit Us in Sirsi, Jaipur</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customer Enquiry Section */}
      <section className="py-16 lg:py-20 bg-[#EFE2CE]/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
                  06. Connect With Us · Jaipur, Rajasthan
                </p>
                <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
                  Let Us Help You Furnish Your Aangan
                </h2>
                <p className="text-sm sm:text-base text-[#292522]/85 leading-relaxed">
                  Reach out on WhatsApp or by phone for product inquiries, custom dimensions, wood
                  finish consultations or to schedule a visit to our Sirsi, Jaipur location.
                </p>
              </div>

              <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/40 p-6 space-y-4">
                <div>
                  <p className="text-xs text-[#8B573A] font-medium">Founder</p>
                  <p className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    {BRAND_CONFIG.founder.name}
                  </p>
                  <a
                    href={`tel:${BRAND_CONFIG.founder.phoneTel}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#292522] hover:text-[#4A2818] mt-1 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#C28A3D]" />
                    <span>{BRAND_CONFIG.founder.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-[#C28A3D]/25">
                  <p className="text-xs text-[#8B573A] font-medium">Director</p>
                  <p className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    {BRAND_CONFIG.director.name}
                  </p>
                  <a
                    href={`tel:${BRAND_CONFIG.director.phoneTel}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#292522] hover:text-[#4A2818] mt-1 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#C28A3D]" />
                    <span>{BRAND_CONFIG.director.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-[#C28A3D]/25 flex items-start gap-2.5 text-xs sm:text-sm text-[#292522]/85">
                  <MapPin className="w-4 h-4 text-[#C28A3D] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#4A2818]">Showroom &amp; Address</p>
                    <p>{BRAND_CONFIG.address.line1}</p>
                    <p>{BRAND_CONFIG.address.line2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
