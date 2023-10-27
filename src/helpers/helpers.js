export function handleRemoveComma(price) { /*Format price to save in db */
  const numeroSemVirgula = price.replace(',', '');

  //Format to int
  const numeroInteiro = parseInt(numeroSemVirgula, 10);

  return numeroInteiro;
}

export function handleFormatNumber(number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const numberToDisplay = formatter.format(number / 100);

  return numberToDisplay;
}

export function handleFormatCode(order_code) {
  const code = order_code.toString().padStart(7, '0');
  
  return code;
}

export function handleFormatData(order_data) {
  const data = new Date(order_data)

  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  const hora = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');

  const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
  
  return dataFormatada;
}

export function handleSymbolToDisplay(value) {
  const real = value / 100;

  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  return formatter.format(real)  
}