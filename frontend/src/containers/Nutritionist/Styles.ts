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
export const MainContent = styled.div`
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 ${colors.palette.neutral["050"]}; /* For Firefox */
  width: 100%; /* Use 100% instead of 100vw to avoid horizontal scrolling issues */
  padding: 1rem; /* Add padding for better spacing */

  /* Custom scrollbar for WebKit browsers (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.palette.neutral["100"]};
  }

  /* Apply max-width and centering only when zoomed out */
  @media (min-width: 1921px) {
    max-width: 100rem; /* Equivalent to max-w-screen-lg in Tailwind */
    margin: 0 auto; /* Center the content */
  }
`;
