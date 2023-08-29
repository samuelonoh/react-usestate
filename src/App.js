import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Trending from "./pages/Trending";
import Explore from "./pages/Explore";
import Nopage from "./pages/404";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
