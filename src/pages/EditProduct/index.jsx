/* this page is actually two, edit_product and new_product */

import { Container, Form, Fieldset, WrapperDiv, IngredientsSection, Description, ButtonsContainer } from "./styles";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { handleRemoveComma, handleFormatNumber } from '../../helpers/helpers';

import { api } from "../../services/api";

import { toast } from "react-toastify";

import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { InputFile } from "../../components/InputFile";
import { InputLabel } from "../../components/InputLabel";
import { Select } from "../../components/Select";
import { IngredientsTags } from "../../components/IngredientsTags";
import { Footer } from "../../components/Footer";

import { PiCaretLeft } from "react-icons/pi";
import { BsUpload } from "react-icons/bs";
import { Button } from "../../components/Button";

export function EditProduct() { 
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState({});

  const [productImage, setProductImage] = useState(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredients() {
    if(newIngredient.length == 0) {
      return alert("É necessário nomear um ingrediente antes de adicioná-lo");
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

  async function handleUpdate() {
    const priceToSaveInDatabase = handleRemoveComma(price);

    const updated = {
      name,
      description,
      price: priceToSaveInDatabase,
      selectedCategory,
      ingredients
    };

    const productUpdated = Object.assign(product, updated)
    setProduct(productUpdated);

    try {
      if(productImage && productImage !== null) {
        const fileUploadForm = new FormData();
  
        fileUploadForm.append("image", productImage);
        const response = await api.patch(`/products/image/${params.id}`, fileUploadForm);
  
        product.image = response.data.image;
      }

      await api.put(`/products/${params.id}`, product);

      toast.success("Prato atualizado com sucesso!");
      navigate(-1);
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o prato, tente novamente");
      }
    }
  }

  async function handleChangeProductImage(event) {
    const file = event.target.files[0];
    setProductImage(file);
  }

  async function handleDelete() {
    await api.delete(`/products/${params.id}`);

    alert("Prato excluído com sucesso!");
    navigate('/');
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`)
      const product = response.data;
      
      const priceToDisplay = handleFormatNumber(product.price);
      
      setProduct(product);

      setName(product.name);
      setDescription(product.description);
      setIngredients(product.ingredients.map(ingredient => ingredient.name));
      setPrice(priceToDisplay);
      setSelectedCategory(product.category_name);
    }
    
    fetchProduct();    
  }, [])

  useEffect(() => {
    function handleLabelText() {
      var label = document.getElementById('imageLabel');
      const isDesktop = window.innerWidth >= 1368;

      label.innerText = isDesktop ? "Selecione Imagem" : "Selecione imagem para alterá-la";
    }
    
    handleLabelText()
    
    window.addEventListener('resize', handleLabelText);
    
    return () => {
      window.removeEventListener('resize', handleLabelText);
    };
  }, [])

  return (
    <Container>
      <Header />

      <Form>
        <Fieldset>
          <div id="fieldset-wrapper">          
            <ButtonIcon onClick={handleBack} title={"voltar"} icon={PiCaretLeft} type="button" />
            
            <legend>
              Editar prato
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
                value={selectedCategory}
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
                value={price}
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
              <Button id="deleteButton" title="Excluir prato" onClick={handleDelete} type="button" />
              <Button id="saveButton" title="Salvar alterações" onClick={handleUpdate} type="button" />             
            </ButtonsContainer>
          </div>
        </Fieldset> 
      </Form>
      <Footer />
    </Container>
  );
};