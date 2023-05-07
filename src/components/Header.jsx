// Global style import
import "/src/styles/globals.css";

// Next imports
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div></div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
