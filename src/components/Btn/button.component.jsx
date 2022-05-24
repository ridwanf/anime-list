import { ButtonContainer } from "./button.styles";

const Btn = ({ children, buttonType, ...otherProps }) => {
  return (
    <ButtonContainer className={`button-container ${buttonType}`}
      {...otherProps}
    >
      {children}
    </ButtonContainer>
  );
};

export default Btn;
