import { createContext, useEffect, useState } from "react";

const saveCollection = (collections) => {
  localStorage.setItem("COLLECTION", JSON.stringify(collections));
};
const addCollection = (collections, collectionName) => {
  const isExist = collections.find((item) => item.name === collectionName.name);
  if (isExist) {
    return [...collections];
  } else {
    return [...collections, collectionName];
  }
};

const addCollectionItem = (collections, collectionName, anime) => {
  return collections.map((collection) => {
    if (collection.name === collectionName) {
      return {
        ...collection,
        animeList: collection.animeList
          ? collection.animeList.concat(anime)
          : [anime],
      };
    } else {
      return collection
    }
  });
};

const checkIsExist = (collections, collectionName) => {
  const isExist = collections.find((item) => item.name === collectionName.name);
  console.log(isExist);
  return isExist;
};
const initialCollection = localStorage.getItem("COLLECTION")
  ? JSON.parse(localStorage.getItem("COLLECTION"))
  : [];
export const CollectionContext = createContext({
  collections: [],
  addItemToCollection: () => {},
});

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState(initialCollection);
  const [collectionDetail, setCollectionDetail] = useState({})

  const [isError, setIsError] = useState({});
  useEffect(() => {
    if (collections) {
      saveCollection(collections);
    }
  }, [collections]);
  const addItemToCollection = (collectionName) => {
    if (checkIsExist(collections, collectionName) !== undefined) {
      setIsError({ error: true, message: "Already added" });
    } else {
      setCollections(addCollection(collections, collectionName));
      saveCollection();
    }
  };
  const addItemToCollectionItem = (collectionName, anime) => {
    setCollections(addCollectionItem(collections, collectionName, anime));
  };
  const getCollectionDetail = (collectionName) => {
    setCollectionDetail(checkIsExist(collections, collectionName));
  };
  const value = {
    collections,
    setCollections,
    addItemToCollection,
    isError,
    addItemToCollectionItem,
    getCollectionDetail,
    collectionDetail
  };
  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};
