import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
  
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};
  
  > input {
    width: 100%;
    height: 1.6rem;
    background: none;
    border: none;
    
    font-size: 1.6rem;
    text-align: center;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: none;

    padding-top: 2px;
    
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    > svg {
      height: 12px;
      width: 12px;
    }    
  }
`;