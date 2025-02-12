import { create } from "zustand";
import { Room } from "@/data/mockData";

interface BookingState {
  bookedRooms: Room[];
  bookRoom: (room: Room) => void;
  cancelBooking: (roomId: number) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookedRooms: [],
  
  bookRoom: (room) => set((state) => ({
    bookedRooms: [...state.bookedRooms, room]
  })),

  cancelBooking: (roomId) => set((state) => ({
    bookedRooms: state.bookedRooms.filter((room) => room.id !== roomId)
  })),
}));
