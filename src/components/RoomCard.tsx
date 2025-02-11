import { Room } from "@/data/mockData";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold">{room.name}</h3>
      <p className="text-gray-700 mt-2">Цена: ${room.price} за ночь</p>
      <p className="text-gray-500 mt-1">Вид: {room.view}</p>
    </div>
  );
}
