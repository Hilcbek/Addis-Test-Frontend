import styled from '@emotion/styled';

type hasValueType = {
  hasValue: string;
};
type isSubmittingType = {
  isSubmitting: boolean;
};
type hasError = {
  hasError: string | undefined;
};
export const ParentDiv = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const FormComponent = styled.form`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 5px;
  gap: 10px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  @media (min-width: 340px) and (max-width: 648px) {
    width: 90%;
  }
  @media (min-width: 649px) and (max-width: 870px) {
    width: 70%;
  }
  @media (min-width: 871px) and (max-width: 990px) {
    width: 60%;
  }
  @media (min-width: 991px) and (max-width: 1280px) {
    width: 40%;
  }
  @media (min-width: 1281px) {
    width: 35%;
  }
`;
export const InputLabelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 3px;
  position: relative;
`;
//w-full flex items-start justify-start flex-col gap-2 relative
export const InputComponent = styled.input<hasError>`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: 1.5px solid #ccc;
  &:focus {
    border: 1.5px solid #aaa;
  }
  ${({ hasError }) => hasError && `border-color : crimson;`}
  &:focus + label {
    transform: scale(0.8) translateY(-16px);
    color: #1c1c1c;
    font-weight: semibold;
  }
`;
export const LabelComponent = styled.label<hasValueType>`
  font-size: 14px;
  transition: all 0.1s linear;
  position: absolute;
  top: 10px;
  left: 10px;
${({ hasValue }) => hasValue && `transform: scale(0.8) translateY(-16px);`}
  }
`;
export const TitleComponent = styled.h1`
  font-size: 30px;
  text-align: center;
`;
export const ErrorComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3px;
`;
export const ErrorLabel = styled.p`
  font-size: 13px;
  color: crimson;
`;

export const ButtonComponent = styled.button<isSubmittingType>`
  padding: 10px;
  ${({ isSubmitting }) =>
    isSubmitting && `&:disabled {background-color: red;};`}
  &:active {
    transform: scale(0.98);
  }
  width: 100%;
  border-radius: 5px;
  letter-spacing: 1.6px;
  text-align: center;
  background-color: black;
  color: white;
  &:hover {
    transform: scale(1.02);
  }
`;
