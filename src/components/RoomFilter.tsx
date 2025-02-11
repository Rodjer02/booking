import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface RoomFilterProps {
  onFilter: (filters: {
    bedrooms: number;
    price: number;
    view: string;
  }) => void;
}

export default function RoomFilter({ onFilter }: RoomFilterProps) {
  const [bedrooms, setBedrooms] = useState(1);
  const [price, setPrice] = useState(100);
  const [view, setView] = useState("");

  const handleFilter = () => {
    onFilter({ bedrooms, price, view });
  };

  return (
    <Card className="p-4 mb-4 bg-white shadow-xl rounded-xl">
      <CardContent className="grid gap-4">
        <h2 className="text-xl font-semibold">Filter Rooms</h2>

        {/* Bedrooms Filter */}
        <div>
          <label className="block mb-1 font-medium">Number of Bedrooms</label>
          <Input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            min={1}
          />
        </div>

        {/* Price Filter */}
        <div>
          <label className="block mb-1 font-medium">Maximum Price ($)</label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min={0}
          />
        </div>

        {/* View Filter */}
        <div>
          <label className="block mb-1 font-medium">View Type</label>
          <Select onValueChange={(value) => setView(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sea">Sea View</SelectItem>
              <SelectItem value="Garden">Garden View</SelectItem>
              <SelectItem value="Mountain">Mountain View</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter Button */}
        <Button className="mt-4" onClick={handleFilter}>
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}
