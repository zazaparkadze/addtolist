"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface DataContextType {
  list: string[];
  setList: (item: string[]) => void;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<string[]>([]);
  /*  const addItem = (item: string) => {
    setList((prev) => [...prev, item]);
  }; */
  return (
    <DataContext.Provider value={{ list, setList }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
