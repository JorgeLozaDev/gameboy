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
        pantalla[0].innerHTML =
          "<div class='opciones'><div class='menu' id='menuOpciones'><p class='fondoOpcionMenu' data-opc='video'>Ver video</p><p data-opc='sorpresa1'>Sorpresa</p><p data-opc='sorpresa2'>Sorpresa 2</p></div><div class='instrucciones'><div><p><i class='fa fa-caret-up'></i>UP</p><p>/</p><p><i class='fa fa-caret-down'></i>DOWN</p></div><div><p>A : SELECT</p></div></div></div>";
        // añadimos una clase para una transicion
        pantalla[0].classList.add("fade-in");
      });
    }, 1000);
  } else {
    // console.log("apagado");
    pantalla[0].innerHTML = "";
  }
};

document.getElementById("arriba").onclick = function () {
  // controlamos que solo funcione cuando nuestra consola esta encendida
  if (document.getElementById("onBtn").classList.contains("encendido")) {
    // sacamos el numero total de hijos que tiene el elemento padre
    let menu = document.getElementById("menuOpciones");

    for (let index = 0; index < menu.childNodes.length; index++) {
      if (menu.childNodes[index].classList.contains("fondoOpcionMenu")) {
        if (index == 0) {
          menu.childNodes[index].classList.toggle("fondoOpcionMenu");
          menu.childNodes[menu.childNodes.length - 1].classList.toggle(
            "fondoOpcionMenu"
          );
          //el motivo por el cual se usa break es... cuando le asignamos la clase al último elemento, al acabar de recorrer el loop se le quitara
          break;
        } else {
          menu.childNodes[index].classList.toggle("fondoOpcionMenu");
          menu.childNodes[index - 1].classList.toggle("fondoOpcionMenu");
        }
      }
    }
  }
};

document.getElementById("abajo").onclick = function () {
  // controlamos que solo funcione cuando nuestra consola esta encendida
  if (document.getElementById("onBtn").classList.contains("encendido")) {
    // sacamos el numero total de hijos que tiene el elemento padre
    let menu = document.getElementById("menuOpciones");

    for (let index = 0; index < menu.childNodes.length; index++) {
      if (menu.childNodes[index].classList.contains("fondoOpcionMenu")) {
        if (index == menu.childNodes.length - 1) {
          menu.childNodes[index].classList.toggle("fondoOpcionMenu");
          menu.childNodes[
            index - (menu.childNodes.length - 1)
          ].classList.toggle("fondoOpcionMenu");
        } else {
          console.log(index);
          menu.childNodes[index].classList.toggle("fondoOpcionMenu");
          menu.childNodes[index + 1].classList.toggle("fondoOpcionMenu");
          // aqui usamos el break por el mismo motivo que lo usamos en la funcion de arriba
          break;
        }
      }
    }
  }
};

document.getElementById("btnA").onclick = function () {
  if (document.getElementById("onBtn").classList.contains("encendido")) {
    let menu = document.getElementById("menuOpciones");
    let pantalla = document.getElementsByClassName("pantallaInterior");

    for (let index = 0; index < menu.childNodes.length; index++) {
      if (menu.childNodes[index].classList.contains("fondoOpcionMenu")) {
        // console.log(menu.childNodes[index].getAttribute("data-opc"));
        if (menu.childNodes[index].getAttribute("data-opc") == "video") {
          //cargamos el video en el div correspondiente
          pantalla[0].innerHTML =
            "<video  id='video' src='src/img/Pokemon.mp4'></video>";
          // con esta funcion simulamos el click en el play del video
          document.getElementById("video").play();
          //con la siguiente funcion controlamos cuando termina el video y cuando termine queremos que se muestre otra cosa en lugar del video
          document
            .getElementById("video")
            .addEventListener("ended", function (e) {
              pantalla[0].innerHTML =
                "<div class='opciones'><div class='menu' id='menuOpciones'><p class='fondoOpcionMenu' data-opc='video'>Ver video</p><p data-opc='sorpresa1'>Sorpresa</p><p data-opc='sorpresa2'>Sorpresa 2</p></div><div class='instrucciones'><div><p><i class='fa fa-caret-up'></i>UP</p><p>/</p><p><i class='fa fa-caret-down'></i>DOWN</p></div><div><p>A : SELECT</p></div></div></div>";
              // añadimos una clase para una transicion
              pantalla[0].classList.add("fade-in");
            });
        } else if (
          menu.childNodes[index].getAttribute("data-opc") == "sorpresa1"
        ) {
          //cargamos el video en el div correspondiente
          pantalla[0].innerHTML =
            "<video  id='video' src='src/img/hello_world.mp4' style='object-fit:fill;'></video>";
          // con esta funcion simulamos el click en el play del video
          document.getElementById("video").play();
          //con la siguiente funcion controlamos cuando termina el video y cuando termine queremos que se muestre otra cosa en lugar del video
          document
            .getElementById("video")
            .addEventListener("ended", function (e) {
              pantalla[0].innerHTML =
                "<div class='opciones'><div class='menu' id='menuOpciones'><p class='fondoOpcionMenu' data-opc='video'>Ver video</p><p data-opc='sorpresa1'>Sorpresa</p><p data-opc='sorpresa2'>Sorpresa 2</p></div><div class='instrucciones'><div><p><i class='fa fa-caret-up'></i>UP</p><p>/</p><p><i class='fa fa-caret-down'></i>DOWN</p></div><div><p>A : SELECT</p></div></div></div>";
              // añadimos una clase para una transicion
              pantalla[0].classList.add("fade-in");
            });
        }else{
          pantalla[0].innerHTML ="<img src='src/img/culo.gif'><audio controls id='musica'><source src='src/img/My_Little_Pony.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
          document.getElementById("musica").play();
        }
      }
    }
  }
};
