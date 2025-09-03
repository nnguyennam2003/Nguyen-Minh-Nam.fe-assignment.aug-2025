import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Controls({
  sortOrder,
  setSortOrder,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="flex w-full gap-4 mb-4">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger className="max-w-[180px] w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="asc">Rating: Low → High</SelectItem>
            <SelectItem value="desc">Rating: High → Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
