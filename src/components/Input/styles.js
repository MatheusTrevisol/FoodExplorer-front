import { styled } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: Roboto;
  font-size: 1.6rem;
  
  padding: 1.2rem 1.4rem;
  gap: 1.6rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};

  > label {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
  }

  > input {
    width: 100%;
    position: relative;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    background: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;