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
