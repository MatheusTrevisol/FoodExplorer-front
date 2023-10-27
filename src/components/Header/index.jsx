import { Container, NavMenu, Logo, ReceiptDiv, OrderButton, LeftDiv, RightDiv } from './styles';

import { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { MenuLayout } from '../MenuLayout';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';
import { MenuButton } from '../MenuButton';

import { FiSearch } from 'react-icons/fi';
import { PiReceipt } from 'react-icons/pi';
import { GoSignOut } from 'react-icons/go';

import LogoImg from '../../assets/logo.svg';
import { useCart } from '../../hooks/cart';

export function Header({ onChange }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { user, signOut } = useAuth();

  const { cartProducts } = useCart();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate('/');
  };

  function handleOrders() {
    navigate('/orders');
  };

  function menuHamburguerAnimated() {
    const btn = document.getElementById("btn-menu");
    btn.classList.add("active");

    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <Container>
      {
      !menuIsVisible &&
      <NavMenu>
        <LeftDiv>
          <MenuButton onClick={menuHamburguerAnimated} />

          <Logo href="/" $permission_id={user.permission_id} >
            <img src={LogoImg} alt="Foto da logo, uma figura geométrica" />
            <h1>food explorer</h1>
            {
              user.permission_id === 1 &&
              <span>admin</span>
            }
          </Logo>

          <Input onChange={onChange} htmlFor="search" id="search" name="search" icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>

          {
            user.permission_id !== 1 &&
            <ReceiptDiv onClick={handleOrders}>
              <PiReceipt size={32} />
              <span>{cartProducts.length}</span>
            </ReceiptDiv>
          }

          <Link to="/favorites" className="navLinks">
            Meus favoritos
          </Link>
          
          {
            user.permission_id !== 1 
            ? <Link to="/order_history" className="navLinks">Histórico de pedidos</Link>
            : <Link to="/new_product" className="navLinks">Novo prato</Link>
          }  
        </LeftDiv>

        <RightDiv>          
          <OrderButton type="button" onClick={handleOrders} >
            <PiReceipt size={32} />
            <h4>Pedidos
              {
                user.permission_id !== 1
                ? <span>({cartProducts.length})</span>
                : ''
              }
            </h4>
          </OrderButton>

          <ButtonIcon id="signOutButton" icon={GoSignOut} type="button" onClick={handleSignOut} />
        </RightDiv>
      </NavMenu>
      }
    
      {menuIsVisible && <MenuLayout onCloseMenu={menuHamburguerAnimated} isActive={menuIsVisible} />}
    </Container>
  );
};