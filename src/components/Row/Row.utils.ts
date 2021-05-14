import { BoxType } from "../../utils/Box.dt";

export const getRegularBoxArray = (
  maxColumLength: number,
  row: number
): BoxType[] => {
  let boxes: BoxType[] = [];
  let i;
  for (i = 0; i < maxColumLength; i++) {
    boxes.push({ id: `col${i}-row${row}`, column: i, row });
  }
  return boxes;
};

export const getDoublePyramidArrowBoxArray = (
  maxColumLength: number,
  row: number
): BoxType[] => {
  let boxes: BoxType[] = [];
  let i;
  if (row < maxColumLength) {
    for (i = 0; i < row + 1; i++) {
      boxes.push({ id: `col${i}-row${row}`, column: i, row });
    }
  } else {
    for (i = row; i < maxColumLength * 2 - 1; i++) {
      boxes.push({ id: `col${i}-row${row}`, column: i, row });
    }
  }

  return boxes;
};

export const getStairPyramidBoxArray = (
  maxColumLength: number,
  row: number
): BoxType[] => {
  let boxes: BoxType[] = [];
  let i;

  for (i = 0; i < row + 1 && row < maxColumLength; i++) {
    boxes.push({ id: `col${i}-row${row}`, column: i, row });
  }

  return boxes;
};

export const getKnightBoxArray = (
  maxColumLength: number,
  row: number
): BoxType[] => {
  let boxes: BoxType[] = [];
  let i;
  if (row + 1 < maxColumLength) {
    boxes.push({ id: `col${0}-row${row}`, column: 0, row });
  } else {
    for (i = 0; i < maxColumLength; i++) {
      boxes.push({ id: `col${i}-row${row}`, column: i, row });
    }
  }

  return boxes;
};
