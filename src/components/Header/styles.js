import { styled } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  height: 11.4rem;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (min-width: 1368px) {
    height: 10.4rem;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  height: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  padding: 5.6rem 2.8rem 2.4rem;

  @media (min-width: 1368px) {
    height: 10.4rem;
    padding: 2.4rem 12.3rem;
    gap: 3.2rem;
  }

  #signOutButton {
    > svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    @media (max-width: 1367px) {
      display: none;
      visibility: hidden;
    }
  }
`;

export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  #searchContainer {
    @media (max-width: 1367px) {
      display: none;
      visibility: hidden;
    }

    @media (min-width: 1368px) {
      height: 4.8rem;
    } 
  }

  .navLinks {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    text-align: center;
    font-family: Roboto;
    font-size: 1.6rem;
    display: block;
    visibility: visible;

    @media (max-width: 1367px) {
      display: none;
      visibility: hidden;
    }
  }
`;

export const RightDiv = styled.div`
  display: flex;
  gap: 2.4rem;

  h4 {
    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }
`;

export const Logo = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;

  gap: 8px;

  @media (min-width: 1368px) {
    width: max-content;
    ${props =>
      props.$permission_id === 1 &&
      `
        top: -5px;
      `}
  }

  img {
    width: 2.5rem;
    height: 2.5rem;

    @media (min-width: 1000px) {
      width: 4rem;
      height: 4rem;
    }

    @media (min-width: 1368px) {
      width: 3rem;
      height: 3rem;
    }    
  }

  h1 {
    text-align: center;
    font-family: Roboto;
    font-size: 2.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: 318px) {
      font-size: 1.4rem;
      text-align: center;
    }

    @media (min-width: 1000px) {
      font-size: 2.8rem;
    }

    @media (min-width: 1368px) {
      min-width: 14.6rem;
      font-size: 2.4rem;
    }
  }

  span { 
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: Roboto;
    font-size: 1.2rem;
    line-height: 160%;
    height: 15px;

    @media (min-width: 1368px) {
      position: absolute;

      height: 2rem;
      padding: 0;

      right: 0px;
      bottom: -15px;
    } 
  }
`;

export const ReceiptDiv = styled.a`
  display: flex;
  align-items: end;
  position: relative;
  height: 3.8rem;
  padding: 6px 5.5px 0 0;
  cursor: pointer;

  svg  {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  span {      
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 2px;
    right: 0px;

    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};    
    border-radius: 99px;
  }

  @media (min-width: 1368px) {
    display: none;
    visibility: hidden;
  }
`;

export const OrderButton = styled.button`
  min-width: 21.6rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 1.2rem 3rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 5px;

  @media (max-width: 1367px) {
    display: none;
    visibility: hidden;
  }
`;