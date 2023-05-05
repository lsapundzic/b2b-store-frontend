// Router import
import { Link } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/deal">Deal</Link>
        <Link to="/products">Products</Link>
        <Link to="/distributorship">Distributorship</Link>
        <Link to="/tracking">Tack</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Router;
