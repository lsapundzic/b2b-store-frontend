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
        <Link to="/distributorship">Distributorship</Link>

        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={<SingleType partialURL={`homepage`} />}
        />
        <Route path="/deal" element={<SingleType partialURL={`deal`} />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/distributorship"
          element={<SingleType partialURL={`distributorship`} />}
        />
        <Route
          path="/contact"
          element={<SingleType partialURL={"contact"} />}
        />
      </Routes>
    </NavRouter>
  );
};

export default Router;
