import styled from "@emotion/styled";

export const AnimeDetailContainer = styled.div`
  padding: 60px 10px 15px;
`;
export const AnimeDetailWrapper = styled.div`
  padding: 20px;
  color: #ffff;
  display: flex;
  justify-content: space-between;
  background-color: #052d4a;
  margin: 20px 0;
`;

export const AnimeDetailImage = styled.div`
  margin-right: 20px;
`;

export const AnimeDetailDescription = styled.div`
  margin-right: 20px;
  & h2 {
    margin-top: 0;
  }
`;

export const DetailInfo = styled.div`
  border: solid 0.5px;
  border-radius: 1px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: 30%;
  }
`;

export const DetailFooter = styled.div`
  margin-top: 20px;
  
`
/* .detail-footer {
  margin-top: 20px;

}

.detail-footer .btn {
  background-color: #108ee9;
  color: #fff;  
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
}


.flex-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}



.anime-detail-header-wrap {
  position: relative;
  margin-bottom: 10px;
}; */
