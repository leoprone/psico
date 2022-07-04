

/* ********** Menu ********** */

/*función anónima autoejecutable*/



((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  /*esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
//BOTON ABRIR TAPAS DISCOS (index.html)


const $tapa1=document.getElementById("tapa-1"),
$tapa2=document.getElementById("tapa-2"),
$tapa3=document.getElementById("tapa-3"),
$tapa4=document.getElementById("tapa-4"),
$abrirsinrespirar=document.getElementById("abrir-sin-respirar"),
$abrirexhcondicionada=document.getElementById("abrir-exh-condicionada");



document.addEventListener("click", (e)=>{

    //abrir tapas discos (index.html)

   if(e.target.matches(".btn-abrir1")){
   $tapa1.classList.toggle("running");
   
     }

   if(e.target.matches(".btn-abrir2")){
     $tapa2.classList.toggle("running");
     
   }

   if(e.target.matches(".btn-abrir3")){
    $tapa3.classList.toggle("running");
    
  }

  if(e.target.matches(".btn-abrir4")){
    $tapa4.classList.toggle("running");
    
  }

  if(e.target.matches(".btn-abrir-sin-respirar")){
    $abrirsinrespirar.classList.toggle("running");
  }

  if(e.target.matches(".btn-abrir-exh-condicionada")){
    $abrirexhcondicionada.classList.toggle("running");
  }

  if(e.target.matches(".btn-abrir-bio")){
    $bio.classList.toggle("running");
  }
 
  

});







