import React, { ReactElement } from "react";
import { Shape } from "../Box/Box";
import { RowType } from "../../utils/Row.dt";
import Row from "../Row/Row";
import { Container } from "./styles";
import { TypeOfBoard } from "../../utils/TypeOfBoard.enum";
import { OptionListItems } from "../OptionList/OptionList";

export interface GrowingBoardProps {
  columns: number;
  shape: Shape;
  typeOfBoard?: TypeOfBoard;
  options: OptionListItems[];
}

const GrowingBoard = ({
  columns,
  shape,
  options,
  typeOfBoard = TypeOfBoard.DOUBLE_PYRAMID,
}: GrowingBoardProps): ReactElement => {
  const getRowArray = (): RowType[] => {
    let numberOfRows: RowType[] = [];
    let i;
    const rows = typeOfBoard === TypeOfBoard.KNIGHT ? columns : columns * 2 - 1;
    for (i = 0; i < rows; i++) {
      numberOfRows.push({ id: `row${i}`, row: i, rowLength: columns });
    }
    return numberOfRows;
  };
  const getBoard = () =>
    getRowArray().map((row: RowType) => (
      <Row
        maxColumLength={row.rowLength}
        id={row.id}
        row={row.row}
        shape={shape}
        key={row.id}
        typeOfBoard={typeOfBoard}
        options={options}
      />
    ));

  return (
    <Container columns={columns} shape={shape}>
      {getBoard()}
    </Container>
  );
};

export default GrowingBoard;
