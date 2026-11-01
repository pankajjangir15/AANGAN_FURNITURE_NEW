import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { ProductItem } from '../data/products';
import { FurnitureIllustration } from './FurnitureIllustration';
import {
  buildWhatsAppUrl,
  generateProductWhatsAppMessage,
} from '../utils/catalogueLogic';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappMessage = generateProductWhatsAppMessage(product.name, product.id);
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <article className="group flex flex-col bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">
      {/* Product Visual Lead (4:3 Aspect Ratio) */}
      <Link
        to={`/product/${product.id}`}
        aria-label={`View specifications for ${product.name}`}
        className="block relative overflow-hidden border-b border-[#C28A3D]/25"
      >
        <FurnitureIllustration
          artworkKey={product.mainImage}
          alt={`${product.name} — ${product.subCategory} by AANGAN FURNITURE Jaipur`}
          aspectRatio="4:3"
          className="w-full aspect-[4/3] transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#8B573A] font-medium">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{product.subCategory}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums text-[#4A2818]">Code: {product.id}</span>
          </div>

          <h3 className="font-serif-heading text-xl font-bold text-[#4A2818] leading-snug">
            <Link
              to={`/product/${product.id}`}
              className="hover:text-[#8B573A] transition-colors"
            >
              {product.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Specifications & Price on Request */}
        <div className="pt-3 border-t border-[#C28A3D]/25 space-y-3">
          <dl className="space-y-1 text-xs text-[#292522]/80">
            <div className="flex justify-between gap-2">
              <dt className="font-medium text-[#8B573A] shrink-0">Material:</dt>
              <dd className="text-right truncate">{product.material.replace('Placeholder — ', '')}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="font-medium text-[#8B573A] shrink-0">Finish:</dt>
              <dd className="text-right truncate">{product.finish.replace('Placeholder — ', '')}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="font-medium text-[#8B573A] shrink-0">Customisation:</dt>
              <dd className="text-right text-[#263B2B] font-medium">
                {product.customisationAvailable ? 'Available on Order' : 'Standard Only'}
              </dd>
            </div>
          </dl>

          <div className="pt-2 border-t border-[#C28A3D]/20 flex items-center justify-between gap-2">
            <div>
              <span className="block text-[11px] text-[#8B573A]">Pricing</span>
              <span className="text-sm font-semibold text-[#4A2818] tabular-nums">
                {product.priceLabel}
              </span>
            </div>
            {product.isSampleData && (
              <span className="text-[11px] text-[#8B573A] italic">
                Demonstration Item
              </span>
            )}
          </div>

          {/* Primary & Secondary Card Actions */}
          <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-[#263B2B] text-[#F5EBDD] text-xs font-semibold hover:bg-[#1b2b1f] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C28A3D] shrink-0" />
              <span>Get Price on WhatsApp</span>
            </a>

            <Link
              to={`/product/${product.id}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-md border border-[#4A2818]/35 text-[#4A2818] text-xs font-semibold hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
