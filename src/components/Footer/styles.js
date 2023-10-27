import { styled } from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 7.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.9rem 2.8rem;
  gap: 8px;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 1368px) {
    justify-content: space-between;
    padding: 2.4rem 12.3rem;
  }

  > p {
    width: 100%;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: right;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: DM Sans;
    font-size: 1.2rem;

    @media (min-width: 1368px) {
      font-family: Roboto;
      font-size: 1.4rem;
      line-height: 160%;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  @media (min-width: 1368px) {
    gap: 10px;
  }

  > img {
    width: 2.2rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.COLORS.LIGHT_700};

    @media (min-width: 1368px) {
      width: 3rem;
      height: 3rem;
    }
  }

  > h6 {
    width: 11.4rem;
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 700;

    @media (min-width: 1368px) {
      width: 14.6rem;
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;