import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;

  overflow-x: auto;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer"
  ;

  @media (min-width: 1368px) {
    grid-template-rows: 10.4rem auto 7.7rem;
  }
`;

export const Content = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 30.3rem;

  gap: 3.2rem;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 3.4rem 17.7rem 1rem 12.3rem;

  @media (max-width: 1367px) {
    padding: 5.6rem 9rem 1rem 3.5rem;

    gap: 2.7rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;

    gap: 4.8rem;

    /* scroll */
    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-radius: 9999px;
      border: 4px solid transparent;
    }
    
    @media (max-width: 1367px) {
      max-height: 52rem;
      gap: 1rem;
    }
  }
`;

export const FavoritesDiv = styled.div`
  display: flex;

  gap: 1.3rem;

  padding: 1.6rem 0;
`;

export const ImageDiv = styled.div`
  display: flex;

  img {
    width: 7.2rem;
    height: 7.2rem;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;
  }

  button {
    width: max-content;
    text-align: left;

    font-family: Roboto;
    font-size: 1.2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};

    background: none;
    border: none;
  }
`;