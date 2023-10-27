import { Container } from "./styles";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

export function Select({ labelText, htmlFor: HtmlFor, ...rest }) {
  const [categoriesToShow, setCategoriesToShow] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/products_categories");

      setCategoriesToShow(response.data);
    }

    fetchCategories();
  }, []);

  return (
    <Container>
      <label>
        {labelText}
      </label>
      <select {...rest}>
        {
          categoriesToShow &&
          Object.values(categoriesToShow).map(category => (
            <option key={String(category.category_id)} value={category.category_name}>
              {category.category_name}
            </option>
          ))
        }
      </select>
    </Container>
  );
};