import { styled } from "styled-components";

export const Container = styled.div`
  height: 29.2rem;
  min-height: 21rem;
  max-width: 21rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  
  background: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  cursor: pointer;

  @media (min-width: 1368px) {
    min-height: 30.4rem;
    max-width: 30.4rem;
    height: 46.2rem;
  }

  > button:first-child {
    width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    z-index: 999;
    top: 13px;
    right: 11px;

    background: none;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Content = styled.div`
  width: 21rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;

  padding: 2.4rem;
  gap: 1.2rem;

  @media (min-width: 1368px) {
    width: 30.4rem;
    min-height: 46.2rem;

    gap: 1.5rem;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;

    @media (min-width: 1368px) {
      width: 17.6rem;
      height: 17.6rem;
    }
  }
`;

export const ProductTitle = styled.h4`
  text-align: center;
  font-family: Poppins;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  @media (min-width: 1368px) {
    width: 25.6rem;

    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;
  }
`;

export const Description = styled.p`
  width: 25.6rem;
  min-height: 2rem;
  overflow: hidden;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  text-align: center;
  font-family: Roboto;
  font-size: 1.4rem;
  line-height: 160%;

  @media (max-width: 1367px) {
    display: none;
    visibility: hidden;
  }
`;

export const Price = styled.span`
  height: 1.6rem;
  text-align: center;
  font-family: Roboto;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  #price {
    display: inline-block;
    height: 1.6rem;
  }

  @media (min-width: 1368px) {
    height: 5.2rem;
    font-size: 3.2rem;
    line-height: 160%;
  }
`;

export const QuantityController = styled.div`
  height: 3.2rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 4px 0;
  z-index: 999;
  
  font-family: Roboto;

  @media (min-width: 1368px) {
    padding: 8px 0;
  }

  > span {
    font-family: Roboto;
    font-size: 1.6rem;

    @media (min-width: 1368px) {
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%;
    }
  }

  div {
    > svg {
      width: 2.7rem;
      height: 2.7rem;          
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
 
  @media (min-width: 1368px) {
    width: max-content;
    flex-direction: row;
  }

  #includeButton {
    height: 3.2rem;
    
    padding: 1.2rem 2.4rem;
    
    position: relative;
    z-index: 98;
    
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    @media (min-width: 1368px) {
      height: 4.8rem;
    }
  }
`;