import { Routes, Route } from "react-router-dom";

// Pages import
import Products from "../pages/Products";
import SingleType from "../pages/SingleType";

const Body = () => {
  return (
    <div>
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
          path="/tracking"
          element={<SingleType partialURL={`tracker`} />}
        />
        <Route
          path="/contact"
          element={<SingleType partialURL={"contact"} />}
        />
      </Routes>
    </div>
  );
};

export default Body;
