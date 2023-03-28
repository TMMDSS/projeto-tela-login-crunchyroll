/*function entrar() {
    var logo = document.getElementById('logoLaranja')
    logo.src = 'imagens/crunchyroll-logo-branco.png' 
}*/

 function entrar() {
  var imagem = document.getElementById("logoLaranja");
  if (imagem.src.match("imagens/crunchyroll-logo.png")) {
    imagem.src = "imagens/crunchyroll-logo-branco.png";
  } else {
    imagem.src = "imagens/crunchyroll-logo.png";
  }
}

function sair() {
    var imagem = document.getElementById("logoLaranja");
    if (imagem.src.match("imagens/crunchyroll-logo.png")) {
      imagem.src = "imagens/crunchyroll-logo-branco.png";
    } else {
      imagem.src = "imagens/crunchyroll-logo.png";
    }
  }