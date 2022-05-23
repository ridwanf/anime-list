import { Fragment, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import AnimeDetail from "../../components/anime-detail/anime-detail.component";

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
