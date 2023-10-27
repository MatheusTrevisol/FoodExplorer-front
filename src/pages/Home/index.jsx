import { Container, Content, Box, SectionTitle } from "./styles";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { SwitchThemes } from "../../components/SwitchThemes";

import homeContainer_pequena from "../../assets/homeContainer_pequena.svg";
import homeContainer_grande from "../../assets/homeContainer_grande.png";

export function Home({toggleTheme, currentTheme}) {
  const [dataProductsCategories, setDataProductsCategories] = useState([]);
  const [search, setSearch] = useState('');

  let imageBox;

  /* search */
  useEffect(() => {
    async function fetchProductsCategories() {
      const response = await api.get(`/products_categories?title=${search}`);

      setDataProductsCategories(response.data);
    }

    fetchProductsCategories();
  }, [search])

  useEffect(() => {
    function handleBoxImgSrc() {
      const updatedSizeScreen = window.innerWidth > 1367;

      let boxImg = document.getElementById('boxImg');
      imageBox = updatedSizeScreen ? boxImg.src = homeContainer_grande : boxImg.src = homeContainer_pequena;
    };

    handleBoxImgSrc();

    window.addEventListener('resize', handleBoxImgSrc);

    return  () => {
      window.removeEventListener('resize', handleBoxImgSrc);
    };
  }, []);

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />
      
      <Content>
        <div id="switch">
          <SwitchThemes toggleTheme={toggleTheme} currentTheme={currentTheme}/>
        </div>
        <Box>
          <img id="boxImg" src={imageBox} alt="Foto de hambúrgueres coloridos" />
          <h2>Sabores inigualáveis</h2>
          <p>
            Sinta o cuidado do preparo com ingredientes selecionados
          </p>
        </Box>
     
        {
          dataProductsCategories &&
          Object.values(dataProductsCategories).map(category => (
            category.products.length >= 1 &&
            <div id="section" key={String(category.category_id)}>
              <SectionTitle>{category.category_name}</SectionTitle>
              <Carousel category={category} />
            </div>
          ))
        }
      </Content>

      <Footer />
    </Container>
  );
};