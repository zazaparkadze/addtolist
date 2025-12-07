"use client";
import { useState, useRef, useEffect } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/app/context/DataContext";

export default function EnrollPage() {
  const [name, setName] = useState("");
  const { setList, list } = useData();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const re: RegExp = /^\d{3}$/;
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setList([
      ...list,
      name +
        " " +
        new Date().toLocaleDateString() +
        "\t" +
        new Date().toLocaleTimeString(),
    ]);
    router.push("/list");
  };

  return (
    <div className="flex flex-col gap-5 items-center min-h-screen justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <input
          type="text"
          placeholder="#"
          value={name}
          ref={inputRef}
          required
          onChange={(e) => setName(e.target.value)}
          className="flex shrink-1 bg-gray-400 text-xl px-4 py-2 border-2 rounded-2xl
             border-gray-700 focus:bg-gray-800 focus:text-gray-100"
        />
        <p>
          <span className="font-bold">{name} </span>
          {name === "" ? null : (
            <span>{re.test(name) ? " OK" : " not valid"}</span>
          )}
        </p>
        <button
          className="text-xl w-33
         bg-gray-400  border-2 rounded-xl p-1 border-gray-700 active:bg-gray-800 active:text-gray-400"
        >
          write
        </button>
      </form>
    </div>
  );
}
