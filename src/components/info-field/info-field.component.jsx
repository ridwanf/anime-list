import React from "react";
import './info-field.styles.css';

const InfoField = ({label, value}) => {
  return (
    <div className="info-field">
      <span>{label}: </span>
      <span>{value}</span>
    </div>
  );
};

export default InfoField;
