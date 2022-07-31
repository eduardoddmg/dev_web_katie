const calc = (start, final, value) => value * (final / start).toFixed(2);

const data = {
  USD: { value: 5.15, icon: "$" },
  EUR: { value: 6.17, icon: "Є" },
  BRL: {value: 1, icon: "R$"},
};

function errorForm (input, error, output) {
  input.style.border = "4px solid red";
  error.innerHTML = "Escreva um número";
  error.style.color = "red";
  output.innerHTML = "";
}

function sucessForm(input, error, output, start, final) {
  output.innerHTML = `${data[final].icon} ${calc(
        data[start].value,
        data[final].value,
        parseInt(input.value)
      ).toFixed(2)}`
  clean(input, error);
}

function clean(input, error) {
  input.style.border = "";
  error.innerHTML = "";
}

function Conversor() {
  let input = (document.querySelector("#valor_inicial"));
  let output = document.querySelector("#resultado");
  let start = document.querySelector("#moedasde").value;
  let final = document.querySelector("#moedaspara").value;
  let error = document.querySelector('.error');

  input.addEventListener('input', () => {
    if (input.value) {
      clean (input, error);
    }
  })

  input.value
    ? sucessForm(input, error, output, start, final)
    : errorForm(input, error, output);
  console.log(input);
}
