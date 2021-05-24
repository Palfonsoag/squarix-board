import React, { ReactElement, useEffect, useState } from "react";
import {
  SelectBox,
  SelectBoxContainer,
  SelectedItemContainer,
  SelectBoxArrow,
  ArrowDown,
  ArrowUp,
  ItemsContainer,
  BoxOptionContainer,
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
  dropdown?: boolean;
  toggleList?: () => void;
  onItemSelected?: (item: OptionListItems) => void;
}

const OptionList = ({
  items,
  selectedItem,
  showItems,
  dropdown = true,
  toggleList,
  onItemSelected,
}: OptionListProps) => {
  const [options, setOptions] = useState<OptionListItems[]>(items || []);
  const [selectedOption, setSelectedOption] = useState<OptionListItems>(
    selectedItem
  );

  useEffect(() => {
    setOptions(items);
  }, [items]);

  const dropDown = () => {
    if (toggleList) {
      toggleList();
    }
  };
  const selectItem = (item: OptionListItems) => {
    setSelectedOption(item);
    if (toggleList) {
      toggleList();
    }
  };

  const handleItemSelected = (item: OptionListItems) => {
    if (onItemSelected) {
      onItemSelected(item);
    }
  };
  return (
    <>
      {dropdown ? (
        <SelectBox>
          <SelectBoxContainer>
            <SelectedItemContainer>
              {selectedOption.displayValue}
            </SelectedItemContainer>
            <SelectBoxArrow onClick={dropDown}>
              {showItems ? <ArrowUp /> : <ArrowDown />}
            </SelectBoxArrow>
          </SelectBoxContainer>
          {showItems && (
            <ItemsContainer>
              {options.map((item) => (
                <div key={item.id} onClick={() => selectItem(item)}>
                  {item.displayValue}
                </div>
              ))}
            </ItemsContainer>
          )}
        </SelectBox>
      ) : (
        showItems && (
          <BoxOptionContainer>
            {options.map((item) => (
              <div key={item.id} onClick={() => handleItemSelected(item)}>
                {item.displayValue}
              </div>
            ))}
          </BoxOptionContainer>
        )
      )}
    </>
  );
};

export default OptionList;
