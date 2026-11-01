import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../config/brand';
import { buildWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/catalogueLogic';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/catalogue', label: 'Catalogue' },
  { to: '/categories', label: 'Categories' },
  { to: '/custom-furniture', label: 'Custom Furniture' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    setSearchOpen(false);
    setMobileMenuOpen(false);
    if (trimmed) {
      navigate(`/catalogue?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/catalogue');
    }
  };

  const whatsappHref = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <header className="sticky top-0 z-30 bg-[#F5EBDD]/95 backdrop-blur-sm border-b border-[#C28A3D]/35">
      {/* Slim Dismissible Announcement Bar */}
      {!bannerDismissed && (
        <div className="bg-[#4A2818] text-[#F5EBDD] px-4 py-1.5 text-xs border-b border-[#C28A3D]/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <p className="truncate font-medium tracking-wide">
              <span className="font-hindi text-[#D8C3A5] mr-2">
                {BRAND_CONFIG.hindiName} — {BRAND_CONFIG.tagline}
              </span>
              <span>
                Custom &amp; Ready-to-Order Furniture in Sirsi, Jaipur · Direct WhatsApp Consultation:{' '}
                {BRAND_CONFIG.founder.phoneDisplay}
              </span>
            </p>
            <button
              type="button"
              onClick={() => setBannerDismissed(true)}
              aria-label="Dismiss announcement bar"
              className="text-[#D8C3A5] hover:text-[#F5EBDD] p-0.5 shrink-0 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo */}
        <Link
          to="/"
          aria-label="AANGAN FURNITURE Home"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#C28A3D]"
        >
          <BrandLogo variant="header" showTagline={false} />
        </Link>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#292522]"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#4A2818] font-semibold border-[#C28A3D]'
                    : 'text-[#292522]/85 border-transparent hover:text-[#4A2818] hover:border-[#C28A3D]/50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Search Toggle & Primary WhatsApp Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Toggle product search"
            aria-expanded={searchOpen}
            className="p-2.5 rounded-md text-[#4A2818] hover:bg-[#4A2818]/10 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] border border-[#C28A3D]/50 text-xs font-semibold tracking-wide hover:bg-[#381d10] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#C28A3D] shrink-0" />
            <span>WhatsApp Us</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2.5 rounded-md text-[#4A2818] hover:bg-[#4A2818]/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="border-t border-[#C28A3D]/30 bg-[#EFE2CE] px-4 py-3">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-3xl mx-auto flex items-center gap-3"
          >
            <label htmlFor="header-product-search" className="sr-only">
              Search furniture catalogue
            </label>
            <input
              id="header-product-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sofa sets, beds, dining tables, Krishna carvings, cane furniture..."
              className="w-full px-4 py-2.5 rounded-md bg-[#F5EBDD] border border-[#C28A3D]/60 text-sm text-[#292522] placeholder:text-[#8B573A] focus:outline-none focus:border-[#4A2818]"
              autoFocus
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold tracking-wide hover:bg-[#381d10] transition-colors whitespace-nowrap shrink-0"
            >
              Search Catalogue
            </button>
          </form>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden border-t border-[#C28A3D]/30 bg-[#F5EBDD] px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          <div className="pb-2 mb-2 border-b border-[#C28A3D]/25">
            <p className="font-hindi text-sm text-[#8B573A] font-medium">
              {BRAND_CONFIG.hindiName} — {BRAND_CONFIG.tagline}
            </p>
          </div>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#4A2818] text-[#F5EBDD]'
                    : 'text-[#292522] hover:bg-[#D8C3A5]/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#263B2B] text-[#F5EBDD] text-xs font-semibold tracking-wide"
            >
              <MessageCircle className="w-4 h-4 text-[#C28A3D]" />
              <span>Get Price on WhatsApp</span>
            </a>
            <a
              href={`tel:${BRAND_CONFIG.founder.phoneTel}`}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-[#4A2818]/40 text-[#4A2818] text-xs font-semibold"
            >
              Call {BRAND_CONFIG.founder.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
