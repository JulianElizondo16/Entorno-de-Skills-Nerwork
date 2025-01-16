function performOperation() {
  //Obtener el usuario por un campo input
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  //Check si el input es un numero valido

  //isNaN es una funcion que devuelve true si el valor no es un numero
  //al ser !isNaN, devuelve true si es un numero
  if (!isNaN(num1) && !isNaN(num2)) {
    let result = multiply(num1, num2);
    //mostrar el resultado
    displayResult(result);
  } else {
    displayResult("Por favor ingrese un numero valido");
  }
}

function multiply(a, b) {
   //Introduce un debuger para pausar la ejecucion
   debugger;
   //Multiplicar los dos numeros
    return a * b;
}

function displayResult(result) {
    //Mostrar el resultado en el p de resultado
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}