import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (min-width: 1368px) {
    max-width: 22.9rem;
  }

  input[type="file"] {
    display: none;
    position: relative;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  span {
    height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: Roboto;
    font-size: 1.6rem;
  }

  label {
    cursor: pointer;
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
 
    display: block !important;
    text-align: center !important;

    padding: 1.2rem 3.2rem 1.2rem 6.4rem !important;
    gap: 1.4rem;

    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800} !important;
    transition: filter 0.2s;
  }

  label:hover {
    filter: brightness(0.9);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    left: 3.2rem;
    top: 55%;
  }
`;