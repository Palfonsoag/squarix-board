import React, { ReactElement } from "react";
import { ShapedBox } from "./styles";

export type Shape = "SQUARE" | "TRIANGLE" | "CIRCLE";

export interface BoxProps {
  shape: Shape;
}

const Box = ({ shape }: BoxProps): ReactElement => {
  return <ShapedBox shape={shape} />;
};

export default Box;
