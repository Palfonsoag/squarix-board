import React, { useState } from "react";
import Input from "../../components/Input/Input";
import RegularBoard from "../../components/RegularBoard/RegularBoard";
import { Container, ColumnSection } from "./styles";
import { validateNumber } from "../../utils/validators";
import { Shape } from "../../components/Box/Box";

const Home = () => {
  const [numberOfColumns, setNumberOfColumns] = useState<number>(2);
  const [numberOfRows, setNumberOfRows] = useState<number>(2);
  const [boxShape, setBoxShape] = useState<Shape>("SQUARE");

  const onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(event.target.value)) {
      const newValue = Number(event.target.value);
      setNumberOfColumns(newValue);
    }
  };
  const onRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(event.target.value)) {
      const newValue = Number(event.target.value);
      setNumberOfRows(newValue);
    }
  };
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShape(event.target.value as Shape);
  };

  const radioButtonSection = () => {
    return (
      <div onChange={onChangeValue}>
        Forma de las casillas
        <input type="radio" value="SQUARE" defaultChecked name="gender" />{" "}
        Cuadrado
        <input type="radio" value="CIRCLE" name="gender" /> Circular
        <input type="radio" value="TRIANGLE" name="gender" /> Triangular
      </div>
    );
  };

  return (
    <Container>
      <ColumnSection>
        <Input
          label={"Columnas"}
          value={numberOfColumns}
          type={"number"}
          onChangeValue={onColumnsChange}
        />
        <Input
          label={"Filas"}
          value={numberOfRows}
          type={"number"}
          onChangeValue={onRowsChange}
        />
        {radioButtonSection()}
      </ColumnSection>
      <ColumnSection>
        <RegularBoard
          shape={boxShape}
          columns={numberOfColumns}
          rows={numberOfRows}
        />
      </ColumnSection>
    </Container>
  );
};

export default Home;
