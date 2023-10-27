import { Container, Content, FavoritesDiv, ImageDiv, TextDiv } from "./styles";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import defaultProductImage from '../../assets/default_product.png';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function handleRemoveFavorite(product) {
    product.favorite = 0;
    await api.put(`/products/${product.id}`, product);

    return;
  }

  useEffect(() => {
    async function handleFavorites() {
      const response = await api.get("/products", {
        params: {
          favorite: 1
        }
      });

      setFavorites(response.data)
    }

    handleFavorites();
  }, [favorites]);

  return (
    <Container>
      <Header />

      <Content>
        <h2>Meus favoritos</h2>
        <div className="wrapper">
        { /* FAVORITES */
          favorites &&
          favorites.map(favorite => (
              <div key={favorite.id}>
                <FavoritesDiv>
                  <ImageDiv>
                    <img src={favorite.image ? `${api.defaults.baseURL}/files/${favorite.image}` : defaultProductImage} alt="Foto do produto" />
                  </ImageDiv>

                  <TextDiv>
                    <h4>{favorite.name}</h4>
                    <button type="button" onClick={() => handleRemoveFavorite(favorite)} >Remover dos favoritos</button>
                  </TextDiv>
                </FavoritesDiv>
              </div>
          ))
        }
        </div>
        { /* WITH NO FAVORITES PRODUCT*/
          favorites.length < 1 &&
          <TextDiv>
              <h4>Não há favoritos ainda!</h4>
          </TextDiv>
        }
      </Content>

      <Footer />
    </Container>
  )
};