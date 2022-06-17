document.addEventListener("DOMContentLoaded", (main));

let observedElements = document.querySelectorAll('.scrollAnim'); 
const options = { 
  threshold: 0.1}
const optionsParaLinks = { //opciones para el Iobserver
threshold: 0.2}


let expanded = false;
let links = document.querySelectorAll('.link');
let sections = document.querySelectorAll('.sec');
const link = Array.from(links);
const secciones = Array.from(sections);
const linksimg = document.querySelectorAll('.imglink')
const linkimg = Array.from(linksimg)
const linksA = document.querySelectorAll('.link a');
let selected = link[1] ;
let animActual = "linkactivo";
let selectedimg = linkimg[1]
let animActualimg = "color"


function inputUpdate(){
    window.innerWidth <=500 && window.innerHeight <=800 ? 
    inpttype = 'touchstart': inpttype='click'
    }
function menuSelectedtrue(linka,animnuevo){
     
       //PASO 1
      selected.classList.remove(animActual);/*
       /*si ya fue seleccionado un link anteriormente y por lo tanto tiene la clase de la animacion; la removemos usando como referencia la variable global "selected" que equivale a el link que fue tocado anteriormente y "animnuevo" que equivale a la animacion seleccionada anteriormente*/
      
      
      //PASO 2
      linka.classList.add(animnuevo);
       /*añadimos la clase animacion activa al link actual*/
      //PASO 3
      animActual = animnuevo;
       /*se actualiza el valor de la variable global "animActual" y se le da el valor del string correspondiente al nombre de la clase de animacion para despues removerla al cambiar de item en el paso 1 la próxima vez que ejecutemos la función, si esto no se hace no habria manera de saber que clase remover*/
      
      //PASO 4
      selected = linka;
        /*se guarda en variable global "selected"el selector para poder quitarle la clase de la animacion en el paso 1 la próxima vez que ejecutemos la funcion si esto no se hace no podriamos saber a que selector se le elimina la clase animactual*/
       //PASO 0 
        /*Animamos la pagina hacia el elemento correspondiente a el selector scrolltarget*/
        //setTimeout(()=>{$([document.documentElement, document.body]).animate({scrollTop: $(scrollto).offset().top - $('header').height() -20}, 500);},100) 
      
      }
function menuSelectedimg(linka,animnuevo){
     
       //PASO 1
      selectedimg.classList.remove(animActualimg);/*
       /*si ya fue seleccionado un link anteriormente y por lo tanto tiene la clase de la animacion; la removemos usando como referencia la variable global "selected" que equivale a el link que fue tocado anteriormente y "animnuevo" que equivale a la animacion seleccionada anteriormente*/
      
      
      //PASO 2
      linka.classList.add(animnuevo);
       /*añadimos la clase animacion activa al link actual*/
      //PASO 3
      animActualimg = animnuevo;
       /*se actualiza el valor de la variable global "animActual" y se le da el valor del string correspondiente al nombre de la clase de animacion para despues removerla al cambiar de item en el paso 1 la próxima vez que ejecutemos la función, si esto no se hace no habria manera de saber que clase remover*/
      
      //PASO 4
      selectedimg = linka;
        /*se guarda en variable global "selected"el selector para poder quitarle la clase de la animacion en el paso 1 la próxima vez que ejecutemos la funcion si esto no se hace no podriamos saber a que selector se le elimina la clase animactual*/
       //PASO 0 
        /*Animamos la pagina hacia el elemento correspondiente a el selector scrolltarget*/
        //setTimeout(()=>{$([document.documentElement, document.body]).animate({scrollTop: $(scrollto).offset().top - $('header').height() -20}, 500);},100) 
      
      }
function menuSelected(linka,animnuevo,sec){
  window.scrollBy(0, sec.getBoundingClientRect().top - 90)
  puedeCambiarlink=false;
  selected.classList.remove(animActual);
  linka.classList.add(animnuevo);
  animActual = animnuevo;
  selected = linka;
  setTimeout(()=> {puedeCambiarlink = true}, 600);
  }

const detectarObjAnimable = entries => {
  entries.forEach(entry => {
  elClass=entry.target.classList;
  
  entry.isIntersecting ? 
  elClass.add('visible') : elClass.remove('visible')
  });
}
const cambioDeSeccionLink = entries => {
  entries.forEach(entry => {
  if(puedeCambiarlink === true){ 
    if (entry.isIntersecting) {
      switch (true) {
        case  entry.target == secciones[0]:
          menuSelectedtrue(link[0],"linkactivo")
           menuSelectedimg(linkimg[0],"color")
          break;
        case entry.target == secciones[1]:
          menuSelectedtrue(link[1],"linkactivo2")
           menuSelectedimg(linkimg[1],"color2")
          break;
        case  entry.target == secciones[2]:
          menuSelectedtrue(link[2],"linkactivo3")
          menuSelectedimg(linkimg[2],"color3")
          break;
        case  entry.target == secciones[3]:
          menuSelectedtrue(link[3],"linkactivo4")
           menuSelectedimg(linkimg[3],"color4")
          break;
        case  entry.target == secciones[4]:
          menuSelectedtrue(link[4],"linkactivo5")
          menuSelectedimg(linkimg[4],"color5")
          break;
        
        default:
      }
    }
  } 
  });
}

let observer = new IntersectionObserver(detectarObjAnimable,options); 
let observerSection = new IntersectionObserver(cambioDeSeccionLink,optionsParaLinks)

sections.forEach(element =>{
  observerSection.observe(element)
});
observedElements.forEach(element => {
  observer.observe(element) // run the observer 
});
//MENU LINKS
function navExpand ()
{
  if(!expanded)
  {   for(const linkA of linksA)
      {linkA.classList.add('widthZero');}
      for(const linkes of links)
      {linkes.style.transform='scale(.8)'
       linkes.style.backgroundColor = 'rgba(171,123,173,0.5)'
    } for(const ilink of linksimg) {
        ilink.style.borderRadius ='2px'
        ilink.style.transform ='scale(1.8)'
  }
document.querySelector('.links').classList.add('blackbox')
   document.querySelector('.navexp').style.transform = 'rotate(180deg)'
    $nav.style.width = '12.5%'
    
    expanded = true;
   
  }
 else if(expanded){
       for (const linkA of linksA) 
    {linkA.classList.remove('widthZero');}
       for(const linkes of links)
    {linkes.style.transform='scale(1)'
  linkes.style.backgroundColor = 'rgba(190,88,255,0.1)'
    }
       document.querySelector('.navexp').style.transform = 'rotate(0deg)'
    document.querySelector('.links').classList.remove('blackbox')
           for (const ilink of linksimg) {
        ilink.style.borderRadius ='initial'
        ilink.style.transform ='scale(1)'
        ilink.style.borderRadius = '5px 0 0 5px'
      }
     $nav.style.width = '45%'
     expanded=false
  }
}

  function main()
{
  link[0].addEventListener(inpttype,()=>{
    puedeCambiarlink = false;
    menuSelected(link[0],"linkactivo",secciones[0])
    menuSelectedimg(linkimg[0],"color")
    inputUpdate();
    document.querySelector('nav p').innerHTML = inpttype
  });
  link[1].addEventListener(inpttype,()=>{
    puedeCambiarlink = false;
    menuSelected(link[1],"linkactivo2",secciones[1])
 menuSelectedimg(linkimg[1],"color2")
    inputUpdate();
    document.querySelector('nav p').innerHTML = inpttype
  });
  link[2].addEventListener(inpttype,()=>{
    puedeCambiarlink = false;
    menuSelected(link[2],"linkactivo3",secciones[2])
      menuSelectedimg(linkimg[2],"color3")
     inputUpdate();
       document.querySelector('nav p').innerHTML = inpttype
  });
  link[3].addEventListener(inpttype,()=>{
    puedeCambiarlink = false;
    menuSelected(link[3],"linkactivo4",secciones[3])
     menuSelectedimg(linkimg[3],"color4")
    inputUpdate();
    
 
  });
  link[4].addEventListener(inpttype,()=>{
    puedeCambiarlink = false;
    menuSelected(link[4],"linkactivo5",secciones[4])
    menuSelectedimg(linkimg[4],"color5")
    inputUpdate();
 

  });
  document.querySelector('.navexp').addEventListener('click', ()=>{navExpand()})
}
