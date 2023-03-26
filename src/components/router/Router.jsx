// Router import
import {
  BrowserRouter as NavRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Pages import
import Products from "../../pages/Products";
import SingleType from "../../pages/SingleType";

const Router = () => {
  return (
    <NavRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/deal">Deal</Link>
        <Link to="/products">Products</Link>
        <Link to="/distributor">Distributor</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<SingleType partialURL={"homepage"} />} />
        <Route path="/deal" element={<SingleType pageURL={"deal"} />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/distributor"
          element={<SingleType pageURL={"distributorship"} />}
        />
        <Route path="/contact" element={<SingleType pageURL={"contact"} />} />
      </Routes>
    </NavRouter>
  );
};

export default Router;
