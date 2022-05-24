import { Fragment, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import AnimeCard from "../../components/anime-card/anime-card.component";
import {
  AnimeListContainer,
  AnimeListNextPage,
} from "./anime-list.styles";
import Btn from "../../components/Btn/button.component";

const query = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        perPage
        lastPage
        hasNextPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
          english
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;
const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [lastPage, setLastPage] = useState(0)
  const { loading, error, data } = useQuery(query, {
    variables: {
      page,
      perPage: 10,
    },
  });
  const loadNextPage = () => {
    if(page < lastPage) {
      setPage(page + 1);
    }
  };
  const loadPrevPage = () => {
    if(page > 1) {
      setPage(page - 1);

    }
  };
  useEffect(() => {
    if (data) {
      const { Page } = data;
      const { media } = Page;
      const { pageInfo } = Page;
      setHasNext(pageInfo.hasNextPage);
      setLastPage(pageInfo.lastPage)
      setAnimeList(media);
    }
  }, [data]);
  return (
    <Fragment>
      <AnimeListContainer>
        {animeList.map((anime) => {
          const card = {
            id: anime.id,
            coverImage: anime.coverImage.large,
            title: anime.title.romaji,
          };
          return <AnimeCard card={card} key={card.id} url={`/${card.id}`} />;
        })}
      </AnimeListContainer>
      {hasNext && (
        <AnimeListNextPage>
          <Btn buttonType={'inverted'} onClick={loadPrevPage}>Previous</Btn>
          <Btn buttonType={'inverted'} onClick={loadNextPage}>Next</Btn>
        </AnimeListNextPage>
      )}
    </Fragment>
  );
};

export default AnimeList;
