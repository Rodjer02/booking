// components/DatePicker.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { countIntersections } from "@/lib/dateUtils";
import { Room, rooms } from "@/data/mockData";
import { DateRange } from "react-day-picker";

interface DatePickerProps {
  bookings: Room[];
  onDateSelect: (rooms: Room[]) => void;
}
interface SelectedDateRange {
  startDate: string;
  endDate: string;
}

export default function DatePicker({
  bookings,
  onDateSelect,
}: DatePickerProps) {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const [selectedRange, setSelectedRange] = useState<SelectedDateRange | null>(
    () => {
      return range.from && range.to
        ? {
            startDate: format(range.from, "yyyy-MM-dd"),
            endDate: format(range.to, "yyyy-MM-dd"),
          }
        : null;
    }
  );

  const handleSelect = (selectedRange: DateRange | undefined) => {
    if (selectedRange) {
      setRange({
        from: selectedRange.from ?? undefined,
        to: selectedRange.to ?? undefined,
      });
    }
  };

  useEffect(() => {
    if (range.from && range.to) {
      setSelectedRange({
        startDate: format(range.from, "yyyy-MM-dd"),
        endDate: format(range.to, "yyyy-MM-dd"),
      });
    } else {
      setSelectedRange(null);
    }
  }, [range]);

  useEffect(() => {
    if (!selectedRange) {
      onDateSelect(bookings);
      return;
    }
    const intersections = countIntersections(rooms, selectedRange);
    onDateSelect(intersections);
  }, [selectedRange]);

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-xl">
      <h2 className="text-xl font-semibold">Select a date range:</h2>
      <Calendar
        mode="range"
        selected={range}
        onSelect={handleSelect}
        numberOfMonths={1}
        className="rounded-md border shadow"
        modifiers={{
          selectedStart: range?.from ? [range.from] : [],
          selectedEnd: range?.to ? [range.to] : [],
          inRange:
            range?.from && range?.to
              ? { after: range.from, before: range.to }
              : [],
        }}
        modifiersClassNames={{
          selectedStart: "bg-black text-white",
          selectedEnd: "bg-black text-white",
          inRange: "bg-gray-300 text-black",
        }}
      />
    </div>
  );
}
