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
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "orl-office",
    title: "ORL Office",
    category: "Renovation",
    location: "Soukra, Tunisia",
    year: "2026",
    span: "normal",
    coverImage: "/ProjectsAssets/p1/cover.jpg",
    gallery: [
      "/ProjectsAssets/p1/detail-1.jpg",
      "/ProjectsAssets/p1/detail-2.jpg",
    ],
    summary: "A modern medical office renovation focused on functional workflow and patient comfort.",
    description: "The ORL Office project is a meticulous renovation aimed at optimizing the medical workspace. The design balances a clinical necessity with a welcoming atmosphere, featuring clean lines, sterile yet warm materials, and a layout that enhances both patient experience and professional efficiency.",
    details: [
      { label: "Service", value: "Renovation" },
      { label: "Type", value: "Medical Office" },
      { label: "Area", value: "45 m²" },
      { label: "Completion", value: "2026" },
    ],
    highlights: [
      "Optimized patient flow and waiting areas",
      "Ergonomic medical workspace design",
      "Warm, modern aesthetic"
    ],
  },
  {
    id: "02",
    slug: "villa-la-marsa",
    title: "Villa La Marsa",
    category: "Architecture",
    location: "La Marsa, Tunisia",
    year: "2023",
    span: "wide",
    coverImage: "/ProjectsAssets/p2/cover.jpg",
    gallery: [
      "/ProjectsAssets/p2/detail-1.jpg",
      "/ProjectsAssets/p2/detail-2.jpg",
      "/ProjectsAssets/p2/detail-3.jpg",
    ],
    summary: "A contemporary residential architecture project featuring elegant lines and optimal space utilization.",
    description: "Located in the beautiful coastal town of La Marsa, this residential villa is a testament to contemporary architecture. The design integrates spacious living areas with elegant facades, maximizing natural light and offering a seamless transition between indoor and outdoor environments.",
    details: [
      { label: "Service", value: "Architecture" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "210 m²" },
      { label: "Completion", value: "2023" },
    ],
    highlights: [
      "Contemporary architectural lines",
      "Expansive windows for natural lighting",
      "Seamless indoor-outdoor integration"
    ],
  },
  {
    id: "03",
    slug: "villa-lamaro",
    title: "Villa Lamaro",
    category: "Interior & Renovation",
    location: "Saint-Tropez, France",
    year: "2023",
    span: "normal",
    coverImage: "/ProjectsAssets/p3/cover.jpg",
    gallery: [
      "/ProjectsAssets/p3/detail-1.jpg",
      "/ProjectsAssets/p3/detail-2.jpg",
      "/ProjectsAssets/p3/detail-3.jpg",
      "/ProjectsAssets/p3/detail-4.jpg",
    ],
    summary: "A luxurious interior design and renovation blending Mediterranean charm with modern sophistication.",
    description: "Villa Lamaro represents a comprehensive interior design and renovation of a prestigious property in Saint-Tropez. The project breathes new life into the residence, harmonizing the classic French Riviera aesthetic with highly refined, modern interior elements and bespoke finishes.",
    details: [
      { label: "Service", value: "Interior Design & Renovation" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "250 m²" },
      { label: "Completion", value: "2023" },
    ],
    highlights: [
      "Luxurious bespoke finishes",
      "Modernization of classic Mediterranean architecture",
      "Refined, sophisticated color palette"
    ],
  },
  {
    id: "05",
    slug: "dubai-penthouse",
    title: "Penthouse",
    category: "Interior & Renovation",
    location: "Dubai, UAE",
    year: "2024",
    span: "wide",
    coverImage: "/ProjectsAssets/p5/cover.jpg",
    gallery: [
      "/ProjectsAssets/p5/detail-1.jpg",
      "/ProjectsAssets/p5/detail-2.jpg",
      "/ProjectsAssets/p5/detail-3.jpg",
      "/ProjectsAssets/p5/detail-4.jpg",
    ],
    summary: "An exclusive penthouse renovation featuring high-end materials and panoramic views.",
    description: "This Dubai penthouse renovation transforms an urban apartment into a sky-high luxury retreat. The interior design utilizes premium materials, sophisticated lighting, and custom joinery to complement the sweeping views of the city skyline, delivering an unmatched residential experience.",
    details: [
      { label: "Service", value: "Interior Design & Renovation" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "120 m²" },
      { label: "Completion", value: "2024" },
    ],
    highlights: [
      "Premium material selection",
      "Custom architectural joinery",
      "Enhanced spatial flow and lighting"
    ],
  },
  {
    id: "06",
    slug: "duplex-hammamet",
    title: "Duplex Hammamet",
    category: "Interior & Renovation",
    location: "Hammamet, Tunisia",
    year: "2022",
    span: "normal",
    coverImage: "/ProjectsAssets/p6/cover.jpg",
    gallery: [
      "/ProjectsAssets/p6/detail-1.jpg",
      "/ProjectsAssets/p6/detail-2.jpg",
      "/ProjectsAssets/p6/detail-3.jpg",
    ],
    summary: "A stylish duplex renovation that maximizes space and brings coastal light indoors.",
    description: "Located in the coastal city of Hammamet, this duplex renovation project focuses on interior modernization. The design strategy opens up the floor plan to enhance the flow of natural light, using light tones and thoughtful detailing to create a relaxing residential environment.",
    details: [
      { label: "Service", value: "Interior Design & Renovation" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "70 m²" },
      { label: "Completion", value: "2022" },
    ],
    highlights: [
      "Optimized compact living spaces",
      "Bright, coastal-inspired interior palette",
      "Modernized fixtures and finishes"
    ],
  },
  {
    id: "08",
    slug: "duplex-lac",
    title: "Duplex Lac",
    category: "Construction & Interior",
    location: "Les Berges du Lac, Tunisia",
    year: "2021",
    span: "wide",
    coverImage: "/ProjectsAssets/p8/cover.jpg",
    gallery: [
      "/ProjectsAssets/p8/detail-1.jpg",
      "/ProjectsAssets/p8/detail-2.jpg",
    ],
    summary: "A complete construction and interior design project for a premium duplex residence.",
    description: "This project in Les Berges du Lac encompasses both construction and comprehensive interior design. The duplex features generous proportions, high-quality finishes, and a cohesive design language that ensures both luxury and comfort for modern family living.",
    details: [
      { label: "Service", value: "Construction & Interior Design" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "150 m²" },
      { label: "Completion", value: "2021" },
    ],
    highlights: [
      "Turnkey construction and design",
      "Spacious, open-plan layouts",
      "High-end residential detailing"
    ],
  },
  {
    id: "09",
    slug: "motel-ndjamena",
    title: "Motel N'Djamena",
    category: "Architecture & Construction",
    location: "N'Djamena, Chad",
    year: "2020",
    span: "normal",
    coverImage: "/ProjectsAssets/p9/cover.jpg",
    gallery: [
      "/ProjectsAssets/p9/detail-1.jpg",
      "/ProjectsAssets/p9/detail-2.jpg",
    ],
    summary: "A large-scale hospitality project combining architecture, construction, and interior design.",
    description: "The Motel N'Djamena project is a significant hospitality development involving full-scale architecture, interior design, and construction. Designed to accommodate travelers with comfort and style, the facility features robust materials suited to the local climate and an inviting interior aesthetic.",
    details: [
      { label: "Service", value: "Architecture, Interior & Construction" },
      { label: "Type", value: "Hospitality" },
      { label: "Area", value: "1200 m²" },
      { label: "Completion", value: "2020" },
    ],
    highlights: [
      "Comprehensive hospitality design",
      "Climate-responsive architecture",
      "Durable and stylish interiors"
    ],
  },
  {
    id: "10",
    slug: "hammamet-residential",
    title: "Hammamet Project",
    category: "Interior & Renovation",
    location: "Hammamet, Tunisia",
    year: "2021",
    span: "normal",
    coverImage: "/ProjectsAssets/p10/cover.jpg",
    gallery: [
      "/ProjectsAssets/p10/detail-1.jpg",
      "/ProjectsAssets/p10/detail-2.jpg",
    ],
    summary: "An elegant interior renovation transforming a residential space into a modern sanctuary.",
    description: "This residential interior design and renovation project in Hammamet rejuvenates an existing home. The updated design focuses on creating a harmonious living environment with careful attention to material selection, lighting, and spatial arrangement.",
    details: [
      { label: "Service", value: "Interior Design & Renovation" },
      { label: "Type", value: "Residential" },
      { label: "Area", value: "100 m²" },
      { label: "Completion", value: "2021" },
    ],
    highlights: [
      "Modern interior transformation",
      "Harmonious material and color palette",
      "Tailored residential upgrades"
    ],
  },
  {
    id: "11",
    slug: "polyclinic-misrata",
    title: "Polyclinic Misrata",
    category: "Construction & Architecture",
    location: "Misrata, Libya",
    year: "2018",
    span: "wide",
    coverImage: "/ProjectsAssets/p11/cover.jpg",
    gallery: [
      "/ProjectsAssets/p11/detail-1.jpg",
      "/ProjectsAssets/p11/detail-2.jpg",
    ],
    summary: "A comprehensive medical facility project integrating architecture, construction, and interior design.",
    description: "The Polyclinic Misrata is a major healthcare project that required a synchronized approach to construction, architecture, and interior design. The facility is engineered to meet strict medical standards while providing a reassuring, clean, and highly functional environment for both patients and medical staff.",
    details: [
      { label: "Service", value: "Construction, Architecture & Interior" },
      { label: "Type", value: "Healthcare" },
      { label: "Area", value: "Not specified" },
      { label: "Completion", value: "2018" },
    ],
    highlights: [
      "Specialized healthcare architecture",
      "Integrated technical and medical systems",
      "Functional and reassuring interior design"
    ],
  }
];
