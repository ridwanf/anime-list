import AnimeCard from '../anime-card/anime-card.component';
import './anime-list.styles.css'

const AnimeList = ({animeList}) => {
  return (
    <div className="anime-list-container">
      {animeList.map((card ) => {
        return <AnimeCard card={card} key={card.id}/>
      })}
    </div>
  );
};


export default AnimeList;