import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { InputProps } from "./Input";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
  background-color: ${COLORS.whiteSmoke};
  border: 1px solid ${COLORS.black};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
`;

export const InputComponent = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  text-align: center;
  background-color: ${COLORS.whiteSmoke};
  border: none;
  border-radius: 2px 2px 0px 0px;
  color: ${COLORS.black};
  box-shadow: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${COLORS.solidGray};
  }
  :-ms-input-placeholder {
    color: ${COLORS.solidGray};
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  color: ${COLORS.gray};
  align-self: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;
