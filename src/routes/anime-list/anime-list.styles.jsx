import styled from "@emotion/styled";

export const AnimeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 0 10px 15px;
  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AnimeListNextPage = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  justify-content: space-between;
`;
