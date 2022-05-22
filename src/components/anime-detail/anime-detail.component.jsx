import Banner from "../banner/banner.component";
import InfoField from "../info-field/info-field.component";
import "./anime-detail.styles.css";

const AnimeDetail = ({ detail, loading }) => {
  const formatDate = (date) => {
    return `${date.day}-${date.month}-${date.year}`;
  };
  const rate = (score) => {
    const result = Math.floor(score / 20);
    const star = [];
    for (let index = 0; index < result; index++) {
      star.push(
        <span className="star" key={index}>
          {" "}
          &#9734;
        </span>
      );
    }
    return star;
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
                <InfoField
                  label="Average Score"
                  value={rate(detail.averageScore)}
                />
                <InfoField label="Popularity" value={detail.popularity} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AnimeDetail;
