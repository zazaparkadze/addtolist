"use client";
import { useState, useContext, createContext, ReactNode } from "react";

type Point = {
  driverId: string;
  mixerId: string;
  naglot: number;
};

type UserContextType = {
  email: string;
  userId: number;
  setEmail: (email: string) => void;
  setUserId: (userId: number) => void;
  addPoints: (current: Point) => void;
  points: Point[];
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
export default function UserDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [email, setEmail] = useState("givi@parkadze.com");
  const [userId, setUserId] = useState(1);
  const [points, setPoints] = useState<Point[]>([
    {
      driverId: "1",
      mixerId: "008",
      naglot: 0,
    },
  ]);

  const addPoints = (current: Point) => {
    setPoints((prev) => [...prev, current]);
  };
  return (
    <UserContext.Provider
      value={{
        email,
        userId,
        setEmail,
        setUserId,
        points,
        addPoints,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const content = useContext(UserContext);
  if (!content) {
    throw new Error("UserContext is used within UserDataProvider only");
  }
  return content;
}
