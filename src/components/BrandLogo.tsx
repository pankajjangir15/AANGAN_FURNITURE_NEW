import React from 'react';
import { BRAND_CONFIG } from '../config/brand';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'hero-emblem';
  showTagline?: boolean;
  className?: string;
}

/**
 * Official finalized AANGAN FURNITURE logo featuring the Indian courtyard/arch/house-inspired
 * symbol, furniture (courtyard sofa) and plants, walnut-brown lettering and antique-gold detailing.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  showTagline = false,
  className = '',
}) => {
  const isLightOnDark = variant === 'footer';
  const primaryStroke = isLightOnDark ? '#F5EBDD' : '#4A2818';
  const goldStroke = '#C28A3D';
  const leafColor = isLightOnDark ? '#D8C3A5' : '#263B2B';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={variant === 'hero-emblem' ? 56 : 44}
        height={variant === 'hero-emblem' ? 56 : 44}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer Ornamental Frame */}
        <rect
          x="6"
          y="6"
          width="108"
          height="108"
          rx="14"
          fill={isLightOnDark ? '#292522' : '#F5EBDD'}
          stroke={goldStroke}
          strokeWidth="2.5"
        />
        {/* Traditional Indian House Roof & Courtyard Arch (Aangan) */}
        <path
          d="M18 50L60 18L102 50"
          stroke={primaryStroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 18V12"
          stroke={goldStroke}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Cusped Rajasthani Courtyard Arch */}
        <path
          d="M30 96V56C30 39.4315 43.4315 26 60 26C76.5685 26 90 39.4315 90 56V96"
          stroke={goldStroke}
          strokeWidth="2.75"
        />
        <path
          d="M36 96V58C36 44.7452 46.7452 34 60 34C73.2548 34 84 44.7452 84 58V96"
          stroke={primaryStroke}
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {/* Left & Right Courtyard Plants */}
        <path
          d="M23 94C21 86 21 79 25 73M23 94C26 87 27 81 24 76"
          stroke={leafColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M97 94C99 86 99 79 95 73M97 94C94 87 93 81 96 76"
          stroke={leafColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Handcrafted Wooden Sofa / Settee inside the Courtyard */}
        <rect
          x="42"
          y="64"
          width="36"
          height="14"
          rx="3"
          fill={isLightOnDark ? '#C28A3D' : '#8B573A'}
          stroke={primaryStroke}
          strokeWidth="2"
        />
        <rect
          x="39"
          y="75"
          width="42"
          height="7"
          rx="2"
          fill={primaryStroke}
        />
        {/* Armrests & Legs */}
        <path
          d="M38 68H43V86H38V68ZM77 68H82V86H77V68Z"
          fill={goldStroke}
        />
        <path
          d="M42 82V94M78 82V94"
          stroke={primaryStroke}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Courtyard Base Plinth */}
        <line
          x1="20"
          y1="96"
          x2="100"
          y2="96"
          stroke={goldStroke}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-serif-heading font-bold tracking-wider uppercase whitespace-nowrap ${
            variant === 'hero-emblem'
              ? 'text-2xl sm:text-3xl'
              : 'text-lg sm:text-xl'
          } ${isLightOnDark ? 'text-[#F5EBDD]' : 'text-[#4A2818]'}`}
        >
          {BRAND_CONFIG.businessName}
        </span>
        {showTagline && (
          <span
            className={`font-hindi text-xs sm:text-sm mt-1 tracking-wide ${
              isLightOnDark ? 'text-[#D8C3A5]' : 'text-[#8B573A]'
            }`}
          >
            {BRAND_CONFIG.hindiName} · {BRAND_CONFIG.tagline}
          </span>
        )}
      </div>
    </div>
  );
};
