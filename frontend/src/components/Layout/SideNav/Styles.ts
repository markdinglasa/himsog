import styled from "styled-components";

export const Container = styled.div<{ $isCollapse: boolean }>`
  height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ $isCollapse }) =>
    $isCollapse
      ? `
      width: 3.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    `
      : ""}
`;

export const Image = styled.img`
  width: 50%;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const LogoCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 8px;
`;
export const MenuContainer = styled.div`
  heigth: 100%;
  overflow: auto;
`;
export const MenuContent = styled.div<{ $isCollapse: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ $isCollapse }) =>
    $isCollapse
      ? `
      gap:8px;
    `
      : ""}
`;
export const Category = styled.span`
  padding: 8px;
  text-transform: uppercase;
  color: rgb(226 232 240);
  font-size: 11px !important;
`;
export const HR = styled.hr`
  margin-bottom: 8px;
`;
