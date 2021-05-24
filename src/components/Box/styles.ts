import styled, { css } from "styled-components";
import { COLORS } from "../../utils/colors";
import { BoxProps } from "./Box";
import { CIRCLE, SQUARE } from "../../utils/constant";

export const ShapedBox = styled.div<Partial<BoxProps>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${COLORS.whiteSmoke};
  border: 1px solid ${COLORS.black};
  cursor: pointer;
  ${({ shape }: Partial<BoxProps>) =>
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
          border-left: 25px solid ${COLORS.transparent};
          border-right: 25px solid ${COLORS.transparent};
          border-bottom: 50px solid ${COLORS.black};
          background-color: ${COLORS.transparent};
        `}
`;
