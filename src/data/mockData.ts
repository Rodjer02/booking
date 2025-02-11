export interface Room {
    id: number;
    name: string;
    bedrooms: number;
    price: number;
    view: string;
    bookings: { startDate: string; endDate: string }[];
  }
  
export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Room",
    bedrooms: 2,
    price: 150,
    view: "Sea",
    bookings: [{ startDate: "2025-02-10", endDate: "2025-02-12" }],
  },
  {
    id: 2,
    name: "Standard Room",
    bedrooms: 1,
    price: 100,
    view: "Garden",
    bookings: [{ startDate: "2025-02-15", endDate: "2025-02-18" }],
  },
  {
    id: 3,
    name: "Family Suite",
    bedrooms: 3,
    price: 200,
    view: "Mountain",
    bookings: [{ startDate: "2025-02-20", endDate: "2025-02-22" }],
  },
  {
    id: 4,
    name: "Luxury Suite",
    bedrooms: 2,
    price: 180,
    view: "Sea",
    bookings: [{ startDate: "2025-03-01", endDate: "2025-03-03" }],
  },
  {
    id: 5,
    name: "Cozy Room",
    bedrooms: 1,
    price: 90,
    view: "Garden",
    bookings: [{ startDate: "2025-03-05", endDate: "2025-03-08" }],
  },
  {
    id: 6,
    name: "Mountain Lodge",
    bedrooms: 4,
    price: 250,
    view: "Mountain",
    bookings: [{ startDate: "2025-03-10", endDate: "2025-03-15" }],
  },
  {
    id: 7,
    name: "Ocean View Suite",
    bedrooms: 3,
    price: 220,
    view: "Sea",
    bookings: [{ startDate: "2025-02-25", endDate: "2025-02-28" }],
  },
  {
    id: 8,
    name: "Simple Garden Room",
    bedrooms: 1,
    price: 85,
    view: "Garden",
    bookings: [{ startDate: "2025-03-02", endDate: "2025-03-04" }],
  },
  {
    id: 9,
    name: "Mountain Retreat",
    bedrooms: 3,
    price: 190,
    view: "Mountain",
    bookings: [{ startDate: "2025-03-10", endDate: "2025-03-12" }],
  },
  {
    id: 10,
    name: "Premium Sea View Room",
    bedrooms: 2,
    price: 160,
    view: "Sea",
    bookings: [{ startDate: "2025-03-14", endDate: "2025-03-16" }],
  },
  {
    id: 11,
    name: "Family Garden Suite",
    bedrooms: 3,
    price: 210,
    view: "Garden",
    bookings: [{ startDate: "2025-03-18", endDate: "2025-03-21" }],
  },
  {
    id: 12,
    name: "Mountain Cabin",
    bedrooms: 4,
    price: 270,
    view: "Mountain",
    bookings: [{ startDate: "2025-03-25", endDate: "2025-03-28" }],
  },
  {
    id: 13,
    name: "Seaside Paradise",
    bedrooms: 3,
    price: 230,
    view: "Sea",
    bookings: [{ startDate: "2025-04-01", endDate: "2025-04-05" }],
  },
  {
    id: 14,
    name: "Garden Bliss Room",
    bedrooms: 1,
    price: 95,
    view: "Garden",
    bookings: [{ startDate: "2025-04-10", endDate: "2025-04-12" }],
  },
  {
    id: 15,
    name: "Mountain Vista Suite",
    bedrooms: 2,
    price: 260,
    view: "Mountain",
    bookings: [{ startDate: "2025-04-15", endDate: "2025-04-18" }],
  },
  ];
  