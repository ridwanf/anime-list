import { useContext } from "react";
import Banner from "../banner/banner.component";
import InfoField from "../info-field/info-field.component";
import "./anime-detail.styles.jsx";
import { ModalContext } from "../../contexts/modal.context";
import ModalAddItem from "../modal-add-item/modal-add-item.component";
import Rate from "../rate/rate.component";
import { AnimeDetailContainer, AnimeDetailDescription, AnimeDetailImage, AnimeDetailWrapper, DetailFooter, DetailInfo, FlexRow } from "./anime-detail.styles.jsx";
import Btn from "../Btn/button.component";

const AnimeDetail = ({ detail, loading }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const setShowModal = (isOpen) => {
    setIsModalOpen(isOpen)
  };
  
  const formatDate = (date) => {
    return `${date.day}-${date.month}-${date.year}`;
  };
  if (Object.entries(detail).length > 0 && loading === false) {
    return (
      <AnimeDetailContainer>
        <Banner urlImage={detail.bannerImage ? detail.bannerImage : 'assets/Default-Banner.png'} />
        <AnimeDetailWrapper>
          <AnimeDetailImage>
            <img src={detail.coverImage.large} alt="detail-img" />
          </AnimeDetailImage>
          <AnimeDetailDescription>
            <h2>{detail.title.romaji}</h2>
            <p>{detail.description}</p>
            <DetailInfo>
              <FlexRow>
                <InfoField label="Status" value={detail.status} />
                <InfoField
                  label="Start Date"
                  value={formatDate(detail.startDate)}
                />
                <InfoField
                  label="End Date"
                  value={formatDate(detail.endDate)}
                />
                <InfoField label="Episode" value={detail.episodes} />
                <InfoField label="Genres" value={detail.genres.join(", ")} />
                <InfoField label="Duration" value={detail.duration} />
                <InfoField label="Is Adult" value={detail.isAdult} />
                <Rate score={detail.averageScore} />
                <InfoField label="Popularity" value={detail.popularity} />
              </FlexRow>
            </DetailInfo>
            <DetailFooter>
              <Btn onClick={() => setShowModal(true)}>
                {" "}
                Add To Collection
              </Btn>
            </DetailFooter>
          </AnimeDetailDescription>
        </AnimeDetailWrapper>
        <ModalAddItem show={isModalOpen} onClose={() => setShowModal(false)} anime={detail}/>
      </AnimeDetailContainer>
    );
  }
};

export default AnimeDetail;
