import React from "react";
import './info-field.styles.jsx';
import { InfoFieldContainer } from "./info-field.styles.jsx";

const InfoField = ({label, value}) => {
  return (
    <InfoFieldContainer>
      <span>{label}: </span>
      <span>{value}</span>
      </InfoFieldContainer>
  );
};

export default InfoField;
