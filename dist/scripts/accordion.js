let Colapse = document.querySelectorAll(".faq__accordion__colapse")
let btnColapse = document.querySelectorAll(".accordion-colapse-btn")

for (let i = 0; i < btnColapse.length; i++) {
  btnColapse[i].addEventListener("click", function(){
    Colapse[i].classList.toggle('faq__accordion__colapse--isactive')
  })
}
