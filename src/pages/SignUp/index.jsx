import { Container, Logo, Form, BackButton } from './styles';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button';

import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api';

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showElement, setShowElement] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  async function handleCreateAccount() {
    if(!name || !email || !password || !confirmPassword) {
      return alert("Por favor preencha todos os campos.");
    }

    await api.post("/users", {
      name,
      email,
      password,
      confirmPassword
    }).then(() => {
      toast.success("Usuário criado com sucesso!");
      navigate("/");
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        toast.error("Não foi possível realizar o cadastro!");
      }
    });
  }

  function handleResize() {
    setShowElement(window.innerWidth > 1367);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return  () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Foto da logo, uma figura geométrica azul" />

        <h1>food explorer</h1>
      </Logo>
      
      <Form>        
        <div id="inputSeparator">
          {
            showElement &&
            <h2>Crie sua conta</h2> 
          }
          <InputLabel 
            labelText="Seu Nome" 
            htmlFor="nameSignUp" 
            id="nameSignUp" 
            type="text" 
            placeholder="Exemplo: Maria da Silva" 
            onChange={e => setName(e.target.value)}
          />

          <InputLabel 
            labelText="Email" 
            htmlFor="emailSignUp" 
            id="emailSignUp" 
            type="text" 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)}
          />  

          <InputLabel 
            labelText="Senha" 
            htmlFor="passwordSignUp" 
            id="passwordSignUp" 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />

          <InputLabel 
            labelText="Confirme sua senha" 
            htmlFor="confirmPasswordSignUp" 
            id="confirmPasswordSignUp" 
            type="password" 
            placeholder="No mínimo 6 caracteres" 
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button title="Criar Conta" onClick={handleCreateAccount}/>

        <BackButton type="button" onClick={handleBack}>
          Já tenho uma conta        
        </BackButton>
      </Form>
    </Container>
  )
}