import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.palette.neutral["100"]};

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const H1 = styled.h1`
  font-size: 50px;
  color: ${colors.primary};
  align-items: center;
  display: flex;
  justify-content: end;
  width: 100%;

  @media (max-width: 1050px) {
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
export const SpanH1 = styled.span`
  color: ${colors.red};
`;
export const SpanSub = styled.span`
  font-size: 25px;
  align-items: center;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 0;
  text-align: right;
  @media (max-width: 1050px) {
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
export const Left = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 35%;
  @media (max-width: 1050px) {
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
export const Right = styled.div``;

export const LoginCon = styled.div`
  background: #fff;
  box-shadow: 0 4px 12px rgb(0 0 0 / 13%);
  border-radius: 10px;
  padding: 20px 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LoginConTitle = styled.div``;
export const LoginConBody = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 20px 5px;
  color: ${colors.palette.red["400"]};
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 5px;
  font-size: 14px;
`;
