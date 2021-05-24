import styled, { css } from "styled-components";
import { RowProps } from "./Row";
import { TypeOfBoard } from "../../utils/TypeOfBoard.enum";

export const Container = styled.div<Partial<RowProps>>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  ${({ typeOfBoard }: Partial<RowProps>) =>
    (typeOfBoard === TypeOfBoard.PYRAMID ||
      typeOfBoard === TypeOfBoard.DOUBLE_PYRAMID) &&
    css`
      justify-content: center;
    `}
`;
