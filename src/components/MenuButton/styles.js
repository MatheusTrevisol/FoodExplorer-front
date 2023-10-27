import styled from "styled-components";

export const Container = styled.button`
  height: 2.8rem;
  width: 2.4rem;
  background: transparent;
  cursor: pointer;
  z-index: 3;

  .row {
    display: block;
    width: 2.4rem;
    height: 2px;
    margin: 5px auto;
    background: ${({ theme }) => theme.COLORS.LIGHT_100};
    position: relative;
    transform-origin: center;
    transition: 0.2s;
  }

  &.active .row:nth-child(1) {
      transform: translateY(4px) rotate(-45deg);
    }

  &.active .row:nth-child(2) {
    display: none;
    visibility: hidden;
  }

  &.active .row:nth-child(3) {
    transform: translateY(-3px) rotate(+45deg);
  }

  @media (min-width: 1368px) {
    display: none;
    visibility: hidden;
  }
`;