// Router import
import {
  BrowserRouter as NavRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Pages import

import Deal from "../../pages/Deal";
import Homepage from "../../pages/Homepage";
import Products from "../../pages/Products";
import Distributor from "../../pages/Distributor";
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
        {/* <Route
          path="/deal"
          element={<SingleType pageURL={"http://localhost:1337/api/deal"} />}
        /> */}
        <Route path="/products" element={<Products />} />
        <Route
          path="/distributor"
          element={
            <SingleType pageURL={"http://localhost:1337/api/distributorship"} />
          }
        />
        <Route
          path="/contact"
          element={<SingleType pageURL={"http://localhost:1337/api/contact"} />}
        />
      </Routes>
    </NavRouter>
  );
};

export default Router;
