import { Container, Price, QuantityController, Content, ProductTitle, Description, Controls } from "./styles";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { handleSymbolToDisplay } from "../../helpers/helpers";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";

import { api } from "../../services/api";

import { PiPlus, PiMinus, PiHeartLight, PiHeartFill } from "react-icons/pi";
import { GoPencil } from "react-icons/go";

export function Card({ image, title, price, description, id, product }) {
  const { user } = useAuth();
  const { addOneProductToCart } = useCart();

  const navigate = new useNavigate();

  const [icon, setIcon] = useState('');
  const [quantity, setQuantity] = useState(1);

  /*Set the icon to display */
  useEffect(() => {
    if(user.permission_id !== 1 && product.favorite === 1) {
      return setIcon(<PiHeartFill />)
    }

    if(user.permission_id !== 1 && product.favorite === 0) {
      return setIcon(<PiHeartLight />)
    } 

    if(user.permission_id === 1) {
      return setIcon(<GoPencil />)
    }

  }, [])

  function handleDetails(id) {
    navigate(`/details/${id}`)
  };

  async function handleFavButton(e) {
    e.stopPropagation();

    const newFavorite = product.favorite === 1 ? 0 : 1;

    product.favorite = newFavorite;

    await api.put(`/products/${id}`, product);

    if(newFavorite === 1) {
      return setIcon(<PiHeartFill />)
    }

    setIcon(<PiHeartLight />)    
  };

  function handleAddToCart(e) {
    e.stopPropagation();

    product.quantity = quantity;
    addOneProductToCart(product);
  }

  function handleMinus(e) {
    e.stopPropagation();

    quantity === 1 ? 1 : setQuantity(quantity - 1);
  };

  function handlePlus(e) {
    e.stopPropagation();
    
    setQuantity(quantity + 1);
  };
  
  return (
    <Container className="card" onClick={() => handleDetails(id)}>  
      <ButtonIcon
        type="button"
        icon={icon.type}
        onClick={user.permission_id === 1 ? handleDetails : handleFavButton}
      />

      <Content>
        <img src={image} alt="Foto do produto" />

        <ProductTitle>{title + " >"}</ProductTitle>

        <Description>{description}</Description>

        <Price>
          <span id="price">{handleSymbolToDisplay(price)}</span>
        </Price>

        { /* USER HOME */
          user.permission_id !== 1 &&
          <Controls>
            <QuantityController>
              <ButtonIcon onClick={handleMinus} type="button" icon={PiMinus} />
              <span>{quantity}</span> 
              <ButtonIcon onClick={handlePlus} type="button" icon={PiPlus} />
            </QuantityController>

            <Button id="includeButton" title="Incluir" type="button" onClick={handleAddToCart} />
          </Controls>
        }
      </Content>
    </Container>
  );
};