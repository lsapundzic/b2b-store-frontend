import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// Style imports
// import "@picocss/pico";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Body />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
