import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.8rem;

  padding: 1.2rem 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  text-align: center;
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  border-radius: 5px;
  border: none;
`;