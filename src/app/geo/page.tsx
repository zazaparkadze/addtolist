"use client";
import GeoLocationPrivate from "../components/GeoLocation";

export default function GeoLocation() {
  return (
    <div
      className="flex flex-col min-h-screen justify-center 
    items-center gap-10 bg-gray-300 text-black"
    >
      <h1 className="text-xl antialiased"> GeoLocation</h1>
      <GeoLocationPrivate />
    </div>
  );
}
