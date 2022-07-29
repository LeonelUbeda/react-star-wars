import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetail";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainTemplate>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            <Route
              path="/characters/:characterId"
              element={<CharacterDetail />}
            />
          </Routes>
        </MainTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
