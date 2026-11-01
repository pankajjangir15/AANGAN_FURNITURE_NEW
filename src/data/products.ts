export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  subCategory: string;
  shortDescription: string;
  description: string;
  mainImage: string;
  additionalImages: string[];
  material: string;
  finish: string;
  dimensions: string;
  customisationAvailable: boolean;
  priceLabel: string;
  featured: boolean;
  displayStatus: 'active' | 'hidden';
  isSampleData: boolean;
}

/**
 * Structured Catalogue Dataset for AANGAN FURNITURE.
 * Note: All entries below are clearly marked as demonstration/placeholder catalogue items
 * (`isSampleData: true`) until actual product specifications and studio photographs are supplied.
 * Edit this single file to add, update or hide catalogue items across the entire website.
 */
export const PRODUCTS: ProductItem[] = [
  {
    id: 'AF-LR-101',
    name: 'Aangan Heritage 3-Seater Wooden Sofa Set',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subCategory: 'Sofa Sets',
    shortDescription:
      'Handcrafted solid wood frame sofa set with arched armrest detailing and tailored cushion seating.',
    description:
      'Demonstration Catalogue Entry: Inspired by traditional Jaipur courtyard seating, this 3-seater sofa pairs a warm walnut-toned wooden frame with deep, supportive cushions. Material, exact dimensions and upholstery shade are customizable upon enquiry.',
    mainImage: 'sofa-heritage',
    additionalImages: ['sofa-heritage', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Solid Seasoned Hardwood (Exact timber confirmed on enquiry)',
    finish: 'Placeholder — Primary Walnut Brown / Natural Teak Polish',
    dimensions: 'Placeholder — Custom & Standard Sizes (Shared on Request)',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-LR-102',
    name: 'Sirsi Convertible Wooden Sofa Cum Bed',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subCategory: 'Sofa Cum Beds',
    shortDescription:
      'Dual-purpose pull-out wooden sofa cum bed with integrated bedding storage compartment.',
    description:
      'Demonstration Catalogue Entry: Designed for modern Indian homes that welcome overnight family guests. Smoothly transitions from an upright living room sofa into a comfortable double bed with under-seat storage.',
    mainImage: 'sofa-cum-bed',
    additionalImages: ['sofa-cum-bed', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Seasoned Hardwood Frame & High-Density Cushioning',
    finish: 'Placeholder — Warm Walnut / Teak Matte Finish',
    dimensions: 'Placeholder — Seating & Pull-out Bed Dimensions on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-LR-103',
    name: 'Jharokha Fluted Low-Profile TV Unit',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subCategory: 'TV Units',
    shortDescription:
      'Architectural media console featuring fluted wooden shutters, open media bay and brass pulls.',
    description:
      'Demonstration Catalogue Entry: A refined media unit that anchors the living room with subtle fluted textures, concealed wire routing and generous drawer storage for remotes and accessories.',
    mainImage: 'tv-unit-fluted',
    additionalImages: ['tv-unit-fluted', 'detail-brass-inlay', 'dimension-guide'],
    material: 'Placeholder — Solid Wood & Veneered Core (Confirmed on enquiry)',
    finish: 'Placeholder — Walnut Brown with Antique Brass Hardware',
    dimensions: 'Placeholder — Custom Widths Available (Shared on Request)',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-LR-104',
    name: 'Mehrab Arch Entryway Console Table',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subCategory: 'Console Tables',
    shortDescription:
      'Slender foyer console table with courtyard arch leg geometry and twin utility drawers.',
    description:
      'Demonstration Catalogue Entry: Ideal for foyers, hallways or behind a sofa, the Mehrab Console Table welcomes guests with graceful arched aprons and practical top-surface display space.',
    mainImage: 'console-arch',
    additionalImages: ['console-arch', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Seasoned Hardwood (Confirmed on enquiry)',
    finish: 'Placeholder — Natural Teak / Walnut Stain',
    dimensions: 'Placeholder — Custom Foyer Dimensions on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-BR-201',
    name: 'Rajputana Framed Solid Wood King Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    subCategory: 'Beds',
    shortDescription:
      'Statement king bed with paneled wooden headboard and optional box or hydraulic storage.',
    description:
      'Demonstration Catalogue Entry: Crafted for restful nights and heirloom longevity, this bed features clean architectural headboard paneling and customizable under-bed storage options.',
    mainImage: 'bed-rajputana',
    additionalImages: ['bed-rajputana', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Solid Seasoned Wood (Confirmed on enquiry)',
    finish: 'Placeholder — Deep Walnut Brown / Warm Teak',
    dimensions: 'Placeholder — King / Queen / Custom Mattress Sizes on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-BR-202',
    name: 'Virasat 5-Drawer Bedroom Chest of Drawers',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    subCategory: 'Chest of Drawers',
    shortDescription:
      'Tall bedroom chest with five generously proportioned drawers and traditional brass ring pulls.',
    description:
      'Demonstration Catalogue Entry: Keeps folded garments, linens and essentials neatly organized while offering a warm wooden surface for lamps, mirrors or personal keepsakes.',
    mainImage: 'chest-drawers',
    additionalImages: ['chest-drawers', 'detail-brass-inlay', 'dimension-guide'],
    material: 'Placeholder — Seasoned Hardwood (Confirmed on enquiry)',
    finish: 'Placeholder — Natural Walnut / Satin Matte',
    dimensions: 'Placeholder — Custom Height & Drawer Depth on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-DN-301',
    name: 'Parivar 6-Seater Solid Wood Dining Set',
    category: 'dining',
    categoryLabel: 'Dining',
    subCategory: 'Dining Sets',
    shortDescription:
      'Spacious 6-seater dining table paired with ergonomic wooden and cane-back dining chairs.',
    description:
      'Demonstration Catalogue Entry: Embodying our philosophy "रिश्तों का अपना आँगन", the Parivar Dining Set is designed as the heart of family meals and festive gatherings. Available in 4, 6 or 8-seater configurations.',
    mainImage: 'dining-parivar',
    additionalImages: ['dining-parivar', 'detail-cane-weave', 'dimension-guide'],
    material: 'Placeholder — Solid Hardwood Table & Chairs (Confirmed on enquiry)',
    finish: 'Placeholder — Warm Teak / Primary Walnut Finish',
    dimensions: 'Placeholder — 4 / 6 / 8 Seater Dimensions on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-DN-302',
    name: 'Karni Heritage Dining Sideboard Credenza',
    category: 'dining',
    categoryLabel: 'Dining',
    subCategory: 'Sideboards',
    shortDescription:
      'Three-door dining sideboard with cutlery drawers and adjustable interior shelving.',
    description:
      'Demonstration Catalogue Entry: Complements your dining table with dedicated storage for dinnerware, table runners and serving bowls, finished with subtle arch detailing.',
    mainImage: 'sideboard-karni',
    additionalImages: ['sideboard-karni', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Seasoned Hardwood (Confirmed on enquiry)',
    finish: 'Placeholder — Walnut Brown / Antique Gold Accents',
    dimensions: 'Placeholder — Standard & Custom Lengths on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-DN-303',
    name: 'Darbar Glass-Front Crockery & Display Cabinet',
    category: 'dining',
    categoryLabel: 'Dining',
    subCategory: 'Cabinets',
    shortDescription:
      'Tall display cabinet with framed clear glass doors and lower enclosed storage.',
    description:
      'Demonstration Catalogue Entry: Showcase cherished crockery, glassware and heirlooms behind dust-free framed glass doors while storing larger items in the lower wooden compartment.',
    mainImage: 'cabinet-darbar',
    additionalImages: ['cabinet-darbar', 'detail-brass-inlay', 'dimension-guide'],
    material: 'Placeholder — Solid Wood Frame & Tempered Glass (Confirmed on enquiry)',
    finish: 'Placeholder — Deep Walnut / Teak Finish',
    dimensions: 'Placeholder — Custom Shelving & Height on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-ST-401',
    name: 'Swagat Ventilated Entryway Shoe Rack with Bench',
    category: 'storage',
    categoryLabel: 'Storage',
    subCategory: 'Shoe Racks',
    shortDescription:
      'Louvered wooden shoe cabinet featuring a comfortable cushioned sit-down bench.',
    description:
      'Demonstration Catalogue Entry: Keeps your home entrance neat and welcoming with ventilated louvered shutters and a convenient seating surface for putting on footwear.',
    mainImage: 'shoe-rack-swagat',
    additionalImages: ['shoe-rack-swagat', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Seasoned Wood & Upholstered Seat Pad',
    finish: 'Placeholder — Warm Teak / Walnut Polish',
    dimensions: 'Placeholder — Custom Pair Capacity & Width on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-ST-402',
    name: 'Samridhi Multipurpose Utility Storage Cabinet',
    category: 'storage',
    categoryLabel: 'Storage',
    subCategory: 'Storage Cabinets',
    shortDescription:
      'Versatile double-door storage cabinet for living rooms, hallways or home offices.',
    description:
      'Demonstration Catalogue Entry: A clean-lined wooden storage cabinet engineered to organize household linens, files or daily essentials with customizable internal shelves.',
    mainImage: 'storage-samridhi',
    additionalImages: ['storage-samridhi', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Seasoned Hardwood (Confirmed on enquiry)',
    finish: 'Placeholder — Natural Walnut / Matte Teak',
    dimensions: 'Placeholder — Custom Shelf Layout on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-ST-403',
    name: 'Mehfil Handcrafted Wooden Bar Cabinet',
    category: 'storage',
    categoryLabel: 'Storage',
    subCategory: 'Bar Cabinets',
    shortDescription:
      'Home entertaining bar cabinet with stemware hangers, bottle compartments and serving tray.',
    description:
      'Demonstration Catalogue Entry: Thoughtfully compartmentalized for hosting guests at home, featuring dedicated racks for glassware, bottles and bar accessories.',
    mainImage: 'bar-cabinet-mehfil',
    additionalImages: ['bar-cabinet-mehfil', 'detail-brass-inlay', 'dimension-guide'],
    material: 'Placeholder — Solid Wood & Brass Accents (Confirmed on enquiry)',
    finish: 'Placeholder — Rich Walnut Brown',
    dimensions: 'Placeholder — Compact & Full-Size Options on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-SO-501',
    name: 'Adhyayan Solid Wood Study & Writing Table',
    category: 'study-and-office',
    categoryLabel: 'Study and Office',
    subCategory: 'Study Tables',
    shortDescription:
      'Spacious writing desk with three utility drawers, cable grommet and ergonomic legroom.',
    description:
      'Demonstration Catalogue Entry: Built for focused reading, study and work-from-home productivity, combining a smooth wooden worktop with practical stationery drawers.',
    mainImage: 'study-table-adhyayan',
    additionalImages: ['study-table-adhyayan', 'detail-wood-grain', 'dimension-guide'],
    material: 'Placeholder — Seasoned Hardwood (Confirmed on enquiry)',
    finish: 'Placeholder — Warm Walnut / Teak Satin',
    dimensions: 'Placeholder — Custom Desk Width & Depth on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-SC-601',
    name: 'Aangan Woven Rattan Cane & Wood Lounge Chair',
    category: 'special-collection',
    categoryLabel: 'Special Collection',
    subCategory: 'Cane Furniture',
    shortDescription:
      'Artisanal lounge chair pairing a sculpted wooden frame with breathable natural cane weaving.',
    description:
      'Demonstration Catalogue Entry: Celebrates classic Indian veranda and courtyard living with hand-woven natural cane backrests and warm wooden joinery.',
    mainImage: 'cane-lounge-chair',
    additionalImages: ['cane-lounge-chair', 'detail-cane-weave', 'dimension-guide'],
    material: 'Placeholder — Solid Wood Frame & Natural Rattan Cane',
    finish: 'Placeholder — Natural Teak / Walnut Brown',
    dimensions: 'Placeholder — Single Chair or Pair Dimensions on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-SC-602',
    name: 'Surya Jali Handcrafted Wooden Wall Art Panel',
    category: 'special-collection',
    categoryLabel: 'Special Collection',
    subCategory: 'Handcrafted Wooden Wall Art',
    shortDescription:
      'Carved architectural wooden wall mural inspired by traditional Rajasthani courtyard jali patterns.',
    description:
      'Demonstration Catalogue Entry: Adds sculptural warmth and heritage character to living room feature walls, foyers and double-height staircases.',
    mainImage: 'wall-art-jali',
    additionalImages: ['wall-art-jali', 'detail-carving', 'dimension-guide'],
    material: 'Placeholder — Hand-Carved Seasoned Wood (Confirmed on enquiry)',
    finish: 'Placeholder — Antique Walnut & Subtle Gold Highlight',
    dimensions: 'Placeholder — Custom Wall Panel Sizes on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: false,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-SC-603',
    name: 'Vraj Gopala — Krishna and Cow Wooden Carving',
    category: 'special-collection',
    categoryLabel: 'Special Collection',
    subCategory: 'Krishna and Cow Wooden Carvings',
    shortDescription:
      'Devotional high-relief wooden carving depicting Lord Krishna with the sacred cow beneath a kadamba tree.',
    description:
      'Demonstration Catalogue Entry: Hand-carved by skilled artisans with expressive detailing, bringing spiritual grace and traditional Indian craftsmanship into your home or pooja space.',
    mainImage: 'carving-krishna-cow',
    additionalImages: ['carving-krishna-cow', 'detail-carving', 'dimension-guide'],
    material: 'Placeholder — Hand-Carved Solid Wood (Confirmed on enquiry)',
    finish: 'Placeholder — Natural Walnut / Antique Wood Finish',
    dimensions: 'Placeholder — Custom Frame & Panel Sizes on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
  {
    id: 'AF-SC-604',
    name: 'Tathagata — Buddha and Bodhi Tree Wooden Carving',
    category: 'special-collection',
    categoryLabel: 'Special Collection',
    subCategory: 'Buddha and Bodhi Tree Wooden Carvings',
    shortDescription:
      'Serene wooden relief carving of Lord Buddha in meditation beneath the sacred Bodhi tree canopy.',
    description:
      'Demonstration Catalogue Entry: A tranquil centerpiece for living areas, meditation corners and entrance foyers, showcasing layered foliage relief and calm proportions.',
    mainImage: 'carving-buddha-bodhi',
    additionalImages: ['carving-buddha-bodhi', 'detail-carving', 'dimension-guide'],
    material: 'Placeholder — Hand-Carved Seasoned Wood (Confirmed on enquiry)',
    finish: 'Placeholder — Warm Teak & Deep Walnut Contrast',
    dimensions: 'Placeholder — Custom Panel Dimensions on Request',
    customisationAvailable: true,
    priceLabel: 'Price on Request',
    featured: true,
    displayStatus: 'active',
    isSampleData: true,
  },
];
