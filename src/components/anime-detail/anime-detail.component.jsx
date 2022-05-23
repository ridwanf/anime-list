import { useContext } from "react";
import Banner from "../banner/banner.component";
import InfoField from "../info-field/info-field.component";
import "./anime-detail.styles.css";
import { ModalContext } from "../../contexts/modal.context";
import ModalAddItem from "../modal-add-item/modal-add-item.component";
import Rate from "../rate/rate.component";

const AnimeDetail = ({ detail, loading }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const setShowModal = (isOpen) => setIsModalOpen(isOpen);
  const formatDate = (date) => {
    return `${date.day}-${date.month}-${date.year}`;
  };
  if (Object.entries(detail).length > 0 && loading === false) {
    return (
      <div className="anime-detail-container">
        <Banner urlImage={detail.bannerImage} />
        <div className="anime-detail-wrapper">
          <div className="anime-detail-image anime-detail">
            <img src={detail.coverImage.large} alt="detail-img" />
          </div>
          <div className="anime-detail-description anime-detail">
            <h2>{detail.title.romaji}</h2>
            <p>{detail.description}</p>
            <div className="detail-info">
              <div className="flex-row">
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
              </div>
            </div>
            <div className="detail-footer">
              <button className="btn" onClick={() => setShowModal(true)}>
                {" "}
                Add To Collection
              </button>
            </div>
          </div>
        </div>
        <ModalAddItem show={isModalOpen} onClose={() => setShowModal(false)} anime={detail}/>
      </div>
    );
  }
};

export default AnimeDetail;
