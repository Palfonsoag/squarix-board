import React, { ReactElement, useState } from "react";
import { ShapedBox } from "./styles";
import OptionList, { OptionListItems } from "../OptionList/OptionList";

export type Shape = "SQUARE" | "TRIANGLE" | "CIRCLE";

export interface BoxProps {
  shape: Shape;
  id: string;
  col: number;
  row: number;
  options: OptionListItems[];
}

const Box = ({ shape, id, col, row, options }: BoxProps): ReactElement => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<OptionListItems>(
    options[0]
  );

  const onItemSelected = (item: OptionListItems) => {
    setSelectedOption(item);
    setShowOptions(false);
  };

  return (
    <>
      <ShapedBox
        shape={shape}
        id={id}
        col={col}
        row={row}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedOption.displayValue}
      </ShapedBox>
      <OptionList
        dropdown={false}
        showItems={showOptions}
        items={options}
        selectedItem={selectedOption}
        onItemSelected={onItemSelected}
      />
    </>
  );
};

export default Box;
