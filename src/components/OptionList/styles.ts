import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  box-sizing: border-box;
  background-color: ${COLORS.whiteSmoke};
`;

export const SelectBoxContainer = styled.div`
  height: 35px;
  border: 1px solid ${COLORS.black};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding-left: 10px;
`;

export const SelectedItemContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SelectBoxArrow = styled.div`
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
  background-color: ${COLORS.colorSecondary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${COLORS.black};
  border-left: 1px solid ${COLORS.black};
  border-right: 1px solid ${COLORS.black};
  background-color: ${COLORS.whiteSmoke};
  cursor: pointer;
  padding-left: 10px;
  position: fixed;
  margin-top: 140px;
`;

export const ArrowDown = styled.span`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid ${COLORS.colorPrimary};
  cursor: pointer;
`;

export const ArrowUp = styled.span`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid ${COLORS.colorPrimary};
  cursor: pointer;
`;
