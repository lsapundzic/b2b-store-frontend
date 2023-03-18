// Router import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Page imports

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
        <Route path="./pages/Products.jsx" element={<Products />} />
        <Route path="./pages/Home.jsx" element={<Home />} />
      </Routes>

      <div>
        <i>This is my app</i>
      </div>
    </Router>
  );
}

export default App;
