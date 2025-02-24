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

  padding: 8px;

  @media (min-width: 768px) {
    display: block;
    width: ${({ $isCollapse }) => ($isCollapse ? "75px" : "16.6667%")};
  }

  display: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "block" : "none")};
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition:
    margin-left 0.3s ease-in-out,
    width 0.3s ease-in-out;
  padding: 8px;
  position: relative;
  height: 100vh;
  overflow: auto;
`;
export const MainContent = styled.div``;
