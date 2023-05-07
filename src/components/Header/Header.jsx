// This is the main component with 3 sub-components

// Global style import
import "/src/styles/globals.css";

// Fragments import
import Banner from "/src/components/header/fragments/Banner.jsx";
import Masthead from "/src/components/header/fragments/Masthead.jsx";
import Navbar from "/src/components/header/fragments/Navbar.jsx";

export default function Header() {
  return (
    <header>
      <Banner />
      <Masthead />
      <Navbar />
    </header>
  );
}
