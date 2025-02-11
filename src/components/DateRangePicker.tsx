// components/DatePicker.tsx
"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { countIntersections } from "@/lib/dateUtils";
import { Room } from "@/data/mockData";

type Booking = { startDate: string; endDate: string };

interface DatePickerProps {
  bookings: Room[];
  onDateSelect: (dates: { startDate: string; endDate: string }) => void;
}

export default function DatePicker({
  bookings,
  onDateSelect,
}: DatePickerProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleCheckAvailability = () => {
    if (!startDate || !endDate) return;

    const selectedRange = {
      startDate: format(startDate, "yyyy-MM-dd"),
      endDate: format(endDate, "yyyy-MM-dd"),
    };

    const intersections = countIntersections(bookings, selectedRange);
    console.log(intersections);
    onDateSelect(selectedRange);
  };

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-xl">
      <h2 className="text-xl font-semibold">Выберите диапазон дат:</h2>
      <div className="flex gap-4">
        <Calendar
          selected={startDate}
          onSelect={setStartDate}
          className="rounded-xl"
        />
        <Calendar
          selected={endDate}
          onSelect={setEndDate}
          className="rounded-xl"
        />
      </div>
      <Button onClick={handleCheckAvailability} className="mt-4">
        Проверить доступность
      </Button>
    </div>
  );
}
