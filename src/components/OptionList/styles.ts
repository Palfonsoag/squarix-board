import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 70px;
  box-sizing: border-box;
  position: fixed;
  margin-right: -50px;
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
  mint-width: 70px;
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

export const BoxOptionContainer = styled.div`
  min-width: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.whiteSmoke};
  cursor: pointer;
  position: fixed;
  elevation: 1000;
  margin-left: 60px;
  -webkit-box-shadow: -3px 1px 37px -6px rgba(0, 0, 0, 0.84);
  box-shadow: -3px 1px 37px -6px rgba(0, 0, 0, 0.84);
`;
