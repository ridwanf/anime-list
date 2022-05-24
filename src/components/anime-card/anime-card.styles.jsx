import styled from "@emotion/styled";

export const AnimeContainer = styled.div`
  min-width: 30%;
  position: relative;
  height: 250px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 25px;
  &:hover {
    cursor: pointer;
    .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    .anime-body-container {
      opacity: 0.9;
    }
  }
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
 
`;

export const AnimeBodyContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 10px;
  position: absolute;
  h2 {
    font-weight: bold;
   margin: 0 6px 0;
   font-size: 14px;
   color: #4a4a4a;
  }
  &:hover {
    opacity: 0.9;

  }
`;
