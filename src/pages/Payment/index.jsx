import { Container } from "./styles";

export function Payment() {
  return (
    <Container>
      <h2>Pagamento</h2>

      <Box>
        <Tab>Pix</Tab>
        <Tab>Cartão de Crédito</Tab>
      </Box>
    </Container>
  )
};