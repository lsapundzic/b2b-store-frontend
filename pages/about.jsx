import Header from "@/components/Header";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      {asPath}
      <Link href="/">Home</Link>
    </div>
  );
}
