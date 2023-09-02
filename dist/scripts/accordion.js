let Colapse = document.querySelectorAll(".faq__accordion__colapse")
let btnColapse = document.querySelectorAll(".faq__accordion")
let dash = document.querySelectorAll(".accordion-colapse-btn--dash")
let plus = document.querySelectorAll(".accordion-colapse-btn--plus")

for (let i = 0; i < btnColapse.length; i++) {
  btnColapse[i].addEventListener("click", function(){
    Colapse[i].classList.toggle('faq__accordion__colapse--isactive')
    dash[i].classList.toggle('none')
    plus[i].classList.toggle('none')
  })
}
