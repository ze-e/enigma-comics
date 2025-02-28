"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alegreyaClass } from "../Fonts/Fonts";

export default function MainMenu() {
  const pathname = usePathname();

  // Don't show the menu on the root page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav>
      <ul className={`${alegreyaClass} text-white flex space-x-4 text-2xl`}>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/artists">Artists</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/feedback">Feedback</Link>
        </li>
        <li>
          <Link href="/series">Series</Link>
        </li>
      </ul>
    </nav>
  );
}
