export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  span: "normal" | "wide";
  coverImage: string;
  gallery: string[];
  summary: string;
  description: string;
  details: Array<{ label: string; value: string }>;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "glass-house",
    title: "The Glass House",
    category: "Architecture",
    location: "Tunis, Tunisia",
    year: "2024",
    span: "wide",
    coverImage: "/ProjectsAssets/p1/cover.jpg",
    gallery: [
      "/ProjectsAssets/p1/detail-1.jpg",
      "/ProjectsAssets/p1/detail-2.jpg",
    ],
    summary:
      "A luminous residence that blurs the boundary between interior, exterior, and landscape.",
    description:
      "The Glass House is a contemporary family home defined by expansive glazing, sculpted concrete volumes and a restrained natural palette. Each interior edge is calibrated to maintain privacy while opening the common areas to Mediterranean light.",
    details: [
      { label: "Program", value: "Private residence" },
      { label: "Area", value: "420 m²" },
      { label: "Client", value: "Family-owned estate" },
      { label: "Completion", value: "2024" },
    ],
    highlights: [
      "Panoramic glazed façades with dynamic sunshading",
      "Minimal material palette anchored by timber and stone",
      "Integrated indoor-outdoor living terraces",
    ],
  },
  {
    id: "02",
    slug: "minimalist-haven",
    title: "Minimalist Haven",
    category: "Interior",
    location: "Montréal, Canada",
    year: "2023",
    span: "normal",
    coverImage: "/ProjectsAssets/p2/cover.jpg",
    gallery: [
      "/ProjectsAssets/p2/detail-1.jpg",
      "/ProjectsAssets/p2/detail-2.jpg",
      "/ProjectsAssets/p2/detail-3.jpg",
    ],
    summary:
      "A calm residential interior crafted around clean lines, warm textures, and refined light.",
    description:
      "Minimalist Haven transforms a downtown apartment into a serene retreat with custom joinery, soft natural textiles and a neutral layering strategy. The interior celebrates restraint while allowing each moment of daylight to become a compositional element.",
    details: [
      { label: "Program", value: "Residential interior" },
      { label: "Area", value: "230 m²" },
      { label: "Client", value: "Urban couple" },
      { label: "Completion", value: "2023" },
    ],
    highlights: [
      "Monochrome palette with tactile accents",
      "Space planning for seamless flow and comfort",
      "Custom cabinetry and integrated lighting details",
    ],
  },
  {
    id: "03",
    slug: "urban-villa",
    title: "Urban Villa",
    category: "Architecture",
    location: "Sfax, Tunisia",
    year: "2023",
    span: "normal",
    coverImage: "/ProjectsAssets/p3/cover.jpg",
    gallery: [
      "/ProjectsAssets/p3/detail-1.jpg",
      "/ProjectsAssets/p3/detail-2.jpg",
      "/ProjectsAssets/p3/detail-3.jpg",
      "/ProjectsAssets/p3/detail-4.jpg",
    ],
    summary:
      "A volumetric family home that balances urban presence with private courtyard living.",
    description:
      "Urban Villa reinterprets traditional courtyard form through contemporary massing and refined materiality. The design organizes living spaces around a shaded central garden while emphasizing daylight, privacy and tactile concrete finishes.",
    details: [
      { label: "Program", value: "Family villa" },
      { label: "Area", value: "520 m²" },
      { label: "Client", value: "Local private client" },
      { label: "Completion", value: "2023" },
    ],
    highlights: [
      "Layered façades for solar control and privacy",
      "Central landscaped courtyard and terraces",
      "Material richness with exposed concrete and timber",
    ],
  },
  {
    id: "04",
    slug: "luxe-living",
    title: "Luxe Living",
    category: "Interior",
    location: "Québec, Canada",
    year: "2022",
    span: "normal",
    coverImage: "/ProjectsAssets/p4/cover.jpg",
    gallery: [
      "/ProjectsAssets/p4/detail-1.jpg",
      "/ProjectsAssets/p4/detail-2.jpg",
      "/ProjectsAssets/p4/detail-3.jpg",
      "/ProjectsAssets/p4/detail-4.jpg",
    ],
    summary:
      "A luxury interior experience defined by sculptural surfaces and atmospheric lighting.",
    description:
      "Luxe Living is an elevated apartment interior that blends elegance with practicality. The project uses soft curved profiles, premium materials and precision detailing to create a memorable residential atmosphere.",
    details: [
      { label: "Program", value: "Luxury apartment" },
      { label: "Area", value: "280 m²" },
      { label: "Client", value: "Executive couple" },
      { label: "Completion", value: "2022" },
    ],
    highlights: [
      "High-end finishes and bespoke furniture",
      "Warm, layered lighting strategy",
      "Seamless integration of living, dining and kitchen spaces",
    ],
  },
  {
    id: "05",
    slug: "coastal-retreat",
    title: "Coastal Retreat",
    category: "Architecture",
    location: "La Marsa, Tunisia",
    year: "2022",
    span: "wide",
    coverImage: "/ProjectsAssets/p5/cover.jpg",
    gallery: [
      "/ProjectsAssets/p5/detail-1.jpg",
      "/ProjectsAssets/p5/detail-2.jpg",
      "/ProjectsAssets/p5/detail-3.jpg",
      "/ProjectsAssets/p5/detail-4.jpg",
    ],
    summary:
      "A seaside home designed to feel open, calm, and deeply connected to the coast.",
    description:
      "Coastal Retreat responds to its Mediterranean site with layered terraces, breezy living areas and a muted seaside palette. The architecture emphasizes views, airflow and outdoor living while offering shelter from intense sun and wind.",
    details: [
      { label: "Program", value: "Vacation home" },
      { label: "Area", value: "460 m²" },
      { label: "Client", value: "Coastal family" },
      { label: "Completion", value: "2022" },
    ],
    highlights: [
      "Open-plan coastal living with shaded verandas",
      "Textured masonry and timber ceilings",
      "Landscape-driven connection to the sea",
    ],
  },
  {
    id: "06",
    slug: "sky-penthouse",
    title: "Sky Penthouse",
    category: "Interior",
    location: "Tunis, Tunisia",
    year: "2021",
    span: "normal",
    coverImage: "/ProjectsAssets/p6/cover.jpg",
    gallery: [
      "/ProjectsAssets/p6/detail-1.jpg",
      "/ProjectsAssets/p6/detail-2.jpg",
      "/ProjectsAssets/p6/detail-3.jpg",
    ],
    summary:
      "A dramatic penthouse interior that celebrates spaciousness, light, and city elevation.",
    description:
      "Sky Penthouse redefines luxury urban living with expansive glazing, monolithic surfaces, and custom millwork. The design layers intimate lounge moments with generous entertaining spaces, all framed by skyline views.",
    details: [
      { label: "Program", value: "Penthouse interior" },
      { label: "Area", value: "310 m²" },
      { label: "Client", value: "Urban developer" },
      { label: "Completion", value: "2021" },
    ],
    highlights: [
      "High-contrast materials with rich textures",
      "Integrated entertainment and hospitality areas",
      "Contemporary lighting and architectural detailing",
    ],
  },
  {
    id: "07",
    slug: "heritage-rework",
    title: "Heritage Rework",
    category: "Renovation",
    location: "Tunis, Tunisia",
    year: "2024",
    span: "normal",
    coverImage: "/ProjectsAssets/p7/cover.jpg",
    gallery: [
      "/ProjectsAssets/p7/detail-1.jpg",
    ],
    summary:
      "A careful renovation that preserves heritage character while introducing modern performance.",
    description:
      "Heritage Rework revitalizes an existing Tunisian property by retaining its original structure and layering in contemporary utility. The project blends craftsmanship, sustainable upgrades, and a clear design language that honors the past.",
    details: [
      { label: "Program", value: "Renovation" },
      { label: "Area", value: "370 m²" },
      { label: "Client", value: "Historic homeowner" },
      { label: "Completion", value: "2024" },
    ],
    highlights: [
      "Sensitive restoration of existing volumes",
      "Modern systems integrated discreetly",
      "Balanced contrast between old and new materials",
    ],
  },
  {
    id: "08",
    slug: "modern-pavilion",
    title: "Modern Pavilion",
    category: "Architecture",
    location: "Tunis, Tunisia",
    year: "2024",
    span: "wide",
    coverImage: "/ProjectsAssets/p8/cover.jpg",
    gallery: [
      "/ProjectsAssets/p8/detail-1.jpg",
      "/ProjectsAssets/p8/detail-2.jpg",
    ],
    summary: "A light-filled pavilion blurring indoor and outdoor boundaries.",
    description: "Modern Pavilion uses expansive glass and minimal structural elements to immerse residents in the surrounding landscape.",
    details: [
      { label: "Program", value: "Pavilion" },
      { label: "Area", value: "200 m²" },
      { label: "Client", value: "Private" },
      { label: "Completion", value: "2024" },
    ],
    highlights: ["Seamless indoor-outdoor flow", "Minimal structural footprint", "Extensive use of glass"],
  },
  {
    id: "09",
    slug: "desert-oasis",
    title: "Desert Oasis",
    category: "Architecture",
    location: "Tozeur, Tunisia",
    year: "2023",
    span: "normal",
    coverImage: "/ProjectsAssets/p9/cover.jpg",
    gallery: [
      "/ProjectsAssets/p9/detail-1.jpg",
      "/ProjectsAssets/p9/detail-2.jpg",
    ],
    summary: "A contemporary retreat adapted to the arid climate.",
    description: "Desert Oasis integrates traditional cooling techniques with modern design, providing a serene escape in the harsh desert environment.",
    details: [
      { label: "Program", value: "Retreat" },
      { label: "Area", value: "450 m²" },
      { label: "Client", value: "Hospitality" },
      { label: "Completion", value: "2023" },
    ],
    highlights: ["Passive cooling", "Local materials", "Courtyard design"],
  },
  {
    id: "10",
    slug: "urban-loft",
    title: "Urban Loft",
    category: "Interior",
    location: "Montreal, Canada",
    year: "2024",
    span: "normal",
    coverImage: "/ProjectsAssets/p10/cover.jpg",
    gallery: [
      "/ProjectsAssets/p10/detail-1.jpg",
      "/ProjectsAssets/p10/detail-2.jpg",
    ],
    summary: "An industrial loft transformed into a warm, modern living space.",
    description: "Urban Loft softens industrial features with warm wood tones, strategic lighting, and custom joinery.",
    details: [
      { label: "Program", value: "Residential Interior" },
      { label: "Area", value: "180 m²" },
      { label: "Client", value: "Private" },
      { label: "Completion", value: "2024" },
    ],
    highlights: ["Exposed brick", "Custom joinery", "Warm lighting"],
  },
  {
    id: "11",
    slug: "coastal-villa",
    title: "Coastal Villa",
    category: "Architecture",
    location: "Hammamet, Tunisia",
    year: "2022",
    span: "wide",
    coverImage: "/ProjectsAssets/p11/cover.jpg",
    gallery: [
      "/ProjectsAssets/p11/detail-1.jpg",
      "/ProjectsAssets/p11/detail-2.jpg",
    ],
    summary: "A luxurious villa with panoramic views of the Mediterranean.",
    description: "Coastal Villa maximizes sea views while providing sheltered outdoor living spaces, blending luxury with the natural environment.",
    details: [
      { label: "Program", value: "Villa" },
      { label: "Area", value: "600 m²" },
      { label: "Client", value: "Private Estate" },
      { label: "Completion", value: "2022" },
    ],
    highlights: ["Infinity pool", "Panoramic sea views", "Shaded terraces"],
  },
  {
    id: "12",
    slug: "alpine-chalet",
    title: "Alpine Chalet",
    category: "Architecture",
    location: "Quebec, Canada",
    year: "2024",
    span: "normal",
    coverImage: "/ProjectsAssets/p12/cover.jpg",
    gallery: [
      "/ProjectsAssets/p12/detail-1.jpg",
      "/ProjectsAssets/p12/detail-2.jpg",
    ],
    summary: "A modern alpine retreat blending seamlessly with the snowy landscape.",
    description: "Alpine Chalet is designed to maximize warmth and views, using extensive timber and stone to create a cozy yet expansive interior.",
    details: [
      { label: "Program", value: "Private chalet" },
      { label: "Area", value: "350 m²" },
      { label: "Client", value: "Private owner" },
      { label: "Completion", value: "2024" },
    ],
    highlights: ["Thermal mass heating", "Panoramic mountain views", "Local timber construction"],
  },
  {
    id: "13",
    slug: "art-gallery",
    title: "Art Gallery",
    category: "Renovation",
    location: "Tunis, Tunisia",
    year: "2023",
    span: "normal",
    coverImage: "/ProjectsAssets/p13/cover.jpg",
    gallery: [
      "/ProjectsAssets/p13/detail-1.jpg",
      "/ProjectsAssets/p13/detail-2.jpg",
    ],
    summary: "A historic building meticulously converted into a contemporary art space.",
    description: "This project honors the building's history while providing a clean, flexible backdrop for contemporary art exhibitions.",
    details: [
      { label: "Program", value: "Art Gallery" },
      { label: "Area", value: "800 m²" },
      { label: "Client", value: "Cultural Institution" },
      { label: "Completion", value: "2023" },
    ],
    highlights: ["Historic preservation", "Flexible exhibition space", "Advanced lighting system"],
  }
];
