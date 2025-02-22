"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname();

  // Don't show the menu on the root page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav>
      <ul className="flex">
      <li>
          <Link href="/">Home</Link>
      </li>
      {" "}◾{" "}
      <li>
        <Link href="/artists">Artists</Link>
      </li>
      {" "}◾{" "}
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      {" "}◾{" "}
      <li>
        <Link href="/feedback">Feedback</Link>
      </li>
      {" "}◾{" "}
      <li>
        <Link href="/series">Series</Link>
      </li>
      </ul>
    </nav>
  );
}
