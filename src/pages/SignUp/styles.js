import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  overflow-y: auto;

  @media (min-width: 1368px) {
    flex-direction: row;
    gap: 30rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 9999px;
    border: 4px solid transparent
  }
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 31.6rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 7.3rem;

  @media (min-width: 1368px) {
    gap: 1.9rem;
    transform: translateY(-2rem);
  }

  > h1 {
    width: 100%;
    font-size: 3.7rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (min-width: 1368px) {
      font-size: 4.2rem;
      max-width: 25.5rem;
    }
  }

  > img {
    @media (min-width: 1368px) {
      width: 4.94rem;
      height: 4.75rem;
    }
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 31.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .hide {
    display: none;
    visibility: hidden;
  }
  
  @media (min-width: 1368px) {
    max-width: 47.6rem;
    padding: 6.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 16px;
  }

  #inputSeparator {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h2 {
      height: 6.8rem;
      font-family: Poppins;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
      padding-top: 10px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    #passwordSignIn, #emailSignIn {
      @media (min-width: 1368px) {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 1.2rem 1.4rem;
      } 
    }

    div {
      @media (min-width: 1368px) {
        gap: 8px;
      }
    }
  }
`;

export const BackButton = styled.button`    
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;

  background: none;
  border: none;

  outline: none;
`;