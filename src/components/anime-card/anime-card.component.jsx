import "./anime-card.styles.css";

import { useNavigate } from "react-router-dom";

const AnimeCard = ({ card, url}) => {
  const navigate = useNavigate();

  const { id, coverImage, title } = card;
  const onNavigationHandler = () => {
    navigate(`${url}`);
  };
  return (
    <div className="anime-container" key={id} onClick={onNavigationHandler}>
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
