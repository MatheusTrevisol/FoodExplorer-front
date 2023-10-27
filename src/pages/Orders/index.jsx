import { Container, Content, LeftDiv, OrdersDiv, OrderDiv, ImageDiv, TextDiv, Payment, PaymentBox, PaymentOptions, PaymentInfo, ContentAdmin, OrdersBoxMobile, OrdersBoxDesktop} from "./styles";

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { handleFormatCode, handleFormatData, handleSymbolToDisplay } from '../../helpers/helpers';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Button } from "../../components/Button";
import { OrdersSelectOptions } from "../../components/OrdersSelectOptions";

import pix from "../../assets/pix.svg";
import credit from "../../assets/credit.svg";
import qrcode from "../../assets/qrcode.svg";
import defaultProductImage from '../../assets/default_product.png';

import { PiReceipt } from 'react-icons/pi';

export function Orders() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { cartProducts, deleteFromCart, calculateProductPrice, getTotalCostFromCart, checkout } = useCart();

  const [showPix, setShowPix] = useState(true);
  const [showCredit, setShowCredit] = useState(false);
  const [orders, setOrders] = useState([]);
  const [desktop, setDesktop] = useState();
  const [mobile, setMobile] = useState();

  let payment = document.getElementById("payment");

  function handleBack() {
    navigate('/');
  }

  function handleToPayment() {  
    let order = document.getElementById("order");

    payment.style.display = "block"
    order.style.display = "none"
  };

  function handleToggleOptionPix() {
    setShowPix(true)
    setShowCredit(false)
  };

  function handleToggleOptionCredit() {
    setShowCredit(true)
    setShowPix(false)
  };

  /*resize*/
  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < 1000);
      setDesktop(window.innerWidth >= 1000);
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [desktop]);

  /*fetch orders*/
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders");

      setOrders(response.data);
    }

    fetchOrders();
  }, [])

  return (
    <Container>
      <Header />
        { /*ADMIN SESSION */
        user.permission_id === 1 &&
        <ContentAdmin>
          <h2>Pedidos</h2>
          {
            mobile && 
            <>
              <OrdersBoxMobile>
                {
                  orders &&
                  orders.map(order => (
                    <div key={String(order.id)} className="order">
                      <div className="text-div">
                        <p>{handleFormatCode(order.code)}</p>
                        <p>{handleFormatData(order.created_at)}</p>
                      </div>
                      <OrdersSelectOptions targetId={order.status} />
                    </div>
                  ))
                }                
              </OrdersBoxMobile>
            </>
          }
          {
            desktop && 
            <OrdersBoxDesktop>
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders &&
                    orders.map(order => (
                      <tr key={String(order.id)}>
                        <td>
                          <OrdersSelectOptions targetId={order.status} />
                        </td>
                        <td>{handleFormatCode(order.code)}</td>
                        <td>{handleFormatData(order.created_at)}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </OrdersBoxDesktop>
          }
        </ContentAdmin>
      }

      { /*USER SESSION */
        user.permission_id !== 1 &&
        <Content>
          <LeftDiv id="order">
            <OrdersDiv>
              <button type="button" onClick={handleBack} >Voltar</button>
              <h2>Meu Pedido</h2>
              {
                cartProducts &&
                cartProducts.map((product) => (
                  <OrderDiv key={product.id}>
                    <ImageDiv>
                      <img src={product.image ? `${api.defaults.baseURL}/files/${product.image}` : defaultProductImage} alt="Foto do produto" />
                    </ImageDiv>

                    <TextDiv>
                      <h4>{product.quantity}x {product.name} <span>{calculateProductPrice(product)}</span></h4>
                      <button type="button" onClick={() => deleteFromCart(product)}>Excluir</button>
                    </TextDiv>
                  </OrderDiv>
                ))
              }          
            </OrdersDiv>

            <span>Total: {handleSymbolToDisplay(getTotalCostFromCart())}</span>

            <Button id="backButton" type="button" title="Avançar" onClick={handleToPayment} />
          </LeftDiv>
          
          <Payment id="payment">
            <h2>Pagamento</h2>

            <PaymentBox>
              <PaymentOptions>
                <div id="pix" onClick={handleToggleOptionPix} > 
                  <img src={pix} alt="Foto ilustrativa Pix" />
                  <h2>PIX</h2>
                </div>
                <div id="credit" onClick={handleToggleOptionCredit} > 
                  <img src={credit} alt="Foto ilustrativa Cartão de crédito" />
                  <h2>Crédito</h2>
                </div>
              </PaymentOptions>

              <PaymentInfo>
                { /* pix content */
                  showPix &&
                  <img src={qrcode} alt="QRCode" />
                }
                { /* credit card content */
                  showCredit &&
                  <div>
                    <h3>Está quase tudo pronto!</h3>
                    <p>Basta finalizar o pagamento! =D</p>

                    <ButtonIcon id="finalize_payment" onClick={() => checkout()} title="Finalizar pagamento" icon={PiReceipt} />
                  </div>
                }
              </PaymentInfo>
            </PaymentBox>
          </Payment>
        </Content>
      }

      <Footer />
    </Container>
  )
};