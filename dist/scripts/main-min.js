let ponto=document.getElementById("some-nav"),cabecalho=document.getElementById("cabecalho");document.addEventListener("scroll",function(){let e=cabecalho.getBoundingClientRect().top;ponto.getBoundingClientRect().top<e?((cabecalho=document.getElementById("cabecalho")).classList.add("bg"),navLogo=document.getElementById("nav-logo"),navLogo.classList.remove("none"),btnAssine=document.getElementById("btn-assine"),btnAssine.classList.remove("none")):(cabecalho.classList.remove("bg"),navLogo.classList.add("none"),btnAssine.classList.add("none"),console.log("nao deu"))});