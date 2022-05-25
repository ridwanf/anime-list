import React from "react";
import InfoField from "../info-field/info-field.component";
import { StarContainer } from "./rate.styles";

const Rate = ({ score }) => {
  const rate = () => {
    const result = Math.floor(score / 20);
    const star = [];
    for (let index = 0; index < result; index++) {
      star.push(
        <StarContainer className="star" key={index}>
          {" "}
          &#9734;
        </StarContainer>
      );
    }
    return star;
  };
  return <InfoField label="Average Score" value={rate()} />;
};

export default Rate;
