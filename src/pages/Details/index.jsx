import { Container, Content, ContentDiv, InfoCard, ButtonsDiv, Tags } from './styles';

import { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { handleSymbolToDisplay } from '../../helpers/helpers';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Tag } from '../../components/Tag';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Button } from '../../components/Button';

import { PiReceipt, PiCaretLeft, PiPlus, PiMinus } from "react-icons/pi";

import defaultProductImage from '../../assets/default_product.png' 

export function Details() {
  const { addOneProductToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const [showIcon, setShowIcon] = useState(null);
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart(e) {
    e.stopPropagation();

    data.quantity = quantity;
    addOneProductToCart(data);
  }

  function handleBack() {
    navigate("/");
  }

  function handleEdit() {
    navigate(`/edit_product/${params.id}`);
  }

  function handleMinus(e) {
    e.stopPropagation();

    quantity === 1 ? 1 : setQuantity(quantity - 1);
  };

  function handlePlus(e) {
    e.stopPropagation();
    
    setQuantity(quantity + 1);
  };

  /*resize*/
  useEffect(() => {
    function handleResize() {
      setShowIcon(window.innerWidth < 1368);
    }
    
    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  /*fetch product*/
  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);

      setData(response.data)
    };

    fetchProduct();
  }, []);

  return (
    <Container>
      <Header />   

      <Content>
        <ButtonIcon onClick={handleBack} title={"voltar"} icon={PiCaretLeft} type="button" />
        
        { 
        data && 
        <ContentDiv>
          <img className="detail-image" src={data.image ? `${api.defaults.baseURL}/files/${data.image}` : defaultProductImage} alt="Foto do prato selecionado" />

          <InfoCard>
            <div id="text-div">
              <h2>{data.name}</h2>

              <p>{data.description}</p>

              {
                data.ingredients.length > 0 &&
                <Tags>
                  {
                    data.ingredients.map(tag => (
                      <Tag
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }
                </Tags>      
              }
            </div>

            {
              user.permission_id === 1 &&
              <Button id="editButton" type="button" onClick={handleEdit} title="Editar prato" />
            }

            {
              user.permission_id !== 1 && 
              <ButtonsDiv>
                <div>
                  <ButtonIcon id="quantityControll" onClick={handleMinus} type="button" icon={PiMinus} />
                    <span>{quantity}</span> 
                  <ButtonIcon id="quantityControll" onClick={handlePlus} type="button" icon={PiPlus} />
                </div>

                <ButtonIcon 
                  onClick={handleAddToCart} 
                  type="button"
                  icon={showIcon && PiReceipt}  
                  title={showIcon ? `pedir ∙${handleSymbolToDisplay(data.price)}`  : `incluir ∙ ${handleSymbolToDisplay(data.price)}`}
                />
              </ButtonsDiv>
            }
          </InfoCard>
        </ContentDiv>
        }
      </Content>

      <Footer />
    </Container>
  )
}