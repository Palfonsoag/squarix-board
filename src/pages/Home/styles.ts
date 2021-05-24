import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.gray2};
`;

export const ColumnSection = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RedSquare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: red;
  border: 1px solid ${COLORS.black};
`;

export const BlueSquare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: blue;
  border: 1px solid ${COLORS.black};
`;

export const YellowSquare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: yellow;
  border: 1px solid ${COLORS.black};
`;

export const GreenSquare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: green;
  border: 1px solid ${COLORS.black};
`;
