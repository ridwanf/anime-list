import { Route, Routes } from "react-router-dom";
import "./App.css";
import CollectionDetail from "./routes/collection-detail/collection-detail.component";
import Collection from "./routes/collection/collection.component";
import Detail from "./routes/detail/detail.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Detail />} />
        <Route path="collection" element={<Collection />}></Route>
        <Route path="collection/:name" element={<CollectionDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
