import styled, { css } from "styled-components";
import { RegularBoardProps } from "./RegularBoard";
import { SQUARE } from "../../utils/constant";
import { COLORS } from "../../utils/colors";

export const Container = styled.div<RegularBoardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.gray};
  ${({ shape }: RegularBoardProps) =>
    shape !== SQUARE &&
    css`
      border: 2px solid ${COLORS.black};
    `}
`;
