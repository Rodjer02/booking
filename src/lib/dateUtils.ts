import { Room } from "@/data/mockData";

type DateRange = { startDate: string; endDate: string };

export function countIntersections(
  rooms: Room[],
  selectedRange: DateRange
): Room[] {
  return rooms.filter((room) =>
    room.bookings.every((booking) => {
      const bookingStart = new Date(booking.startDate).getTime();
      const bookingEnd = new Date(booking.endDate).getTime();
      const selectedStart = new Date(selectedRange.startDate).getTime();
      const selectedEnd = new Date(selectedRange.endDate).getTime();

      return selectedEnd < bookingStart || selectedStart > bookingEnd;
    })
  );
}

