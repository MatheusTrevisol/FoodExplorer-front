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

export const Content = styled.section`
  grid-area: content;
  display: flex;
  max-height: 68rem;
  
  gap: 7.5rem;
  padding: 5.6rem 2rem 8rem 3rem;

  @media (min-width: 1368px) {
    padding: 3.4rem 18rem 10rem 10.7rem;
  }
`;

export const LeftDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    padding: 1.6rem 0;
  }

  #backButton {
    padding: 1.2rem 3.6rem;
    width: max-content;
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    align-self: flex-end;

    @media (min-width: 1368px) {
      display: none;
    }
  }
`;

export const OrdersDiv = styled.div`
  min-width: 35rem;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  > button {
    width: max-content;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 3.2rem;
  }

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
`;

export const OrderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 0;
  gap: 1.3rem;
`;

export const ImageDiv = styled.div`
  width: 10rem;
  height: 10rem;

  > img {
    width: 100%;
  }
`;

export const TextDiv = styled.div`
  h4 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: Roboto;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: pointer;
  }
`;

export const Payment = styled.div`
  width: 100%;
  height: max-content;
  
  @media (max-width: 1367px) {
    display: none;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 3.2rem;
  }
`;

export const PaymentBox = styled.div`
  max-width: 70rem;
  
  @media (max-width: 1367px) {
    max-width: auto;
  }

  #pix {
    width: 100%;
    height: 8.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 1.2rem 1.4rem;
    gap: 8px;

    border-radius: 8px 0px 0px 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    background: ${({ theme }) => theme.COLORS.DARK_800};

    gap: 8px;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Roboto;
      font-size: 1.6rem;
      line-height: 100%;
      text-align: center;
    }
  }

  #credit {
    width: 100%;
    height: 8.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 1.2rem 1.4rem;
    gap: 8px;

    border-radius: 0px 8px 8px 0px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    background: ${({ theme }) => theme.COLORS.DARK_800};

    gap: 8px;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Roboto;
      font-size: 1.6rem;
      line-height: 100%;
      text-align: center;
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PaymentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 10.7rem 13rem;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

  > div {
    display: flex;
    flex-direction: column;
    gap: 3.7rem;

    h3 {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
  
  #finalize_payment {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 3.2rem;
    gap: 8px;

    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
`;

/* admin order */
export const ContentAdmin = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 3.4rem;

  padding: 3.4rem 11.3rem 1rem 12.3rem;

  @media (max-width: 1367px) {
    padding: 5.6rem 3.5rem 1rem;
    overflow-y: auto;
    gap: 2.7rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1.6rem 2.4rem;
    text-align: left;
  }

  th {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  td {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};    
  }

  select {
    width: 100%;
    padding: 5px;
  }
`;

export const OrdersBoxMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 2.4rem;

  .order {
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    gap: 1.6rem;

    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};  

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: Roboto;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  .text-div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

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
`;

export const OrdersBoxDesktop = styled.div`  
  width: 100%;
  max-height: 56.6rem;

  overflow-y: auto;
  overflow-x: hidden;

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
`;