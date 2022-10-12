const displaySegundoValor = document.getElementById("segundo_valor");
//es el valor que va arriba en tama#o mas grande
const displayPrimerValor = document.getElementById("primer_valor");
const botonesNumeros = document.querySelectorAll(".number");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displaySegundoValor, displayPrimerValor);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.agregarNumero(boton.innerHTML);
  });
});

botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
