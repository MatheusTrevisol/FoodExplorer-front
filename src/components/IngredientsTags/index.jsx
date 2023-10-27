import { Container } from "./styles";

import { FiPlus, FiX } from 'react-icons/fi'

export function IngredientsTags({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew} >
      <input
          type="text"
          value={value}
          readOnly={!$isNew}
          size={$isNew ? '6' : value.length}
          {...rest}
        />

        <button
          type="button"
          onClick={onClick}
          className={$isNew ? "button-add" : "button-remove"}
        >
          {$isNew ? <FiPlus /> : <FiX />}
        </button>
    </Container>
  );
};