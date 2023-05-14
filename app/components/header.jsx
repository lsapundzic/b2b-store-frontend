"use client";

import Banner from "./banner";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <Banner message={"The issue with the UI libraries has been resolved!"} />
      <Navbar />
    </>
  );
}
