import Banner from "../../components/banner/banner.component";
import InfoField from "../../components/info-field/info-field.component";
import "./anime-detail.styles.css";
const AnimeDetail = () => {
  const data = {
    Media: {
      id: 1,
      title: {
        romaji: "Cowboy Bebop",
        english: "Cowboy Bebop",
      },
      startDate: {
        year: 1998,
        month: 4,
        day: 3,
      },
      endDate: {
        year: 1999,
        month: 4,
        day: 24,
      },
      episodes: 26,
      description:
        "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
      coverImage: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
        large:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
        medium:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",
        color: "#f1785d",
      },
      genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
      bannerImage:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg",
      duration: 24,
      averageScore: 86,
      popularity: 261573,
      status: "FINISHED",
      isAdult: "false",
    },
  };
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
  return (
    <div className="anime-detail-container">
      <Banner urlImage={data.Media.bannerImage} />
      <div className="anime-detail-wrapper">
        <div className="anime-detail-image anime-detail">
          <img src={data.Media.coverImage.large} alt="detail-img" />
        </div>
        <div className="anime-detail-description anime-detail">
          <h2>{data.Media.title.romaji}</h2>
          <p>{data.Media.description}</p>
          <div className="detail-info">
            <div className="flex-row">
              <InfoField label="Status" value={data.Media.status} />
              <InfoField
                label="Start Date"
                value={formatDate(data.Media.startDate)}
              />
              <InfoField
                label="End Date"
                value={formatDate(data.Media.endDate)}
              />
              <InfoField label="Episode" value={data.Media.episodes} />
              <InfoField label="Genres" value={data.Media.genres.join(", ")} />
              <InfoField label="Duration" value={data.Media.duration} />
              <InfoField label="Is Adult" value={data.Media.isAdult} />
              <InfoField label="Average Score" value={rate(data.Media.averageScore)} />
              <InfoField label="Popularity" value={data.Media.popularity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
