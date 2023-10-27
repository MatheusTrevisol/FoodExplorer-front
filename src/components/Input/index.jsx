import { Container } from './styles';

export function Input({htmlFor: HtmlFor, icon: Icon, labelText, ...rest}) {
  return (
    <Container id="searchContainer">
      <label htmlFor={HtmlFor}> 
        {labelText}
      </label> 
      {Icon && <Icon size={24} />}
      <input {...rest} />
    </Container>
  );
};