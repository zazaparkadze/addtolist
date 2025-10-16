"use client";
import React from "react";
import { useData } from "@/app/content/DataContext";

export default function MixersList() {
  const { list } = useData();
  return (
    <div className="grid place-content-center min-h-screen">
      Mixers List:
      <div>
        {list.map((mixer) => {
          return (
            <p key={mixer}>
              <span className="font-bold">{mixer}</span>
            </p>
          );
        })}
      </div>
      <p>
        {list.length} {list.length === 1 ? "mixer    " : "mixers  "}
        in the list
      </p>
    </div>
  );
}
