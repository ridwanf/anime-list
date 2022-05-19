import "./anime-card.styles.css";

const AnimeCard = ({ card }) => {
  const { id, coverImage, title } = card;
  return (
    <div className="anime-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${coverImage.large})` }}
      ></div>
      <div className="anime-body-container">
        <h2>{title.romaji}</h2>
      </div>
    </div>
  );
};

export default AnimeCard;
