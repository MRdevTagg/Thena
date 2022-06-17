
document.addEventListener("DOMContentLoaded", (main));



//VARIABLES
const $loader = document.querySelector('.preloader');
let contador = false;
let clickado = true;
var puedeCambiarlink = true;
let PuedeDesplegarMenu = true;

const $main = document.querySelector('main');
const $menbt = document.querySelector(".btnmenu");
const $nav = document.querySelector('nav');
const $bod= document.querySelector('body');



function inputUpdate(){
  window.innerWidth <=500 && window.innerHeight <=800 ? 
  inpttype = 'touchstart': inpttype='click'
  }

//FUNCIONES
function onOff(menu,menuBtn,menuVisible,btnClosed,btnOpen){

    if(contador===false)
      {
        menu.classList.add(menuVisible)
        menuBtn.classList.remove(btnClosed);
        menuBtn.classList.add(btnOpen);
        contador=true;
           setTimeout(() =>
        {
         clickado = false;
        }, 400);
      }
  else
      {
        menu.classList.remove(menuVisible);
        menuBtn.classList.remove(btnOpen);
        menuBtn.classList.add(btnClosed);
        setTimeout(() =>  
        {
          contador=false;
          clickado = true;
        }, 500);
      }
}

/*function menuSelected(scrollto,linka,animnuevo){
//puedeCambiarlink =false
  //PASO 0 
  /*Animamos la pagina hacia el elemento correspondiente a el selector scrolltarget
 $([document.documentElement, document.body]).animate({scrollTop: $(scrollto).offset().top - $('header').height() -20}, 500);
 //PASO 1
//  selected.classList.remove(animActual);/*
 /*si ya fue seleccionado un link anteriormente y por lo tanto tiene la clase de la animacion; la removemos usando como referencia la variable global "selected" que equivale a el link que fue tocado anteriormente y "animnuevo" que equivale a la animacion seleccionada anteriormente


//PASO 2
//  linka.classList.add(animnuevo);
 /*añadimos la clase animacion activa al link actual
//PASO 3
 //  animActual = animnuevo;
 /*se actualiza el valor de la variable global "animActual" y se le da el valor del string correspondiente al nombre de la clase de animacion para despues removerla al cambiar de item en el paso 1 la próxima vez que ejecutemos la función, si esto no se hace no habria manera de saber que clase remover*

//PASO 4
 // selected = linka;
  /*se guarda en variable global "selected"el selector para poder quitarle la clase de la animacion en el paso 1 la próxima vez que ejecutemos la funcion si esto no se hace no podriamos saber a que selector se le elimina la clase animactual
  //setTimeout(function() {puedeCambiarlink = true}, 1000);
//}*/

//PROGRAMA
function main()
{
  //EVENTOS USUARIO
inputUpdate();
 $menbt.addEventListener(inpttype,()=>{
        onOff( $nav,$menbt,"menuvisible","rotate","rotatereverse");
      });
$main.addEventListener(inpttype,()=>{
      if(!clickado && contador && !expanded)
        {onOff( $nav,$menbt,"menuvisible","rotate","rotatereverse");}
        
      })
}




