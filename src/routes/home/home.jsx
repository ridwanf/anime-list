import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../../components/anime-card/anime-card.component";
import { CollectionContext } from "../../contexts/collection.context";
import { DEFAULT_COVER } from "../../uilts/const.util";
import { HomeContainer, CollectionContainer, CollectionHeader } from "./home.styles";

const Home = () => {
  const { collections } = useContext(CollectionContext);
  return (
    <HomeContainer>
      <CollectionContainer>
      <CollectionHeader>
      <h2>
          <Link to="/collection">Your Collection</Link>{" "}
          <button>Add New Collection</button>
        </h2>
      </CollectionHeader>
       
        {collections.map((collection) => {
          const card = {
            name: collection.name,
            title: collection.name,
            coverImage: collection.animeList[0]
              ? collection.animeList[0].coverImage.large
              : DEFAULT_COVER,
          };
          const url = `collection/${collection.name}`;

          return <AnimeCard card={card} url={url} key={card.id} />;
        })}
      </CollectionContainer>
    </HomeContainer>
  );
};

export default Home;
