export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Living Room Furniture'
    | 'Bedroom Furniture'
    | 'Dining Furniture'
    | 'Wooden Furniture Details'
    | 'Furniture Craftsmanship'
    | 'Workshop Photographs'
    | 'Finished Product Photographs'
    | 'Home Interior Inspiration';
  illustrationKey: string;
  caption: string;
  materialNote: string;
  isIllustrativeReference: boolean;
}

export const GALLERY_CATEGORIES = [
  'All',
  'Living Room Furniture',
  'Bedroom Furniture',
  'Dining Furniture',
  'Wooden Furniture Details',
  'Furniture Craftsmanship',
  'Workshop Photographs',
  'Finished Product Photographs',
  'Home Interior Inspiration',
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'GAL-01',
    title: 'Jaipur Courtyard Living Room Ensemble',
    category: 'Living Room Furniture',
    illustrationKey: 'hero-courtyard',
    caption:
      'Illustrative Reference: Handcrafted walnut-toned 3-seater sofa set paired with a low teak coffee table in an arched Jaipur courtyard setting.',
    materialNote: 'Solid Wood & Warm Linen Upholstery Concept',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-02',
    title: 'Rajputana Paneled King Bed Suite',
    category: 'Bedroom Furniture',
    illustrationKey: 'bed-rajputana',
    caption:
      'Illustrative Reference: King-size solid wood bed frame with recessed headboard panels and integrated bedside tables.',
    materialNote: 'Walnut Brown Finish Reference',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-03',
    title: 'Parivar 6-Seater Dining & Cane Chair Arrangement',
    category: 'Dining Furniture',
    illustrationKey: 'dining-parivar',
    caption:
      'Illustrative Reference: Six-seater family dining table surrounded by breathable woven cane-back chairs.',
    materialNote: 'Seasoned Hardwood & Rattan Cane Concept',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-04',
    title: 'Mortise, Tenon & Fluted Timber Joinery',
    category: 'Wooden Furniture Details',
    illustrationKey: 'detail-wood-grain',
    caption:
      'Illustrative Reference: Close-up study of natural wood grain, hand-planed edges and fluted shutter profiles.',
    materialNote: 'Natural Walnut & Teak Grain Reference',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-05',
    title: 'Sacred Krishna & Cow Relief Wood Carving',
    category: 'Furniture Craftsmanship',
    illustrationKey: 'carving-krishna-cow',
    caption:
      'Illustrative Reference: Traditional hand-chiseled relief panel depicting Lord Krishna and Kamadhenu cow motifs.',
    materialNote: 'Artisanal Relief Carving Reference',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-06',
    title: 'Sirsi Road Woodworking & Finishing Studio Concept',
    category: 'Workshop Photographs',
    illustrationKey: 'workshop-craft',
    caption:
      'Illustrative Reference: Timber seasoning, hand-chiseling and natural wax-oil finishing stages prior to final inspection.',
    materialNote: 'Workshop Process Reference',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-07',
    title: 'Jharokha Media Unit & Mehrab Console Study',
    category: 'Finished Product Photographs',
    illustrationKey: 'tv-unit-fluted',
    caption:
      'Illustrative Reference: Completed low-profile TV console with antique brass ring pulls and balanced storage.',
    materialNote: 'Walnut & Antique Brass Reference',
    isIllustrativeReference: true,
  },
  {
    id: 'GAL-08',
    title: 'Buddha & Bodhi Tree Meditative Foyer Wall',
    category: 'Home Interior Inspiration',
    illustrationKey: 'carving-buddha-bodhi',
    caption:
      'Illustrative Reference: Serene entryway styling pairing a carved Buddha & Bodhi tree wooden panel with a console table and brass planters.',
    materialNote: 'Interior Styling Reference',
    isIllustrativeReference: true,
  },
];
