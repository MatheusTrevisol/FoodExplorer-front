import styled from "styled-components";

export const Container = styled.button`
  border-radius: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  justify-content: center;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 7rem;
  height: 3.5rem;

  &.darkTheme {
    background: ${({ theme }) => theme.COLORS.GRADIENT};
  }

  &.lightTheme {
    background: ${({ theme }) => theme.COLORS.GRADIENT};
  }

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
  }
  /* Aplica a transformação nos ícones com base no tema */
  &.darkTheme svg:first-child {
    transform: translateY(-100px);
  }

  &.darkTheme svg:nth-child(2) {
    transform: translateY(0);
  }

  &.lightTheme svg:first-child {
    transform: translateY(0);
  }

  &.lightTheme svg:nth-child(2) {
    transform: translateY(100px);
  }
`;