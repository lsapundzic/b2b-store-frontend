// Navbar is the bottom-most sub-component of the header.

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400">
      <ul className="flex font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
