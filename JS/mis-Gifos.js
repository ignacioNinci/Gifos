var arregloMygifs = [];

offsetFav = 12;

if (localStorage.getItem("misGifos") != null) {
    arregloMygifs = JSON.parse(localStorage.getItem("misGifos"));
  if (arregloMygifs.length == 0) {
    // document.getElementById("text-mg-sc").style.display = "block";
    // document.getElementById("gif-sin-contenido").style.display = "block";
  }
}
if (arregloMygifs.length <= 12) {
//   document.getElementById("text-mg-sc").style.display = "none";
//   document.getElementById("gif-sin-contenido").style.display = "none";

  offsetFav = arregloMygifs.length;
}



// SECCION DE GRABAR GIFOS///////////////////////////////////////////////////

let circuloCrearGifos = document.getElementById('img-conteiner-crearGifos');

circuloCrearGifos.addEventListener('click', () => {

   document.getElementById('search-section').style.display = 'none';
       titleSection.style.display = 'none';

       trendingSection.style.display = 'none';

       document.getElementById('gifos-section').style.display = 'none';
       
      //  document.getElementById('footer').style.marginTop = 'px';
   
       

       if (document.getElementById('mis-gifos') != null) {
           document.getElementById('grabargif').style.display = 'block';
           document.getElementById('gifos-section').style.display = 'block';
           
       } 
        
        if(document.getElementById('grabargif') != null) {
          document.getElementById('gifos-section').style.display = 'none';
          document.getElementById('mis-gifos').style.display = 'none';
          document.getElementById('grabargif').style.display = 'block';
          
        } else {
          document.getElementById('gifos-section').style.display = 'block';
          document.getElementById('search-section').style.display = 'none';
          document.getElementById('mis-gifos').style.display = 'block';
        }

        if (document.getElementById('favoritos') != null) {
            document.getElementById('favoritos').style.display = 'none';
        }
  
});


// if(document.getElementById('grabargif') == null) {
//   document.getElementById('search-section').style.display = 'none';
//   document.getElementById('title-section').style.display = 'none';
// }

// GRABAR GIFS
let tiempoRepetir = document.createElement("h6");
document.getElementById("zonaGrabacion").appendChild(tiempoRepetir);
tiempoRepetir.setAttribute("id", "tiempo-repetir");

// COMENZAR
document.getElementById("comenzar").addEventListener("click", comenzar);
function comenzar() {
  document.getElementById("comenzar").style.visibility = "hidden";
  document.getElementById("paso1").classList.add("hover");
  document.getElementById("instructivo").innerHTML =
    "¿Nos das acceso <br/> a tu cámara?";
  document.getElementById("detalle").innerHTML =
    "El acceso a tu camara será válido sólo <br/> por el tiempo en el que estés creando el GIFO.";
  getStreamAndRecord();
}

function cronometrar() {
  h = 0;
  m = 0;
  s = -1;
  document.getElementById("tiempo-repetir").innerHTML = "00:00:00";
  // document.getElementById("tiempo-repetir").style.borderBottom = "none";
  escribir();
  id = setInterval(escribir, 1000);
}
function escribir() {
  var hAux, mAux, sAux;
  s++;
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) {
    h = 0;
  }
  if (s < 10) {
    sAux = "0" + s;
  } else {
    sAux = s;
  }
  if (m < 10) {
    mAux = "0" + m;
  } else {
    mAux = m;
  }
  if (h < 10) {
    hAux = "0" + h;
  } else {
    hAux = h;
  }
  document.getElementById("tiempo-repetir").innerHTML =
    hAux + ":" + mAux + ":" + sAux;
}

function getStreamAndRecord() {
  navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        // height: { max: 480 },
      },
    })
    .then(function (stream) {
      document.getElementById("instructivo").style.display = "none";
      document.getElementById("detalle").style.display = "none";
      let capturaVideo = document.createElement("video");
      document.getElementById("centrograbacion").appendChild(capturaVideo);
      capturaVideo.setAttribute("id", "videoGif");
      capturaVideo.srcObject = stream;
      capturaVideo.play();
      document.getElementById("comenzar").style.display = "none";
      document.getElementById("tiempo-repetir").style.visibility = "visible";
      let grabar = document.createElement("h4");
      document.getElementById("foot").appendChild(grabar);
      grabar.setAttribute("id", "btn-grabar");
      grabar.setAttribute("class", "comenzar");
      grabar.textContent = "GRABAR";
      document.getElementById("paso1").classList.remove("hover");
      document.getElementById("paso2").classList.add("hover");

      grabar.addEventListener("click", () => {
        recorder = RecordRTC(stream, {
          type: "gif",
          frameRate: 1,
          quality: 10,
          width: 360,
          hidden: 240,
          onGifRecordingStarted: function () {
            console.log("started");
          },
        });

        cronometrar();
        recorder.startRecording();
        document.getElementById("btn-grabar").style.display = "none";
        let pararGrabacion = document.createElement("h4");
        document.getElementById("foot").appendChild(pararGrabacion);
        pararGrabacion.setAttribute("id", "btn-parar");
        pararGrabacion.setAttribute("class", "comenzar");
        pararGrabacion.textContent = "FINALIZAR";
        document.getElementById("btn-parar").addEventListener("click", ejecuta);
      });
    });
}

function ejecuta() {
  finalizarGrabacion(stopRecording);
}

function finalizarGrabacion(callback) {
  recorder.stopRecording(callback);
}

function stopRecording() {
  let video = document.getElementById("videoGif");
  let form = new FormData();
  form.append("file", recorder.getBlob(), "myGif.gif");
  let info = URL.createObjectURL(recorder.getBlob());
  let stream = video.srcObject;
  let tracks = stream.getTracks();
  tracks.forEach(function (tracks) {
    tracks.stop();
  });
  video.src = video.srcObject;
  recorder = null;
  let imgGif = document.createElement("img");
  imgGif.setAttribute("id", "imgGif");
  video.style.display = "none";
  document.getElementById("centrograbacion").appendChild(imgGif);
  imgGif.src = info;
  document.getElementById("btn-parar").style.display = "none";
  let subirGif = document.createElement("h4");
  document.getElementById("foot").appendChild(subirGif);
  subirGif.setAttribute("id", "subirGif");
  subirGif.setAttribute("class", "comenzar");
  subirGif.textContent = "SUBIR GIFO";
  clearInterval(id);
  document.getElementById("tiempo-repetir").textContent = "REPETIR CAPUTURA";
  document.getElementById("tiempo-repetir").style.borderBottom = "2px solid #5ED7C6";
  document.getElementById("tiempo-repetir").addEventListener("click", () => {
      document.getElementById("imgGif").remove();
      document.getElementById("subirGif").remove();
      document.getElementById("btn-grabar").remove();
      document.getElementById("btn-parar").remove();
      document.getElementById("videoGif").remove();
      document.getElementById("tiempo-repetir").innerHTML = "00:00:00";
      document.getElementById("tiempo-repetir").style.borderBottom = "none";
      document.getElementById("instructivo").style.display = "block";
      document.getElementById("detalle").style.display = "block";
      getStreamAndRecord();
    });
    document.getElementById("subirGif").addEventListener("click", function () {
    document.getElementById("paso2").classList.remove("hover");
    document.getElementById("paso3").classList.add("hover");
    document.getElementById("subirGif").style.display = "none";
    document.getElementById("tiempo-repetir").style.visibility = "hidden";
    let loader = document.createElement("img");
    loader.setAttribute("id", "loader");
    loader.src = "assets/loader.svg";
    let subiendoGifo = document.createElement("p");
    subiendoGifo.setAttribute("id", "subiendoGifo");
    subiendoGifo.textContent = "Estamos subiendo tu GIFO";
    document.getElementById("centrograbacion").appendChild(loader);
    document.getElementById("centrograbacion").appendChild(subiendoGifo);
    let hoverCard = document.createElement("div");
    hoverCard.setAttribute("id", "hoverCard");
    document.getElementById("centrograbacion").appendChild(hoverCard);
    fetch(
      `https://upload.giphy.com/v1/gifs?api_key=wY4NEFy3OoeNLKpxGo034KQHjEqINnrT`,
      { method: "POST", body: form }
    )
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((json) => {
        console.log(json.data);
        arregloMygifs.push(json.data.id);
        localStorage.setItem("misGifos", JSON.stringify(arregloMygifs));
        loader.src = "assets/check.svg";
        subiendoGifo.textContent = "GIFO subido con éxito";
        let otroGif = document.createElement("h4");
        document.getElementById("foot").appendChild(otroGif);
        otroGif.setAttribute("id", "otroGif");
        otroGif.setAttribute("class", "comenzar");
        otroGif.textContent = "Quieres cargar otro Gif?";
        otroGif.style.width = "250px";
        document.getElementById("otroGif").addEventListener("click", () => {
            document.getElementById("otroGif").remove();
            document.getElementById("imgGif").remove();
            document.getElementById("loader").remove();
            document.getElementById("subiendoGifo").remove();
            document.getElementById("hoverCard").remove();
            document.getElementById("btn-parar").remove();
            document.getElementById("btn-grabar").remove();
            document.getElementById("subirGif").remove();
            document.getElementById("videoGif").remove();
            document.getElementById("paso3").classList.remove("hover");
            document.getElementById("tiempo-repetir").style.visibility = "hidden";
            document.getElementById("tiempo-repetir").style.borderBottom = "none";
            document.getElementById("tiempo-repetir").innerHTML = "00:00:00";
            comenzar();
          });
      })
      .catch((err) => console.log(err));
  });
}
let containerMisGifos = document.getElementById("conteiner-mis-gifos");

function myGifs() {
 
  // if(misGifos.classList.contains('disabled-mis-gifos')){
    containerMisGifos.innerHTML = [];
  for (i = 0; i < arregloMygifs.length; i++) {
    let buscarId = arregloMygifs[i];
    const apiId = `https://api.giphy.com/v1/gifs/${buscarId}?api_key=wY4NEFy3OoeNLKpxGo034KQHjEqINnrT`;

    fetch(apiId)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);

        let newId = json.data.id;
        let newSrc = json.data.images.original.url;
        let newTitle = json.data.title;
        let newUserName = json.data.username;

        let img = document.createElement("img");
        let div = document.createElement("div");
        div.appendChild(img);
        containerMisGifos.appendChild(div);

        img.setAttribute("class", "mis-gifos");
        div.setAttribute("class", "div-container");
        img.src = newSrc;
        img.id = newId;
        img.title = newTitle;
        img.user = newUserName;
        img.addEventListener("click", gifosMax);

        // DESKTOP VIEW

        if (screen.width >= 600) {
          let divCards = document.createElement("div");
          let downloadButton = document.createElement("img");
          let fullSize = document.createElement("img");
          let title = document.createElement("p");
          let userName = document.createElement("p");

          title.setAttribute("class", "title");
          userName.setAttribute("class", "user");

          let buttonTrash = document.createElement("i");
          buttonTrash.setAttribute("class", "fas fa-trash");

          downloadButton.setAttribute("class", "icono-download");
          downloadButton.setAttribute("id", "icono-download");
          downloadButton.setAttribute("src", "/assets/icon-download.svg");

          fullSize.setAttribute("class", "full-size");
          fullSize.setAttribute("src", "/assets/icon-max-normal.svg");

          divCards.appendChild(buttonTrash);
          divCards.appendChild(downloadButton);
          divCards.appendChild(fullSize);
          divCards.appendChild(title);
          divCards.appendChild(userName);
          divCards.style.visibility = "hidden";
          div.appendChild(divCards);
          ///////////////////////////////////////////////////////////
          div.addEventListener("mouseover", () => {
            divCards.style.visibility = "visible";
            title.textContent = img.title;
            userName.textContent = img.user;
          });
          div.addEventListener("mouseout", () => {
            divCards.style.visibility = "hidden";
          });

          buttonTrash.addEventListener("click", borrar);
          // buttonTrash.addEventListener("click", precargaFav);

          ///////////////////////////////////////////////

          downloadButton.addEventListener("mouseover", () => {
            downloadButton.src = "/assets/icon-download-hover.svg";
          });

          downloadButton.addEventListener("mouseout", () => {
            downloadButton.src = "/assets/icon-download.svg";
          });
          downloadButton.addEventListener("click", async function () {
            let a = document.createElement("a");
            let response = await fetch(img.src);
            let gif = await response.blob();
            a.download = "Gif";
            a.href = window.URL.createObjectURL(gif);
            a.dataset.downloadurl = ["application/octet-stream", a.download, a.href,].join(":"); 
            a.click();
          });
          /////////////////////////////////////

          fullSize.addEventListener("mouseover", () => {
            fullSize.src = "/assets/icon-max-hover.svg";
          });

          fullSize.addEventListener("mouseout", () => {
            fullSize.src = "/assets/icon-max-normal.svg";
          });

          fullSize.addEventListener("click", () => {
            img.click();
          });
          
          function borrar() {
            for (i = 0; i < arregloMygifs.length; i++) {
              if (JSON.stringify(arregloMygifs[i]) === JSON.stringify(newId)) {
                arregloMygifs.splice(i, 1);
                localStorage.setItem("misGifos", JSON.stringify(arregloMygifs));
              }
            }
          }
        }
      })
      .catch((err) => console.log(err));
  }

  if (arregloMygifs.length == 0) {


    // CREAR IMAGEN DE MIS GIFOS SIN CONTENIDO
    let divContenedorMisGifosVacio = document.createElement('div');   
    let divImgMisGifosVacio = document.createElement('div');
    let imgMisGifosVacio = document.createElement('img');
    let divTextoMisGifosVacio = document.createElement('div');
    let textoMisGifosVacio = document.createElement('p');

    divImgMisGifosVacio.setAttribute('class', 'div-img-misGifos-vacio')
    divImgMisGifosVacio.setAttribute('id', 'div-img-misGifos-vacio')
    divTextoMisGifosVacio.setAttribute('class', 'div-texto-misGifos-vacio');
    divTextoMisGifosVacio.setAttribute('id', 'div-texto-misGifos-vacio');
    imgMisGifosVacio.setAttribute('class', 'img-misGifos-vacio');
    textoMisGifosVacio.setAttribute('class', 'texto-misGifos-vacio');
    imgMisGifosVacio.setAttribute('src', '/assets/icon-mis-gifos-sin-contenido.svg');
    divContenedorMisGifosVacio.setAttribute('id', 'div-contenedor-misGifos-vacio');
    textoMisGifosVacio.textContent = '¡Anímate a crear tu primer GIFO!';
    divTextoMisGifosVacio.appendChild(textoMisGifosVacio);
    divImgMisGifosVacio.appendChild(imgMisGifosVacio);
    divContenedorMisGifosVacio.appendChild(divImgMisGifosVacio);
    divContenedorMisGifosVacio.appendChild(divTextoMisGifosVacio);
    document.getElementById('mis-gifos').appendChild(divContenedorMisGifosVacio);

    

    document.getElementById('btn-ver-mas-mis-gifos').style.visibility = 'hidden';
}
// }

}
// document.getElementById('li-mis-gifos').addEventListener("click", myGifs);

liMisGifos.addEventListener('click', () => {
  if (document.getElementById('div-contenedor-misGifos-vacio') != null) {
    document.getElementById('div-contenedor-misGifos-vacio').remove();
    console.log('se borro');
}
  if (misGifos.classList.contains('disabled-mis-gifos')) {
      misGifos.classList.remove('disabled-mis-gifos');
      misGifos.classList.add('enabled-mis-gifos');
      // document.body.classList.toggle('enabled-mis-gifos');
      // misGifos.classList.toggle('enabled-favoritos');
      document.getElementById('search-section').style.display = 'none';
      titleSection.style.display = 'none';
      myGifs();
      document.getElementById('mis-gifos').style.display = 'block';
      document.getElementById('title-section').style.display = 'none';
      document.getElementById('trending-section').style.display = 'none';
      document.getElementById('busqueda').style.display = 'none';
      document.getElementById('favoritos').style.display = 'none';
      document.getElementById('grabargif').style.display = 'none';
      if (favoritos.classList.contains('enabled-favoritos')) {
        favoritos.classList.remove('enabled-favoritos');
        favoritos.classList.add('disabled-favoritos');}

      if (document.getElementById('favoritos-conteiner') != null) {
          document.getElementById('favoritos-conteiner').remove();
          document.getElementById('div-img-fav-vacio').remove();
          document.getElementById('div-texto-fav-vacio').remove();    
      } 

      
  } else {
      misGifos.classList.remove('enabled-mis-gifos');
      misGifos.classList.add('disabled-mis-gifos');
      // document.body.classList.toggle('enabled-mis-gifos');
      // misGifos.classList.toggle('enabled-mis-gifos');
      document.getElementById('search-section').style.display = 'block';
      titleSection.style.display = 'block';
      document.getElementById('title-section').style.display = 'block';
      document.getElementById('trending-section').style.display = 'block';
      document.getElementById('busqueda').style.display = 'block';
      document.getElementById('mis-gifos').style.display = 'none';

  }

 if (document.getElementById('mis-gifos') != null) {
  document.getElementById('gifos-section').style.marginTop = '201px';
  document.getElementById('gifos-section').style.display = 'block';
  document.getElementById('grabargif').style.display = 'none';

 }
  // document.getElementById('gigos-section').style.height = '50px';
  
});



// BOTON DE VER MAS FAVORITOS----------------------------------------

document.getElementById('btn-ver-mas-mis-gifos').addEventListener('click', () => {
  if (arregloMygifs.length > 12) {
     verMasMisGifos();
  }
});




function verMasMisGifos() {
    
  let freno = Math.min(arregloMygifs.length, 24);
  let misGifosConteinerVerMAs = document.getElementById('conteiner-mis-gifos');
  // favoritosConteiner.setAttribute('id', 'favoritos-conteiner');
  // favoritosConteiner.setAttribute('class', 'gifs-12-conteiner');

      for (let i = 12; i < freno; i++) {
          let div = document.createElement('div');
          let img = document.createElement('img');
          img.setAttribute('src', arregloMygifs[i]._src);
          // img.style.width = '156px';
          // img.style.height = '120px';
          img.setAttribute('class', 'gifs12');
          misGifosConteinerVerMAs.appendChild(img);
          misGifosConteinerVerMAs.appendChild(div);
          div.appendChild(img);
          // arrayFavoritosGuardados.push(img);
          img.addEventListener('click', gifosMax);


          if (screen.width >= 600) {

          
              let divTarjetas = document.createElement('div');
          
              let corazonTarjeta = document.createElement('img');
                             
                              
              let descargaTarjeta = document.createElement('img');
                             
                              
              let ampliarTarjeta = document.createElement('img');
  
              let title = document.createElement('p');
              let userName = document.createElement('p');
    
                              
             title.setAttribute('class', 'title-gif-trending');                 
             userName.setAttribute('class', 'username-gif-trending');                 
                  
              divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
              divTarjetas.setAttribute('id', 'div-tarjetas');
          
              corazonTarjeta.setAttribute('class', 'corazon-tarjeta corazon-tarjeta-no-muestra');
              corazonTarjeta.setAttribute('id', 'corazon-tarjeta');
              corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');
          
              descargaTarjeta.setAttribute('class', 'descarga-tarjeta');
              descargaTarjeta.setAttribute('id', 'descarga-tarjeta');
              descargaTarjeta.setAttribute('src', '/assets/icon-download.svg');
          
              ampliarTarjeta.setAttribute('id', 'ampliar-tarjeta');
              ampliarTarjeta.setAttribute('class', 'ampliar-tarjeta');
              ampliarTarjeta.setAttribute('src', 'assets/icon-max-normal.svg');
          
              divTarjetas.appendChild(title);
              divTarjetas.appendChild(userName);
              divTarjetas.appendChild(corazonTarjeta);
              divTarjetas.appendChild(descargaTarjeta);
              divTarjetas.appendChild(ampliarTarjeta);
              div.appendChild(divTarjetas);
                              
                              
             
           //////////////////////////////////////////////////////////////////////////////////////////////////
          
          
              corazonTarjeta.addEventListener('click', () => {
          
                  let source = corazonTarjeta.src;
                  
                  
                  if(source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                      corazonTarjeta.src = '/assets/icon-fav.svg';
                  } else {
                      corazonTarjeta.src = '/assets/icon-fav-active.svg';
                  }
                  
  
                  class favoritosStorage {
                      constructor(id, src, title, user) {
                          this._id = id;
                          this._src = src;
                          this._title = title;
                          this._user = user;
                      }
                      
                  }
                  
                  let evento = event.target.parentNode.previousSibling;
                  // let arrayFavoritos = [];
                  var favId = evento.id;
                  var favSrc = evento.src;
                  var favTitle = evento.title;
                  var favUserName = evento.user;
                  var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);
          
                  arregloMygifs.push(fav);
                  localStorage.setItem('favoritos', JSON.stringify(arregloMygifs));
  
                                  
              });
           ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
          
          
              descargaTarjeta.addEventListener('mouseover', () => {
                  descargaTarjeta.src = '/assets/icon-download-hover.svg';
              });
          
              descargaTarjeta.addEventListener('mouseout', () => {
                  descargaTarjeta.src = '/assets/icon-download.svg';
              });
          
           //////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
              ampliarTarjeta.addEventListener('mouseover', () => {
                  ampliarTarjeta.src = '/assets/icon-max-hover.svg';
          
              });
          
              ampliarTarjeta.addEventListener('mouseout', () => {
                  ampliarTarjeta.src = '/assets/icon-max-normal.svg';
          
              });
          
              ampliarTarjeta.addEventListener('click', () => {
                  img.click();
              });
          
          
          
                              
              div.addEventListener('mouseover', () => {
                                                      
                  divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-muestra');
                  divTarjetas.classList.remove('div-tarjetas-no-muestra');
                  title.textContent = newTitle;
                  userName.textContent = newUserName;
              });
                                      
              div.addEventListener('mouseout', () => {
                                          
                  divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                  divTarjetas.classList.remove('div-tarjetas-muestra');
                              
              });          
              
              document.getElementById('flechas').style.display = 'flex';
              
          } 

      } 
  // document.getElementById('favoritos').insertBefore(favoritosConteiner, document.getElementById('conteiner-btn-ver-mas')); 
      document.getElementById('conteiner-btn-ver-mas-favoritos').style.display = 'none';
  
}