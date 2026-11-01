import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../config/brand';
import { CATEGORIES } from '../data/categories';
import { buildWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/catalogueLogic';

export const Footer: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <footer className="bg-[#292522] text-[#F5EBDD] border-t-2 border-[#C28A3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" showTagline={true} />
            <p className="text-sm text-[#D8C3A5] leading-relaxed max-w-sm">
              A Jaipur-based furniture brand crafting thoughtful, durable and warm wooden furniture
              for contemporary Indian homes.
            </p>
            <div className="pt-1 space-y-1 text-xs text-[#D8C3A5]/90">
              <p className="font-hindi text-base text-[#C28A3D] font-medium">
                {BRAND_CONFIG.businessName} — {BRAND_CONFIG.tagline}
              </p>
              <p>Retail Catalogue · Made-to-Order · Custom Dimensions</p>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif-heading text-lg font-semibold text-[#C28A3D] tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#D8C3A5]">
              <li>
                <Link to="/" className="hover:text-[#F5EBDD] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="hover:text-[#F5EBDD] transition-colors">
                  Furniture Catalogue
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-[#F5EBDD] transition-colors">
                  Product Categories
                </Link>
              </li>
              <li>
                <Link to="/custom-furniture" className="hover:text-[#F5EBDD] transition-colors">
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F5EBDD] transition-colors">
                  Interior Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F5EBDD] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F5EBDD] transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Furniture Collections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif-heading text-lg font-semibold text-[#C28A3D] tracking-wide">
              Collections
            </h3>
            <ul className="space-y-2 text-sm text-[#D8C3A5]">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={
                      cat.id === 'custom-furniture'
                        ? '/custom-furniture'
                        : `/catalogue?category=${cat.id}`
                    }
                    className="hover:text-[#F5EBDD] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Leadership Contacts & Jaipur Address (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif-heading text-lg font-semibold text-[#C28A3D] tracking-wide">
              Jaipur Showroom &amp; Workshop
            </h3>

            <div className="space-y-2.5 text-sm text-[#D8C3A5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C28A3D] shrink-0 mt-1" />
                <div>
                  <p>{BRAND_CONFIG.address.line1}</p>
                  <p>{BRAND_CONFIG.address.line2}</p>
                  <a
                    href={BRAND_CONFIG.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C28A3D] hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#C28A3D]/20 space-y-2">
                <div>
                  <p className="text-xs text-[#C28A3D] font-medium">
                    Founder — {BRAND_CONFIG.founder.name}
                  </p>
                  <a
                    href={`tel:${BRAND_CONFIG.founder.phoneTel}`}
                    className="inline-flex items-center gap-1.5 text-sm text-[#F5EBDD] hover:text-[#C28A3D] transition-colors tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C28A3D]" />
                    <span>{BRAND_CONFIG.founder.phoneDisplay}</span>
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#C28A3D] font-medium">
                    Director — {BRAND_CONFIG.director.name}
                  </p>
                  <a
                    href={`tel:${BRAND_CONFIG.director.phoneTel}`}
                    className="inline-flex items-center gap-1.5 text-sm text-[#F5EBDD] hover:text-[#C28A3D] transition-colors tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C28A3D]" />
                    <span>{BRAND_CONFIG.director.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#263B2B] text-[#F5EBDD] border border-[#C28A3D]/50 text-xs font-semibold hover:bg-[#1e3023] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#C28A3D]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Official Domain Bar */}
        <div className="mt-12 pt-6 border-t border-[#C28A3D]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C3A5]/80">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName}). All
            rights reserved. Jaipur, Rajasthan, India.
          </p>
          <p className="font-hindi text-sm text-[#C28A3D]">
            {BRAND_CONFIG.businessName} — {BRAND_CONFIG.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
