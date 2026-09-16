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
