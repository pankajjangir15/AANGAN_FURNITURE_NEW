import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CategoryGroup } from '../data/categories';
import { FurnitureIllustration } from './FurnitureIllustration';

interface CategoryCardProps {
  category: CategoryGroup;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const targetUrl =
    category.id === 'custom-furniture'
      ? '/custom-furniture'
      : `/catalogue?category=${category.id}`;

  return (
    <article className="group flex flex-col bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/35 overflow-hidden transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <Link
        to={targetUrl}
        aria-label={`Explore ${category.name} collection`}
        className="block overflow-hidden border-b border-[#C28A3D]/25"
      >
        <FurnitureIllustration
          artworkKey={category.artworkKey}
          alt={`${category.name} furniture collection at AANGAN FURNITURE Jaipur`}
          aspectRatio="4:3"
          className="w-full aspect-[4/3] transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <p className="font-hindi text-xs text-[#8B573A] font-medium">
            {category.hindiSubtitle}
          </p>
          <h3 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
            <Link to={targetUrl} className="hover:text-[#8B573A] transition-colors">
              {category.name}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#292522]/85 leading-relaxed">
            {category.shortDescription}
          </p>
        </div>

        {/* Unboxed Subcategories List with Typographic Separators */}
        <div className="pt-3 border-t border-[#C28A3D]/25 space-y-3">
          <div className="text-xs text-[#8B573A] leading-relaxed">
            {category.subCategories.map((sub, idx) => (
              <React.Fragment key={sub.id}>
                <Link
                  to={
                    category.id === 'custom-furniture'
                      ? '/custom-furniture'
                      : `/catalogue?category=${category.id}&sub=${encodeURIComponent(sub.name)}`
                  }
                  className="hover:text-[#4A2818] hover:underline font-medium"
                >
                  {sub.name}
                </Link>
                {idx < category.subCategories.length - 1 && (
                  <span aria-hidden="true" className="mx-1.5 text-[#C28A3D]">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <Link
            to={targetUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A2818] hover:text-[#8B573A] transition-colors whitespace-nowrap"
          >
            <span>
              {category.id === 'custom-furniture'
                ? 'Customise Your Furniture'
                : `Browse ${category.name}`}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C28A3D]" />
          </Link>
        </div>
      </div>
    </article>
  );
};
