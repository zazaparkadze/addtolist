"use client";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 opacity-60 hover:opacity-100 hover:cursor-pointer text-xl text-black max-w-fit px-3 py-1 bg-radial from-blue-50 to-blue-200"
    >
      <FaBackward />
      <p className="hidden sm:block ">Back</p>
    </button>
  );
}
