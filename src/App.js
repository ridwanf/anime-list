import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AnimeList = lazy(() => import('./routes/anime-list/anime-list.component'));
const Collection = lazy(() => import('./routes/collection/collection.component'));
const Detail = lazy(() => import("./routes/detail/detail.component"));
const Navigation = lazy(() => import("./routes/navigation/navigation.component"));
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<AnimeList />} />
        <Route path=":id" element={<Detail />} />
        <Route path="collection/*" element={<Collection />}></Route>
      </Route>
    </Routes>
    </Suspense>
  );
};

export default App;
