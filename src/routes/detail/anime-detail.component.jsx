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
    console.log(result);
    const star=[];
    for (let index = 0; index < result; index++) {
      star.push(<span className="star">	&#9734;</span>);
    }
    return star
  };
  return (
    <div className="anime-detail-container">
      <div className="anime-detail-header-wrap">
        <div
          className="anime-detail-banner"
          style={{ backgroundImage: `url(${data.Media.bannerImage})` }}
        >
          <div className="shadow"></div>
        </div>
      </div>
      <div className="anime-detail-wrapper">
        <div className="anime-detail-image anime-detail">
          <img src={data.Media.coverImage.large} alt="detail-img" />
        </div>
        <div className="anime-detail-description anime-detail">
          <h2>{data.Media.title.romaji}</h2>
          <p>{data.Media.description}</p>
          <div className="detail-info">
            <div className="flex-row">
              <div className="info-field">
                <span>Status: </span>
                <span>{data.Media.status}</span>
              </div>
              <div className="info-field">
                <span>Start Date: </span>
                <span>{formatDate(data.Media.startDate)}</span>
              </div>
              <div className="info-field">
                <span>End Date: </span>
                <span>{formatDate(data.Media.endDate)}</span>
              </div>
              <div className="info-field">
                <span>Episode: </span>
                <span>{data.Media.episodes}</span>
              </div>
              <div className="info-field">
                <span>Genres: </span>
                <span>{data.Media.genres.join(", ")}</span>
              </div>
              <div className="info-field">
                <span>Duration: </span>
                <span>{data.Media.duration} minute</span>
              </div>
              <div className="info-field">
                <span>Is Adult: </span>
                <span>{data.Media.isAdult}</span>
              </div>
              <div className="info-field">
                <span>Average Score: </span>
                {rate(data.Media.averageScore)}
              </div>
              <div className="info-field">
                <span>Popularity: </span>
                <span>{data.Media.popularity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
