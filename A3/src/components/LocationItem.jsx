import { Star } from "lucide-react";

export default function LocationItem({ id, location, isActive, onSelect }) {
  return (
    <div
      id={id}
      className={`p-3 border-b cursor-pointer hover:bg-gray-100 duration-200 ${
        isActive ? "bg-blue-100 border-l-4 border-blue-500 duration-200" : ""
      }`}
      onClick={onSelect}
    >
      <h3 className="font-semibold text-lg">{location.name}</h3>
      <p className="text-gray-700 leading-relaxed mb-3">{location.description}</p>
      <p className="text-sm flex items-center gap-2">
        <Star /> {location.rating}
      </p>
    </div>
  );
}
