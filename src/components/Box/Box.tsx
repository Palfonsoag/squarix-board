import React, { ReactElement } from "react";
import { ShapedBox } from "./styles";

export type Shape = "SQUARE" | "TRIANGLE" | "CIRCLE";

export interface BoxProps {
  shape: Shape;
  id: string;
  col: number;
  row: number;
}

const Box = ({ shape, id, col, row }: BoxProps): ReactElement => {
  return <ShapedBox shape={shape} id={id} col={col} row={row} />;
};

export default Box;
