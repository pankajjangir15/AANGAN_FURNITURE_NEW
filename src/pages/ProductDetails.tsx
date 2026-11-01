import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Compass, Phone } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FurnitureIllustration } from '../components/FurnitureIllustration';
import { ProductGrid } from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';
import { BRAND_CONFIG } from '../config/brand';
import {
  buildWhatsAppUrl,
  generateProductWhatsAppMessage,
  filterProducts,
} from '../utils/catalogueLogic';

const VIEW_LABELS = ['Primary Elevation', 'Material & Joinery Study', 'Dimension Specification'];

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id.toLowerCase() === (id || '').toLowerCase());
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!product) {
    return (
      <div className="py-16 max-w-4xl mx-auto px-4 text-center space-y-5">
        <SEOHead
          title="Product Not Found | AANGAN FURNITURE Jaipur"
          description="Browse the complete furniture collection at AANGAN FURNITURE Jaipur."
          canonicalPath="/catalogue"
        />
        <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#4A2818]">
          Catalogue Item Not Found
        </h1>
        <p className="text-sm text-[#292522]/80">
          The product code you requested could not be found. Explore our active catalogue or send us
          a custom furniture inquiry.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/catalogue"
            className="px-5 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold"
          >
            Back to Catalogue
          </Link>
          <Link
            to="/custom-furniture"
            className="px-5 py-2.5 rounded-md border border-[#4A2818]/40 text-[#4A2818] text-xs font-semibold"
          >
            Custom Furniture
          </Link>
        </div>
      </div>
    );
  }

  const galleryKeys =
    product.additionalImages.length > 0 ? product.additionalImages : [product.mainImage];
  const currentKey = galleryKeys[activeImageIdx] || product.mainImage;

  // Exact auto-generated WhatsApp message per specification
  const exactProductMessage = generateProductWhatsAppMessage(product.name);
  const whatsappUrl = buildWhatsAppUrl(exactProductMessage);

  const relatedProducts = filterProducts(PRODUCTS, { category: product.category })
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.id,
    category: `${product.categoryLabel} > ${product.subCategory}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: BRAND_CONFIG.businessName,
      slogan: BRAND_CONFIG.tagline,
    },
  };

  return (
    <div className="py-10 lg:py-14">
      <SEOHead
        title={`${product.name} (${product.id}) | AANGAN FURNITURE Jaipur`}
        description={`${product.shortDescription} Enquire on WhatsApp at AANGAN FURNITURE Jaipur for pricing, dimensions and custom finishes.`}
        canonicalPath={`/product/${product.id}`}
        structuredData={productSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-[#8B573A]">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-1 font-semibold text-[#4A2818] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalogue</span>
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            to={`/catalogue?category=${product.category}`}
            className="hover:text-[#4A2818] hover:underline"
          >
            {product.categoryLabel}
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            to={`/catalogue?category=${product.category}&sub=${encodeURIComponent(
              product.subCategory
            )}`}
            className="hover:text-[#4A2818] hover:underline"
          >
            {product.subCategory}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#292522] font-medium">{product.name}</span>
        </nav>

        {/* Contiguous Product Detail Layout (Sticky Gallery Left + Sticky Enquiry Module Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 overflow-hidden">
              <FurnitureIllustration
                artworkKey={currentKey}
                alt={`${product.name} — ${VIEW_LABELS[activeImageIdx] || 'View'}`}
                aspectRatio="4:3"
                className="w-full aspect-[4/3]"
              />
              <div className="px-5 py-3 bg-[#EFE2CE] border-t border-[#C28A3D]/30 flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A2818]">
                <span className="font-medium">
                  View: {VIEW_LABELS[activeImageIdx] || 'Catalogue View'} · Code {product.id}
                </span>
                {product.isSampleData && (
                  <span className="italic text-[#8B573A]">
                    Demonstration Visual — Actual Product Photos Shared on WhatsApp
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="grid grid-cols-3 gap-4">
              {galleryKeys.map((imgKey, idx) => (
                <button
                  key={`${imgKey}-${idx}`}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  aria-label={`Select ${VIEW_LABELS[idx] || `view ${idx + 1}`}`}
                  className={`rounded-lg overflow-hidden border text-left transition-all ${
                    activeImageIdx === idx
                      ? 'border-[#4A2818] ring-2 ring-[#C28A3D]'
                      : 'border-[#C28A3D]/35 opacity-80 hover:opacity-100'
                  }`}
                >
                  <FurnitureIllustration
                    artworkKey={imgKey}
                    alt={`${product.name} view ${idx + 1}`}
                    aspectRatio="4:3"
                    className="w-full aspect-[4/3]"
                  />
                  <div className="px-2.5 py-1.5 bg-[#FFFDF9] text-[11px] font-medium text-[#4A2818] truncate">
                    {VIEW_LABELS[idx] || `View ${idx + 1}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Contiguous Enquiry & Specification Module (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[#C28A3D]/30 pb-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#8B573A] font-medium">
                <span>{product.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{product.subCategory}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#4A2818] font-semibold tabular-nums">
                  Code: {product.id}
                </span>
              </div>

              <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#4A2818] leading-snug">
                {product.name}
              </h1>

              <div className="pt-2 flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-xs text-[#8B573A] block">Pricing Status</span>
                  <span className="text-lg font-bold text-[#4A2818] tabular-nums">
                    {product.priceLabel}
                  </span>
                </div>
                <span className="text-xs font-medium text-[#263B2B]">
                  {product.customisationAvailable
                    ? 'Custom Dimensions & Finish Available'
                    : 'Standard Specification'}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#292522]/85 leading-relaxed">{product.description}</p>

            {/* Structured Specifications Table */}
            <div className="space-y-3 pt-2">
              <h2 className="font-serif-heading text-lg font-bold text-[#4A2818]">
                Product Specifications (Placeholder Until Confirmed)
              </h2>
              <dl className="divide-y divide-[#C28A3D]/25 border-t border-b border-[#C28A3D]/25 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="font-medium text-[#8B573A] shrink-0">Product Code</dt>
                  <dd className="text-right font-semibold text-[#4A2818] tabular-nums">
                    {product.id}
                  </dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="font-medium text-[#8B573A] shrink-0">Category</dt>
                  <dd className="text-right text-[#292522]">
                    {product.categoryLabel} ({product.subCategory})
                  </dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="font-medium text-[#8B573A] shrink-0">Material</dt>
                  <dd className="text-right text-[#292522]">{product.material}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="font-medium text-[#8B573A] shrink-0">Finish</dt>
                  <dd className="text-right text-[#292522]">{product.finish}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="font-medium text-[#8B573A] shrink-0">Dimensions</dt>
                  <dd className="text-right text-[#292522]">{product.dimensions}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="font-medium text-[#8B573A] shrink-0">Customisation</dt>
                  <dd className="text-right font-medium text-[#263B2B]">
                    {product.customisationAvailable ? 'Yes — Size, Wood & Finish' : 'Standard'}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Primary Calls to Action */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#263B2B] text-[#F5EBDD] border border-[#C28A3D]/60 text-sm font-semibold hover:bg-[#1b2b1f] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#C28A3D] shrink-0" />
                <span>Enquire on WhatsApp</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to={`/custom-furniture?product=${encodeURIComponent(
                    product.name
                  )}&category=${encodeURIComponent(product.categoryLabel)}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
                >
                  <Compass className="w-4 h-4 text-[#C28A3D] shrink-0" />
                  <span>Customise This Product</span>
                </Link>

                <a
                  href={`tel:${BRAND_CONFIG.founder.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-[#4A2818]/40 text-[#4A2818] text-xs font-semibold hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#8B573A] shrink-0" />
                  <span>Call {BRAND_CONFIG.founder.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Auto-Generated WhatsApp Message Preview */}
            <div className="p-3.5 rounded-lg bg-[#F5EBDD]/70 border border-[#C28A3D]/35 space-y-1 text-xs">
              <p className="font-semibold text-[#4A2818]">Pre-filled WhatsApp Enquiry Message:</p>
              <p className="text-[#292522]/80 italic">“{exactProductMessage}”</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-10 border-t border-[#C28A3D]/35 space-y-6">
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#4A2818]">
              More in {product.categoryLabel}
            </h2>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </div>
  );
};
