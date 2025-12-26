import type { Destination } from "@/lib/types";

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const destinations: Destination[] = [
  {
    slug: "kyoto-echoes",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    description:
      "Lantern-lit alleys, temple gardens, and quiet tea houses stitched into a walkable city of rituals.",
    tags: ["Culture", "Food", "City"],
    ratingAverage: 4.8,
    reviewCount: 126,
    highlights: {
      bestTimeToVisit: "March to May for sakura, November for crimson maples",
      budgetLevel: "Mid-range",
      mustDo: [
        "Sunrise stroll through Fushimi Inari",
        "Kaiseki dinner in Gion",
        "Philosopher's Path at dusk",
      ],
    },
    images: [pexels(35323187)],
    publishedAt: "2025-02-12",
  },
  {
    slug: "amalfi-ribbon",
    name: "Amalfi Coast",
    country: "Italy",
    region: "Europe",
    description:
      "Cliffside villages, lemon groves, and cobalt coves framed by sun-bleached stone.",
    tags: ["Beach", "Luxury", "Food"],
    ratingAverage: 4.7,
    reviewCount: 98,
    highlights: {
      bestTimeToVisit: "May to June for warm seas and quieter lanes",
      budgetLevel: "Luxury",
      mustDo: [
        "Boat ride to hidden coves",
        "Sunset aperitivo in Ravello",
        "Limoncello tasting in Amalfi",
      ],
    },
    images: [pexels(32501472)],
    publishedAt: "2025-03-08",
  },
  {
    slug: "cape-town-crescent",
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    description:
      "Oceanfront promenades and mountain backdrops with a cosmopolitan dining scene.",
    tags: ["Nature", "City", "Food"],
    ratingAverage: 4.6,
    reviewCount: 84,
    highlights: {
      bestTimeToVisit: "November to March for long, sunny days",
      budgetLevel: "Mid-range",
      mustDo: [
        "Cable car to Table Mountain",
        "Winelands day trip",
        "Bo-Kaap color walk",
      ],
    },
    images: [pexels(32275918)],
    publishedAt: "2024-12-02",
  },
  {
    slug: "patagonia-veil",
    name: "Patagonia",
    country: "Chile & Argentina",
    region: "Americas",
    description:
      "Glacial lakes, granite peaks, and windswept plains for big-sky trekking.",
    tags: ["Nature", "Budget"],
    ratingAverage: 4.9,
    reviewCount: 72,
    highlights: {
      bestTimeToVisit: "December to February for milder hikes",
      budgetLevel: "Mid-range",
      mustDo: [
        "W-trek in Torres del Paine",
        "Perito Moreno glacier lookout",
        "Lakeside estancia stay",
      ],
    },
    images: [pexels(8109891)],
    publishedAt: "2024-11-14",
  },
  {
    slug: "lisbon-gold",
    name: "Lisbon",
    country: "Portugal",
    region: "Europe",
    description:
      "Hillside miradouros, tiled facades, and riverfront cafes alive with saudade.",
    tags: ["City", "Culture", "Food"],
    ratingAverage: 4.5,
    reviewCount: 110,
    highlights: {
      bestTimeToVisit: "September to October for warm evenings",
      budgetLevel: "Budget",
      mustDo: [
        "Tram 28 ride",
        "Pastel tasting in Belem",
        "Sunset at Miradouro da Senhora do Monte",
      ],
    },
    images: [pexels(29743109)],
    publishedAt: "2025-01-20",
  },
  {
    slug: "queenstown-lake",
    name: "Queenstown",
    country: "New Zealand",
    region: "Oceania",
    description:
      "Alpine lake vistas, vineyard trails, and a frontier of adrenaline adventures.",
    tags: ["Nature", "Luxury"],
    ratingAverage: 4.7,
    reviewCount: 67,
    highlights: {
      bestTimeToVisit: "June to August for snow sports",
      budgetLevel: "Mid-range",
      mustDo: [
        "Lake Wakatipu cruise",
        "Central Otago winery route",
        "Skyline gondola at dusk",
      ],
    },
    images: [pexels(28970671)],
    publishedAt: "2024-10-05",
  },
  {
    slug: "marrakech-lanterns",
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    description:
      "Spice-scented souks and riad courtyards wrapped in warm terracotta.",
    tags: ["Culture", "Food", "Budget"],
    ratingAverage: 4.4,
    reviewCount: 95,
    highlights: {
      bestTimeToVisit: "October to March for cooler evenings",
      budgetLevel: "Budget",
      mustDo: [
        "Jemaa el-Fnaa at night",
        "Majorelle Garden visit",
        "Atlas Mountains day trip",
      ],
    },
    images: [pexels(30243272)],
    publishedAt: "2024-09-22",
  },
  {
    slug: "cartagena-breeze",
    name: "Cartagena",
    country: "Colombia",
    region: "Americas",
    description:
      "Caribbean color, colonial balconies, and late-night salsa drift.",
    tags: ["Beach", "Culture", "City"],
    ratingAverage: 4.3,
    reviewCount: 58,
    highlights: {
      bestTimeToVisit: "December to March for dry coastal days",
      budgetLevel: "Budget",
      mustDo: [
        "Sunset on the city walls",
        "Getsemani street art tour",
        "Rosario Islands escape",
      ],
    },
    images: [pexels(29285003)],
    publishedAt: "2024-08-18",
  },
  {
    slug: "seoul-nightmark",
    name: "Seoul",
    country: "South Korea",
    region: "Asia",
    description:
      "Design-driven districts, riverside parks, and a neon culinary playground.",
    tags: ["City", "Food", "Culture"],
    ratingAverage: 4.6,
    reviewCount: 132,
    highlights: {
      bestTimeToVisit: "April to May for blossoms",
      budgetLevel: "Mid-range",
      mustDo: [
        "Han River picnic",
        "Bukchon Hanok walk",
        "Night markets in Myeongdong",
      ],
    },
    images: [pexels(13679285)],
    publishedAt: "2025-02-01",
  },
  {
    slug: "reykjavik-frost",
    name: "Reykjavik",
    country: "Iceland",
    region: "Europe",
    description:
      "Geothermal pools, coastal breezes, and a launchpad for northern light chases.",
    tags: ["Nature", "Luxury", "Culture"],
    ratingAverage: 4.5,
    reviewCount: 76,
    highlights: {
      bestTimeToVisit: "February to March for aurora nights",
      budgetLevel: "Luxury",
      mustDo: [
        "Blue Lagoon soak",
        "Golden Circle drive",
        "Harpa concert hall tour",
      ],
    },
    images: [pexels(31556862)],
    publishedAt: "2024-12-29",
  },
  {
    slug: "savannah-harbor",
    name: "Savannah",
    country: "United States",
    region: "Americas",
    description:
      "Tree-lined squares, slow-drip cafes, and porch conversations by the river.",
    tags: ["Culture", "City", "Food"],
    ratingAverage: 4.2,
    reviewCount: 44,
    highlights: {
      bestTimeToVisit: "March to May for azalea bloom",
      budgetLevel: "Budget",
      mustDo: [
        "Historic district walking tour",
        "River Street sunset",
        "Forsyth Park picnic",
      ],
    },
    images: [pexels(31096876)],
    publishedAt: "2024-07-01",
  },
  {
    slug: "bali-terraces",
    name: "Ubud",
    country: "Indonesia",
    region: "Asia",
    description:
      "Rice terraces, wellness sanctuaries, and artisan markets tucked in jungle green.",
    tags: ["Nature", "Culture", "Luxury"],
    ratingAverage: 4.7,
    reviewCount: 120,
    highlights: {
      bestTimeToVisit: "May to September for dry mornings",
      budgetLevel: "Mid-range",
      mustDo: [
        "Tegalalang sunrise walk",
        "Sound bath session",
        "Water temple visit",
      ],
    },
    images: [pexels(2412711)],
    publishedAt: "2025-01-05",
  },
];
