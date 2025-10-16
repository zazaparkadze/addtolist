"use client";
import clsx from "clsx";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";

type LocationCoords = {
  lat: number;
  lon: number;
};

export default function GeoLocation() {
  const [notEmpty, setNotEmpty] = useState(false);
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  function getLocation() {
    function showPosition(position: GeolocationPosition) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !notEmpty
        ? (x.innerHTML =
            "Latitude: " +
            position.coords.latitude +
            "<br>Longitude: " +
            position.coords.longitude +
            "<br> Timestamp: " +
            format(new Date(position.timestamp), "yyyy-MM-dd\tHH:mm:ss"))
        : null;
      setNotEmpty(!notEmpty);
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    }

    const x = document.getElementById("demo") as HTMLParagraphElement;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  /* 
  const plantCoords = {
    lat: 31.9291392,
    lon: 34.8356608,
  }; */

  /*  const plantCoords = {
    lat: 32.01979436,
    lon: 34.80102135,
  }; */
  const plantCoords = {
    lat: 32.0200309,
    lon: 34.7864964,
  };
  /* 
  const plantCoords = {
    lat: 32.0852999,
    lon: 34.7817676,
  }; */
  function insidePlant(locationCoords: LocationCoords): boolean {
    if (
      locationCoords.lat < plantCoords.lat + 0.00018 &&
      locationCoords.lat > plantCoords.lat - 0.00018 &&
      locationCoords.lon < plantCoords.lon + 0.00021 &&
      locationCoords.lon > plantCoords.lon - 0.00021
    ) {
      return true;
    }
    return false;
  }
  return (
    <div>
      <div className="group">
        <button
          onClick={() => getLocation()}
          className="text-2xl text-center hover:text-amber-500"
        >
          Get Your Coordinates.
        </button>
        <span className="relative opacity-0 group-hover:opacity-100 left-[-47] bottom-6 bg-transparant text-black font-mono">
          click
        </span>
      </div>
      <p
        onClick={() => getLocation()}
        id="demo"
        className={clsx({
          "text-xl text-blue-900  py-3  rounded-[20px]": notEmpty,
          hidden: !notEmpty,
        })}
      ></p>
      {insidePlant(location) ? (
        <p className="text-xl text-green-600 p-10">
          <Link href={"/enrollment"}> Click to Enroll </Link>
        </p>
      ) : (
        <p className="text-red-500">Unauthorized</p>
      )}
    </div>
  );
}
