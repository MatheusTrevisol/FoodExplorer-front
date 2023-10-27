import { Container } from "./styles";

export function MenuButton({ onClick, isActive }) {
  return (
    <Container
      id="btn-menu"
      className={`menu-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className='row'></span>
      <span className='row'></span>
      <span className='row'></span>
    </Container>
  )
}