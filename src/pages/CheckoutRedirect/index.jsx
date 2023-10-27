import { Container, Content } from "./styles";

import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { useEffect } from "react";
import { api } from "../../services/api";

export function CheckoutRedirect() {
  const params = useParams();

  useEffect(() => {
    async function deleteCanceledOrder(id) {
      if(params.response !== "success") {
        await api.delete(`/orders/${id}`)
      }
    }
 
    deleteCanceledOrder(params.id);
  }, []);

  return (
    <Container>
      <Header />
      
      <Content>
        <h1>
          {params.response == 'success' 
            ? "Transação Concluída com Sucesso" 
            : "Transação Cancelada"}
        </h1>
        <p>
          {params.response == 'success' 
            ? "Obrigado pela compra teste! :D" 
            : "Ah, sentimos muito pelo imprevisto, volte novamente se precisar!"}
        </p>
      </Content>
    </Container>
  );
}