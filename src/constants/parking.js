const spots = [
  {
    name: "Central Park Plaza Garage",
    description: "Multi-level indoor parking with excellent security features.",
    location: "Central Park Plaza, Downtown",
    available: true,
    spotType: "Indoor",
    pricePerHour: 10,
    capacity: {
      cars: 200,
      bikes: 40,
    },
    features: ["Security Cameras", "Covered", "EV Charging", "Close to Shopping", "Accessible to Public Transport"],
    imageUrls: [
      "https://example.com/parking-spot-central-park-plaza-image1.jpg",
      "https://example.com/parking-spot-central-park-plaza-image2.jpg",
    ],
  },
  {
    name: "Harbor View Open Lot",
    description: "Spacious open parking lot with stunning views of the harbor.",
    location: "Harbor District, Waterfront",
    available: true,
    spotType: "Open",
    pricePerHour: 5,
    capacity: {
      cars: 150,
      bikes: 20,
    },
    features: ["Scenic View", "Close to Harbor", "Security Patrolling"],
    imageUrls: [
      "https://example.com/parking-spot-harbor-view-image1.jpg",
      "https://example.com/parking-spot-harbor-view-image2.jpg",
    ],
  },
  {
    name: "Green Energy Charging Hub",
    description: "Dedicated electric vehicle charging station with solar-powered panels.",
    location: "Eco Street, Green Valley",
    available: true,
    spotType: "Electric",
    pricePerHour: 12,
    capacity: {
      electric: 20,
    },
    features: ["EV Charging", "Solar-Powered", "Shaded Parking", "Close to Eco Park"],
    imageUrls: [
      "https://example.com/parking-spot-green-energy-image1.jpg",
      "https://example.com/parking-spot-green-energy-image2.jpg",
    ],
  },
  {
    name: "TechCorp Office Garage",
    description: "Covered parking exclusively for TechCorp employees.",
    location: "TechCorp Campus, Tech District",
    available: true,
    spotType: "Covered",
    pricePerHour: 7,
    capacity: {
      cars: 80,
      bikes: 10,
    },
    features: ["Employee Access Only", "Covered", "Close to Offices", "Security Access Control"],
    imageUrls: [
      "https://example.com/parking-spot-techcorp-office-image1.jpg",
      "https://example.com/parking-spot-techcorp-office-image2.jpg",
    ],
  },
  {
    name: "Bike Enthusiast Zone",
    description: "Dedicated area for motorcycle and bicycle parking with repair stations.",
    location: "Bike Street, Cyclist's Haven",
    available: true,
    spotType: "Motorcycle",
    pricePerHour: 3,
    capacity: {
      cars: 0,
      bikes: 50,
    },
    features: ["Motorcycle & Bicycle Only", "Repair Stations", "Close to Bike Trails"],
    imageUrls: [
      "https://example.com/parking-spot-bike-enthusiast-image1.jpg",
      "https://example.com/parking-spot-bike-enthusiast-image2.jpg",
    ],
  },
  {
    name: "Skyline Rooftop Park",
    description: "Rooftop parking with breathtaking views of the city skyline.",
    location: "Skyline Tower, City Center",
    available: true,
    spotType: "Rooftop",
    pricePerHour: 9,
    capacity: {
      cars: 120,
      bikes: 20,
    },
    features: ["Scenic View", "Rooftop", "Elevator Access"],
    imageUrls: [
      "https://example.com/parking-spot-skyline-rooftop-image1.jpg",
      "https://example.com/parking-spot-skyline-rooftop-image2.jpg",
    ],
  },
  {
    name: "Accessible Parking Plaza",
    description: "Handicapped accessible parking spaces with ramps and assistance services.",
    location: "Accessibility Avenue, Inclusivity Town",
    available: true,
    spotType: "Handicapped",
    pricePerHour: 4,
    capacity: {
      cars: 10,
      bikes: 2,
    },
    features: ["Handicapped Accessible", "Ramps", "Assistance Services", "Close to Medical Center"],
    imageUrls: [
      "https://example.com/parking-spot-accessible-plaza-image1.jpg",
      "https://example.com/parking-spot-accessible-plaza-image2.jpg",
    ],
  },
  {
    name: "Trucker's Haven",
    description: "Specialized parking zone for trucks and large vehicles.",
    location: "Truckers Lane, Transport Hub",
    available: true,
    spotType: "Truck",
    pricePerHour: 15,
    capacity: {
      cars: 0,
      bikes: 0,
      trucks: 15,
    },
    features: ["Truck Parking", "Spacious", "Truck Services Nearby"],
    imageUrls: [
      "https://example.com/parking-spot-truckers-haven-image1.jpg",
      "https://example.com/parking-spot-truckers-haven-image2.jpg",
    ],
  },
  {
    name: "Guest Welcome Lot",
    description: "Designated parking area for visitors with a warm welcome.",
    location: "Hospitality Street, Welcome City",
    available: true,
    spotType: "Guest",
    pricePerHour: 0,
    capacity: {
      cars: 30,
      bikes: 0,
    },
    features: ["Guest Parking", "Visitor Services", "Close to Welcome Center"],
    imageUrls: [
      "https://example.com/parking-spot-guest-welcome-image1.jpg",
      "https://example.com/parking-spot-guest-welcome-image2.jpg",
    ],
  },
];
