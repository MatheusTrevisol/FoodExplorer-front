import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;

  overflow-x: auto;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer"
  ;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  #switch {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  @media (min-width: 1368px) {
    grid-template-rows: 10.4rem auto 7.7rem;
  }
`;

export const Content = styled.main`
  margin: 0 auto;
  grid-area: content;
  width: 100%;

  padding: 4.4rem 2.4rem 0rem; 

  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 1368px) {
    padding: 12.9rem 12.4rem 0rem; 
  }

  #section {
    width: 100%;
    margin-bottom: 2.4rem;
    position: relative;

    @media (min-width: 1368px) {
      margin-bottom: 4.6rem;
    }
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
    background: ${({ theme }) => theme.COLORS.LIGHT_300};
    border-radius: 9999px;
    border: 4px solid transparent
  }
`;

export const Box = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 12rem;

  margin-left: 1.2rem;
  margin-bottom: 6.2rem;
  padding: 3.6rem 0.8rem 2.2rem 15.3rem;
  gap: 3px;

  animation: opacityAnimation 3s;

  border-radius: 3px;
  background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.DARK_900} 0%, ${({ theme }) => theme.COLORS.DARK_400} 100%);
  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;

  @media (min-width: 1368px) {
    height: 26rem;
    margin-left: 0;

    padding: 8.8rem 10rem 9.2rem 59rem;
  }
  
  @media (max-width: 416px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
  }

  img {
    position: absolute;
    z-index: 2;
    left: -3rem;
    top: -29px;

    @media (min-width: 1368px) {
      width: 63.2rem;
      height: 40.6rem;
      left: -6rem;
      top: -146px;
    }
  }  
  
  h2 {
    width: 100%;
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%; 

    @media (min-width: 1368px) {
      font-size: 4rem;  
      font-weight: 500;
    }
  }

  p {
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 140%;

    @media (min-width: 1368px) {
      font-size: 1.6rem;
    }
  }

  @keyframes opacityAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Poppins;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;

  margin-bottom: 2.4rem;

  @media (min-width: 1368px) {
    font-size: 3.2rem;
  }
`;