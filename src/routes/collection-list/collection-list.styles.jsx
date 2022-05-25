import styled from "@emotion/styled";

export const CollectionContainer = styled.div`
  padding: 60px 10px 15px;
`;

export const CollectionItem = styled.div`
  width: 40%;
  img {
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CollectionItemLeft = styled.div`
  right: 20px;
  position: absolute;
  display: flex;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  & > input {
    padding: 10px;
    width: 200px;
  }
`;
export const ModalFooter = styled.div`
  display: flex;
`;

export const AddCollectionContainer = styled.div`
  right: 20px;
  display: flex;
`;
