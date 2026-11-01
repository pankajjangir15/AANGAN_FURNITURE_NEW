import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EnquiryForm } from '../components/EnquiryForm';
import { BRAND_CONFIG } from '../config/brand';
import { buildWhatsAppUrl, generateGeneralWhatsAppMessage } from '../utils/catalogueLogic';

export const Contact: React.FC = () => {
  const founderWaUrl = buildWhatsAppUrl(
    generateGeneralWhatsAppMessage(),
    BRAND_CONFIG.founder.whatsappNumber
  );
  const directorWaUrl = buildWhatsAppUrl(
    generateGeneralWhatsAppMessage(),
    BRAND_CONFIG.director.whatsappNumber
  );

  return (
    <div className="py-12 lg:py-16">
      <SEOHead
        title="Contact AANGAN FURNITURE Jaipur | Pankaj Jangir & Prem Chand Jangid — Sirsi, Jaipur"
        description="Contact AANGAN FURNITURE at Plot No. 149-B, Karni Vatika-2nd, Sirsi, Jaipur – 302041. Call Founder Pankaj Jangir (+91 86903 80190) or Director Prem Chand Jangid (+91 79763 90721)."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-[#C28A3D]/35 pb-8 space-y-3">
          <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
            Get in Touch · {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName})
          </p>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#4A2818]">
            Contact &amp; Jaipur Location
          </h1>
          <p className="font-hindi text-lg text-[#8B573A] font-semibold">
            {BRAND_CONFIG.businessName} — {BRAND_CONFIG.tagline}
          </p>
          <p className="text-sm sm:text-base text-[#292522]/85 max-w-2xl">
            We welcome your enquiries regarding furniture specifications, custom dimensions, wood
            finishes and showroom visits in Sirsi, Jaipur.
          </p>
        </div>

        {/* Leadership Contact Cards & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            {/* Founder Card */}
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#8B573A] uppercase tracking-wider">
                  {BRAND_CONFIG.founder.role}
                </p>
                <h2 className="font-serif-heading text-2xl font-bold text-[#4A2818] mt-0.5">
                  {BRAND_CONFIG.founder.name}
                </h2>
                <p className="text-xs text-[#292522]/80 mt-1">
                  {BRAND_CONFIG.founder.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${BRAND_CONFIG.founder.phoneTel}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold hover:bg-[#381d10] transition-colors tabular-nums whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C28A3D]" />
                  <span>Call {BRAND_CONFIG.founder.phoneDisplay}</span>
                </a>

                <a
                  href={founderWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#263B2B] text-[#F5EBDD] text-xs font-semibold hover:bg-[#1b2b1f] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C28A3D]" />
                  <span>WhatsApp Founder</span>
                </a>
              </div>
            </div>

            {/* Director Card */}
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#8B573A] uppercase tracking-wider">
                  {BRAND_CONFIG.director.role}
                </p>
                <h2 className="font-serif-heading text-2xl font-bold text-[#4A2818] mt-0.5">
                  {BRAND_CONFIG.director.name}
                </h2>
                <p className="text-xs text-[#292522]/80 mt-1">
                  {BRAND_CONFIG.director.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${BRAND_CONFIG.director.phoneTel}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold hover:bg-[#381d10] transition-colors tabular-nums whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C28A3D]" />
                  <span>Call {BRAND_CONFIG.director.phoneDisplay}</span>
                </a>

                <a
                  href={directorWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#4A2818]/40 text-[#4A2818] text-xs font-semibold hover:bg-[#4A2818]/5 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#263B2B]" />
                  <span>WhatsApp Director</span>
                </a>
              </div>
            </div>

            {/* Address & Business Hours Card */}
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C28A3D] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h2 className="font-serif-heading text-xl font-bold text-[#4A2818]">
                    Business Address
                  </h2>
                  <p className="text-sm text-[#292522] font-medium">{BRAND_CONFIG.businessName}</p>
                  <p className="text-sm text-[#292522]/85">{BRAND_CONFIG.address.line1}</p>
                  <p className="text-sm text-[#292522]/85">{BRAND_CONFIG.address.line2}</p>
                  <div className="pt-2">
                    <a
                      href={BRAND_CONFIG.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#EFE2CE] text-[#4A2818] border border-[#C28A3D]/50 text-xs font-semibold hover:bg-[#D8C3A5]/60 transition-colors"
                    >
                      <span>Open Location in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C28A3D]/30 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C28A3D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-serif-heading text-lg font-bold text-[#4A2818]">
                    Visiting Hours (Placeholder)
                  </h3>
                  <p className="text-xs text-[#292522]/80 leading-relaxed">
                    {BRAND_CONFIG.businessHoursPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};
