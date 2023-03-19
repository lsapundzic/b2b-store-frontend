// Router import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import Deal from "./pages/Deal";
import Products from "./pages/Products";
import Contact from "./pages/Deal";

// Style imports
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/deal">Deal</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div>
        <i>This is my app</i>
      </div>
    </Router>
  );
}

export default App;
