import { Room } from "@/data/mockData";
import { useBookingStore } from "@/store/useBookingStore";
import Image from "next/image";
import { Button } from "./ui/button";

export default function RoomCard({
  room,
  cart,
}: {
  room: Room;
  cart?: boolean;
}) {
  const { bookRoom, cancelBooking } = useBookingStore();

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <div
        style={cart ? { width: "100%" } : { width: "400px", height: "300px" }}
      >
        <Image
          src={room.img}
          alt={room.name}
          width={400}
          height={300}
          priority
          unoptimized
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <h3 className="text-xl font-semibold">{room.name}</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-700 mt-2">Price: ${room.price} per night</p>
          <p className="text-gray-500 mt-1">View: {room.view}</p>
        </div>
        {cart ? (
          <Button
            className="bg-black text-white hover:bg-gray-500"
            onClick={() => cancelBooking(room.id)}
          >
            Remove
          </Button>
        ) : (
          <Button
            className="bg-black text-white hover:bg-gray-500"
            onClick={() => bookRoom(room)}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
}
