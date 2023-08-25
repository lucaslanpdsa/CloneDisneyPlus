let ponto = document.getElementById('some-nav')
let cabecalho = document.getElementById('cabecalho')

document.addEventListener("scroll", function() {
  let cordCabecalho = cabecalho.getBoundingClientRect().top //cordenadas do eixo y 
  let cordPonto = ponto.getBoundingClientRect().top //cordenadas do eixo y 

  if(cordPonto < cordCabecalho){
    cabecalho = document.getElementById('cabecalho')
    cabecalho.classList.add("bg")

    navLogo = document.getElementById('nav-logo')
    navLogo.classList.remove("none")

    btnAssine = document.getElementById('btn-assine')
    btnAssine.classList.remove("none")
  } 
  else {
    cabecalho.classList.remove("bg")
    navLogo.classList.add("none")
    btnAssine.classList.add("none")
    console.log("nao deu")
  }
});

