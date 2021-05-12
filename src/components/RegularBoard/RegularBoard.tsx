import React, { ReactElement } from "react";
import { Shape } from "../Box/Box";
import { RowType } from "../../utils/Row.dt";
import Row from "../Row/Row";
import { Container } from "./styles";

export interface RegularBoardProps {
  rows: number;
  columns: number;
  shape: Shape;
}

const RegularBoard = ({
  rows,
  columns,
  shape,
}: RegularBoardProps): ReactElement => {
  const getRowArray = (): RowType[] => {
    let numberOfRows: RowType[] = [];
    let i;
    for (i = 0; i < rows; i++) {
      numberOfRows.push({ id: `row${i}`, row: i, rowLength: columns });
    }
    return numberOfRows;
  };

  const getBoard = () =>
    getRowArray().map((row: RowType) => (
      <Row
        length={row.rowLength}
        id={row.id}
        row={row.row}
        shape={shape}
        key={row.id}
      />
    ));

  return (
    <Container rows={rows} columns={columns} shape={shape}>
      {getBoard()}
    </Container>
  );
};

export default RegularBoard;
