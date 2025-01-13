let lenght;
let width;

function calculateArea() {
  length = parseFloat(document.getElementById("length").value); //.value se usa para recuperar el dato enviado desde el html
  width = parseFloat(document.getElementById("width").value); //.value se usa para recuperar el dato enviado desde el html

  let area = length * width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
