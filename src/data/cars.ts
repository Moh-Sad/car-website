export interface Car {
  id: string
  title: string
  tag: string
  tagColor?: string
  category: string
  stock: string
  engine: string
  mileage: string
  fuel: string
  transmission: string
  price: string
  priceRaw: number
  image: string
  gallery?: string[]
  hp: string
  acceleration: string
  topSpeed: string
  vin: string
  exteriorColor: string
  interiorColor: string
  features: string[]
}

export const FEATURED_CARS: Car[] = [
  {
    id: "gt-silver-coupe",
    title: "2023 GT Silver Coupe",
    tag: "Certified Pre-Owned",
    category: "COUPE",
    stock: "Stock #V-8941",
    engine: "Naturally Aspirated 4.0L Boxer Flat-6",
    mileage: "4,200 mi",
    fuel: "Gasoline",
    transmission: "Dual-Clutch",
    price: "$224,900",
    priceRaw: 224900,
    image: "/AB6AXuBMqqf2NsSZTlVRS9Hi1xgtzc7Wkm7HCHnb1SSNSZg0sKGp1qTG2xnKOnLIagJRujowE8WEEUnPkQSlOzvryyeuURnFIatAvydkgXj--hWq-q743KDnetIMRnRCrxJHjCZE5NVURUlIM-MQfM8pHnPLJl72PB79cHPAVvLY5LPk6FjsfKXnOnxUt2t7-cSBtYYFgIUnhAK6kgI2N_.png",
    gallery: [
      "/AB6AXuBMqqf2NsSZTlVRS9Hi1xgtzc7Wkm7HCHnb1SSNSZg0sKGp1qTG2xnKOnLIagJRujowE8WEEUnPkQSlOzvryyeuURnFIatAvydkgXj--hWq-q743KDnetIMRnRCrxJHjCZE5NVURUlIM-MQfM8pHnPLJl72PB79cHPAVvLY5LPk6FjsfKXnOnxUt2t7-cSBtYYFgIUnhAK6kgI2N_.png",
      "/AB6AXuAfuGNuHuWJGjdAdU1LbLFN4PAKq0pAckvUHy-9aF6XQRyqxpMxuIqc6qendSNjiax1CWPaZS08W9a-TpOtO5SMi9EnMJIpfrTx4YMZB3k-l4wGGI8q3TBmsI7gP6JKS67V8CQiEzrNzEdrrnH49S934sL6GROtA9GrKZ3V3xRTwzT4FFYFT_UzKsLxBlvMEV_Z9D-DYHz4uZPi6Z.png"
    ],
    hp: "502 HP",
    acceleration: "3.2s 0-60",
    topSpeed: "197 mph",
    vin: "WP0AF2A97PS28941",
    exteriorColor: "GT Silver Metallic",
    interiorColor: "Black Race-Tex w/ GT Silver Stitching",
    features: [
      "Front Axle Lift System",
      "Porsche Ceramic Composite Brakes (PCCB)",
      "Carbon Fiber Full Bucket Seats",
      "Sport Chrono Package with Preparation for Lap Trigger",
      "LED Headlights with Dynamic Light System Plus"
    ]
  },
  {
    id: "alpine-blue-m-coupe",
    title: "2024 Alpine Blue M-Coupe",
    tag: "Popular Deal",
    tagColor: "amber",
    category: "PERFORMANCE",
    stock: "Stock #V-7210",
    engine: "Twin-Turbocharged 3.0L Inline-6 Engine",
    mileage: "1,850 mi",
    fuel: "Gasoline",
    transmission: "8-Speed Auto",
    price: "$88,500",
    priceRaw: 88500,
    image: "/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png",
    gallery: [
      "/Performance blue sports coupe cruising scenic cliffside mountain highway at golden hour.png",
      "/Showroom exterior view.png"
    ],
    hp: "503 HP",
    acceleration: "3.4s 0-60",
    topSpeed: "180 mph",
    vin: "WBS43AZ07RFB7210",
    exteriorColor: "Portimao Blue Metallic",
    interiorColor: "Kyalami Orange / Black Extended Merino Leather",
    features: [
      "M Carbon Exterior Package",
      "Executive Package with Head-Up Display",
      "Harman Kardon Surround Sound Audio",
      "M Drive Professional with Drift Analyzer",
      "19\"/20\" M Double-Spoke Bicolor Wheels"
    ]
  },
  {
    id: "performance-estate-wagon",
    title: "2023 Performance Estate Wagon",
    tag: "Single Owner",
    category: "ESTATE / WAGON",
    stock: "Stock #V-6029",
    engine: "Twin-Turbo 4.0L V8 Mild-Hybrid System",
    mileage: "9,120 mi",
    fuel: "Hybrid / Gas",
    transmission: "Tiptronic AWD",
    price: "$121,800",
    priceRaw: 121800,
    image: "/Architectural facade stance.png",
    gallery: [
      "/Architectural facade stance.png",
      "/Showroom exterior view.png"
    ],
    hp: "591 HP",
    acceleration: "3.5s 0-60",
    topSpeed: "190 mph",
    vin: "WAUZZZF27PN6029",
    exteriorColor: "Mythos Black Metallic with Satin Stealth Wrap",
    interiorColor: "Valcona Leather with Honeycomb Contrast Stitching",
    features: [
      "Dynamic Ride Control Suspension",
      "Bang & Olufsen 3D Advanced Sound System",
      "RS Ceramic Brakes with Red Calipers",
      "HD Matrix LED Headlights with Laser Light",
      "Quattro Sport Differential & All-Wheel Steering"
    ]
  }
]

export const MARQUES = [
  { name: "Porsche", icon: "shield", models: "911 GT3, Turbo S, Taycan" },
  { name: "BMW M", icon: "gauge", models: "M4 Competition, M3 CS, M8" },
  { name: "Mercedes-AMG", icon: "star", models: "AMG GT, SL63, G63" },
  { name: "Audi Sport", icon: "circle-dot", models: "RS6 Avant, RS7, R8 V10" },
  { name: "Ferrari", icon: "flame", models: "296 GTB, Roma, F8 Tributo" },
  { name: "Aston Martin", icon: "compass", models: "Vantage, DB12, DBS" }
]

export const METRICS = [
  { value: "500+", label: "CARS AVAILABLE", icon: "car" },
  { value: "30+", label: "GLOBAL BRANDS", icon: "badge-check" },
  { value: "1,000+", label: "HAPPY CUSTOMERS", icon: "users" },
  { value: "99.4%", label: "VERIFIED RATING", icon: "star" }
]
