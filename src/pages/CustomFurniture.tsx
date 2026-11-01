import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle, Upload, CheckCircle2, FileText } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FurnitureIllustration } from '../components/FurnitureIllustration';
import { CATEGORIES } from '../data/categories';
import { BRAND_CONFIG } from '../config/brand';
import {
  CustomFurnitureFormInput,
  validateCustomFurnitureForm,
  generateCustomFurnitureWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/catalogueLogic';

interface SavedCustomRequest extends CustomFurnitureFormInput {
  requestId: string;
  createdAt: string;
}

export const CustomFurniture: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  const initialCategory = searchParams.get('category') || 'Living Room';

  const [form, setForm] = useState<CustomFurnitureFormInput>({
    customerName: '',
    customerPhone: '',
    category: initialCategory,
    preferredDesign: initialProduct ? `Custom adaptation of ${initialProduct}` : '',
    width: '',
    height: '',
    depth: '',
    dimensionUnit: 'inches',
    materialPreference: 'Seasoned Solid Wood (To be discussed)',
    finishPreference: 'Primary Walnut Brown',
    quantity: 1,
    budgetRange: '',
    additionalRequirements: '',
    referenceImageName: '',
  });

  const [referencePreviewUrl, setReferencePreviewUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedRequests, setSavedRequests] = useState<SavedCustomRequest[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setForm((prev) => ({ ...prev, referenceImageName: '' }));
      setReferencePreviewUrl(null);
      return;
    }
    setForm((prev) => ({ ...prev, referenceImageName: file.name }));
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setReferencePreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateCustomFurnitureForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const entry: SavedCustomRequest = {
      ...form,
      requestId: `CUST-${200 + savedRequests.length + 1}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setSavedRequests((prev) => [entry, ...prev]);
  };

  const currentWhatsAppMessage = generateCustomFurnitureWhatsAppMessage(form);
  const currentWhatsAppUrl = buildWhatsAppUrl(currentWhatsAppMessage);

  return (
    <div className="py-12 lg:py-16">
      <SEOHead
        title="Custom Furniture in Jaipur | AANGAN FURNITURE — Bespoke Dimensions & Designs"
        description="Order custom-sized furniture at AANGAN FURNITURE, Sirsi, Jaipur. Specify width, height, depth, material, walnut or teak finish and design preferences via WhatsApp."
        canonicalPath="/custom-furniture"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#C28A3D]/35 pb-8 space-y-3">
          <p className="text-xs font-semibold text-[#8B573A] tracking-wide">
            Made-to-Order Consultation · {BRAND_CONFIG.businessName} ({BRAND_CONFIG.hindiName})
          </p>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#4A2818]">
            Custom Furniture Specification &amp; Enquiry
          </h1>
          <p className="text-sm sm:text-base text-[#292522]/85 max-w-3xl">
            Share your preferred furniture category, room measurements, wood finish and design
            references below. Our team in Sirsi, Jaipur will review your specifications and confirm
            feasibility, timelines and pricing directly with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Column (8 cols) */}
          <div className="lg:col-span-8 bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif-heading text-2xl font-bold text-[#4A2818]">
                Specify Your Custom Requirement
              </h2>
              <p className="text-xs text-[#8B573A]">
                Note: Feasibility, structural proportions and material availability are confirmed
                after reviewing your specifications.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Customer Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cust-name"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="cust-name"
                    type="text"
                    value={form.customerName}
                    onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                    placeholder="e.g., Vikram Rathore"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
                  />
                  {errors.customerName && (
                    <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                      {errors.customerName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="cust-phone"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="cust-phone"
                    type="tel"
                    value={form.customerPhone}
                    onChange={(e) => setForm({ ...form, customerPhone: e.target.value })}
                    placeholder="e.g., +91 98290 54321"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
                  />
                  {errors.customerPhone && (
                    <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                      {errors.customerPhone}
                    </p>
                  )}
                </div>
              </div>

              {/* Category & Preferred Design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cust-category"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Product Category *
                  </label>
                  <select
                    id="cust-category"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
                  >
                    {CATEGORIES.filter((c) => c.id !== 'custom-furniture').map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.subCategories.map((s) => s.name).join(', ')})
                      </option>
                    ))}
                    <option value="Complete Room / Multiple Pieces">
                      Complete Room / Multiple Pieces
                    </option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="cust-design"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Preferred Design / Furniture Type *
                  </label>
                  <input
                    id="cust-design"
                    type="text"
                    value={form.preferredDesign}
                    onChange={(e) => setForm({ ...form, preferredDesign: e.target.value })}
                    placeholder="e.g., 3-Seater Wooden Sofa with Cane Arms / King Hydraulic Bed"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] focus:outline-none focus:border-[#4A2818]"
                  />
                  {errors.preferredDesign && (
                    <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                      {errors.preferredDesign}
                    </p>
                  )}
                </div>
              </div>

              {/* Dimensions Row: Width, Height, Depth + Unit */}
              <div className="p-4 rounded-lg bg-[#F5EBDD]/55 border border-[#C28A3D]/35 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#4A2818]">
                    Preferred Dimensions (Optional if unsure)
                  </span>
                  <div className="flex items-center gap-2">
                    <label htmlFor="cust-unit" className="text-xs text-[#8B573A]">
                      Unit:
                    </label>
                    <select
                      id="cust-unit"
                      value={form.dimensionUnit}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          dimensionUnit: e.target.value as 'inches' | 'cm' | 'feet',
                        })
                      }
                      className="px-2 py-1 rounded bg-[#FFFDF9] border border-[#C28A3D]/50 text-xs text-[#4A2818] font-medium"
                    >
                      <option value="inches">Inches</option>
                      <option value="feet">Feet</option>
                      <option value="cm">Centimetres (cm)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="cust-width" className="block text-xs text-[#8B573A] mb-1">
                      Width ({form.dimensionUnit})
                    </label>
                    <input
                      id="cust-width"
                      type="text"
                      value={form.width}
                      onChange={(e) => setForm({ ...form, width: e.target.value })}
                      placeholder="e.g., 78"
                      className="w-full px-3 py-2 rounded bg-[#FFFDF9] border border-[#C28A3D]/45 text-sm tabular-nums"
                    />
                  </div>
                  <div>
                    <label htmlFor="cust-height" className="block text-xs text-[#8B573A] mb-1">
                      Height ({form.dimensionUnit})
                    </label>
                    <input
                      id="cust-height"
                      type="text"
                      value={form.height}
                      onChange={(e) => setForm({ ...form, height: e.target.value })}
                      placeholder="e.g., 34"
                      className="w-full px-3 py-2 rounded bg-[#FFFDF9] border border-[#C28A3D]/45 text-sm tabular-nums"
                    />
                  </div>
                  <div>
                    <label htmlFor="cust-depth" className="block text-xs text-[#8B573A] mb-1">
                      Depth ({form.dimensionUnit})
                    </label>
                    <input
                      id="cust-depth"
                      type="text"
                      value={form.depth}
                      onChange={(e) => setForm({ ...form, depth: e.target.value })}
                      placeholder="e.g., 32"
                      className="w-full px-3 py-2 rounded bg-[#FFFDF9] border border-[#C28A3D]/45 text-sm tabular-nums"
                    />
                  </div>
                </div>
              </div>

              {/* Material & Finish Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cust-material"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Material Preference
                  </label>
                  <select
                    id="cust-material"
                    value={form.materialPreference}
                    onChange={(e) => setForm({ ...form, materialPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522]"
                  >
                    <option value="Seasoned Solid Wood (To be discussed)">
                      Seasoned Solid Wood (To be discussed)
                    </option>
                    <option value="Teak / Sagwan Wood Preference">
                      Teak / Sagwan Wood Preference
                    </option>
                    <option value="Sheesham / Indian Rosewood Preference">
                      Sheesham / Indian Rosewood Preference
                    </option>
                    <option value="Solid Wood with Woven Rattan Cane">
                      Solid Wood with Woven Rattan Cane
                    </option>
                    <option value="Wood with Upholstered Fabric / Cushioning">
                      Wood with Upholstered Fabric / Cushioning
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cust-finish"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Finish Preference
                  </label>
                  <select
                    id="cust-finish"
                    value={form.finishPreference}
                    onChange={(e) => setForm({ ...form, finishPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522]"
                  >
                    <option value="Primary Walnut Brown">Primary Walnut Brown</option>
                    <option value="Supporting Warm Teak">Supporting Warm Teak</option>
                    <option value="Natural Wood Grain Matte">Natural Wood Grain Matte</option>
                    <option value="Dark Espresso / Charcoal Stain">
                      Dark Espresso / Charcoal Stain
                    </option>
                    <option value="Need Guidance on Finish Match">
                      Need Guidance on Finish Match
                    </option>
                  </select>
                </div>
              </div>

              {/* Quantity & Optional Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cust-quantity"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Quantity *
                  </label>
                  <input
                    id="cust-quantity"
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: Math.max(1, Number(e.target.value) || 1) })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522] tabular-nums"
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-xs text-red-700 font-medium" role="alert">
                      {errors.quantity}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="cust-budget"
                    className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                  >
                    Indicative Budget Range (Optional)
                  </label>
                  <input
                    id="cust-budget"
                    type="text"
                    value={form.budgetRange}
                    onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                    placeholder="Optional — e.g., Share options based on wood grade"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522]"
                  />
                </div>
              </div>

              {/* Reference Image Selection */}
              <div>
                <label
                  htmlFor="cust-ref-image"
                  className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                >
                  Reference Sketch or Photograph (Optional)
                </label>
                <div className="flex flex-wrap items-center gap-4 p-3.5 rounded-md border border-dashed border-[#C28A3D] bg-[#F5EBDD]/40">
                  <label
                    htmlFor="cust-ref-image"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#4A2818] text-[#F5EBDD] text-xs font-semibold cursor-pointer hover:bg-[#381d10] transition-colors whitespace-nowrap"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#C28A3D]" />
                    <span>Select Reference Image</span>
                  </label>
                  <input
                    id="cust-ref-image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <span className="text-xs text-[#292522]/80">
                    {form.referenceImageName
                      ? `Selected: ${form.referenceImageName} (Attach in WhatsApp chat when prompted)`
                      : 'Attach a room photo or furniture sketch for reference'}
                  </span>
                </div>
                {referencePreviewUrl && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={referencePreviewUrl}
                      alt="Selected custom furniture reference preview"
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 object-cover rounded border border-[#C28A3D]"
                    />
                    <span className="text-xs text-[#263B2B] font-medium">
                      Reference preview ready. Your WhatsApp message will note this attachment.
                    </span>
                  </div>
                )}
              </div>

              {/* Additional Requirements */}
              <div>
                <label
                  htmlFor="cust-notes"
                  className="block text-xs font-semibold text-[#4A2818] mb-1.5"
                >
                  Additional Requirements (Storage, Upholstery, Delivery Location)
                </label>
                <textarea
                  id="cust-notes"
                  rows={3}
                  value={form.additionalRequirements}
                  onChange={(e) => setForm({ ...form, additionalRequirements: e.target.value })}
                  placeholder="Share any details on hydraulic storage, drawer count, cushion firmness, or delivery locality in Jaipur..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#F5EBDD]/60 border border-[#C28A3D]/50 text-sm text-[#292522]"
                />
              </div>

              {/* Submit & Direct WhatsApp Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#4A2818] text-[#F5EBDD] border border-[#C28A3D]/60 text-xs sm:text-sm font-semibold hover:bg-[#381d10] transition-colors whitespace-nowrap"
                >
                  <FileText className="w-4 h-4 text-[#C28A3D]" />
                  <span>Save Custom Specification Sheet</span>
                </button>

                <a
                  href={currentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#263B2B] text-[#F5EBDD] border border-[#C28A3D]/50 text-xs sm:text-sm font-semibold hover:bg-[#1b2b1f] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#C28A3D]" />
                  <span>Send Custom Requirement on WhatsApp</span>
                </a>
              </div>
            </form>

            {/* Saved Specification Sheets List */}
            {savedRequests.length > 0 && (
              <div
                role="status"
                aria-live="polite"
                className="p-5 rounded-lg bg-[#F5EBDD] border border-[#263B2B]/40 space-y-3"
              >
                <div className="flex items-center gap-2 text-[#263B2B] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Specification {savedRequests[0].requestId} Prepared for{' '}
                    {savedRequests[0].customerName}
                  </span>
                </div>
                <p className="text-xs text-[#292522]/85">
                  {savedRequests[0].category} — {savedRequests[0].preferredDesign} · Finish:{' '}
                  {savedRequests[0].finishPreference} · Qty: {savedRequests[0].quantity}
                </p>
                <a
                  href={buildWhatsAppUrl(
                    generateCustomFurnitureWhatsAppMessage(savedRequests[0])
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#263B2B] text-[#F5EBDD] text-xs font-semibold hover:bg-[#1b2b1f]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C28A3D]" />
                  <span>Open WhatsApp with Specification {savedRequests[0].requestId}</span>
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Live Specification Preview & Consultation Process (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFFDF9] rounded-xl border border-[#C28A3D]/45 overflow-hidden">
              <FurnitureIllustration
                artworkKey="dimension-guide"
                alt="Custom furniture measurement and design consultation guide"
                aspectRatio="4:3"
                className="w-full aspect-[4/3] border-b border-[#C28A3D]/30"
              />
              <div className="p-5 space-y-3">
                <h3 className="font-serif-heading text-xl font-bold text-[#4A2818]">
                  How Custom Orders Work
                </h3>
                <ol className="space-y-2.5 text-xs text-[#292522]/85">
                  <li>
                    <strong>01. Share Specifications:</strong> Enter your preferred dimensions,
                    category and design notes in the form.
                  </li>
                  <li>
                    <strong>02. Direct Consultation:</strong> Discuss timber options, finish shades
                    and structural feasibility with Founder {BRAND_CONFIG.founder.name} or Director{' '}
                    {BRAND_CONFIG.director.name}.
                  </li>
                  <li>
                    <strong>03. Quote &amp; Timeline Confirmation:</strong> Receive a transparent
                    quotation once specifications are mutually confirmed.
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-[#4A2818] text-[#F5EBDD] rounded-xl border border-[#C28A3D]/50 p-5 space-y-3">
              <p className="text-xs font-semibold text-[#C28A3D]">Live WhatsApp Message Preview</p>
              <pre className="text-xs text-[#D8C3A5] whitespace-pre-wrap font-sans leading-relaxed bg-[#292522]/60 p-3.5 rounded border border-[#C28A3D]/25">
                {currentWhatsAppMessage}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
