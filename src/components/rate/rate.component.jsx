import React from "react";
import InfoField from "../info-field/info-field.component";

const Rate = ({ score }) => {
  const rate = () => {
    const result = Math.floor(score / 20);
    const star = [];
    for (let index = 0; index < result; index++) {
      star.push(
        <span className="star" key={index}>
          {" "}
          &#9734;
        </span>
      );
    }
    return star;
  };
  return <InfoField label="Average Score" value={rate()} />;
};

export default Rate;
