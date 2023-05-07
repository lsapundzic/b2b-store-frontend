import Header from "@/components/Header";
import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <Header />
      <h1>Main Page</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
