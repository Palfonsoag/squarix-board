import React, { useState } from "react";
import Input from "../../components/Input/Input";
import GrowingBoard from "../../components/GrowingBoard/GrowingBoard";
import {
  Container,
  ColumnSection,
  RadioButtonContainers,
  RedSquare,
  BlueSquare,
  GreenSquare,
  YellowSquare,
} from "./styles";
import { validateNumber } from "../../utils/validators";
import { Shape } from "../../components/Box/Box";
import { TypeOfBoard } from "../../utils/TypeOfBoard.enum";
import { OptionListItems } from "../../components/OptionList/OptionList";

const exampleItems: OptionListItems[] = [
  { value: " ", displayValue: " ", id: "0" },
  { value: 1, displayValue: 1, id: "1" },
  { value: 2, displayValue: 2, id: "2" },
  { value: 3, displayValue: 3, id: "3" },
  { value: 4, displayValue: 4, id: "4" },
  { value: 5, displayValue: 5, id: "5" },
  { value: 6, displayValue: 6, id: "6" },
  { value: 7, displayValue: 7, id: "7" },
  { value: 8, displayValue: 8, id: "8" },
  { value: 8, displayValue: 9, id: "9" },
];

const exampleItems2: OptionListItems[] = [
  { value: " ", displayValue: " ", id: "0" },
  { value: "A", displayValue: "A", id: "1" },
  { value: "B", displayValue: "B", id: "2" },
  { value: "C", displayValue: "C", id: "3" },
  { value: "D", displayValue: "D", id: "4" },
  { value: "E", displayValue: "E", id: "5" },
  { value: "F", displayValue: "F", id: "6" },
  { value: "G", displayValue: "G", id: "7" },
  { value: "H", displayValue: "H", id: "8" },
  { value: "I", displayValue: "I", id: "9" },
];

const exampleItems3: OptionListItems[] = [
  { value: " ", displayValue: " ", id: "0" },
  { value: <RedSquare />, displayValue: <RedSquare />, id: "1" },
  { value: <BlueSquare />, displayValue: <BlueSquare />, id: "2" },
  { value: <GreenSquare />, displayValue: <GreenSquare />, id: "3" },
  { value: <YellowSquare />, displayValue: <YellowSquare />, id: "4" },
];

const arrayOfOptions = [exampleItems, exampleItems2, exampleItems3];

const Growing = () => {
  const [numberOfColumns, setNumberOfColumns] = useState<number>(3);
  const [boxShape, setBoxShape] = useState<Shape>("SQUARE");
  const [typeOfBoard, setTypeOfBoard] = useState<TypeOfBoard>(
    TypeOfBoard.DOUBLE_PYRAMID
  );
  const [optionExample, setOptionExample] = useState<number>(0);

  const onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateNumber(event.target.value)) {
      const newValue = Number(event.target.value);
      setNumberOfColumns(newValue);
    }
  };

  const onShapeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShape(event.target.value as Shape);
  };
  const onExampleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionExample(Number(event.target.value));
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

  const radioButtonOptionsSection = () => {
    return (
      <RadioButtonContainers onChange={onExampleDataChange}>
        Ejemplo de Opciones
        <input type="radio" value={0} defaultChecked name="option" /> Numeros
        <input type="radio" value={1} name="option" /> Letras
        <input type="radio" value={2} name="option" /> Componentes (cuadrados de
        colores)
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
        {radioButtonOptionsSection()}
      </ColumnSection>
      <ColumnSection>
        <GrowingBoard
          shape={boxShape}
          columns={numberOfColumns}
          typeOfBoard={typeOfBoard}
          options={arrayOfOptions[optionExample]}
        />
      </ColumnSection>
    </Container>
  );
};

export default Growing;
