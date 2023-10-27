import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 11.4rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 2rem;
  padding: 0 0 20rem 0;
  @media (min-width: 1368px) {
    min-height: calc(100vh - 10.4rem);
  }

  h1 {
    font-size: 6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  p {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;