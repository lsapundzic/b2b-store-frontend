// Masthead is the middle sub-component of the Header component. It is where the logo and the search bar are placed

import Advanced from "./Advanced";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Masthead() {
  return (
    <div className="h-28 bg-yellow-400 flex items-center">
      <Logo />
      <Searchbar />
      <Advanced />
    </div>
  );
}
