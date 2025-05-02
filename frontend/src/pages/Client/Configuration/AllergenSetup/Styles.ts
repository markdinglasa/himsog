import { colors } from "../../../../styles";
import styled from "styled-components";
export const Container = styled.div`
  background: ${colors.palette.neutral["050"]};
`;
export const MainContent = styled.div`
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 ${colors.palette.neutral["050"]}; /* For Firefox */
  width: 100%; /* Use 100% instead of 100vw to avoid horizontal scrolling issues */
  padding: 1rem;

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
