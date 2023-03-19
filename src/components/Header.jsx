import Router from "./router/Router";

const Header = () => {
  return (
    <div>
      <div className="header-top">
        <div className="header-top-left">LOGO</div>
        <div className="header-top-center">Search Bar</div>
        <div className="header-top-right">Actions</div>
      </div>
      <nav>
        <Router />
      </nav>
    </div>
  );
};

export default Header;
