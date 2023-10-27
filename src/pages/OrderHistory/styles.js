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

  gap: 3.4rem;

  padding: 3.4rem 11.3rem 4rem 12.3rem;

  @media (max-width: 1367px) {
    padding: 5.6rem 3.5rem 4rem;
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

    @media (max-width: 1367px) {
      gap: 3.1rem;
      min-width: 29rem;
      padding: 1rem;
    }

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

    @media (max-width: 1367px) {
      gap: 3.1rem;
    }

    .select {
      @media (max-width: 1367px) {
        min-width: max-content;
        width: max-content;
        padding: 0;
      }
    }
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