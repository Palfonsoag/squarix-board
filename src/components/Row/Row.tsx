import React, { ReactElement } from "react";
import { Container } from "./styles";
import { BoxType } from "../../utils/Box.dt";
import Box, { Shape } from "../Box/Box";

export interface RowProps {
  length: number;
  row: number;
  shape: Shape;
}

const Row = ({ length, row, shape }: RowProps): ReactElement => {
  const getBoxArray = (): BoxType[] => {
    let boxes: BoxType[] = [];
    let i;
    for (i = 0; i < length; i++) {
      boxes.push({ id: `col${i}-row${row}`, column: i, row });
    }
    return boxes;
  };
  const getRowBoxes = () =>
    getBoxArray().map((box: BoxType) => (
      <Box id={box.id} col={box.column} row={box.row} shape={shape} />
    ));
  console.log(getBoxArray());

  return <Container>{getRowBoxes()}</Container>;
};

export default Row;
