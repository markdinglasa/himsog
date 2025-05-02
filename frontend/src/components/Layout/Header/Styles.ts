import styled from "styled-components";
import { TextField as tf } from "@mui/material";
import { InputOption as IO } from "../../Inputs";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  height: 50px;
`;
export const LeftContent = styled.div`
  width: 100%;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const MobileMenu = styled.div<{ $IsTeller: boolean }>`
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 50%%;

  ${({ $IsTeller }) =>
    $IsTeller
      ? ""
      : `gap: 8px;
        @media (min-width: 768px) {
          display: none;
        }`};
`;
export const Image = styled.img`
  width: 8rem;
  cursor: pointer;
`;
export const DesktopMenu = styled.div<{ $IsTeller: boolean }>`
  ${({ $IsTeller }) =>
    $IsTeller
      ? "display: none;"
      : `
      display: none;
      @media (min-width: 768px) {
        display: block;
      };`};
`;
export const DesktopContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: between;
  align-items: center;
  gap: 8px;
  height: 3.5rem;
`;
export const SearchCon = styled.div`
  width: 100%;
  display: flex;
`;

export const TextField = styled(tf)(() => ({
  width: "50%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "40px",
    background: "white",
    border: "none",
    outline: "none",
    "&:hover": {
      border: "none",
      outline: "none",
    },
  },
}));

export const InputOption = styled(IO)`
  border-radius: 50%;
  text-align: center;
  justify-content: center;
`;

export const Hidden = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    display: block; /* Visible from medium screens and up */
  }
`;
