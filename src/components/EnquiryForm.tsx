import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, Send } from 'lucide-react';
import {
  ContactEnquiryInput,
  validateContactForm,
  buildWhatsAppUrl,
} from '../utils/catalogueLogic';
import { BRAND_CONFIG } from '../config/brand';

interface SubmittedEnquiry extends ContactEnquiryInput {
  id: string;
  submittedAt: string;
}

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactEnquiryInput>({
    fullName: '',
    phone: '',
    city: 'Jaipur',
    subject: 'Product Price & Availability Enquiry',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedList, setSubmittedList] = useState<SubmittedEnquiry[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const newEntry: SubmittedEnquiry = {
      ...formData,
      id: `ENQ-${100 + submittedList.length + 1}`,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setSubmittedList((prev) => [newEntry, ...prev]);
  };

  const latestSubmission = submittedList[0];

  const buildDirectWhatsAppLink = (entry: ContactEnquiryInput) => {
    const text = [
      `Hello ${BRAND_CONFIG.businessName},`,
      `Name: ${entry.fullName}`,
      `Phone: ${entry.phone}`,
      entry.city ? `City: ${entry.city}` : '',
      `Topic: ${entry.subject}`,
      `Requirement: ${entry.message}`,
    ]
      .filter(Boolean)
      .join('\n');
    return buildWhatsAppUrl(text);
  };

  return (
    <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/40 p-6 sm:p-8 space-y-6">
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-[#8B573A] tracking-wide">
          Direct Customer Enquiry · {BRAND_CONFIG.businessName}
        </p>
        <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#4A2818]">
          Request a Quote or Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#292522]/80">
          Share your furniture requirements below to generate a structured enquiry summary or connect
          immediately on WhatsApp at {BRAND_CONFIG.founder.phoneDisplay}.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="enq-full-name"
              className="block text-xs font-semibold text-[#4A2818] mb-1.5"
            >
              Your Full Name *
            </label>
            <input
              id="enq-full-name"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g., Rajesh Sharma"
              className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="enq-phone"
              className="block text-xs font-semibold text-[#4A2818] mb-1.5"
            >
              Mobile / WhatsApp Number *
            </label>
            <input
              id="enq-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g., +91 98290 12345"
              className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="enq-city"
              className="block text-xs font-semibold text-[#4A2818] mb-1.5"
            >
              City / Locality
            </label>
            <input
              id="enq-city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g., Sirsi Road, Vaishali Nagar, Jaipur"
              className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
            />
          </div>

          <div>
            <label
              htmlFor="enq-subject"
              className="block text-xs font-semibold text-[#4A2818] mb-1.5"
            >
              Enquiry Subject
            </label>
            <select
              id="enq-subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
            >
              <option value="Product Price & Availability Enquiry">
                Product Price &amp; Availability Enquiry
              </option>
              <option value="Custom Furniture Design & Dimensions">
                Custom Furniture Design &amp; Dimensions
              </option>
              <option value="Complete Home / Apartment Furnishing">
                Complete Home / Apartment Furnishing
              </option>
              <option value="Showroom / Workshop Visit Appointment">
                Showroom / Workshop Visit Appointment
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="enq-message"
            className="block text-xs font-semibold text-[#4A2818] mb-1.5"
          >
            Furniture Details or Questions *
          </label>
          <textarea
            id="enq-message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us which sofa, bed, dining set or wooden carving you are interested in, along with any preferred dimensions..."
            className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#4A2818] text-[#F5EBDD] border border-[#C28A3D]/60 text-xs sm:text-sm font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
          >
            <Send className="w-4 h-4 text-[#C28A3D]" />
            <span>Prepare Enquiry Summary</span>
          </button>

          <a
            href={buildDirectWhatsAppLink(formData)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#263B2B] text-[#F5EBDD] border border-[#C28A3D]/50 text-xs sm:text-sm font-semibold hover:bg-[#1b2b1f] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#C28A3D]" />
            <span>Send Directly on WhatsApp</span>
          </a>
        </div>
      </form>

      {latestSubmission && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 rounded-lg bg-[#F5EBDD] border border-[#263B2B]/40 space-y-2"
        >
          <div className="flex items-center gap-2 text-[#263B2B] font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              Enquiry {latestSubmission.id} Prepared for {latestSubmission.fullName}
            </span>
          </div>
          <p className="text-xs text-[#292522]/85">
            Topic: {latestSubmission.subject} · Contact: {latestSubmission.phone} · Recorded at{' '}
            {latestSubmission.submittedAt}
          </p>
          <div className="pt-1">
            <a
              href={buildDirectWhatsAppLink(latestSubmission)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#263B2B] underline hover:text-[#4A2818]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Open WhatsApp with this Enquiry ({BRAND_CONFIG.founder.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
