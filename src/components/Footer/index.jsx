import { Container, Logo } from "./styles";

import logo from "../../assets/logo.svg";

export function Footer({ }) {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo Food Explorer" />
        <h6>food explorer</h6>
      </Logo>

      <p>
        © 2023 - Todos os direitos reservados.
      </p>
    </Container>
  );
};