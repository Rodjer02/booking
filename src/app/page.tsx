"use client";
import DatePicker from "@/components/DateRangePicker";
import RoomFilter from "@/components/RoomFilter";
import RoomList from "@/components/RoomList";
import TestComponent from "@/components/test";
import { rooms } from "@/data/mockData";
import { countIntersections } from "@/lib/dateUtils";
import { useState } from "react";

type Booking = { startDate: string; endDate: string } | undefined;
export default function BookingApp() {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [dateRange, setDateRange] = useState<Booking>();

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
    <div className="p-8 space-y-4">
      <TestComponent />

      <h1 className="text-2xl font-bold mb-4">Room Booking System</h1>
      <DatePicker
        bookings={filteredRooms}
        onDateSelect={(val: Booking) => setDateRange(val)}
      />
      <RoomFilter onFilter={handleFilterChange} />
      <RoomList rooms={filteredRooms} />
    </div>
  );
}
