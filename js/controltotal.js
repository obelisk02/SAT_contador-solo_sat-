// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
      min = now.getMinutes(),
      hou = now.getHours(),
      dy_text = now.getDay();
      mo = now.getMonth(),
      dy = now.getDate();
      //yr = now.getFullYear();
    const day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var tags = ["day","mon", "d", "h", "m"],
      corr = [day[dy_text],months[mo], dy, hou.pad(2), min.pad(2)];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  
  // END CLOCK SCRIPT



 // Control de enumerado de formulario

 window.addEventListener('load', function() {
  
})

 
  

   // Pones id a los input y id
   /*
const todosLosInputs = document.querySelectorAll('input');
for (i=0; i < todosLosInputs.length; folio++, i++){
todosLosInputs[i].id = folio;
todosLosInputs[i].placeholder = 'Nombre completo ' + folio;
}
 
});




function resetearContador(){
  localStorage.setItem("controlNumero", 1); 
  location.reload()
}

function completarFormulario(){
  //buscar cuantos inputs estan llenos
  const todosLosInputs = document.querySelectorAll('input');
  let inputsEmpty = 0;
  for (i=0; i < todosLosInputs.length;  i++){
    console.log(todosLosInputs[i].value)
    if (!todosLosInputs[i].value == "") {
      inputsEmpty++
    }
  }

  let folio = parseInt(localStorage.getItem("controlNumero"))
  localStorage.setItem("controlNumero", folio+inputsEmpty)
  //localStorage.setItem("controlNumero", folio);

  location.reload(true)
}

*/

/*
function formComplete(){
let sat_count = document.getElementById('visita1').value 
let imss_count = document.getElementById('visita2').value 


//console.log(sat_count, imss_count)

if (sat_count == "" ) sat_count =0
if (parseInt(sat_count) < 0 ) sat_count = 0
if (parseInt(sat_count) > 24 ) sat_count =25

if (imss_count == "" ) imss_count =0
if (parseInt(imss_count) < 0 ) imss_count = 0
if (parseInt(imss_count) > 24 ) imss_count =25


console.log(sat_count, imss_count)
}

function mesa1(){

}

*/



 // TURNOS

 let turnos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]



function iniciarPrograma(){
  let imss = localStorage.getItem("imss");
  if (imss === null || imss!==1) { 
    imss = [1,2,3,4]
    localStorage.setItem("imss", JSON.stringify(imss)) 
  }

  let sat = localStorage.getItem("sat");
  if (sat === null || sat!==0 ) { 
    sat = [0,1,2,3]
    localStorage.setItem("sat", JSON.stringify(sat)) 
  }

    localStorage.setItem("mesaSat", 1) 
  
}


/*

function pintarPantallaInicial(){
  let imss = localStorage.getItem('imss');
  let sat = localStorage.getItem('sat');

  let imssArray = JSON.parse(imss);
  let satArray = JSON.parse(sat);

  const imssDivs = ['imss-1','imss-2','imss-3','imss-4']
  const satDivs = ['sat-1','sat-2','sat-3','sat-4']

  //Pintar imss
  for(let i=0; i<imssArray.length; i++){
    document.getElementById(imssDivs[i]).value = imssArray[i]
  }

  //Pintar sat
  for(let i=0; i<satArray.length; i++){
    document.getElementById(satDivs[i]).value = satArray[i]
  }
}



function pintarPantalla(){
  let imss = localStorage.getItem('imss');
  let sat = localStorage.getItem('sat');

  let imssArray = JSON.parse(imss);
  let satArray = JSON.parse(sat);

  const imssDivs = ['imss-1','imss-2','imss-3','imss-4']
  const satDivs = ['sat-1','sat-2','sat-3','sat-4']
}

*/


function btnMesa1(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',1);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
  }


function btnMesa2(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',2);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
}

function btnMesa3(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',3);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
}

function btnMesa4(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',4);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
}

function btnMesa5(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',5);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
}

function btnMesa6(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',6);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
}

/*
function btnMesa7(){
  let imssArray = localStorage.getItem('imss');
// Se parsea para poder ser usado en js con JSON.parse :)
  imssArray = JSON.parse(imssArray);

  //Sumar +1 turno
  let arrayNuevo = imssArray.map(numero => {
    let resultado = numero + 1;
    return resultado > 15 ? 1 : resultado;
  });

  //Set local nuevo arrray
  localStorage.setItem('imss', JSON.stringify(arrayNuevo));
  console.log(arrayNuevo);

  reproducirSonido()
}
*/


function btnMesa7(){
  let satArray = localStorage.getItem('sat');
  // Se parsea para poder ser usado en js con JSON.parse :)
    satArray = JSON.parse(satArray);
  
    //Sumar +1 turno
    let arrayNuevo = satArray.map(numero => {
      let resultado = numero + 1;
      return resultado > 100 ? 1 : resultado;
    });
  
    //Set local nuevo arrray
    localStorage.setItem('sat', JSON.stringify(arrayNuevo));

    localStorage.setItem('mesaSat',7);
    console.log(arrayNuevo);

    reproducirSonido();
    reproducirSonido();
}


function reproducirSonido(){
  const audio = new Audio('../audio/Notification.mp3'); 
  audio.play();
}