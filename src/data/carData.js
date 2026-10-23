export const BUSINESS_INFO = {
  name: "JAI CAR RENTAL",
  owner: "JAI PRAKASH SINGH",
  title: "Owner / Manager",
  phonePrimary: "7722006000",
  phoneSecondary: "9270191010",
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

// Comprehensive Car Details for Dedicated Vehicle Pages
export const DETAILED_CARS_DATA = {
  "swift-automatic-mh14": {
    id: "swift-automatic-mh14",
    aliasIds: ["swift-auto", "swift", "real-swift-front"],
    name: "Maruti Suzuki Swift Automatic",
    model: "Swift ZXi AMT Petrol",
    registration: "MH14 MF 8712",
    category: "Hatchback",
    badge: "100% Genuine Fleet • Verified Self-Drive & Driver",
    typeBadge: "Self-Drive & Chauffeur",
    fuel: "Petrol (High Mileage)",
    transmission: "Automatic AMT",
    seats: "5 Seater",
    engine: "1.2L DualJet Petrol",
    mileage: "22.56 kmpl",
    bootSpace: "268 Litres",
    groundClearance: "163 mm",
    rating: 4.9,
    tripsCount: 148,
    highlight: "Effortless Automatic City & Highway Drive",
    description: "The Maruti Suzuki Swift Automatic ZXi is our most sought-after self-drive and city rental hatchback. Featuring an ultra-responsive AMT gearbox, top-trim Pearl White exterior, diamond-cut alloy wheels, push-button start, and chilled automatic climate control. Mechanically inspected, sanitised, and ready for instant key handover at our Wagholi Pune hub or doorstep delivery across Pune and PCMC.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "12 Hours", detail: "Ideal for local city errands, meetings & shopping" },
        { label: "24 Hours / Daily", detail: "Full day freedom with flexible pickup & drop" },
        { label: "Weekend Getaway", detail: "Perfect for Lonavala, Mahabaleshwar & Lavasa" },
        { label: "Weekly & Monthly", detail: "Discounted long-term corporate & personal packages" }
      ],
      deposit: "Refundable Security Deposit Applicable",
      fuelPolicy: "Same-to-Same Fuel Policy (Fair & Transparent)",
      kilometers: "Flexible km plans available with transparent extra km rates"
    },
    slides: [
      {
        id: "swift-front",
        label: "Front 3/4 View",
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
        title: "Touchscreen & Cockpit",
        image: "/images/real-cars/interior-dashboard.jpg",
        alt: "Maruti Suzuki Swift cockpit and touchscreen display",
        caption: "Cabin View • SmartPlay touchscreen infotainment, leatherette steering controls & deep-sanitized upholstery",
        tag: "Cockpit & Cabin"
      }
    ],
    features: [
      "Automatic AMT Gearbox (Effortless in Pune traffic)",
      "Push Button Start / Stop with Keyless Entry",
      "SmartPlay Touchscreen Infotainment with Apple CarPlay / Android Auto",
      "Chilled Automatic Climate Control AC",
      "Precision Diamond-Cut Alloy Wheels",
      "Reverse Parking Assist Sensors",
      "Dual Airbags + ABS + EBD for complete safety",
      "Pune RTO Compliant (MH-14 Registered)"
    ],
    handoverHub: "Wagholi Green, Phase 2, Pune (Doorstep delivery available)"
  },
  "fronx-cng-mh12": {
    id: "fronx-cng-mh12",
    aliasIds: ["fronx-cng", "fronx", "real-fronx-front"],
    name: "Maruti Suzuki Fronx SUV",
    model: "Fronx Crossover / Coupe SUV (CNG)",
    registration: "MH12 XQ 6698",
    category: "Crossover / SUV",
    badge: "100% Genuine Fleet • Verified Eco & Fuel Efficient",
    typeBadge: "Self-Drive & Chauffeur",
    fuel: "CNG + Petrol (Dual Fuel)",
    transmission: "5-Speed Manual",
    seats: "5 Seater",
    engine: "1.2L K-Series DualJet Dual-Fuel",
    mileage: "28.51 km/kg (CNG)",
    bootSpace: "308 Litres (Accommodates luggage with cylinder)",
    groundClearance: "190 mm (SUV Stance)",
    rating: 4.95,
    tripsCount: 162,
    highlight: "High SUV Ground Clearance with Unmatched CNG Economy",
    description: "The Maruti Suzuki Fronx is a head-turning coupe crossover SUV engineered for high ground clearance and maximum fuel economy. Powered by factory-fitted CNG dual-fuel technology, it slashes travel costs while maintaining SUV road presence. Features split LED DRLs, NEXA wave grille, protective wheel cladding, spacious 5-passenger interior, and elevated highway visibility.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "12 Hours", detail: "Super economical for Pune local and business commutes" },
        { label: "24 Hours / Daily", detail: "Full day SUV exploration with minimal fuel expense" },
        { label: "Outstation Trips", detail: "Huge fuel savings on Mumbai, Nashik, Kolhapur & Shirdi trips" },
        { label: "Weekly & Monthly", detail: "Ideal for long-term project stays and corporate executives" }
      ],
      deposit: "Refundable Security Deposit Applicable",
      fuelPolicy: "Same-to-Same Fuel Policy (Fair & Transparent)",
      kilometers: "Customizable kilometer packages to match your trip"
    },
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
      "Factory-Fitted CNG Dual Fuel (Highest Fuel Economy)",
      "Commanding 190mm SUV Ground Clearance (Handles rough roads)",
      "Striking Aerodynamic Coupe SUV Styling",
      "Split LED Daytime Running Lights (DRLs)",
      "Spacious Legroom & Deep-Cleaned 5-Seater Cabin",
      "Dual Front Airbags + ABS + EBD Brake Assist",
      "Roof Rails & Wheel Arch Cladding",
      "Pune RTO Compliant (MH-12 Registered)"
    ],
    handoverHub: "Wagholi Green, Phase 2, Pune (Doorstep delivery available)"
  },
  "fortuner": {
    id: "fortuner",
    aliasIds: [],
    name: "Toyota Fortuner 4x2 / 4x4",
    model: "Fortuner Luxury SUV",
    registration: "Pune RTO Registered",
    category: "Premium SUV",
    badge: "VIP Class • Chauffeur & Self-Drive",
    typeBadge: "VIP & Chauffeur",
    fuel: "Diesel",
    transmission: "Automatic / Manual",
    seats: "7 Seater",
    engine: "2.8L Turbo Diesel",
    mileage: "14.2 kmpl",
    bootSpace: "296 Litres (Expandable)",
    groundClearance: "225 mm",
    rating: 5.0,
    tripsCount: 210,
    highlight: "Commanding Stance, VIP Luxury & Supreme Road Presence",
    description: "The Toyota Fortuner is the undisputed king of Indian roads. Unrivalled road presence, elevated seating, powerful diesel performance, and opulent 7-seater comfort make it the top choice for VIP delegations, wedding baraats, corporate events, and grand family tours across Maharashtra.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "Local 8hr / 80km", detail: "Executive city travel & corporate VIP transport" },
        { label: "Outstation Per Km", detail: "Long distance luxury journeys with verified chauffeur" },
        { label: "Wedding Day Package", detail: "Adorned with decorations for baraat & groom entry" },
        { label: "Corporate Shuttles", detail: "Dedicated chauffeur with high security and punctuality" }
      ],
      deposit: "Terms applicable per rental format",
      fuelPolicy: "Transparent billing & driver allowance",
      kilometers: "Standard outstation daily limit 250/300 km"
    },
    slides: [
      {
        id: "fortuner-main",
        label: "Front & Stance",
        title: "Toyota Fortuner Commanding Stance",
        image: "/images/fortuner.jpg",
        alt: "Toyota Fortuner Luxury SUV at JAI CAR RENTAL",
        caption: "Commanding Stance • Bold chrome grille, high approach angle & executive leather cabin",
        tag: "Premium SUV"
      }
    ],
    features: [
      "High Authority & VIP Road Presence",
      "Plush 7-Passenger Leather Seating",
      "Dual Zone Climate Control with Rear AC Vents",
      "Chauffeur-Driven by Experienced Uniformed Drivers",
      "Impeccable Mechanical Condition & Deep Sanitisation",
      "Suitable for Weddings, VIPs & Long-Distance Highway Cruises"
    ],
    handoverHub: "Wagholi Hub & Doorstep Delivery Across Pune"
  },
  "innova-crysta": {
    id: "innova-crysta",
    aliasIds: [],
    name: "Toyota Innova Crysta",
    model: "Innova Crysta 2.4 VX/ZX",
    registration: "Pune RTO Registered",
    category: "Premium Family MPV",
    badge: "Gold Standard Family & Outstation Travel",
    typeBadge: "Chauffeur & Self-Drive",
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    seats: "7 to 8 Seater",
    engine: "2.4L GD Turbo Diesel",
    mileage: "15.1 kmpl",
    bootSpace: "300 Litres (With 3rd Row Folded)",
    groundClearance: "178 mm",
    rating: 4.98,
    tripsCount: 340,
    highlight: "Gold Standard Comfort for Outstation & Airport Trips",
    description: "The Toyota Innova Crysta is India's most beloved premium MPV for family pilgrimages, outstation tours, and corporate airport shuttles. Offers captain seat comfort, whisper-quiet cabin insulation, ample luggage space, and peerless highway stability for rides to Shirdi, Mahabaleshwar, Goa, and Mumbai.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "Local 8hr / 80km", detail: "City family tours, shopping & corporate visits" },
        { label: "Airport Drop / Pickup", detail: "Punctual Pune & Mumbai international airport transfers" },
        { label: "Outstation Tours", detail: "Comfortable long journeys with experienced drivers" },
        { label: "Multi-Day Packages", detail: "Ashtavinayak, Shirdi, Konkan & Mahabaleshwar tours" }
      ],
      deposit: "Customizable based on trip requirements",
      fuelPolicy: "Transparent fuel & toll policy",
      kilometers: "Per-km or package billing available"
    },
    slides: [
      {
        id: "innova-main",
        label: "Front & Stance",
        title: "Toyota Innova Crysta Premium MPV",
        image: "/images/innova.jpg",
        alt: "Toyota Innova Crysta at JAI CAR RENTAL",
        caption: "Gold Standard Comfort • Captain seats, rear AC blowers and supreme highway ride quality",
        tag: "Family MPV"
      }
    ],
    features: [
      "Ultra-Comfortable Captain Seats with Ample Legroom",
      "Dedicated Rear AC Airflow for All Rows",
      "Huge Luggage Space for Family Suitcases",
      "Punctual, Courteous & Route-Savvy Chauffeurs",
      "Pristine Cleanliness & Sanitised Interiors"
    ],
    handoverHub: "Wagholi Hub & Doorstep Delivery Across Pune"
  },
  "tempo-traveller": {
    id: "tempo-traveller",
    aliasIds: [],
    name: "Force Tempo Traveller (12 to 17 Seater)",
    model: "Tempo Traveller Executive",
    registration: "Commercial Registered",
    category: "Tempo Traveller / Group",
    badge: "Group & Corporate Travel Specialist",
    typeBadge: "Chauffeur Driven",
    fuel: "Diesel",
    transmission: "Manual",
    seats: "12 to 17 Seater",
    engine: "FM 2.6 CR ED Diesel",
    mileage: "11 kmpl",
    bootSpace: "Dedicated Rear Luggage Carrier",
    groundClearance: "200 mm",
    rating: 4.92,
    tripsCount: 185,
    highlight: "Ideal for 12 to 17 Passengers, Family Tours & Corporate Shuttles",
    description: "The Force Tempo Traveller is the ultimate group transport solution for large family gatherings, corporate offsites, wedding guest transfers, and tourist tours across Maharashtra. Equipped with pushback seats, individual AC vents, wide aisles, and generous roof luggage carriers.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "Corporate Day Shuttle", detail: "Employee transit & conference transfers" },
        { label: "Wedding Delegation", detail: "Baraat transport and guest pickup from airports/stations" },
        { label: "Outstation Group Tour", detail: "Shirdi, Mahabaleshwar, Goa, Lonavala group getaways" }
      ],
      deposit: "Advance booking reservation",
      fuelPolicy: "All-inclusive or per-km rates with driver",
      kilometers: "Daily minimum outstation limit applicable"
    },
    slides: [
      {
        id: "traveller-main",
        label: "Front & Stance",
        title: "Force Tempo Traveller Group Vehicle",
        image: "/images/traveller.jpg",
        alt: "Tempo Traveller at JAI CAR RENTAL",
        caption: "Group Travel • Pushback luxury reclining seats, individual AC vents & high ceiling",
        tag: "Group Travel"
      }
    ],
    features: [
      "12 to 17 Reclining Pushback Seats",
      "High Roof Cabin with Wide Center Aisle",
      "Powerful Centralised Dual AC System",
      "Experienced Highway Drivers with Impeccable Safety Record",
      "Spacious Luggage Boot & Heavy Duty Carrier"
    ],
    handoverHub: "Wagholi Hub & Doorstep Pickup Across Pune"
  },
  "executive-sedan": {
    id: "executive-sedan",
    aliasIds: ["sedan"],
    name: "Executive Sedan",
    model: "Dzire / Ciaz / Honda City Class",
    registration: "Pune RTO Registered",
    category: "Sedan",
    badge: "Corporate & Airport Transfer Specialist",
    typeBadge: "With Driver & Self-Drive",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    seats: "5 Seater",
    engine: "1.5L Efficient Petrol/Diesel",
    mileage: "20.5 kmpl",
    bootSpace: "510 Litres (Large Boot)",
    groundClearance: "165 mm",
    rating: 4.9,
    tripsCount: 220,
    highlight: "Smooth, Elegant & Spacious Executive Comfort",
    description: "Our executive sedan fleet provides a plush, relaxed ride for corporate executives, client pick-and-drop, airport transfers, and sophisticated city commutes. Features wide legroom, refined suspension, large 510-litre boot for international travel suitcases, and whisper-soft cabin acoustics.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "Airport Drop / Pickup", detail: "Fixed transparent tariff with guaranteed on-time arrival" },
        { label: "Corporate Day Rental", detail: "8hr/80km full day executive mobility in Pune" },
        { label: "City & Intercity", detail: "Pune-Mumbai Expressway or local executive transport" }
      ],
      deposit: "Applicable per rental format",
      fuelPolicy: "Same-to-same or all-inclusive chauffeur tariff",
      kilometers: "Transparent billing with zero surprise fees"
    },
    slides: [
      {
        id: "sedan-main",
        label: "Front & Stance",
        title: "Executive Sedan Smooth & Elegant",
        image: "/images/sedan.jpg",
        alt: "Executive Sedan at JAI CAR RENTAL",
        caption: "Executive Comfort • Ample legroom, huge 510L luggage boot and whisper-quiet suspension",
        tag: "Executive Sedan"
      }
    ],
    features: [
      "Massive 510-Litre Boot Capacity for Airport Luggage",
      "Soft Cushioned Rear Seats with Center Armrest",
      "Chilled Dual-Zone Climate AC",
      "Suitably Dressed Punctual Drivers",
      "Smooth Highway Cruising on Pune-Mumbai Expressway"
    ],
    handoverHub: "Wagholi Hub & Doorstep Pickup Across Pune"
  },
  "wedding-luxury": {
    id: "wedding-luxury",
    aliasIds: ["luxury"],
    name: "Luxury Wedding & Event Car",
    model: "Mercedes-Benz / BMW Luxury Class",
    registration: "VIP Registered",
    category: "Luxury",
    badge: "VIP & Grand Celebrations",
    typeBadge: "Chauffeur Driven",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    seats: "5 Seater",
    engine: "2.0L Turbo Luxury Class",
    mileage: "12-14 kmpl",
    bootSpace: "480 Litres",
    groundClearance: "160 mm",
    rating: 5.0,
    tripsCount: 95,
    highlight: "Turn Heads with Grand Entrances & VIP Styling",
    description: "Make your wedding day or milestone event unforgettable with our decorated luxury cars. We provide premium luxury vehicles (Mercedes-Benz, BMW, Fortuner) adorned with elegant floral decor for groom and bridal grand entries, VIP guest delegations, photo & video shoots, and high-profile corporate galas.",
    pricing: {
      rate: "Price on Enquiry",
      periods: [
        { label: "Wedding Day Full Package", detail: "Includes floral styling, chauffeur and waiting time" },
        { label: "Baraat Groom Entry", detail: "Grand entrance with slow roll coordination" },
        { label: "VIP Event / Photoshoot", detail: "Prestigious backdrop for pre-wedding and corporate shoots" }
      ],
      deposit: "Advance reservation required",
      fuelPolicy: "All-inclusive event packages",
      kilometers: "Customized event hours & distance packages"
    },
    slides: [
      {
        id: "luxury-main",
        label: "Front & Stance",
        title: "Luxury Wedding & Event Car",
        image: "/images/wedding_luxury.jpg",
        alt: "Luxury Wedding Car at JAI CAR RENTAL",
        caption: "VIP Luxury • Floral adornment ready, leather massage seats and unmatched celebration grandeur",
        tag: "Wedding & VIP"
      }
    ],
    features: [
      "Grand Entrance Stance & High Prestige Styling",
      "Customised Floral Decoration Coordination Available",
      "Uniformed, Well-Spoken, Highly Professional Chauffeurs",
      "Spotless Interior & Exterior Detailing Prior to Handover",
      "Flexible Timing to Match Wedding Muhurat Schedules"
    ],
    handoverHub: "Wagholi Hub & Doorstep Handover Across Pune"
  }
};

export const getCarById = (id) => {
  if (!id) return DETAILED_CARS_DATA["swift-automatic-mh14"];
  const cleanId = id.toLowerCase().trim();
  if (DETAILED_CARS_DATA[cleanId]) return DETAILED_CARS_DATA[cleanId];
  
  // Search aliases
  for (const car of Object.values(DETAILED_CARS_DATA)) {
    if (car.aliasIds && car.aliasIds.includes(cleanId)) {
      return car;
    }
  }

  // Partial match fallback
  for (const [key, car] of Object.entries(DETAILED_CARS_DATA)) {
    if (key.includes(cleanId) || cleanId.includes(key)) {
      return car;
    }
  }

  return DETAILED_CARS_DATA["swift-automatic-mh14"];
};



