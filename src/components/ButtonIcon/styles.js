import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background: none;
  border: none;
`;