import { Fragment, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import AnimeDetail from "../../components/anime-detail/anime-detail.component";

const dataMedia = {
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
const Detail = () => {
  const { id } = useParams();
  const GET_AMIME_DETAIL = gql`
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        episodes
        description
        coverImage {
          extraLarge
          large
          medium
          color
        }
        genres
        bannerImage
        duration
        episodes
        averageScore
        popularity
        status
      }
    }
  `;

  const [animeDetail, setAnimeDetail] = useState({});
  const { loading, error, data } = useQuery(GET_AMIME_DETAIL, {
    variables: { id },
  });

  useEffect(() => {
    if (data) {
      const { Media } = data;
      setAnimeDetail(Media);
    }
  }, [data]);

  return (
    <Fragment>
      {loading && animeDetail ? "" : <AnimeDetail detail={animeDetail} loading={loading}/>}
    </Fragment>
  );
};

export default Detail;
