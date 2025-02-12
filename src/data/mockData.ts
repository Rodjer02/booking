export interface Room {
    id: number;
    name: string;
    bedrooms: number;
    price: number;
    view: string;
    bookings: { startDate: string; endDate: string }[];
    img: string;
  }
  
export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Room",
    bedrooms: 2,
    price: 150,
    view: "Sea",
    bookings: [{ startDate: "2025-02-10", endDate: "2025-02-12" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2020/09/dizayn-gostevoy-komnaty-v-kvartire.jpg"
  },
  {
    id: 2,
    name: "Standard Room",
    bedrooms: 1,
    price: 100,
    view: "Garden",
    bookings: [{ startDate: "2025-02-15", endDate: "2025-02-18" }],
    img: 'https://cdn2.divan.ru/img/v1/RVAiZr4a9uVUKBHOxYhQ5Aw2UNxkEc8uCiSnn9X7MtU/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjU3MC82M2M1NjExZWM3NGIwLnBuZw.jpg'
  },
  {
    id: 3,
    name: "Family Suite",
    bedrooms: 3,
    price: 200,
    view: "Mountain",
    bookings: [{ startDate: "2025-02-20", endDate: "2025-02-22" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2023/02/dizayn-gostevoy-komnaty-v-bezhevykh-tonakh.jpg"
  },
  {
    id: 4,
    name: "Luxury Suite",
    bedrooms: 2,
    price: 180,
    view: "Sea",
    bookings: [{ startDate: "2025-03-01", endDate: "2025-03-03" }],
    img: "https://design.pibig.info/uploads/posts/2023-03/1680275893_design-pibig-info-p-gostinaya-komnata-dizain-interera-dizain-i-31.jpg"
  },
  {
    id: 5,
    name: "Cozy Room",
    bedrooms: 1,
    price: 90,
    view: "Garden",
    bookings: [{ startDate: "2025-03-05", endDate: "2025-03-08" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2020/09/dizayn-gostevoy-komnaty-v-kvartire.jpg"
  },
  {
    id: 6,
    name: "Mountain Lodge",
    bedrooms: 4,
    price: 250,
    view: "Mountain",
    bookings: [{ startDate: "2025-03-10", endDate: "2025-03-15" }],
    img: 'https://cdn2.divan.ru/img/v1/RVAiZr4a9uVUKBHOxYhQ5Aw2UNxkEc8uCiSnn9X7MtU/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjU3MC82M2M1NjExZWM3NGIwLnBuZw.jpg'
  },
  {
    id: 7,
    name: "Ocean View Suite",
    bedrooms: 3,
    price: 220,
    view: "Sea",
    bookings: [{ startDate: "2025-02-25", endDate: "2025-02-28" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2020/09/dizayn-gostevoy-komnaty-v-kvartire.jpg"
  },
  {
    id: 8,
    name: "Simple Garden Room",
    bedrooms: 1,
    price: 85,
    view: "Garden",
    bookings: [{ startDate: "2025-03-02", endDate: "2025-03-04" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2023/02/dizayn-gostevoy-komnaty-v-bezhevykh-tonakh.jpg"
  },
  {
    id: 9,
    name: "Mountain Retreat",
    bedrooms: 3,
    price: 190,
    view: "Mountain",
    bookings: [{ startDate: "2025-03-10", endDate: "2025-03-12" }],
    img: 'https://cdn2.divan.ru/img/v1/RVAiZr4a9uVUKBHOxYhQ5Aw2UNxkEc8uCiSnn9X7MtU/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjU3MC82M2M1NjExZWM3NGIwLnBuZw.jpg'
  },
  {
    id: 10,
    name: "Premium Sea View Room",
    bedrooms: 2,
    price: 160,
    view: "Sea",
    bookings: [{ startDate: "2025-03-14", endDate: "2025-03-16" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2020/09/dizayn-gostevoy-komnaty-v-kvartire.jpg"
  },
  {
    id: 11,
    name: "Family Garden Suite",
    bedrooms: 3,
    price: 210,
    view: "Garden",
    bookings: [{ startDate: "2025-03-18", endDate: "2025-03-21" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2023/02/dizayn-gostevoy-komnaty-v-bezhevykh-tonakh.jpg"
  },
  {
    id: 12,
    name: "Mountain Cabin",
    bedrooms: 4,
    price: 270,
    view: "Mountain",
    bookings: [{ startDate: "2025-03-25", endDate: "2025-03-28" }],
    img: 'https://cdn2.divan.ru/img/v1/RVAiZr4a9uVUKBHOxYhQ5Aw2UNxkEc8uCiSnn9X7MtU/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjU3MC82M2M1NjExZWM3NGIwLnBuZw.jpg'
  },
  {
    id: 13,
    name: "Seaside Paradise",
    bedrooms: 3,
    price: 230,
    view: "Sea",
    bookings: [{ startDate: "2025-04-01", endDate: "2025-04-05" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2020/09/dizayn-gostevoy-komnaty-v-kvartire.jpg"
  },
  {
    id: 14,
    name: "Garden Bliss Room",
    bedrooms: 1,
    price: 95,
    view: "Garden",
    bookings: [{ startDate: "2025-04-10", endDate: "2025-04-12" }],
    img: "https://homeinteriors.com.ua/wp-content/uploads/2023/02/dizayn-gostevoy-komnaty-v-bezhevykh-tonakh.jpg"
  },
  {
    id: 15,
    name: "Mountain Vista Suite",
    bedrooms: 2,
    price: 260,
    view: "Mountain",
    bookings: [{ startDate: "2025-04-15", endDate: "2025-04-18" }],
    img: 'https://cdn2.divan.ru/img/v1/RVAiZr4a9uVUKBHOxYhQ5Aw2UNxkEc8uCiSnn9X7MtU/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjU3MC82M2M1NjExZWM3NGIwLnBuZw.jpg'
  },
  ];
  