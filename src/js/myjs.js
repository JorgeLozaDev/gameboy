document.getElementById("onBtn").onclick = function () {
  this.classList.toggle("encendido");

  let luz = document.getElementsByClassName("luz");
  luz[0].classList.toggle("luzEncendida");

  let pantalla = document.getElementsByClassName("pantallaInterior");

  if (this.classList.contains("encendido")) {
    // Cuando le damos al botón de encendido, esperamos 1 sg y mostramos la pantalla de carga
    setTimeout(() => {
      //cargamos el video en el div correspondiente
      pantalla[0].innerHTML =
        "<video  id='video' src='src/img/onVideo.mp4'></video>";
      // con esta funcion simulamos el click en el play del video
      document.getElementById("video").play();

      //con la siguiente funcion controlamos cuando termina el video y cuando termine queremos que se muestre otra cosa en lugar del video
      document.getElementById("video").addEventListener("ended", function (e) {
        setTimeout(() => {
          pantalla[0].innerHTML =
            "<div class='opciones'><div class='menu'><p>Ver video</p><p>Sorpresa</p><p>Sorpresa 2</p></div>           <div class='instrucciones'><div><p><i class='fa fa-caret-up'></i>UP</p><p>/</p><p><i class='fa fa-caret-down'></i>DOWN</p></div><div><p>A : SELECT</p></div></div></div>";
        }, 500);
      });
    }, 1000);
  } else {
    console.log("apagado");
    pantalla[0].innerHTML = "";
  }
};
