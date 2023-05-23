/** @format */

const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(selectorAudio) {
  const elemento = document.querySelector(selectorAudio);

  if (elemento && elemento.localName === `audio`) {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

// para
for (i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    // tocaSom(som_ + instrumento);
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code);

    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  // tecla.onkeyup = function () {
  //     tecla.classList.remove("ativa");
  // }

  tecla.onkeyup = function (evento) {
    console.log(evento.code);

    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("remove");
    }
  };
}
