import { Container, Content, OrdersBoxMobile, OrdersBoxDesktop } from "./styles";

import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";

import { handleFormatCode, handleFormatData } from '../../helpers/helpers';

import { Header } from "../../components/Header";
import { OrdersSelectOptions } from "../../components/OrdersSelectOptions";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

export function OrderHistory() {
  const { user } = useAuth();

  const [desktop, setDesktop] = useState();
  const [mobile, setMobile] = useState();
  const [orders, setOrders] = useState();  

  /*fetch Orders*/
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get(`/orders/${user.id}`);

      setOrders(response.data);
    }
    fetchOrders();
  }, []);

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
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <h2>
          {
            desktop ? "Histórico de pedidos" : "Pedidos"
          }
        </h2>

        {
          mobile && 
          <>
            <OrdersBoxMobile>
              {
                orders &&
                orders.map(order => {
                  <div key={String(order.id)} className="order">
                    <div className="text-div">
                      <p>{handleFormatCode(order.code)}</p>
                      <OrdersSelectOptions targetId={order.status} />
                      <p>{handleFormatData(order.created_at)}</p>
                    </div>
                  </div>
                })
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
                    <tr key={order.id}>
                      <td>
                        <OrdersSelectOptions targetId="1" />
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
      </Content>

      <Footer />
    </Container>
  )
};