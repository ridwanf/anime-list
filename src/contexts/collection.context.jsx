import { createContext, useEffect, useState } from "react";

const saveCollection = (collections) => {
  localStorage.setItem("COLLECTION", JSON.stringify(collections));
};
const addCollection = (collections, collectionName) => {
  const isExist = collections.find((item) => item.name === collectionName);
  if (isExist) {
    return [...collections];
  } else {
    return [...collections, {name: collectionName}];
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
      return collection;
    }
  });
};

const removeCollection = (collections, collectionToRemove) => {
  const a = collections.filter(
    (collection) => collection.name !== collectionToRemove
  );
  return a;
};

const removeItem = (collections, collectionName, itemToRemove) => {
  return collections.map((col) => {
    if (col.name === collectionName.name) {
      return {
        ...col,
        animeList: col.animeList.filter((item) => item.id !== itemToRemove.id),
      };
    } else {
      return col;
    }
  });
};

const editCollectionName = (collections, collectionName, newName) => {
  const res =  collections.map((col) => {
    if (col.name === collectionName) {
      return {
        ...col,
        name: newName,
      };
    } else {
      return col;
    }
  });
  return res;
};

const checkIsExist = (collections, collectionName) => {
  const isExist = collections.find((item) => item.name === collectionName);
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
  const [collectionDetail, setCollectionDetail] = useState({});
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
    }
  };
  const addItemToCollectionItem = (collectionName, anime) => {
    setCollections(addCollectionItem(collections, collectionName, anime));
  };
  const getCollectionDetail = (collectionName) => {
    setCollectionDetail(checkIsExist(collections, collectionName));
  };
  const removeCollectionFromList = (collectionToRemove) => {
    setCollections(removeCollection(collections, collectionToRemove));
  };

  const removeAnimeFromCollection = (collection, itemToRemove) => {
    setCollections(removeItem(collections, collection, itemToRemove));
  };
  const updateCollectionName = (collection, newName) => {
    if (checkIsExist(collections, newName) !== undefined) {
      setIsError({ error: true, message: "Already added" });
    } else {
      setCollections(editCollectionName(collections, collection, newName));    }
  };
  const value = {
    collections,
    setCollections,
    addItemToCollection,
    isError,
    addItemToCollectionItem,
    getCollectionDetail,
    collectionDetail,
    removeCollectionFromList,
    removeAnimeFromCollection,
    updateCollectionName,
    setIsError,
  };
  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};
