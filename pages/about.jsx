import Header from "@/components/Header";
import Link from "next/link";

import { useRouter } from "next/router";

export default function About() {
  const { asPath } = useRouter();
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      {asPath}
      <Link href="/">Home</Link>
    </div>
  );
}
