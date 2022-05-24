import {AnimeBodyContainer, AnimeContainer, BackgroundImage} from "./anime-card.styles.jsx";

import { useNavigate } from "react-router-dom";

const AnimeCard = ({ card, url}) => {
  const navigate = useNavigate();

  const { id, coverImage, title } = card;
  const onNavigationHandler = () => {
    navigate(`${url}`);
  };
  return (
    <AnimeContainer key={id} onClick={onNavigationHandler}>
      <BackgroundImage
        style={{ backgroundImage: `url(${coverImage})` }}
      ></BackgroundImage>
      <AnimeBodyContainer>
        <h2>{title}</h2>
      </AnimeBodyContainer>
    </AnimeContainer>
  );
};

export default AnimeCard;
