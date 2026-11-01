export interface SubCategoryItem {
  id: string;
  name: string;
  description: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  hindiSubtitle: string;
  shortDescription: string;
  description: string;
  artworkKey: string;
  subCategories: SubCategoryItem[];
}

export const CATEGORIES: CategoryGroup[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    hindiSubtitle: 'बैठक और आँगन संग्रह',
    shortDescription: 'Inviting sofa sets, versatile sofa cum beds, architectural TV units and statement console tables.',
    description:
      'Designed for warm family gatherings and gracious hospitality, our living room collection balances classic Indian architectural proportions with plush everyday comfort.',
    artworkKey: 'cat-living-room',
    subCategories: [
      {
        id: 'sofa-sets',
        name: 'Sofa Sets',
        description: 'Handcrafted wooden frame sofa sets with tailored upholstery and warm walnut or teak detailing.',
      },
      {
        id: 'sofa-cum-beds',
        name: 'Sofa Cum Beds',
        description: 'Space-conscious convertible seating engineered for effortless transition from day lounge to guest bed.',
      },
      {
        id: 'tv-units',
        name: 'TV Units',
        description: 'Low-profile and wall-anchored media consoles with concealed cable management and fluted wood doors.',
      },
      {
        id: 'console-tables',
        name: 'Console Tables',
        description: 'Foyer and hallway accent consoles inspired by traditional Rajasthani courtyard arches and clean joinery.',
      },
    ],
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    hindiSubtitle: 'विश्राम कक्ष संग्रह',
    shortDescription: 'Restful solid-frame beds and spacious chests of drawers crafted for serene bedrooms.',
    description:
      'Thoughtfully proportioned bedroom furniture designed for enduring structural stability, practical storage and calm visual warmth.',
    artworkKey: 'cat-bedroom',
    subCategories: [
      {
        id: 'beds',
        name: 'Beds',
        description: 'King, Queen and custom-sized beds available with hydraulic or box storage and carved or upholstered headboards.',
      },
      {
        id: 'chest-of-drawers',
        name: 'Chest of Drawers',
        description: 'Multi-drawer dressers and vertical storage chests with smooth runners and antique brass hardware.',
      },
    ],
  },
  {
    id: 'dining',
    name: 'Dining',
    hindiSubtitle: 'भोजन कक्ष संग्रह',
    shortDescription: 'Welcoming dining sets, serving sideboards and crockery cabinets built around family meals.',
    description:
      'Bring family and guests together around generously proportioned dining tables paired with ergonomic chairs and functional serving storage.',
    artworkKey: 'cat-dining',
    subCategories: [
      {
        id: 'dining-sets',
        name: 'Dining Sets',
        description: '4-seater, 6-seater and 8-seater dining tables paired with solid wood, upholstered or cane-back chairs.',
      },
      {
        id: 'sideboards',
        name: 'Sideboards',
        description: 'Credenzas and buffet sideboards for table linen, serving platters and dining essentials.',
      },
      {
        id: 'cabinets',
        name: 'Cabinets',
        description: 'Display and crockery cabinets featuring framed glass doors and warm interior shelving.',
      },
    ],
  },
  {
    id: 'storage',
    name: 'Storage',
    hindiSubtitle: 'संग्रहण और व्यवस्था',
    shortDescription: 'Organized entryway shoe racks, multipurpose storage cabinets and home bar cabinets.',
    description:
      'Clutter-free living starts with purposeful storage furniture tailored to Indian home layouts, entryways and entertaining spaces.',
    artworkKey: 'cat-storage',
    subCategories: [
      {
        id: 'shoe-racks',
        name: 'Shoe Racks',
        description: 'Ventilated wooden shoe cabinets with seating bench options for neat, welcoming foyers.',
      },
      {
        id: 'storage-cabinets',
        name: 'Storage Cabinets',
        description: 'Multipurpose credenzas and tall utility cabinets with adjustable shelving.',
      },
      {
        id: 'bar-cabinets',
        name: 'Bar Cabinets',
        description: 'Compact and full-sized home bar cabinets with stemware racks, bottle grids and serving pull-outs.',
      },
    ],
  },
  {
    id: 'study-and-office',
    name: 'Study and Office',
    hindiSubtitle: 'अध्ययन और कार्य कक्ष',
    shortDescription: 'Focused study tables and home-office desks with thoughtful drawer organization.',
    description:
      'Ergonomic writing desks and study tables designed for quiet concentration, reading and modern work-from-home setups.',
    artworkKey: 'cat-study',
    subCategories: [
      {
        id: 'study-tables',
        name: 'Study Tables',
        description: 'Executive writing desks, compact student tables and bookshelf-integrated work surfaces.',
      },
    ],
  },
  {
    id: 'special-collection',
    name: 'Special Collection',
    hindiSubtitle: 'कलात्मक एवं विशेष संग्रह',
    shortDescription: 'Cane furniture, handcrafted wooden wall art, Krishna & Cow carvings, and Buddha & Bodhi Tree carvings.',
    description:
      'Celebrate timeless Indian artistry with breathable woven cane pieces and devotional or nature-inspired wooden relief carvings.',
    artworkKey: 'cat-special',
    subCategories: [
      {
        id: 'cane-furniture',
        name: 'Cane Furniture',
        description: 'Accent chairs, lounge seating and cabinets combining warm hardwood frames with natural woven rattan cane.',
      },
      {
        id: 'handcrafted-wooden-wall-art',
        name: 'Handcrafted Wooden Wall Art',
        description: 'Architectural jali panels, geometric relief murals and heritage arch wall installations.',
      },
      {
        id: 'krishna-and-cow-wooden-carvings',
        name: 'Krishna and Cow Wooden Carvings',
        description: 'Intricately carved wooden panels depicting Lord Krishna and Kamadhenu cow motifs for auspicious interiors.',
      },
      {
        id: 'buddha-and-bodhi-tree-wooden-carvings',
        name: 'Buddha and Bodhi Tree Wooden Carvings',
        description: 'Serene meditative wooden carvings of Lord Buddha beneath the sacred Bodhi tree.',
      },
    ],
  },
  {
    id: 'custom-furniture',
    name: 'Custom Furniture',
    hindiSubtitle: 'आपकी पसंद और नाप के अनुसार',
    shortDescription: 'Bespoke furniture built to your room dimensions, design references and finish preferences.',
    description:
      'Every home has unique spatial requirements. Share your room dimensions, preferred layout or reference sketches for made-to-order furniture.',
    artworkKey: 'cat-custom',
    subCategories: [
      {
        id: 'custom-dimensions',
        name: 'Custom Dimensions',
        description: 'Tailored width, height and depth to fit exact alcoves, apartments and architectural layouts.',
      },
      {
        id: 'custom-designs',
        name: 'Custom Designs',
        description: 'Collaborative adaptation of layouts, drawer configurations and seating arrangements.',
      },
      {
        id: 'custom-finishes',
        name: 'Custom Finishes',
        description: 'Choice of walnut brown, natural teak, honey oak, matte lacquer and upholstery fabrics.',
      },
      {
        id: 'customer-specific-requirements',
        name: 'Customer-Specific Requirements',
        description: 'Bespoke home projects, coordinated room packages and specialized storage adaptations.',
      },
    ],
  },
];
