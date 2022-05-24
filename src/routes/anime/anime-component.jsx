import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimeDetail from "../../components/anime-detail/anime-detail.component";
import AnimeList from "../anime-list/anime-list.component";

const Anime = () => {
  return (
    <Routes>
      <Route index element={<AnimeList />} />
      <Route path=":id" element={<AnimeDetail />} />
    </Routes>
  );
};

export default Anime;
