"use client";

import MainMenu from "../MainMenu/MainMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="bg-[#281668] h-[60px] w-full p-[10px]">
      <div className="flex justify-between">
      <MainMenu />
      </div>
    </div>
  );
}
