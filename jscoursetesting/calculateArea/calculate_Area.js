let lenght;
let width;

function calculateArea() {
  length = parseFloat(document.getElementById("length").value); //.value se usa para recuperar el dato enviado desde el html
  width = parseFloat(document.getElementById("width").value); //.value se usa para recuperar el dato enviado desde el html

  let area = length * width;
  document.getElementById(
    "result"
  ).innerText = `The area of the rectangle is: ${area}`;
}

let grocery1;
let grocery2;
let grocery3;

function groceryTracker() {
  grocery1 = parseFloat(document.getElementById("grocery1").value); //.value se usa para recuperar el dato enviado desde el html
  grocery2 = parseFloat(document.getElementById("grocery2").value); //.value se usa para recuperar el dato enviado desde el html
  grocery3 = parseFloat(document.getElementById("grocery3").value); //.value se usa para recuperar el dato enviado desde el html

  let total = grocery1 + grocery2 + grocery3;
  document.getElementById(
    "resultado"
  ).innerText = `El monto Total es: $${total}`;
}
