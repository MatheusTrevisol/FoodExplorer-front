import { Container } from './styles';

export function InputLabel({htmlFor: HtmlFor, icon: Icon, labelText, ...rest}) {
  return (
    <Container id="InputLabel">
      <label htmlFor={HtmlFor}> 
        {labelText}
        <br /> 
        {labelText === "Preço" ? <span><i>escrever o número no formato com vírgula: 40,00</i></span> : ''} 
      </label> 
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};