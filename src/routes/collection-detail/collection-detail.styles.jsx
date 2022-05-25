import styled from "@emotion/styled";

export const CollectionDetailContainer = styled.div`
  padding: 60px 10px 15px;
`;

export const CollectionDetailWrapper = styled.div`
  padding: 20px;
  color: #ffff;
  display: flex;
  background-color: #052d4a;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

export const CollectionDetailImage = styled.div`
  & > img {
    width: 50px;
    @media (max-width: 420px) {
      width: 100%;
    }
  }
`;

export const CollectionDetailDiv = styled.div`
  width: 20%;
  @media (max-width: 420px) {
      width: 100%;
    }
`;