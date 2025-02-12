"use client";
import Cart from "@/components/cart";
import DatePicker from "@/components/DateRangePicker";
import RoomFilter from "@/components/RoomFilter";
import RoomList from "@/components/RoomList";
import { Room, rooms } from "@/data/mockData";
import { useState } from "react";

export default function BookingApp() {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);

  const handleFilterChange = (filters: {
    bedrooms: number;
    price: number;
    view: string;
  }) => {
    const filtered = rooms.filter((room) => {
      const matchesBedrooms =
        !filters.bedrooms || room.bedrooms === filters.bedrooms;
      const matchesPrice = !filters.price || room.price <= filters.price;
      const matchesView = !filters.view || room.view.includes(filters.view);
      return matchesBedrooms && matchesPrice && matchesView;
    });
    setFilteredRooms(filtered);
  };

  return (
    <div className="space-y-4 w-full h-screen">
      <div className="p-8 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Room Booking</h1>
        <Cart />
      </div>
      <div className="p-8 flex justify-between items-top">
        <div className="flex flex-col gap-4 ">
          <DatePicker
            bookings={filteredRooms}
            onDateSelect={(val: Room[]) => setFilteredRooms(val)}
          />
          <RoomFilter onFilter={handleFilterChange} />
        </div>

        <RoomList rooms={filteredRooms} />
      </div>
    </div>
  );
}
