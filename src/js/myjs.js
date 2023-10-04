document.getElementById("onBtn").onclick = function () {
  this.classList.toggle("encendido");

  let luz = document.getElementsByClassName("luz");
  luz[0].classList.toggle("luzEncendida");

  let pantalla = document.getElementsByClassName("pantallaInterior");

  if (this.classList.contains("encendido")) {
    // mostramos la pantalla de carga
    setTimeout(() => {
      pantalla[0].innerHTML = "<img src='../src/img/loading.gif'>";
    }, 1000);

    // despues de la carga ficticia limpiamos la pantalla
    setTimeout(() => {
      pantalla[0].innerHTML = "<div class='opciones'><p>Ver video</p> <p>Sorpresa</p> <p>Sorpresa 2</p></div>";
    }, 2800);
  } else {
    console.log("apagado");
    pantalla[0].innerHTML = "";
  }
};
