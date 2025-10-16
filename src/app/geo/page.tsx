"use client";
import GeoLocation from "../components/GeoLocation";

export default function LocationPage() {
  return (
    <div
      className="flex flex-col min-h-screen justify-center 
    items-center gap-5 bg-gray-300 text-black"
    >
      <h1 className="text-xl antialiased"> GeoLocation</h1>
      <GeoLocation />
    </div>
  );
}
