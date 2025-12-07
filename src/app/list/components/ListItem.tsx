import React from "react";

export default function ListItem({ mixer }: { mixer: string }) {
  return (
    <div>
      <p>
        <span className="font-bold">{mixer}</span>
      </p>
    </div>
  );
}
