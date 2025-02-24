import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${colors.white};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Nav = styled.nav<{
  $isCollapse: boolean;
  $isSidebarOpen: boolean;
}>`
  transition: width 0.3s ease-in-out;
  width: 100%;
  @media (min-width: 768px) {
    display: block;
    width: ${({ $isCollapse }) => ($isCollapse ? "60px" : "250px")};
  }
  display: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "block" : "none")};
`;

export const Main = styled.main<{ $isCollapse: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition:
    margin-left 0.3s ease-in-out,
    width 0.3s ease-in-out;
  padding: 8px;
  background: ${colors.palette.neutral["100"]};
  position: relative;
  height: 100vh;
  overflow: auto;

  @media (min-width: 768px) {
    width: ${({ $isCollapse }) =>
      $isCollapse ? "calc(100% - 60px)" : "calc(100% - 60px)"};
  }
`;
export const MainContent = styled.div``;
