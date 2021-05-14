import React, { useState } from "react";
import Input from "../../components/Input/Input";
import GrowingBoard from "../../components/GrowingBoard/GrowingBoard";
import { Container, ColumnSection, RadioButtonContainers } from "./styles";
import { validateNumber } from "../../utils/validators";
import { Shape } from "../../components/Box/Box";
import { TypeOfBoard } from "../../utils/TypeOfBoard.enum";

const Growing = () => {
  const [numberOfColumns, setNumberOfColumns] = useState<number>(3);
  const [boxShape, setBoxShape] = useState<Shape>("SQUARE");
  const [typeOfBoard, setTypeOfBoard] = useState<TypeOfBoard>(
    TypeOfBoard.DOUBLE_PYRAMID
  );

  const onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(event.target.value)) {
      const newValue = Number(event.target.value);
      setNumberOfColumns(newValue);
    }
  };

  const onShapeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShape(event.target.value as Shape);
  };

  const radioButtonShapeSection = () => {
    return (
      <RadioButtonContainers onChange={onShapeChange}>
        Forma de las casillas
        <input type="radio" value="SQUARE" defaultChecked name="shape" />{" "}
        Cuadrado
        <input type="radio" value="CIRCLE" name="shape" /> Circular
        <input type="radio" value="TRIANGLE" name="shape" /> Triangular
      </RadioButtonContainers>
    );
  };

  const onBoardTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeOfBoard(event.target.value as TypeOfBoard);
  };

  const radioButtonTypeOfBoardSection = () => {
    return (
      <RadioButtonContainers onChange={onBoardTypeChange}>
        Tipo de Tablero
        <input type="radio" value="ARROW" name="typeOfBoard" /> Flecha
        <input
          type="radio"
          value="DOUBLE_PYRAMID"
          name="typeOfBoard"
          defaultChecked
        />{" "}
        Piramide Doble
        <input type="radio" value="KNIGHT" name="typeOfBoard" /> L
        <input type="radio" value="PYRAMID" name="typeOfBoard" /> Piramide
        <input type="radio" value="STAIR" name="typeOfBoard" /> Escalera
      </RadioButtonContainers>
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

        {radioButtonShapeSection()}
        {radioButtonTypeOfBoardSection()}
      </ColumnSection>
      <ColumnSection>
        <GrowingBoard
          shape={boxShape}
          columns={numberOfColumns}
          typeOfBoard={typeOfBoard}
        />
      </ColumnSection>
    </Container>
  );
};

export default Growing;
