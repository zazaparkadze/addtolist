"use client";
import React from "react";
import { useData } from "@/app/context/DataContext";
import BackButton from "@/ui/BackButton";
import ListItem from "./components/ListItem";

export default function MixersList() {
  const { list } = useData();
  return (
    <div className="grid place-content-center min-h-screen">
      Mixers List:
      <div>
        {list.map((mixer) => {
          return <ListItem mixer={mixer} key={mixer} />;
        })}
      </div>
      <p>
        {list.length} {list.length === 1 ? " mixer " : " mixers "}
        in the list
      </p>
      <BackButton />
    </div>
  );
}
