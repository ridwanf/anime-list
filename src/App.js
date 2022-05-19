import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnimeDetail from "./routes/detail/anime-detail.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path=":id" element={<AnimeDetail/>}/>
    </Routes>
  );
};

export default App;
