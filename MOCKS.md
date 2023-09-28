```js
const mockParkingSpots = [
  {
    name: "Open Parking Spot",
    description: "An open parking spot in the city center.",
    location: "City Center",
    available: true,
    spotType: "Open",
    pricePerHour: 5,
    capacity: {
      car: 10,
      bike: 50,
    },
    features: ["Security Cameras", "Spacious", "Guest Parking"],
    imageUrls: ["image1.jpg", "image2.jpg"],
    owner: "user_id_1", // Replace with a valid user ID
    reservations: {
      car: [],
      bike: [],
    },
  },
  {
    name: "Indoor Parking Spot",
    description: "A covered indoor parking spot near the mall.",
    location: "Mall Parking",
    available: true,
    spotType: "Indoor",
    pricePerHour: 8,
    capacity: {
      car: 20,
      bike: 10,
    },
    features: ["Covered", "EV Charging", "Close to Mall", "Handicapped Accessible"],
    imageUrls: ["image3.jpg", "image4.jpg"],
    owner: "user_id_2", // Replace with a valid user ID
    reservations: {
      car: [],
      bike: [],
    },
  },
  {
    name: "Electric Vehicle Charging Station",
    description: "An electric vehicle charging station.",
    location: "Tech Park",
    available: true,
    spotType: "Electric",
    pricePerHour: 10,
    capacity: {
      car: 4,
      bike: 2,
    },
    features: ["EV Charging", "Security Cameras"],
    imageUrls: ["image5.jpg"],
    owner: "user_id_3", // Replace with a valid user ID
    reservations: {
      car: [],
      bike: [],
    },
  },
  {
    name: "Scenic View Parking",
    description: "A parking spot with a beautiful scenic view.",
    location: "Mountain View",
    available: true,
    spotType: "Open",
    pricePerHour: 7,
    capacity: {
      car: 15,
      bike: 20,
    },
    features: ["Scenic View", "Spacious"],
    imageUrls: ["image6.jpg", "image7.jpg"],
    owner: "user_id_4", // Replace with a valid user ID
    reservations: {
      car: [],
      bike: [],
    },
  },
  {
    name: "Truck Parking",
    description: "A parking spot suitable for trucks and large vehicles.",
    location: "Industrial Area",
    available: true,
    spotType: "Other",
    pricePerHour: 15,
    capacity: {
      car: 5,
      bike: 0,
    },
    features: ["Truck Parking", "Security Cameras"],
    imageUrls: ["image8.jpg"],
    owner: "user_id_5", // Replace with a valid user ID
    reservations: {
      car: [],
      bike: [],
    },
  },
];
```

```json
[
  {
    "parkingSpot": "5ffae789ab12cd34ef567890",
    "customer": "5ffae789ab12cd34ef567891",
    "vehicle": "5ffae789ab12cd34ef567892",
    "startTime": "2023-09-20T14:00:00.000Z",
    "endTime": "2023-09-20T16:00:00.000Z",
    "status": "Confirmed",
    "totalCost": 20.0
  },
  {
    "parkingSpot": "5ffae789ab12cd34ef567890",
    "customer": "5ffae789ab12cd34ef567893",
    "vehicle": "5ffae789ab12cd34ef567894",
    "startTime": "2023-09-21T10:30:00.000Z",
    "endTime": "2023-09-21T11:30:00.000Z",
    "status": "Pending",
    "totalCost": 10.0
  },
  {
    "parkingSpot": "5ffae789ab12cd34ef567895",
    "customer": "5ffae789ab12cd34ef567896",
    "vehicle": "5ffae789ab12cd34ef567897",
    "startTime": "2023-09-22T08:00:00.000Z",
    "endTime": "2023-09-22T09:30:00.000Z",
    "status": "Confirmed",
    "totalCost": 15.0
  },
  {
    "parkingSpot": "5ffae789ab12cd34ef567898",
    "customer": "5ffae789ab12cd34ef567899",
    "vehicle": "5ffae789ab12cd34ef56789a",
    "startTime": "2023-09-23T15:45:00.000Z",
    "endTime": "2023-09-23T17:00:00.000Z",
    "status": "Cancelled",
    "totalCost": 12.0
  }
]
```
