// Router import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Page imports
import Products from "./pages/Products";
import Home from "./pages/Home";

// Style imports
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <div>
        <i>This is my app</i>
      </div>
    </Router>
  );
}

export default App;
