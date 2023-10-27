import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  overflow-y: auto;
  overflow-x: auto;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer"
  ;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  
  @media (min-width: 1368px) {
    grid-template-rows: 10.4rem auto 7.7rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding:  1.1rem 3.2rem 5.3rem;

  @media (min-width: 1368px) {
    padding: 4rem 0 11.6rem;
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

export const Fieldset = styled.fieldset`
  border: none;
  width: 100%;

  @media (min-width: 1368px) {
    align-self: center;
  }
 
  #fieldset-wrapper {
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin: 0 auto;

    /* back button */
    > button {
      width: 100%;
      height: 3.4rem;
      display: flex;
      justify-content: start;
      align-items: flex-start;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-size: 1.65rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      @media (min-width: 1368px) {
        font-size: 2.4rem;
        font-weight: 700;
        width: 112rem;
      }

      > svg {
        width: 2.2rem;
        height: 2.2rem;

        @media (min-width: 1368px) {
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }

    > legend {
      height: 4.5rem;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;

    }

    @media (min-width: 1368px) {
      max-width: 112rem;
      margin: 0 auto;
    }
  }
`;

export const IngredientsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  @media (min-width: 1368px) {
    max-width: 83.7rem;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_900};
    font-family: Roboto;
    font-size: 1.6rem;
  }

  #ingredientsTagsContainer {
    width: 100%;

    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;

    padding: 7px 0 7px 7px;
    gap: 1.6rem;

    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    @media (min-width: 1368px) {
      max-width: 83.7rem;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_900};
    font-family: Roboto;
    font-size: 1.6rem;
  }

  > textarea {
    padding: 1.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: Roboto;
    font-size: 1.6rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  font-size: 1.2rem;

  @media (min-width: 1368px) {
    justify-content: flex-end;
  }

  #deleteButton {
    background: ${({ theme }) => theme.COLORS.DARK_800};

    @media (min-width: 1368px) {
      max-width: 13.5rem;
    }
  }

  #saveButton {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

    @media (min-width: 1368px) {
      max-width: 17.2rem;
    }
  }

  #deleteButton, #saveButton {
    padding: 1.2rem 2.4rem;
    font-size: 1.2rem;
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1368px) {
    flex-direction: row;
    gap: 3.2rem;
  }

  #name {
    padding: 1.2rem 1.4rem;
    height: 4.8rem;
  }

  #price {
    padding: 1.2rem 1.4rem;
    height: 4.8rem;
  }

  > div > input,
  > div > select {
    background: ${({ theme }) => theme.COLORS.DARK_700};
  }

  > div > label,
  > div > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;