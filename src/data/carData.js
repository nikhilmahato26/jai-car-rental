export const BUSINESS_INFO = {
  name: "JAI CAR RENTAL",
  owner: "JAI PRAKASH SINGH",
  title: "Owner / Manager",
  phonePrimary: "7722006000",
  phoneSecondary: "9021312200",
  whatsappNumber: "7722006000",
  address: "Wagholi Green, Phase 2, Jagtap Wasti – Wagholi, Pune – 412207",
  businessType: "Car Rental & Self-Drive Car Rental Service",
  tagline: "Your Journey, Our Responsibility.",
  messages: [
    "Drive with Confidence",
    "Comfortable Rides. Memorable Journeys.",
    "Your Ride. Your Freedom. Our Responsibility."
  ]
};

export const VEHICLE_CATEGORIES = [
  {
    id: "hatchbacks",
    title: "HATCHBACKS",
    tagline: "City rides & budget friendly",
    description: "Compact, easy to navigate, and economical for city travel and quick getaways.",
    image: "/images/swift.jpg",
    badge: "Budget Friendly"
  },
  {
    id: "sedans",
    title: "SEDANS",
    tagline: "Comfort & style for every trip",
    description: "Smooth rides with ample boot space and executive comfort for business or leisure.",
    image: "/images/sedan.jpg",
    badge: "Executive Comfort"
  },
  {
    id: "suvs",
    title: "SUVs",
    tagline: "More space, more freedom",
    description: "Rugged elegance, elevated road view, and commanding performance for any destination.",
    image: "/images/fortuner.jpg",
    badge: "Most Popular"
  },
  {
    id: "muvs-travellers",
    title: "MUVs & TEMPO TRAVELLERS",
    tagline: "Perfect for families, groups & tours",
    description: "Generous seating and luggage capacity to keep the whole group together in comfort.",
    image: "/images/traveller.jpg",
    badge: "Group Travel"
  },
  {
    id: "luxury",
    title: "LUXURY CARS",
    tagline: "For weddings, events & special occasions",
    description: "Turn heads with grand arrivals, premium amenities, and VIP styling.",
    image: "/images/wedding_luxury.jpg",
    badge: "VIP Class"
  }
];

export const FLEET_DATA = [
  {
    id: "swift-auto",
    name: "Swift Automatic ZXi Petrol",
    category: "Hatchback",
    badge: "Verified Self-Drive & Driver",
    fuel: "Petrol",
    transmission: "Automatic",
    rentalType: "Self-Drive & With Driver",
    image: "/images/swift.jpg",
    highlight: "Featured Self-Drive",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["12 Hours", "24 Hours", "Daily Rental", "Weekly", "Monthly"]
    }
  },
  {
    id: "fronx-cng",
    name: "Fronx CNG",
    category: "Crossover / SUV",
    badge: "Verified Eco & Fuel Efficient",
    fuel: "CNG",
    transmission: "Manual",
    rentalType: "Self-Drive & With Driver",
    image: "/images/fronx.jpg",
    highlight: "Featured Self-Drive",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["12 Hours", "24 Hours", "Daily Rental", "Weekly", "Monthly"]
    }
  },
  {
    id: "fortuner",
    name: "Fortuner",
    category: "Premium SUV",
    badge: "Premium SUV",
    fuel: "Verified at Booking",
    transmission: "Verified at Booking",
    rentalType: "With Driver & Self-Drive",
    image: "/images/fortuner.jpg",
    highlight: "Commanding Stance",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["Custom packages for Local, Outstation & Weddings"]
    }
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    category: "Premium Family MPV",
    badge: "Luxury Group Travel",
    fuel: "Verified at Booking",
    transmission: "Verified at Booking",
    rentalType: "With Driver & Self-Drive",
    image: "/images/innova.jpg",
    highlight: "Gold Standard Comfort",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["Local 8hr/80km", "Outstation Per Km", "Airport Transfer"]
    }
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Tempo Traveller / Group",
    badge: "Group & Corporate",
    fuel: "Verified at Booking",
    transmission: "Verified at Booking",
    rentalType: "With Driver",
    image: "/images/traveller.jpg",
    highlight: "Ideal for 12 to 17 Passengers",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["Tours", "Weddings", "Corporate Shuttles", "Outstation"]
    }
  },
  {
    id: "executive-sedan",
    name: "Executive Sedan",
    category: "Sedan",
    badge: "Corporate & Airport",
    fuel: "Verified at Booking",
    transmission: "Verified at Booking",
    rentalType: "With Driver & Self-Drive",
    image: "/images/sedan.jpg",
    highlight: "Smooth & Elegant",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["Airport Drop/Pick", "Corporate Day Rental", "City Travel"]
    }
  },
  {
    id: "wedding-luxury",
    name: "Luxury Wedding & Event Car",
    category: "Luxury",
    badge: "Special Occasions",
    fuel: "Verified at Booking",
    transmission: "Verified at Booking",
    rentalType: "Chauffeur Driven",
    image: "/images/wedding_luxury.jpg",
    highlight: "Grand Celebrations",
    pricing: {
      rate: "Price on Enquiry",
      periods: ["Wedding Day Package", "Photoshoot / VIP Event Rental"]
    }
  }
];

export const CORE_SERVICES = [
  {
    id: "self-drive",
    icon: "Car",
    title: "Self Drive Cars",
    description: "Rent a car and enjoy the freedom of driving yourself. Clean, well-maintained vehicles with automatic & fuel-efficient options.",
    actionText: "Book Self-Drive",
    href: "#self-drive"
  },
  {
    id: "with-driver",
    icon: "UserCheck",
    title: "Car Rental With Driver",
    description: "Comfortable rental vehicles with professional, punctual, and well-trained drivers so you can relax throughout your trip.",
    actionText: "Book Chauffeur",
    href: "#with-driver"
  },
  {
    id: "airport-transfers",
    icon: "Plane",
    title: "Airport Transfers",
    description: "Reliable airport pickup and drop services with advance scheduling, guaranteed on-time arrivals, and luggage handling.",
    actionText: "Book Airport Ride",
    href: "#airport-transfers"
  },
  {
    id: "local-city",
    icon: "Building2",
    title: "Local City Rides",
    description: "Cars available for local travel within Pune and surrounding areas for shopping, personal visits, and daily errands.",
    actionText: "Local Enquiry",
    href: "#local-outstation"
  },
  {
    id: "outstation",
    icon: "Compass",
    title: "Outstation Trips",
    description: "Safe and dependable vehicles for long-distance and outstation travel across Maharashtra and interstate destinations.",
    actionText: "Plan Outstation",
    href: "#local-outstation"
  },
  {
    id: "corporate",
    icon: "Briefcase",
    title: "Corporate Travel",
    description: "Professional transportation solutions for corporate executives, client pick-and-drop, and routine employee commuting.",
    actionText: "Corporate Solutions",
    href: "#corporate"
  },
  {
    id: "wedding-events",
    icon: "Sparkles",
    title: "Wedding & Event Cars",
    description: "Premium and luxury cars adorned for wedding baraat, groom & bridal arrivals, VIP delegations, and milestone celebrations.",
    actionText: "Wedding Cars",
    href: "#wedding-events"
  },
  {
    id: "family-group",
    icon: "Users",
    title: "Family & Group Travel",
    description: "Comfortable MPVs, Innova, and Tempo Travellers suitable for large families, group pilgrimages, and tourist groups.",
    actionText: "Find Group Vehicle",
    href: "#family-group"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Well-Maintained Vehicles",
    desc: "Clean, safe, sanitised, and mechanically inspected vehicles for a smooth and worry-free ride.",
    icon: "ShieldCheck"
  },
  {
    title: "Professional Drivers",
    desc: "Experienced, courteous, and responsible drivers who prioritize customer safety and comfort.",
    icon: "UserCheck"
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive and transparent rental options designed to deliver maximum value for your budget.",
    icon: "Tag"
  },
  {
    title: "Wide Range of Vehicles",
    desc: "From compact hatchbacks and sedans to high-end SUVs, spacious MUVs, and luxury vehicles.",
    icon: "Layers"
  },
  {
    title: "24/7 Support",
    desc: "Dedicated customer assistance available around the clock to support your journey whenever needed.",
    icon: "Clock"
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose Your Vehicle",
    desc: "Select your preferred car or vehicle category based on your travel needs and preferences."
  },
  {
    step: "02",
    title: "Share Your Requirement",
    desc: "Tell us your pickup location, dates, passenger count, and preferred rental type."
  },
  {
    step: "03",
    title: "Confirm Your Booking",
    desc: "Connect directly through phone call or WhatsApp to confirm vehicle availability and reservation."
  },
  {
    step: "04",
    title: "Start Your Journey",
    desc: "Pick up your self-drive car or let our professional chauffeur pick you up at your doorstep."
  }
];

export const POPULAR_BRANDS = [
  { name: "Maruti Suzuki", logoText: "SUZUKI" },
  { name: "Toyota", logoText: "TOYOTA" },
  { name: "Hyundai", logoText: "HYUNDAI" },
  { name: "Force Motors", logoText: "FORCE" },
  { name: "Mahindra", logoText: "MAHINDRA" },
  { name: "Tata Motors", logoText: "TATA" },
  { name: "Mercedes-Benz", logoText: "MERCEDES" },
  { name: "BMW", logoText: "BMW" }
];

export const DEMO_TESTIMONIALS = [
  {
    id: 1,
    name: "Amit Deshmukh",
    role: "Local Pune Resident",
    service: "Self-Drive Rental",
    content: "Booked the Swift Automatic for a weekend trip to Mahabaleshwar. The car was spotless, drove like new, and the booking process via WhatsApp with Jai Prakash ji was seamless!",
    rating: 5,
    tag: "Verified Booking"
  },
  {
    id: 2,
    name: "Rajesh Kulkarni",
    role: "Corporate Executive",
    service: "Airport Transfer & Corporate",
    content: "Punctuality is crucial for my business trips to Mumbai. The driver arrived 15 minutes before time, was extremely polite, and the car was very comfortable.",
    rating: 5,
    tag: "Corporate Client"
  },
  {
    id: 3,
    name: "Sunita & Vikram Shinde",
    role: "Family Tour",
    service: "Innova Outstation Trip",
    content: "We hired the Innova Crysta for our family trip to Shirdi. Highly professional service, clean AC vehicle, and very reasonable rates. Highly recommended in Wagholi area!",
    rating: 5,
    tag: "Family Journey"
  }
];

export const FAQS = [
  {
    question: "Do you provide self-drive cars?",
    answer: "Yes, JAI CAR RENTAL offers flexible self-drive car rental options allowing you to experience the freedom of driving yourself."
  },
  {
    question: "Do you provide cars with drivers?",
    answer: "Yes, chauffeur-driven rental options are available with experienced, verified, and courteous drivers for local, outstation, and corporate trips."
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Yes, airport pickup and drop services are offered with punctual door-to-door coordination and luggage assistance."
  },
  {
    question: "Do you provide outstation cars?",
    answer: "Yes, reliable outstation travel options are available for weekend getaways, holiday tours, pilgrimages, and inter-city travel."
  },
  {
    question: "Is an automatic car available?",
    answer: "The supplied vehicle information specifically features the Swift Automatic ZXi Petrol, giving you effortless city driving."
  },
  {
    question: "Is Fronx CNG available?",
    answer: "The supplied information specifically features the stylish Fronx CNG, offering excellent fuel economy without compromising on comfort."
  },
  {
    question: "Do you provide vehicles for weddings?",
    answer: "Yes, wedding and event car rental is one of our specialty services, providing luxury cars and decorated vehicles for special occasions."
  },
  {
    question: "Do you provide vehicles for groups?",
    answer: "Yes, spacious MUVs like Innova Crysta and Tempo Travellers are available for family and group travel, subject to availability."
  }
];

export const REAL_FLEET_VEHICLES = [
  {
    id: "swift-automatic-mh14",
    category: "swift",
    name: "Maruti Suzuki Swift Automatic",
    model: "Swift ZXi AMT (Petrol)",
    registration: "MH14 MF 8712",
    badge: "100% Genuine Ground Fleet",
    typeBadge: "Self-Drive & Chauffeur",
    fuel: "Petrol (High Efficiency)",
    transmission: "AMT Automatic",
    seats: "5 Seater",
    description: "Our top-trim Swift Automatic offers effortless driving in city traffic or long scenic drives. Spotless Pearl White body with diamond-cut alloys and push-button start.",
    slides: [
      {
        id: "swift-front",
        label: "Front View",
        title: "Front 3/4 Profile",
        image: "/images/real-cars/swift-front.jpg",
        alt: "Maruti Suzuki Swift Automatic front angle MH14 MF 8712",
        caption: "Front 3/4 Profile • Sparkling Pearl White finish with crystal projector headlamps & bold black grille",
        tag: "Front 3/4 View"
      },
      {
        id: "swift-side-wide",
        label: "Side & Stance",
        title: "Wagholi Yard Full Stance",
        image: "/images/real-cars/swift-front-wide.jpg",
        alt: "Maruti Suzuki Swift yard view at Wagholi Pune hub",
        caption: "Yard Stance & Side Angle • Clean body lines, calibrated tyre pressure, fully washed and ready for handover",
        tag: "Side & Stance"
      },
      {
        id: "swift-rear-sky",
        label: "Rear Angle",
        title: "Rear 3/4 Dynamic Angle",
        image: "/images/real-cars/swift-rear-sky.jpg",
        alt: "Maruti Suzuki Swift rear dynamic angle MH14 MF 8712",
        caption: "Rear 3/4 Dynamic Angle • Clean sporty spoiler, precision diamond-cut alloys & tinted privacy glass",
        tag: "Rear 3/4 View"
      },
      {
        id: "swift-rear",
        label: "Boot Space",
        title: "Rear Boot & Sensors",
        image: "/images/real-cars/swift-rear.jpg",
        alt: "Maruti Suzuki Swift rear tailgate and boot",
        caption: "Rear Tailgate & Boot • Clean tail lamps, reverse parking sensors and generous luggage compartment",
        tag: "Rear & Boot"
      },
      {
        id: "swift-interior",
        label: "Interior Cabin",
        title: "Touchscreen & Interior",
        image: "/images/real-cars/interior-dashboard.jpg",
        alt: "Maruti Suzuki Swift cockpit and touchscreen display",
        caption: "Cabin View • SmartPlay touchscreen infotainment, leatherette steering controls & deep-sanitized upholstery",
        tag: "Cockpit & Cabin"
      }
    ],
    features: [
      "Automatic AMT (Effortless Drive)",
      "Push Button Start / Stop",
      "SmartPlay Touchscreen",
      "Chilled Automatic Climate AC",
      "Reverse Parking Sensors",
      "Verified Pune RTO MH-14"
    ]
  },
  {
    id: "fronx-cng-mh12",
    category: "fronx",
    name: "Maruti Suzuki Fronx SUV",
    model: "Fronx Crossover / Coupe SUV (CNG)",
    registration: "MH12 XQ 6698",
    badge: "100% Genuine Ground Fleet",
    typeBadge: "Self-Drive & Chauffeur",
    fuel: "CNG + Petrol (Dual Fuel)",
    transmission: "5-Speed Manual",
    seats: "5 Seater",
    description: "The modern coupe crossover SUV with commanding road stance, unmatched fuel economy on CNG, high ground clearance, and sleek split LED DRLs.",
    slides: [
      {
        id: "fronx-front",
        label: "Front Fascia",
        title: "Bold Front NEXA Fascia",
        image: "/images/real-cars/fronx-front.jpg",
        alt: "Maruti Suzuki Fronx front fascia MH12 XQ 6698",
        caption: "Front Fascia • Bold NEXA geometric wave grille, split LED DRLs & muscular SUV road stance",
        tag: "Front View"
      },
      {
        id: "fronx-side",
        label: "Side Profile",
        title: "Side Profile & Ground Clearance",
        image: "/images/real-cars/fronx-side.jpg",
        alt: "Maruti Suzuki Fronx full side profile and wheel arches",
        caption: "Side Profile • High ground clearance, wheel arch protective cladding & aerodynamic coupe roofline",
        tag: "Side Profile"
      },
      {
        id: "fronx-interior",
        label: "Interior Cabin",
        title: "Modern Cockpit & Dashboard",
        image: "/images/real-cars/interior-dashboard.jpg",
        alt: "Maruti Fronx modern cockpit dashboard and infotainment",
        caption: "Cabin View • Deep-sanitized 5-seater cabin, high-visibility commanding driving position & Bluetooth audio",
        tag: "Cockpit & Cabin"
      }
    ],
    features: [
      "Dual-Fuel Factory CNG",
      "High SUV Ground Clearance",
      "Aerodynamic Coupe Styling",
      "Split LED Daytime Lights",
      "Generous Legroom & Headroom",
      "Verified Pune RTO MH-12"
    ]
  }
];

// Flat array for backward compatibility
export const REAL_FLEET_GALLERY = REAL_FLEET_VEHICLES.flatMap(vehicle => 
  vehicle.slides.map(slide => ({
    id: slide.id,
    vehicleId: vehicle.id,
    title: vehicle.name,
    model: vehicle.model,
    registration: vehicle.registration,
    category: vehicle.category,
    categoryLabel: vehicle.name,
    fuel: vehicle.fuel,
    transmission: vehicle.transmission,
    image: slide.image,
    alt: slide.alt,
    caption: slide.caption,
    tags: [slide.tag, ...vehicle.features.slice(0, 3)],
    badge: "Actual Car Photo"
  }))
);


