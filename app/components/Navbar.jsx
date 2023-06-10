"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  console.log("Navbar running...");

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Mobine mode dropdown menu */}
          <div className="dropdown">
            {/* Mobile menu Icon */}
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
                <ul className="p-2">
                  <li>
                    <Link href="/">Category 1</Link>
                  </li>
                  <li>
                    <Link href="/">Category 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Button / Logo on the left-hand side */}
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Sotla Lab
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li tabIndex={0}>
              {/* Details & Summary: HTML elements that performs drop-down action */}
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/">Category 1</Link>
                  </li>
                  <li>
                    <Link href="/">Category 1</Link>
                  </li>
                  <li>
                    <Link href="/">Category 1</Link>
                  </li>
                  <li>
                    <Link href="/">Category 1</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Image
                src="/public/icons/check_box_FILL0_wght400_GRAD0_opsz48.png"
                alt="checkbox"
                width="20"
                height="20"
              />
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Button on the right-hand side */}
          <Link className="btn" href="/">
            Find a Distributor
          </Link>
        </div>
      </div>
    </nav>
  );
}
