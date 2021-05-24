import React, { useState } from "react";
import Input from "../../components/Input/Input";
import RegularBoard from "../../components/RegularBoard/RegularBoard";
import { validateNumber } from "../../utils/validators";
import { Shape } from "../../components/Box/Box";
import { OptionListItems } from "../../components/OptionList/OptionList";
import {
  Container,
  ColumnSection,
  RedSquare,
  BlueSquare,
  GreenSquare,
  YellowSquare,
} from "./styles";

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

const Home = () => {
  const [numberOfColumns, setNumberOfColumns] = useState<number>(2);
  const [numberOfRows, setNumberOfRows] = useState<number>(2);
  const [boxShape, setBoxShape] = useState<Shape>("SQUARE");
  const [optionExample, setOptionExample] = useState<number>(0);

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
  const onExampleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionExample(Number(event.target.value));
  };

  const radioButtonSection = () => {
    return (
      <div onChange={onChangeValue}>
        Forma de las casillas
        <input type="radio" value="SQUARE" defaultChecked name="gender" />{" "}
        Cuadrado
        <input type="radio" value="CIRCLE" name="gender" /> Circular
      </div>
    );
  };
  const radioButtonOptionsSection = () => {
    return (
      <div onChange={onExampleDataChange}>
        Ejemplo de Opciones
        <input type="radio" value={0} defaultChecked name="option" /> Numeros
        <input type="radio" value={1} name="option" /> Letras
        <input type="radio" value={2} name="option" /> Componentes (cuadrados de
        colores)
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
        {radioButtonOptionsSection()}
      </ColumnSection>
      <ColumnSection>
        <RegularBoard
          shape={boxShape}
          columns={numberOfColumns}
          rows={numberOfRows}
          options={arrayOfOptions[optionExample]}
        />
      </ColumnSection>
    </Container>
  );
};

export default Home;
