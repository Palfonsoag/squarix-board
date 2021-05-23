import React, { ReactElement, ReactNode } from "react";
import { ShapedBox } from "./styles";

export type Shape = "SQUARE" | "TRIANGLE" | "CIRCLE";

export interface BoxProps {
  shape: Shape;
  id: string;
  col: number;
  row: number;
  children?: ReactNode;
}

const Box = ({ shape, id, col, row, children }: BoxProps): ReactElement => {
  return (
    <ShapedBox shape={shape} id={id} col={col} row={row}>
      {children}
    </ShapedBox>
  );
};

export default Box;
