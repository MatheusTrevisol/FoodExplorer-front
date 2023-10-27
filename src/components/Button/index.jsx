import { Container } from "./styles";

export function Button({title, loading = false, onClick, ...rest}) {
  return (
    <Container
      disabled={loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </Container>
  );
};