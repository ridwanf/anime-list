import { Route, Routes } from "react-router-dom";
import Collection from "./routes/collection/collection.component";
import Navigation from "./routes/navigation/navigation.component";
import AnimeList from "./routes/anime-list/anime-list.component";
import Detail from "./routes/detail/detail.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<AnimeList />} />
        <Route path=":id" element={<Detail />} />
        <Route path="collection/*" element={<Collection />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
