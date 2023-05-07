import Head from "next/head";

export default function Header() {
  return (
    <header>
      <Head>
        <title>Sotla Lab</title>
        <link rel="icon" href="/public/logo"></link>
      </Head>
      <h1>Welcome to Sotla Laboratory Experts</h1>
      <nav>Navigation</nav>
    </header>
  );
}
