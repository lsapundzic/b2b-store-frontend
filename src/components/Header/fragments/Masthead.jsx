// Masthead is the middle sub-component of the Header component. It is where the logo and the search bar are placed

import Advanced from "./Advanced";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Masthead() {
  return (
    <div>
      <Logo />
      <Searchbar />
      <Advanced />
    </div>
  );
}
