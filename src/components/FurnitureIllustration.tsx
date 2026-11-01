import React from 'react';

interface FurnitureIllustrationProps {
  artworkKey: string;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  showReferenceBadge?: boolean;
}

/**
 * High-detail bespoke SVG architectural & furniture illustrations in AANGAN FURNITURE's
 * official palette (Walnut #4A2818, Antique Gold #C28A3D, Ivory #F5EBDD, Forest Green #263B2B,
 * Supporting Teak #8B573A, Sand Beige #D8C3A5).
 * Ensures zero broken images and rich domain-authentic visuals across all catalogue items.
 */
export const FurnitureIllustration: React.FC<FurnitureIllustrationProps> = ({
  artworkKey,
  alt,
  className = '',
  aspectRatio = '4:3',
}) => {
  const viewBox =
    aspectRatio === '16:9'
      ? '0 0 800 450'
      : aspectRatio === '1:1'
      ? '0 0 600 600'
      : '0 0 600 450';

  const renderScene = () => {
    switch (artworkKey) {
      case 'hero-courtyard':
      case 'cat-living-room':
      case 'sofa-heritage':
        return (
          <g>
            {/* Sunlit Jaipur Courtyard Arch Backdrop */}
            <rect width="800" height="450" fill="#F5EBDD" />
            <path d="M0 360H800V450H0V360Z" fill="#D8C3A5" />
            <line x1="0" y1="360" x2="800" y2="360" stroke="#C28A3D" strokeWidth="2" />
            {/* Arched Jharokha Alcove */}
            <path
              d="M170 360V145C170 72 238 24 300 24C362 24 430 72 430 145V360"
              fill="#EFE2CE"
              stroke="#C28A3D"
              strokeWidth="2.5"
            />
            {/* Sunbeam Overlay */}
            <polygon points="0,0 320,0 540,450 0,450" fill="url(#warmSunbeam)" opacity="0.35" />
            {/* Framed Wooden Jali Art on Right Wall */}
            <rect x="490" y="65" width="110" height="145" rx="6" fill="#4A2818" stroke="#C28A3D" strokeWidth="3" />
            <circle cx="545" cy="137" r="34" stroke="#C28A3D" strokeWidth="2" fill="none" />
            <path d="M545 103V171M511 137H579" stroke="#C28A3D" strokeWidth="1.5" />
            {/* Indoor Courtyard Planter */}
            <ellipse cx="115" cy="348" rx="34" ry="8" fill="#4A2818" opacity="0.2" />
            <path d="M92 290H138L130 348H100L92 290Z" fill="#C28A3D" stroke="#4A2818" strokeWidth="2" />
            <path
              d="M115 290C95 250 75 235 68 210M115 290C115 245 118 215 115 190M115 290C135 250 152 235 162 215"
              stroke="#263B2B"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Handcrafted 3-Seater Walnut Sofa Set */}
            <ellipse cx="345" cy="392" rx="185" ry="14" fill="#292522" opacity="0.18" />
            {/* Backrest Frame */}
            <rect x="175" y="210" width="340" height="95" rx="10" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
            {/* Three Upholstered Back Cushions */}
            <rect x="190" y="222" width="100" height="74" rx="8" fill="#F5EBDD" stroke="#D8C3A5" strokeWidth="2" />
            <rect x="295" y="222" width="100" height="74" rx="8" fill="#F5EBDD" stroke="#D8C3A5" strokeWidth="2" />
            <rect x="400" y="222" width="100" height="74" rx="8" fill="#F5EBDD" stroke="#D8C3A5" strokeWidth="2" />
            {/* Accent Cushions */}
            <rect x="202" y="246" width="42" height="42" rx="6" fill="#C28A3D" />
            <rect x="444" y="246" width="42" height="42" rx="6" fill="#8B573A" />
            {/* Seat Base */}
            <rect x="170" y="294" width="350" height="32" rx="6" fill="#D8C3A5" stroke="#8B573A" strokeWidth="2" />
            <rect x="165" y="322" width="360" height="26" rx="4" fill="#4A2818" />
            {/* Sculpted Walnut Armrests with Cane Inset */}
            <rect x="155" y="252" width="22" height="96" rx="5" fill="#4A2818" stroke="#C28A3D" strokeWidth="1.5" />
            <rect x="513" y="252" width="22" height="96" rx="5" fill="#4A2818" stroke="#C28A3D" strokeWidth="1.5" />
            {/* Tapered Solid Wood Legs with Brass Ferrules */}
            <rect x="175" y="348" width="12" height="38" fill="#4A2818" />
            <rect x="175" y="378" width="12" height="8" fill="#C28A3D" />
            <rect x="503" y="348" width="12" height="38" fill="#4A2818" />
            <rect x="503" y="378" width="12" height="8" fill="#C28A3D" />
            {/* Foreground Handcrafted Teak Coffee Table & Brass Urli */}
            <ellipse cx="345" cy="422" rx="125" ry="10" fill="#292522" opacity="0.22" />
            <rect x="235" y="382" width="220" height="12" rx="4" fill="#8B573A" stroke="#4A2818" strokeWidth="2" />
            <rect x="252" y="394" width="10" height="28" fill="#4A2818" />
            <rect x="428" y="394" width="10" height="28" fill="#4A2818" />
            <line x1="262" y1="410" x2="428" y2="410" stroke="#C28A3D" strokeWidth="2.5" />
            <path d="M322 370H368L360 382H330L322 370Z" fill="#C28A3D" stroke="#4A2818" strokeWidth="1.5" />
          </g>
        );

      case 'sofa-cum-bed':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="350" width="600" height="100" fill="#D8C3A5" />
            <ellipse cx="300" cy="390" rx="210" ry="14" fill="#292522" opacity="0.16" />
            {/* Backrest & Pull-out Base */}
            <rect x="110" y="175" width="380" height="90" rx="8" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
            <rect x="126" y="190" width="168" height="65" rx="6" fill="#EFE2CE" />
            <rect x="306" y="190" width="168" height="65" rx="6" fill="#EFE2CE" />
            {/* Extended Convertible Lounger Deck */}
            <rect x="95" y="260" width="410" height="52" rx="8" fill="#D8C3A5" stroke="#8B573A" strokeWidth="2" />
            <rect x="95" y="308" width="410" height="46" rx="4" fill="#4A2818" />
            {/* Storage Drawer Pulls */}
            <rect x="150" y="325" width="90" height="14" rx="3" fill="#8B573A" stroke="#C28A3D" strokeWidth="1.5" />
            <rect x="360" y="325" width="90" height="14" rx="3" fill="#8B573A" stroke="#C28A3D" strokeWidth="1.5" />
            {/* Armrests & Legs */}
            <rect x="82" y="220" width="20" height="150" rx="4" fill="#4A2818" />
            <rect x="498" y="220" width="20" height="150" rx="4" fill="#4A2818" />
          </g>
        );

      case 'tv-unit-fluted':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="355" width="600" height="95" fill="#D8C3A5" />
            {/* Wall Mounted Framed TV Silhouette */}
            <rect x="165" y="60" width="270" height="150" rx="6" fill="#292522" stroke="#C28A3D" strokeWidth="3" />
            <path d="M210 175L265 120L325 165L365 135L405 175H210Z" fill="#4A2818" opacity="0.6" />
            {/* Low-Profile Fluted Walnut TV Console */}
            <ellipse cx="300" cy="390" rx="220" ry="12" fill="#292522" opacity="0.16" />
            <rect x="80" y="255" width="440" height="92" rx="6" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
            {/* Left & Right Fluted Shutters */}
            <rect x="95" y="268" width="125" height="66" rx="3" fill="#8B573A" />
            <path d="M115 268V334M135 268V334M155 268V334M175 268V334M195 268V334" stroke="#4A2818" strokeWidth="2" />
            <rect x="380" y="268" width="125" height="66" rx="3" fill="#8B573A" />
            <path d="M400 268V334M420 268V334M440 268V334M460 268V334M480 268V334" stroke="#4A2818" strokeWidth="2" />
            {/* Center Open Media Shelf & Drawer */}
            <rect x="232" y="268" width="136" height="30" rx="2" fill="#292522" />
            <rect x="232" y="304" width="136" height="30" rx="2" fill="#8B573A" />
            <circle cx="300" cy="319" r="5" fill="#C28A3D" />
            {/* Legs */}
            <path d="M110 347L100 385M490 347L500 385M240 347V382M360 347V382" stroke="#4A2818" strokeWidth="8" strokeLinecap="round" />
          </g>
        );

      case 'console-arch':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="360" width="600" height="90" fill="#D8C3A5" />
            {/* Round Brass Foyer Mirror Above Console */}
            <circle cx="300" cy="120" r="62" fill="#EFE2CE" stroke="#C28A3D" strokeWidth="5" />
            {/* Mehrab Arch Entryway Console Table */}
            <rect x="130" y="215" width="340" height="18" rx="4" fill="#4A2818" />
            <rect x="142" y="233" width="316" height="34" fill="#8B573A" stroke="#4A2818" strokeWidth="2" />
            <circle cx="225" cy="250" r="5" fill="#C28A3D" />
            <circle cx="375" cy="250" r="5" fill="#C28A3D" />
            {/* Arch Base Supports */}
            <path
              d="M150 380V267H450V380H422V315C422 288 395 275 365 275H235C205 275 178 288 178 315V380H150Z"
              fill="#4A2818"
            />
            <line x1="150" y1="352" x2="450" y2="352" stroke="#C28A3D" strokeWidth="3" />
          </g>
        );

      case 'cat-bedroom':
      case 'bed-rajputana':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="350" width="600" height="100" fill="#D8C3A5" />
            <ellipse cx="300" cy="395" rx="220" ry="15" fill="#292522" opacity="0.18" />
            {/* Rajputana Carved & Paneled Solid Wood Headboard */}
            <rect x="115" y="105" width="370" height="155" rx="8" fill="#4A2818" stroke="#C28A3D" strokeWidth="3" />
            <rect x="135" y="125" width="102" height="110" rx="4" fill="#8B573A" stroke="#C28A3D" strokeWidth="1.5" />
            <rect x="249" y="125" width="102" height="110" rx="4" fill="#8B573A" stroke="#C28A3D" strokeWidth="1.5" />
            <rect x="363" y="125" width="102" height="110" rx="4" fill="#8B573A" stroke="#C28A3D" strokeWidth="1.5" />
            {/* Pillows & Crisp Ivory Bedding */}
            <rect x="155" y="210" width="125" height="48" rx="12" fill="#F5EBDD" stroke="#D8C3A5" strokeWidth="2" />
            <rect x="320" y="210" width="125" height="48" rx="12" fill="#F5EBDD" stroke="#D8C3A5" strokeWidth="2" />
            <rect x="105" y="248" width="390" height="68" rx="10" fill="#EFE2CE" stroke="#C28A3D" strokeWidth="2" />
            {/* Solid Walnut Bed Frame & Footboard */}
            <rect x="95" y="302" width="410" height="52" rx="5" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
            <rect x="108" y="354" width="18" height="34" fill="#4A2818" />
            <rect x="474" y="354" width="18" height="34" fill="#4A2818" />
          </g>
        );

      case 'chest-drawers':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="365" width="600" height="85" fill="#D8C3A5" />
            <ellipse cx="300" cy="392" rx="135" ry="12" fill="#292522" opacity="0.16" />
            {/* Tall 5-Drawer Walnut Chest */}
            <rect x="185" y="85" width="230" height="275" rx="6" fill="#4A2818" stroke="#C28A3D" strokeWidth="2.5" />
            {[0, 1, 2, 3, 4].map((idx) => (
              <g key={idx}>
                <rect
                  x="202"
                  y={102 + idx * 50}
                  width="196"
                  height="40"
                  rx="3"
                  fill="#8B573A"
                  stroke="#C28A3D"
                  strokeWidth="1.2"
                />
                <circle cx="255" cy={122 + idx * 50} r="4.5" fill="#C28A3D" />
                <circle cx="345" cy={122 + idx * 50} r="4.5" fill="#C28A3D" />
              </g>
            ))}
            <rect x="198" y="360" width="14" height="28" fill="#4A2818" />
            <rect x="388" y="360" width="14" height="28" fill="#4A2818" />
          </g>
        );

      case 'cat-dining':
      case 'dining-parivar':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="355" width="600" height="95" fill="#D8C3A5" />
            <ellipse cx="300" cy="392" rx="225" ry="14" fill="#292522" opacity="0.16" />
            {/* Three Cane-Back Dining Chairs Behind Table */}
            {[155, 265, 375].map((xPos, i) => (
              <g key={i}>
                <rect x={xPos} y="150" width="70" height="95" rx="8" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
                <rect x={xPos + 10} y="162" width="50" height="65" rx="4" fill="#D8C3A5" />
                <rect x={xPos + 6} y="275" width="8" height="105" fill="#8B573A" />
                <rect x={xPos + 56} y="275" width="8" height="105" fill="#8B573A" />
              </g>
            ))}
            {/* Solid Walnut 6-Seater Dining Table */}
            <rect x="95" y="238" width="410" height="22" rx="5" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
            <rect x="115" y="260" width="370" height="14" fill="#8B573A" />
            <rect x="122" y="260" width="18" height="128" fill="#4A2818" />
            <rect x="460" y="260" width="18" height="128" fill="#4A2818" />
            {/* Brass Centerpiece Bowl */}
            <path d="M265 215H335L322 238H278L265 215Z" fill="#C28A3D" />
          </g>
        );

      case 'sideboard-karni':
      case 'cabinet-darbar':
      case 'cat-storage':
      case 'shoe-rack-swagat':
      case 'storage-samridhi':
      case 'bar-cabinet-mehfil':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="360" width="600" height="90" fill="#D8C3A5" />
            <ellipse cx="300" cy="390" rx="195" ry="12" fill="#292522" opacity="0.16" />
            {/* Handcrafted Sideboard / Storage Credenza */}
            <rect x="115" y="155" width="370" height="195" rx="6" fill="#4A2818" stroke="#C28A3D" strokeWidth="2.5" />
            {/* Three Arched Cabinet Doors */}
            {[132, 246, 360].map((xPos, i) => (
              <g key={i}>
                <rect x={xPos} y="172" width="106" height="160" rx="4" fill="#8B573A" stroke="#C28A3D" strokeWidth="1.5" />
                <path
                  d={`M${xPos + 14} 318V212C${xPos + 14} 192 ${xPos + 32} 182 ${xPos + 53} 182C${xPos + 74} 182 ${xPos + 92} 192 ${xPos + 92} 212V318Z`}
                  fill="#4A2818"
                  stroke="#C28A3D"
                  strokeWidth="1.2"
                />
                <circle cx={xPos + 53} cy="252" r="5" fill="#C28A3D" />
              </g>
            ))}
            <rect x="135" y="350" width="14" height="34" fill="#4A2818" />
            <rect x="451" y="350" width="14" height="34" fill="#4A2818" />
          </g>
        );

      case 'cat-study':
      case 'study-table-adhyayan':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="360" width="600" height="90" fill="#D8C3A5" />
            {/* Study Table with Three Drawers */}
            <rect x="110" y="210" width="380" height="18" rx="4" fill="#4A2818" stroke="#C28A3D" strokeWidth="1.5" />
            <rect x="122" y="228" width="230" height="36" fill="#8B573A" stroke="#4A2818" strokeWidth="2" />
            {/* Right Pedestal Drawers */}
            <rect x="352" y="228" width="126" height="145" fill="#4A2818" stroke="#C28A3D" strokeWidth="2" />
            <rect x="364" y="240" width="102" height="34" rx="2" fill="#8B573A" />
            <rect x="364" y="282" width="102" height="34" rx="2" fill="#8B573A" />
            <rect x="364" y="324" width="102" height="36" rx="2" fill="#8B573A" />
            {/* Left Legs */}
            <rect x="128" y="264" width="16" height="118" fill="#4A2818" />
            {/* Desk Lamp & Books */}
            <rect x="160" y="185" width="65" height="25" rx="3" fill="#C28A3D" />
            <path d="M415 210V155L385 135" stroke="#C28A3D" strokeWidth="4" strokeLinecap="round" />
            <path d="M365 145L395 125L405 150Z" fill="#263B2B" />
          </g>
        );

      case 'cane-lounge-chair':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            <rect y="360" width="600" height="90" fill="#D8C3A5" />
            <ellipse cx="300" cy="390" rx="145" ry="12" fill="#292522" opacity="0.16" />
            {/* Woven Rattan Cane & Solid Walnut Lounge Chair */}
            <rect x="195" y="115" width="210" height="150" rx="24" fill="#4A2818" stroke="#C28A3D" strokeWidth="3" />
            <rect x="215" y="135" width="170" height="110" rx="14" fill="#D8C3A5" stroke="#8B573A" strokeWidth="2" />
            {/* Cane Octagonal Weave Lines */}
            <path
              d="M215 165H385M215 190H385M215 215H385M255 135V245M300 135V245M345 135V245"
              stroke="#8B573A"
              strokeWidth="1.5"
              opacity="0.65"
            />
            {/* Seat Cushion & Angled Teak Legs */}
            <rect x="180" y="255" width="240" height="38" rx="10" fill="#EFE2CE" stroke="#C28A3D" strokeWidth="2" />
            <rect x="175" y="288" width="250" height="22" rx="4" fill="#4A2818" />
            <path d="M200 310L175 385M400 310L425 385M175 235H205M395 235H425" stroke="#4A2818" strokeWidth="12" strokeLinecap="round" />
          </g>
        );

      case 'carving-krishna-cow':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            {/* Handcrafted Carved Wooden Relief Panel: Krishna & Cow Motif */}
            <rect x="125" y="45" width="350" height="360" rx="12" fill="#4A2818" stroke="#C28A3D" strokeWidth="4" />
            <rect x="145" y="65" width="310" height="320" rx="8" fill="#8B573A" stroke="#C28A3D" strokeWidth="2" />
            {/* Traditional Cusped Arch Frame */}
            <path
              d="M165 365V175C165 112 225 82 300 82C375 82 435 112 435 175V365H165Z"
              fill="#4A2818"
              stroke="#C28A3D"
              strokeWidth="2.5"
            />
            {/* Kadamba Tree Canopy Relief */}
            <circle cx="300" cy="135" r="42" fill="#8B573A" opacity="0.55" />
            <circle cx="255" cy="150" r="32" fill="#8B573A" opacity="0.55" />
            <circle cx="345" cy="150" r="32" fill="#8B573A" opacity="0.55" />
            {/* Stylized Flute & Peacock Feather Emblem */}
            <circle cx="285" cy="195" r="22" fill="#C28A3D" />
            <path d="M285 218V335" stroke="#C28A3D" strokeWidth="14" strokeLinecap="round" />
            <line x1="245" y1="210" x2="345" y2="198" stroke="#F5EBDD" strokeWidth="5" strokeLinecap="round" />
            {/* Sacred Cow Silhouette in Carved Relief */}
            <ellipse cx="348" cy="300" rx="46" ry="26" fill="#D8C3A5" />
            <circle cx="385" cy="278" r="16" fill="#D8C3A5" />
            <path d="M315 322V355M335 322V355M365 322V355M380 322V355" stroke="#D8C3A5" strokeWidth="6" strokeLinecap="round" />
          </g>
        );

      case 'carving-buddha-bodhi':
      case 'cat-special':
      case 'wall-art-jali':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            {/* Carved Wooden Panel: Buddha & Sacred Bodhi Tree */}
            <rect x="125" y="45" width="350" height="360" rx="12" fill="#4A2818" stroke="#C28A3D" strokeWidth="4" />
            <circle cx="300" cy="225" r="138" fill="#8B573A" stroke="#C28A3D" strokeWidth="3" />
            {/* Sacred Bodhi Tree Branches & Leaves */}
            <path
              d="M300 225V105M300 165L235 125M300 165L365 125M300 190L210 165M300 190L390 165"
              stroke="#4A2818"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="300" cy="125" r="35" fill="#4A2818" opacity="0.35" />
            <circle cx="235" cy="145" r="32" fill="#4A2818" opacity="0.35" />
            <circle cx="365" cy="145" r="32" fill="#4A2818" opacity="0.35" />
            {/* Meditating Buddha Silhouette in Relief */}
            <circle cx="300" cy="225" r="28" fill="#C28A3D" opacity="0.35" />
            <circle cx="300" cy="225" r="16" fill="#F5EBDD" />
            <path d="M294 205H306L303 196H297L294 205Z" fill="#C28A3D" />
            <path
              d="M262 315C262 272 280 248 300 248C320 248 338 272 338 315H262Z"
              fill="#F5EBDD"
            />
            <ellipse cx="300" cy="318" rx="58" ry="14" fill="#C28A3D" />
          </g>
        );

      case 'dimension-guide':
      case 'cat-custom':
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            {/* Architectural Blueprint & Custom Dimension Grid */}
            <rect x="55" y="45" width="490" height="360" rx="8" fill="#EFE2CE" stroke="#C28A3D" strokeWidth="2" />
            <path
              d="M140 275H460V335H140V275ZM160 185H440V275H160V185Z"
              fill="none"
              stroke="#4A2818"
              strokeWidth="3"
            />
            {/* Width / Height Callout Arrows */}
            <line x1="140" y1="365" x2="460" y2="365" stroke="#8B573A" strokeWidth="2" strokeDasharray="5 5" />
            <line x1="110" y1="185" x2="110" y2="335" stroke="#8B573A" strokeWidth="2" strokeDasharray="5 5" />
            <text x="300" y="388" textAnchor="middle" fill="#4A2818" fontSize="14" fontWeight="600">
              CUSTOM WIDTH · DEPTH · HEIGHT
            </text>
            <text x="300" y="130" textAnchor="middle" fill="#8B573A" fontSize="15" fontWeight="600">
              BESPOKE ARCHITECTURAL SPECIFICATION
            </text>
          </g>
        );

      default:
        return (
          <g>
            <rect width="600" height="450" fill="#F5EBDD" />
            {/* Wood Grain & Joinery Craft Study */}
            <rect x="75" y="55" width="450" height="340" rx="10" fill="#4A2818" stroke="#C28A3D" strokeWidth="3" />
            <path
              d="M95 125C200 105 380 145 505 115M95 195C220 175 360 215 505 185M95 265C210 245 390 285 505 255M95 335C220 315 380 355 505 325"
              stroke="#8B573A"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="300" cy="225" r="56" fill="#F5EBDD" stroke="#C28A3D" strokeWidth="4" />
            <path d="M276 238L300 202L324 238H276Z" fill="#4A2818" />
          </g>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#F5EBDD] select-none ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        viewBox={viewBox}
        className="w-full h-full object-cover block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="warmSunbeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C28A3D" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {renderScene()}
      </svg>
    </div>
  );
};
