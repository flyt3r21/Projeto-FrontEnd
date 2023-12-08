
// SCRIPT PARA AS TELAS DE CARREGAMENTO

let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);

// window.onload = function(){
//     let elem_preloader = $("#carregamento");
//     let elem_loader = $("#girando");
//     console.log("Testing... Ok");
    
    
//     setTimeout(function() {
//       elem_preloader.classList.remove("#carregamento");
//       elem_loader.classList.remove("#girando");
//       elem_preloader.style.display = "none"
//       }, 1280);
// }
