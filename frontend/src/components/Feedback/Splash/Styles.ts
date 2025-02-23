import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
export const Image = styled.img`
  width: 50%;
  height: 33.3333%;

  @media (min-width: 640px) {
    width: 500px;
    height: 200px;
  }
`;
