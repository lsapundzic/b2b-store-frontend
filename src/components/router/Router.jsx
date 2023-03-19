// Router import
import {
  BrowserRouter as NavRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Pages import
import Contact from "../../pages/Contact";
import Deal from "../../pages/Deal";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Distributor from "../../pages/Distributor";

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
        <Route path="/" element={<Home />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/products" element={<Products />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </NavRouter>
  );
};

export default Router;
