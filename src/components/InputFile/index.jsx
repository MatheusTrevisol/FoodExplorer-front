import { Container } from './styles';

export function InputFile({htmlFor: HtmlFor, icon: Icon, labelText, spanText, ...rest}) {
  return (
    <Container id="inputFile">
      <span className="fileName">{spanText}</span>

      <label id="imageLabel" htmlFor={HtmlFor}>
        {labelText}  
      </label>    

      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};