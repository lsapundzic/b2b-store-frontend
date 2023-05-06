import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="header-top-left">LOGO</div>
        <div className="header-top-center">Search Bar</div>
        <div className="header-top-right">Actions</div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/deal">Deal</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/distributorship">Distributorship</Link>
          </li>
          <li>
            <Link to="/tracking">Tacking</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
