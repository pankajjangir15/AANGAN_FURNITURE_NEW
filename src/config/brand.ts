export interface BrandLeader {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  description: string;
}

export const BRAND_CONFIG = {
  businessName: 'AANGAN FURNITURE',
  hindiName: 'आँगन फर्नीचर',
  tagline: 'रिश्तों का अपना आँगन।',
  domain: 'https://www.aanganfurniture.in',
  locationShort: 'Jaipur, Rajasthan, India',
  businessType: 'Furniture Retail, Custom Furniture and Furniture Catalogue',

  founder: {
    name: 'Pankaj Jangir',
    role: 'Founder',
    phoneDisplay: '+91 86903 80190',
    phoneTel: '+918690380190',
    whatsappNumber: '918690380190',
    description: 'Product enquiries, custom furniture consultations, design specifications and orders.',
  } as BrandLeader,

  director: {
    name: 'Prem Chand Jangid',
    role: 'Director',
    phoneDisplay: '+91 79763 90721',
    phoneTel: '+917976390721',
    whatsappNumber: '917976390721',
    description: 'Craftsmanship oversight, wood selection, workshop coordination and client relations.',
  } as BrandLeader,

  primaryWhatsappNumber: '918690380190',

  address: {
    line1: 'Plot No. 149-B, Karni Vatika-2nd,',
    line2: 'Sirsi, Jaipur, Rajasthan – 302041, India.',
    full: 'Plot No. 149-B, Karni Vatika-2nd, Sirsi, Jaipur, Rajasthan – 302041, India.',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302041',
    country: 'India',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Karni+Vatika+2nd+Sirsi+Jaipur+Rajasthan+302041',
  },

  businessHoursPlaceholder: 'Monday – Sunday: Hours shared upon appointment / phone confirmation (Placeholder — call prior to visiting)',

  colors: {
    walnutBrown: '#4A2818',
    antiqueGold: '#C28A3D',
    ivoryCream: '#F5EBDD',
    forestGreen: '#263B2B',
    supportingTeak: '#8B573A',
    sandBeige: '#D8C3A5',
    charcoal: '#292522',
  },

  whatsappMessages: {
    generalEnquiry:
      'Hello AANGAN FURNITURE, I would like to know more about your furniture collection.',
    customOrderBase:
      'Hello AANGAN FURNITURE, I want to discuss a customised furniture requirement.',
    productEnquiry: (productName: string, productCode?: string) =>
      `Hello AANGAN FURNITURE, I am interested in ${productName}${
        productCode ? ` (Code: ${productCode})` : ''
      }. Please share its price, dimensions, available finishes and customisation options.`,
  },
} as const;
