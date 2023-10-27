import styled from "styled-components";

export const Select = styled.div`
  width: 100%;
  min-width: 17.5rem;
  background-color: ${({ $permissionId, theme }) => $permissionId === 1 ? theme.COLORS.DARK_900 : 'none'};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  padding: 1.6rem;
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;

  .red {
    fill: red;
  }

  #options-view-button:checked + #selected-button {
    outline: 1px solid white;
  }

  #category-select:has(#options-view-button:checked) label,
  #options-view-button:checked + #select-button #chevrons {
    color: white;
  }

  #category-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    #select-button {
      width: 100%;
      display: flex;
      align-items: center;

      gap: 8px;
    }
  }

  #category-select:has(#options-view-button:checked) + #options {
    display: block;
  }

  #options-view-button {
    all: unset;
    position: absolute;
    inset: 0;

   
    z-index: 3;
    ${props =>
      props.$permission_id === 1 &&
      `
        cursor: pointer;
      `}
  }

  #chevrons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.ul`
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  margin-top: 0.5px;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

  display: none;

  .option {
    display: flex;
    align-items: center;
    position: relative;
    gap: 8px;

    padding: 1.6rem;

    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: Roboto;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;

    &:has(input:checked),
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    }

    & input[type="radio"] {
      all: unset;
      position: absolute;
      inset: 0;

      cursor: pointer;
    }
  }


  .select:has(.option input:checked) #category-select {
    color: #FFF;
  }

  .red {
    fill: red;
  }
  .yellow {
    fill: yellow;
  }
  .green {
    fill: green;
  }
`;