import { UseDataContext } from "./components/MainData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeItems from "./components/AnimeItems";
import PopularAnime from "./pages/PopularAnime";
import Airing from "./pages/Airing";
import Nav from "./components/Nav";
import UpComing from "./pages/UpComing";
import Footer from "./components/footer";

function App() {
  const data = UseDataContext();
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popularanime" element={<PopularAnime />} />
          <Route path="/airing" element={<Airing />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/anime/:id" element={<AnimeItems />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
