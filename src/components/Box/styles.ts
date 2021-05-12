import styled, { css } from "styled-components";
import { COLORS } from "../../utils/colors";
import { BoxProps } from "./Box";
import { CIRCLE, SQUARE } from "../../utils/constant";

export const ShapedBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${COLORS.whiteSmoke};
  border: 1px solid ${COLORS.black};
  ${({ shape }: BoxProps) =>
    shape === SQUARE
      ? css`
          width: 50px;
          height: 50px;
        `
      : shape === CIRCLE
      ? css`
          width: 50px;
          height: 50px;
          border-radius: 50%;
        `
      : css`
          width: 0;
          height: 0;
          border-left: 50px solid ${COLORS.transparent};
          border-right: 50px solid ${COLORS.transparent};
          border-bottom: 100px solid ${COLORS.black};
          background-color: ${COLORS.transparent};
        `}
`;
