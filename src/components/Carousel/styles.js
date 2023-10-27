import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.6rem;

  overflow: hidden;

  @media (min-width: 1100px) {
    gap: 2.7rem;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;

  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 4rem;

  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
  z-index: 99;

  &.button_left_arrow {
    left: 1.7rem;
  }
 
  &.button_right_arrow {
    right: 3rem;
  }

  &.button_left_arrow,
  &.button_right_arrow {
    > button {
      > svg {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;