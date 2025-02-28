import styled from "styled-components";
import { colors } from "./colors";
export const Container = styled.div``;
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  heigth: 40px;
  width: fit;
  gap: 8px;
`;
export const Content = styled.div``;
export const CardContainer = styled.div``;
export const Divider = styled.div``;
export const Main = styled.main``;
export const Span = styled.span``;
export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;
export const Select = styled.select``;
export const Input = styled.input``;
export const Nav = styled.nav``;
export const P = styled.p``;
export const H1 = styled.h1``;
export const Image = styled.img``;
export const Layout = styled.div`
  width: 100vw;
  heigth: 100vh;
`;

export const PageTopBar = styled.div`
  width: 100%;
  border-radius: 2px;
  display: flex;
  min-heigth: 40px !important;
  flex-direction: row;
  align-items: center;
  justify-content: between;
  margin-bottom: 8px;
`;

export const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  background: ${colors.white};
  padding: 1rem;
`;
export const DoubleCol = styled.div`
  width: 100%;
  height: 100%;
  gap: 8px;
  display: flex;

  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const FormHeader = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: between;
  align-items: center;
  height: 40px;
`;
