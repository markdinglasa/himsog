import styled from "styled-components";
import UIcon from "@mdi/react";
import { colors } from "../../../styles";

export const Icon = styled(UIcon)``;
export const Container = styled.div<{ $isParent: boolean }>`
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;
  ${({ $isParent }) =>
    $isParent
      ? `
      background:none;
    `
      : `&:hover { 
          color: #fff;
          background: ${colors.primaryHover};
      }`};
`;
export const Menu = styled.div<{ $isDisplay: boolean }>`
  transition: all 0.3s ease-in-out;

  ${({ $isDisplay }) =>
    $isDisplay
      ? `
      background: ${colors.primaryHover};
    `
      : `
      background: none;
    `};

  &:hover {
    background: ${colors.primaryHover};
  }
`;
export const MenuContent = styled.div<{ $isDisplay: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;

  ${({ $isDisplay }) =>
    $isDisplay
      ? `& > * {  color: ${colors.white}; }`
      : `& > * { color: ${colors.primary} }`};

  &:hover {
    color: white;

    & > * {
      color: white;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  font-weight: semibold;
  font-size: 16px;

  margin-left: 8px;
`;
export const Label = styled.label`
  width: 100%;
  text-align: left;
  cursor: pointer;
`;
export const ChildContent = styled.div<{ $isDisplay: boolean }>`
  overflow: hidden;
  transition: 0.3s ease-in-out;
  width: 100%;

  ${({ $isDisplay }) =>
    $isDisplay
      ? `

      heigth:fit;
    `
      : `
      max-height:0px;
    `};
  &:hover {
    color: #fff;
  }
`;

export const ChildMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  &:hover {
    color: white;

    & > * {
      color: white;
    }
  }
`;
export const ChildLabel = styled.label`
  margin-left: 8px;
  font-weight: semibold;
  font-size: 16px;
  color: ${colors.primary};
  cursor: pointer;
  width: 100%;
`;

export const ChilCircleButton = styled.div`
  gap: 8px;
`;
