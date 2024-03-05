/*
window.addEventListener("load", function (event) {
    let imss = localStorage.getItem('imss');
        let sat = localStorage.getItem('sat');
      
        let imssArray = JSON.parse(imss);
        let satArray = JSON.parse(sat);

        console.log(imssArray)
        console.log(satArray)
      
        const imssDivs = ['imss-1','imss-2','imss-3','imss-4']
        const satDivs = ['sat-1','sat-2','sat-3','sat-4']
      
        //Pintar imss
        for(let i=0; i<imssArray.length; i++){
            console.log(imssDivs[i], imssArray[i])
          document.getElementById(imssDivs[i]).innerHTML = imssArray[i]
        }
      
        //Pintar sat
        for(let i=0; i<satArray.length; i++){
          document.getElementById(satDivs[i]).innerHTML = satArray[i]
        }
  });
    
      */  

function pintarPantalla(){
    let imss = localStorage.getItem('imss');
    let sat = localStorage.getItem('sat');
    let mesa = localStorage.getItem('mesaSat');

    let imssArray = JSON.parse(imss);
    let satArray = JSON.parse(sat);

    console.log(imssArray)
    console.log(satArray)
  
    const imssDivs = ['imss-1','imss-2','imss-3','imss-4']
    const satDivs = ['sat-1','sat-2','sat-3','sat-4']
  
    //Pintar imss
    /*
    for(let i=0; i<imssArray.length; i++){
        console.log(imssDivs[i], imssArray[i])
      document.getElementById(imssDivs[i]).innerHTML = 'IMSS0' + imssArray[i]
    }
  */

    //Pintar sat
    for(let i=0; i<satArray.length; i++){
      document.getElementById(satDivs[i]).innerHTML = '0'+satArray[i]
    }

    //Pintar mesa actual sat
    document.getElementById('numMesa').innerHTML = 'Mesa ' +mesa; 
}



  
 setInterval(pintarPantalla, 3000); // 2000 milisegundos = 2 segundos



/*
 document.addEventListener('DOMContentLoaded', function () {
  // Obtén el contenedor del video
  const videoContainer = document.getElementById('videoContainer');

  // Array de nombres de archivos de video
  const videoFiles = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4', 'vid4.mp4', 'vid5.mp4'];

  // Crea un bucle para insertar los videos en el contenedor
  for (let i = 0; i < 5; i++) {
    // Crea un nuevo elemento de video
    const videoElement = document.createElement('video');
    
    videoElement.controls = true;

    // Crea un nuevo elemento de fuente para el video
    const sourceElement = document.createElement('source');
    sourceElement.src = videoFiles[i];
    sourceElement.type = 'video/mp4';

    // Agrega la fuente al elemento de video
    videoElement.appendChild(sourceElement);

    // Agrega el elemento de video al contenedor
    videoContainer.appendChild(videoElement);
  }
});

*/