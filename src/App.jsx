import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

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
