import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiViewList } from "react-icons/ci";
import { useBookingStore } from "@/store/useBookingStore";
import RoomCard from "./RoomCard";

export default function Cart() {
  const { bookedRooms, bookRoom, cancelBooking } = useBookingStore();

  return (
    <Sheet>
      <SheetTrigger>
        <CiViewList size="30px" />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Your Booking</SheetTitle>
          <SheetDescription>
            <div
              className="flex flex-col gap-4 overflow-y-scroll h-[80vh]"
              style={{ height: "90vh" }}
            >
              {bookedRooms.length > 0 ? (
                bookedRooms.map((room, index) => {
                  return <RoomCard key={room.id} room={room} cart />;
                })
              ) : (
                <p>No Booking</p>
              )}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
