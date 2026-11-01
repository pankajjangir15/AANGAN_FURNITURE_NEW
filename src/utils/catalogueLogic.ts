import { BRAND_CONFIG } from '../config/brand';
import { ProductItem } from '../data/products';

export interface ProductFilterCriteria {
  category?: string;
  subCategory?: string;
  searchQuery?: string;
  customisableOnly?: boolean;
  featuredOnly?: boolean;
}

export interface CustomFurnitureFormInput {
  customerName: string;
  customerPhone: string;
  category: string;
  preferredDesign: string;
  width: string;
  height: string;
  depth: string;
  dimensionUnit: 'inches' | 'cm' | 'feet';
  materialPreference: string;
  finishPreference: string;
  quantity: number;
  budgetRange?: string;
  additionalRequirements?: string;
  referenceImageName?: string;
}

export interface ContactEnquiryInput {
  fullName: string;
  phone: string;
  city?: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

/**
 * Generates an official WhatsApp deep link using the central brand configuration.
 */
export function buildWhatsAppUrl(
  message: string,
  phoneNumber: string = BRAND_CONFIG.primaryWhatsappNumber
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Generates the exact product enquiry message required for AANGAN FURNITURE.
 */
export function generateProductWhatsAppMessage(
  productName: string,
  productCode?: string
): string {
  return BRAND_CONFIG.whatsappMessages.productEnquiry(productName.trim(), productCode?.trim());
}

/**
 * Generates the general enquiry message.
 */
export function generateGeneralWhatsAppMessage(): string {
  return BRAND_CONFIG.whatsappMessages.generalEnquiry;
}

/**
 * Generates a structured custom furniture enquiry message for WhatsApp.
 */
export function generateCustomFurnitureWhatsAppMessage(
  input?: Partial<CustomFurnitureFormInput>
): string {
  const base = BRAND_CONFIG.whatsappMessages.customOrderBase;
  if (!input || (!input.category && !input.preferredDesign && !input.customerName)) {
    return base;
  }

  const lines: string[] = [base, ''];
  if (input.customerName?.trim()) {
    lines.push(`Name: ${input.customerName.trim()}`);
  }
  if (input.customerPhone?.trim()) {
    lines.push(`Contact: ${input.customerPhone.trim()}`);
  }
  if (input.category?.trim()) {
    lines.push(`Category: ${input.category.trim()}`);
  }
  if (input.preferredDesign?.trim()) {
    lines.push(`Preferred Design: ${input.preferredDesign.trim()}`);
  }

  const dims = [
    input.width?.trim() ? `W: ${input.width.trim()}` : '',
    input.height?.trim() ? `H: ${input.height.trim()}` : '',
    input.depth?.trim() ? `D: ${input.depth.trim()}` : '',
  ].filter(Boolean);

  if (dims.length > 0) {
    const unit = input.dimensionUnit || 'inches';
    lines.push(`Dimensions (${unit}): ${dims.join(' × ')}`);
  }

  if (input.materialPreference?.trim()) {
    lines.push(`Material Preference: ${input.materialPreference.trim()}`);
  }
  if (input.finishPreference?.trim()) {
    lines.push(`Finish Preference: ${input.finishPreference.trim()}`);
  }
  if (input.quantity && input.quantity > 0) {
    lines.push(`Quantity: ${input.quantity}`);
  }
  if (input.budgetRange?.trim()) {
    lines.push(`Indicative Budget Range: ${input.budgetRange.trim()}`);
  }
  if (input.referenceImageName?.trim()) {
    lines.push(`Reference Image Selected: ${input.referenceImageName.trim()} (I will attach it in chat)`);
  }
  if (input.additionalRequirements?.trim()) {
    lines.push(`Additional Notes: ${input.additionalRequirements.trim()}`);
  }

  return lines.join('\n');
}

/**
 * Filters active products based on category, subCategory, searchQuery, and flags.
 */
export function filterProducts(
  products: ProductItem[],
  criteria: ProductFilterCriteria
): ProductItem[] {
  const query = (criteria.searchQuery || '').trim().toLowerCase();

  return products.filter((item) => {
    if (item.displayStatus !== 'active') return false;

    if (
      criteria.category &&
      criteria.category !== 'all' &&
      item.category.toLowerCase() !== criteria.category.toLowerCase()
    ) {
      return false;
    }

    if (
      criteria.subCategory &&
      criteria.subCategory !== 'all' &&
      item.subCategory.toLowerCase() !== criteria.subCategory.toLowerCase()
    ) {
      return false;
    }

    if (criteria.customisableOnly && !item.customisationAvailable) {
      return false;
    }

    if (criteria.featuredOnly && !item.featured) {
      return false;
    }

    if (query.length > 0) {
      const searchableText = [
        item.id,
        item.name,
        item.categoryLabel,
        item.subCategory,
        item.shortDescription,
        item.description,
        item.material,
        item.finish,
      ]
        .join(' ')
        .toLowerCase();

      if (!searchableText.includes(query)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Validates the Custom Furniture Enquiry form without silently substituting empty values.
 */
export function validateCustomFurnitureForm(
  input: CustomFurnitureFormInput
): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.customerName || input.customerName.trim().length < 2) {
    errors.customerName = 'Please enter your full name.';
  }

  const digits = (input.customerPhone || '').replace(/[^0-9]/g, '');
  if (digits.length < 10) {
    errors.customerPhone = 'Please enter a valid 10-digit phone or WhatsApp number.';
  }

  if (!input.category || input.category.trim().length === 0) {
    errors.category = 'Please select a furniture category.';
  }

  if (!input.preferredDesign || input.preferredDesign.trim().length < 3) {
    errors.preferredDesign = 'Please describe your preferred design or style.';
  }

  if (!input.quantity || Number.isNaN(Number(input.quantity)) || Number(input.quantity) < 1) {
    errors.quantity = 'Quantity must be at least 1.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates the general Contact Enquiry form.
 */
export function validateContactForm(input: ContactEnquiryInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name.';
  }

  const digits = (input.phone || '').replace(/[^0-9]/g, '');
  if (digits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (!input.message || input.message.trim().length < 5) {
    errors.message = 'Please share a brief message about your requirement.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
