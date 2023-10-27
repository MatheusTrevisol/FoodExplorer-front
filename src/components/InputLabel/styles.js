import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  flex: 1;

  gap: 1.6rem;

  > label {
    width: 100%;
    height: 1.6rem;

    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    > span {
      font-size: 1rem;
      position: relative;
      top: -8px;
    }
  }

  > input {
    width: 100%;
    height: 4.8rem;

    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    padding: 1.6rem 1.4rem;
    
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
  }
`;