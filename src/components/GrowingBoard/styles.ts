import styled, { css } from "styled-components";
import { GrowingBoardProps } from "./GrowingBoard";
import { SQUARE } from "../../utils/constant";
import { COLORS } from "../../utils/colors";

export const Container = styled.div<GrowingBoardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.gray};
  ${({ shape }: GrowingBoardProps) =>
    shape !== SQUARE &&
    css`
      border: 2px solid ${COLORS.black};
    `}
`;
