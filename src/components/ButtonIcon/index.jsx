import { Container } from "./styles";

export function ButtonIcon({title, loading = false, icon: Icon, onClick, ...rest}) {
  return (
    <Container  onClick={onClick} disabled={loading} {...rest}>
      {Icon && <Icon size={24} />}
      {title && loading ? "Carregando..." : title}
    </Container>
  );
};