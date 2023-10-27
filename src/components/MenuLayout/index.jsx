import { Container, Content } from "./styles";

import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Button } from "../Button";
import { MenuButton } from "../MenuButton";

import { FiSearch } from 'react-icons/fi'

export function MenuLayout({onCloseMenu, isActive }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate('/');
  };

  function handleOrder() {
    navigate('/orders');
  };

  function handleNewProduct() {
    navigate('/new_product');
  };

  function handleFavorites() {
    navigate('/favorites');
  };

  return (
    <Container>
      <header>
        <MenuButton onClick={onCloseMenu} isActive={isActive}/>
        <h2>Menu</h2>
      </header>

      <Content>
        <Input htmlFor="search" id="search" name="search" icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>

        {/* content */}
        {
          user.permission_id === 1 &&
          <>
            <Button title="Pedidos" type="button" onClick={handleOrder} />
            <Button title="Novo prato" type="button" onClick={handleNewProduct} />
          </>
        }
        <Button title="Meus favoritos" type="button" onClick={handleFavorites} />
        <Button title="Sair" type="button" onClick={handleSignOut} />
      </Content>
    </Container>
  );
};