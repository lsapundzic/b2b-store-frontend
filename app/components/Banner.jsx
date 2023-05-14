"use client";

import Link from "next/link";

export default function Banner({ message }) {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 items-center gap-x-4 justify-center text-white sm:flex md:px-8">
        {/* Banner text input */}
        <p className="py-2 font-medium">{message}</p>

        {/* Learn More button input */}
        <Link
          href="/"
          className="flex-none inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
