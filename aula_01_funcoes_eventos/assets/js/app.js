const campo_input = document.querySelector("#campo-input");
const form_simple = document.querySelector("#form-simples");
const btn_Enviar = document.querySelector("#btn-enviar");
const resultado = document.querySelector("#resultado");

/*
Eventos:

click, focus, input, change, focusin, focusout, keyup, keydown
*/

function moostrar_mensagem(valorInput) {
  const msg = `
    Nome doo Cliente é: ${valorInput}
  `;

  return (resultado.innerHTML = msg);
}

btn_Enviar.addEventListener("click", (e) => {
  e.preventDefault();
  const campo_input_valor = campo_input.value;
  // innerHTML => Coloca informação no html
  // resultado.innerHTML = campo_input_valor;
  moostrar_mensagem(campo_input_valor);
});
