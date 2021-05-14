import React, { ReactElement } from "react";
import { Container } from "./styles";
import { BoxType } from "../../utils/Box.dt";
import Box, { Shape } from "../Box/Box";
import { TypeOfBoard } from "../../utils/TypeOfBoard.enum";
import {
  getRegularBoxArray,
  getDoublePyramidArrowBoxArray,
  getStairPyramidBoxArray,
  getKnightBoxArray,
} from "./Row.utils";

export interface RowProps {
  maxColumLength: number;
  row: number;
  shape: Shape;
  id: string;
  typeOfBoard?: TypeOfBoard;
}

const Row = ({
  maxColumLength,
  row,
  shape,
  id,
  typeOfBoard = TypeOfBoard.REGULAR,
}: RowProps): ReactElement => {
  const getRowBoxes = () => {
    switch (typeOfBoard) {
      case TypeOfBoard.ARROW:
        return getDoublePyramidArrowRowBoxes();
      case TypeOfBoard.CUSTOM:
        return getRegularRowBoxes();
      case TypeOfBoard.DOUBLE_PYRAMID:
        return getDoublePyramidArrowRowBoxes();
      case TypeOfBoard.KNIGHT:
        return getKnightRowBoxes();
      case TypeOfBoard.PYRAMID:
        return getPyramidStairsRowBoxes();
      case TypeOfBoard.REGULAR:
        return getRegularRowBoxes();
      case TypeOfBoard.STAIR:
        return getPyramidStairsRowBoxes();

      default:
        return getRegularRowBoxes();
    }
  };

  const getRegularRowBoxes = () =>
    getRegularBoxArray(maxColumLength, row).map((box: BoxType) => (
      <Box
        id={box.id}
        col={box.column}
        row={box.row}
        shape={shape}
        key={box.id}
      />
    ));
  const getDoublePyramidArrowRowBoxes = () =>
    getDoublePyramidArrowBoxArray(maxColumLength, row).map((box: BoxType) => (
      <Box
        id={box.id}
        col={box.column}
        row={box.row}
        shape={shape}
        key={box.id}
      />
    ));

  const getPyramidStairsRowBoxes = () =>
    getStairPyramidBoxArray(maxColumLength, row).map((box: BoxType) => (
      <Box
        id={box.id}
        col={box.column}
        row={box.row}
        shape={shape}
        key={box.id}
      />
    ));
  const getKnightRowBoxes = () =>
    getKnightBoxArray(maxColumLength, row).map((box: BoxType) => (
      <Box
        id={box.id}
        col={box.column}
        row={box.row}
        shape={shape}
        key={box.id}
      />
    ));
  return (
    <Container
      id={id}
      typeOfBoard={typeOfBoard}
      maxColumLength={maxColumLength}
      row={row}
      shape={shape}
    >
      {getRowBoxes()}
    </Container>
  );
};

export default Row;
