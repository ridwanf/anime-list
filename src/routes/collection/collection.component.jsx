import "./collection.styles.css";

import { useContext } from "react";

import { CollectionContext } from "../../contexts/collection.context";
import AnimeCard from "../../components/anime-card/anime-card.component";

const Collection = () => {
  const { collections } = useContext(CollectionContext);
  return (
    <div className="anime-list-container">
      {collections &&
        collections.map((col) => {
          const coverImage = (col.animeList && col.animeList[0] !== undefined) ? col.animeList[0].coverImage.large : 'https://anilist.co/img/icons/android-chrome-512x512.png';
          const card = {
            title: {
              romaji: col.name
            },
            id: col.name,
            coverImage: {
              large: coverImage
            }
          }
          return <AnimeCard card={card} key={card.id} url={`/collection/${card.id}`} />;
        })}
    </div>
  );
};

export default Collection;
