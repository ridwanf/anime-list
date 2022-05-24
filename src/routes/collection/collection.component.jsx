import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionDetail from "../collection-detail/collection-detail.component";
import CollectionList from "../collection-list/collection-list.component";

const Collection = () => {
  return (
    <Routes>
      <Route index element={<CollectionList />} />
      <Route path=":name" element={<CollectionDetail />} />

    </Routes>
  );
};

export default Collection;
