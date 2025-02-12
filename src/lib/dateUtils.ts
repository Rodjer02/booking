import { Room } from "@/data/mockData";

type DateRange = { startDate: string; endDate: string };

export function countIntersections(
  rooms: Room[],
  selectedRange: DateRange | null
): Room[] {

  const parseDate = (dateStr: string) => new Date(`${dateStr}T00:00:00`).getTime();

  if (!selectedRange) return rooms; // Если фильтра нет, возвращаем все комнаты

  return rooms.filter((room) =>
    room.bookings.some((booking) => {
      if (!booking.startDate || !booking.endDate) return false; // Проверяем, что данные есть
   
      const bookingStart = parseDate(booking.startDate);
const bookingEnd = parseDate(booking.endDate);
const selectedStart = parseDate(selectedRange.startDate);
const selectedEnd = parseDate(selectedRange.endDate);

      return selectedStart <= bookingEnd && selectedEnd >= bookingStart;
    })
  );
}
