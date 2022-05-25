import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 13px;
  background-color: #031a2a;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 10px;
  @media (max-width: 420px) {
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 40px;
    padding: 0 5px 0 5px;
    font-size: 13px;
    margin: 5px;
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
