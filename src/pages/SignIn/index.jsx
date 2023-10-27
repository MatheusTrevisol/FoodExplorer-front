import { Container, Logo, Form, RegisterButton } from './styles';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg'

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showElement, setShowElement] = useState(null);

  function handleRegister() {
    navigate("/register");
  }

  function handleSignIn() {
    signIn({ email, password });
  }
  
  
  useEffect(() => {
    function handleResize() {
      setShowElement(window.innerWidth > 1367);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            <h2>Faça login</h2>          
          }  
          <InputLabel
            labelText="Email" 
            htmlFor="emailSignIn" 
            id="emailSignIn" 
            type="text" 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />

          <InputLabel 
            labelText="Senha" 
            htmlFor="passwordSignIn" 
            id="passwordSignIn" 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)} 
          />
        </div>

        <Button onClick={handleSignIn} title="Entrar" />

        <RegisterButton onClick={handleRegister} type="button">
          Criar uma conta
        </RegisterButton>        
      </Form>
    </Container>
  )
}