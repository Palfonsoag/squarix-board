import React, { ReactElement, useEffect, useState } from "react";
import {
  SelectBox,
  SelectBoxContainer,
  SelectedItemContainer,
  SelectBoxArrow,
  ArrowDown,
  ArrowUp,
  ItemsContainer,
} from "./styles";

export type OptionListItems = {
  id: string;
  value: string | number | ReactElement;
  displayValue: string | number | ReactElement;
};

export interface OptionListProps {
  items: OptionListItems[];
  showItems: boolean;
  selectedItem: OptionListItems;
  toggleList: () => void;
}

const OptionList = ({
  items,
  selectedItem,
  showItems,
  toggleList,
}: OptionListProps) => {
  const [options, setOptions] = useState<OptionListItems[]>(items || []);
  const [selectedOption, setSelectedOption] =
    useState<OptionListItems>(selectedItem);

  useEffect(() => {
    setOptions(items);
  }, [items]);

  const dropDown = () => {
    toggleList();
  };
  const selectItem = (item: OptionListItems) => {
    setSelectedOption(item);
    toggleList();
  };
  return (
    <>
      <SelectBox>
        <SelectBoxContainer>
          <SelectedItemContainer>
            {selectedOption.displayValue}
          </SelectedItemContainer>
          <SelectBoxArrow onClick={dropDown}>
            {showItems ? <ArrowUp /> : <ArrowDown />}
          </SelectBoxArrow>
        </SelectBoxContainer>
      </SelectBox>
      {showItems && (
        <ItemsContainer>
          {options.map((item) => (
            <div key={item.id} onClick={() => selectItem(item)}>
              {item.displayValue}
            </div>
          ))}
        </ItemsContainer>
      )}
    </>
  );
};

export default OptionList;
