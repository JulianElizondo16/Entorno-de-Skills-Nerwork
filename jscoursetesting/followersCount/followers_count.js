let count = 0; //Se declara la variable count y se le asigna el valor de 0

function increaseCount() {
  count++; //Se incrementa el valor de count en 1
  displayCount(); //Muestra el conteo
  checkCountValue(); //Verifica el valor de count y mostrar mensajes
}
function displayCount() {
  document.getElementById("countDisplay").innerText = count; //Se muestra el valor de count en el html
}
function checkCountValue() {
  if (count === 10) {
    alert("Tu publicacion de Instagram gano 10 seguidores, Felicidades!");
  } else if (count === 20) {
    alert("Tu publicacion de Instagram gano 20 seguidores, sigue asi!");
  }
}
