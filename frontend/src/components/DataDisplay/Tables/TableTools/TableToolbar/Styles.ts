import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  margin-bottom: 8px;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const ChildContent = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0px;
  }
`;
