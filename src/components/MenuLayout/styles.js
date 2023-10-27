import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  z-index: 99;

  header {
    display: flex;
    align-items: center;
    position: relative;
    height: 11.4rem;

    gap: 1.6rem;
    padding: 3.2rem 0 0 2.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > button {
      top: 6.5rem
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Roboto;
      font-size: 2.1rem;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  padding: 3.6rem 2.8rem 1.4rem;

  #searchContainer {
    max-width: 60rem;
    gap: 1.4rem;

    border-radius: 5px;

    #search {
      width: 100%;
      
      > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }

  > button {
    width: 90%;
    justify-content: flex-start;
    background: none;

    padding: 1rem;

    font-family: Poppins;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 140%;
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;