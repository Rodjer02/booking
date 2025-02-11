// components/RoomList.tsx
import RoomCard from "@/components/RoomCard";
import { Room } from "@/data/mockData";

interface RoomListProps {
  rooms: Room[];
}

export default function RoomList({ rooms }: RoomListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
