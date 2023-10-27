import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  overflow-y: auto;
  overflow-x: auto;
  
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer"
  ;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  @media (min-width: 1368px) {
    grid-template-rows: 10.4rem auto 7.7rem
  }
`;

export const Content = styled.main`
  height: max-content;
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;
  padding: 3.7rem 5.6rem 5.4rem;

  @media (min-width: 1368px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 2.4rem 12rem 15.5rem;
    gap: 4.8rem;
    margin: 0;
  }

  > button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;

    background: none;
    border: none;

    > svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    @media (min-width: 1368px) {
      font-weight: 700;
    }
  }

  .detail-image {
    width: 26.4rem;
    height: 26.4rem;
    
    @media (min-width: 1368px) {
      width: 39.9rem;
      height: 39.9rem;
    }
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  @media (min-width: 1368px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 4.8rem;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.8rem;

  > #text-div {
    width: 31.6rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;

    @media (min-width: 1368px) {
      align-items: flex-start;
      width: 68.7rem;
    }

    h2 {
      font-size: 2.7rem;
      font-weight: 500;
      line-height: 140%;

      @media (min-width: 1368px) {
        font-size: 4rem;
      }
    }

    p {
      font-size: 1.6rem;
      line-height: 140%;
      font-weight: 400;

      @media (min-width: 1368px) {
        font-size: 2.4rem;
        text-align: start;
      }

    }
  }

  #editButton {
    width: 13.1rem;
    padding: 1.2rem 2.4rem;

    @media (max-width: 1367px) {
      width: 100%;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 31.6rem;
  gap: 2.4rem;

  @media (min-width: 1368px) {
    justify-content: flex-start;
    width: 100%;
  }

  > span {  
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    text-align: center;
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    padding: .4rem .8rem;
  }
`;

export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  gap: 1.6rem;
  
  > svg {
    cursor: pointer;
    width: 2.7rem;
    height: 2.7rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.4rem;

    #quantityControll {
      background: none;
      padding: 0;
    }

    span {
      font-family: Roboto;
      font-size: 2.3rem;
      font-weight: 700;
      line-height: 160%;
    }
  }

  > button {
    width: 18.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: .8rem 1.6rem;
    gap: 8px;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6rem;
    cursor: pointer;

    border-radius: 4px;

    @media (min-width: 1368px) {
      width: 16.2rem;
      padding: 1.2rem 2.4rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    > svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;