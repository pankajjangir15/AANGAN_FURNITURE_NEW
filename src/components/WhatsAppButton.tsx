import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/catalogueLogic';
import { BRAND_CONFIG } from '../config/brand';

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  label?: string;
  variant?: 'primary' | 'forest' | 'outline' | 'floating';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  phoneNumber = BRAND_CONFIG.primaryWhatsappNumber,
  label = 'Enquire on WhatsApp',
  variant = 'primary',
  className = '',
}) => {
  const finalMessage = message || generateGeneralWhatsAppMessage();
  const href = buildWhatsAppUrl(finalMessage, phoneNumber);

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AANGAN FURNITURE on WhatsApp"
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[#263B2B] text-[#F5EBDD] border border-[#C28A3D]/60 shadow-lg hover:bg-[#1d2e21] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28A3D] whitespace-nowrap shrink-0 ${className}`}
      >
        <MessageCircle className="w-5 h-5 text-[#C28A3D] shrink-0" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          WhatsApp Enquiry
        </span>
      </a>
    );
  }

  const variantStyles = {
    primary:
      'bg-[#4A2818] text-[#F5EBDD] border border-[#C28A3D]/50 hover:bg-[#381d10]',
    forest:
      'bg-[#263B2B] text-[#F5EBDD] border border-[#C28A3D]/50 hover:bg-[#1c2d20]',
    outline:
      'bg-transparent text-[#4A2818] border border-[#4A2818]/40 hover:border-[#4A2818] hover:bg-[#4A2818]/5',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C28A3D] whitespace-nowrap shrink-0 ${variantStyles[variant]} ${className}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
};
