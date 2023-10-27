import { Container, Form, Fieldset, WrapperDiv, IngredientsSection, Description, ButtonsContainer } from "./styles";

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { toast } from "react-toastify";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { InputFile } from "../../components/InputFile";
import { InputLabel } from "../../components/InputLabel";
import { Select } from "../../components/Select";
import { IngredientsTags } from "../../components/IngredientsTags";
import { Footer } from "../../components/Footer";

import { handleRemoveComma } from "../../helpers/helpers";

import { PiCaretLeft } from "react-icons/pi";
import { BsUpload } from "react-icons/bs";
import { Button } from "../../components/Button";

export function NewProduct() { 
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Refeições");
  const [productImage, setProductImage] = useState(null);

  const [legendTitle, setLegendTitle] = useState("");
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  
  function handleBack() {
    navigate('/')
  }

  function handleAddIngredients() {
    if(newIngredient.length == 0) {
      return alert("É necessário nomear um ingrediente antes de adicioná-la");
    }
    
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleCategoryValue(e) {
    setSelectedCategory(e.target.value);
  }

  async function handleChangeProductImage(event) {
    const file = event.target.files[0];
    setProductImage(file);
  }
  
  async function handleSaveProduct() {
    if(newIngredient) {
      return alert("Você preencheu o campo de Tag porém esqueceu de adiciona-la.");
    }
    
    const priceWithNoComma = handleRemoveComma(price);

    try {
      let response = await api.post("/products", {
        name,
        description,
        price: priceWithNoComma,
        selectedCategory,
        ingredients
      });
  
      const id = response.data;
  
      if(productImage) {
        const fileUploadForm = new FormData();
  
        fileUploadForm.append("image", productImage);
  
        await api.patch(`/products/image/${id}`, fileUploadForm);       
      }
    } catch (error) {
      return alert(error.response.data.message);
    }   

    toast.success("Prato cadastrado com sucesso!");
    navigate("/");
  }

  useEffect(() => {
    function handleLabelAndLegendText() {
      var label = document.getElementById('imageLabel');
      const isDesktop = window.innerWidth >= 1368;

      label.innerText = isDesktop ? "Selecione Imagem" : "Selecione imagem para alterá-la";
      setLegendTitle(isDesktop ? 'Adicionar prato' : 'Novo prato')
    }
    
    handleLabelAndLegendText()
    
    window.addEventListener('resize', handleLabelAndLegendText);
    
    return () => {
      window.removeEventListener('resize', handleLabelAndLegendText);
    };
  }, []);

  return (
    <Container>
      <Header />

      <Form>
        <Fieldset>
          <div id="fieldset-wrapper">          
            <ButtonIcon onClick={handleBack} title={"voltar"} icon={PiCaretLeft} type="button" />
            
            <legend>
              {legendTitle}
            </legend>

            <WrapperDiv>
              <InputFile 
                name="imageInput"
                id="imageInput"
                htmlFor="imageInput" 
                spanText="Imagem do prato" 
                icon={BsUpload} 
                type="file"
                onChange={handleChangeProductImage}
              />

              <InputLabel 
                name="name" 
                id="name" 
                htmlFor="name" 
                labelText="Nome" 
                placeholder="Salada Ceasar" 
                onChange={e => setName(e.target.value)}
                value={name}
              />

              <Select 
                name="category" 
                id="category" 
                htmlFor="category" 
                labelText="Categorias"
                onChange={handleCategoryValue}
              />
            </WrapperDiv>

            <WrapperDiv>
              <IngredientsSection>
                <label htmlFor="ingredients">Ingredientes</label>

                <div id="ingredientsTagsContainer">
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientsTags
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  <IngredientsTags 
                    $isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </IngredientsSection>

              <InputLabel 
                type="text" 
                name="price" 
                id="price" 
                htmlFor="price" 
                labelText="Preço" 
                placeholder="R$ 40,00" 
                onChange={e => setPrice(e.target.value)}
              />
            </WrapperDiv>

            <Description>
              <label htmlFor="description">Descrição</label>
              <textarea 
                name="description"
                id="description"
                rows="9" 
                placeholder="A Salada César é uma opção refrescante para o verão."
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </Description>

            <ButtonsContainer>
              <Button id="saveButton" title="Salvar alterações" onClick={handleSaveProduct} type="button" />
            </ButtonsContainer>
          </div>
        </Fieldset> 
      </Form>
      <Footer />
    </Container>
  );
};