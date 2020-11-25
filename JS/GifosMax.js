function gifosMax(event) {

    var evento = event.target;
    console.log(event.target.src);
    let sectionGifosMax = document.createElement('section');
    let divGM = document.createElement('div');
    let divCruz = document.createElement('div');
    let divImagen = document.createElement('div');
    let imagen = document.createElement('img');
    let divLabel = document.createElement('div');
    let divDescarga = document.createElement('div');
    let labelUser = document.createElement('label');
    let labelName = document.createElement('label');
    let descargas = document.createElement('i');
    let corazon = document.createElement('i');
    let cruz = document.createElement('i');
    let conteinerDescargas = document.createElement('div');
    let conteinerFav = document.createElement('div');
    // let favSeleccionado = document.createElement('i');


    // DESARROLLO DE LOS CARDS DE LAS TARJETAS CORAZON DESCARGA Y AMPLIAR//////////////////////////////////


    sectionGifosMax.appendChild(divGM);
    divGM.appendChild(divCruz);
    divImagen.appendChild(imagen);
    divGM.appendChild(divImagen);
    divGM.appendChild(divLabel);
    divGM.appendChild(divDescarga);
    imagen.src = event.target.src;
    main.appendChild(sectionGifosMax);
    divLabel.appendChild(labelUser);
    divLabel.appendChild(labelName);
    divDescarga.appendChild(descargas);
    divDescarga.appendChild(corazon);
    divCruz.appendChild(cruz);
    divDescarga.appendChild(conteinerDescargas);
    divDescarga.appendChild(conteinerFav);
    conteinerDescargas.appendChild(descargas);
    conteinerFav.appendChild(corazon);
    // conteinerFav.appendChild(favSeleccionado);

    // favoritos.classList.add('fas', 'fa-heart');
    // descargas.classList.add('fas', 'fa-download');
    if (document.getElementById('gifs-busqueda-section') != null) {
        corazon.setAttribute('class', 'far fa-heart');

    }
    else if (favoritos.classList.contains('enabled-favoritos')) {
        corazon.setAttribute('class', 'far fa-trash-alt');
    }



    descargas.setAttribute('class', 'fas fa-download');
    cruz.setAttribute('class', 'fas fa-times');
    sectionGifosMax.setAttribute('id', 'section-gifos-max');
    divGM.setAttribute('class', 'conteiner-gifos-max');
    divCruz.setAttribute('class', 'conteiner-cruz-cerrar');
    cruz.setAttribute('id', 'cruz-cerrar');
    divImagen.setAttribute('class', 'img-conteiner');
    imagen.setAttribute('id', 'imagen');
    divLabel.setAttribute('class', 'label-conteiner');
    labelUser.setAttribute('id', 'label-user');
    labelName.setAttribute('id', 'label-name');
    divDescarga.setAttribute('class', 'fav-desc-conteiner');
    corazon.setAttribute('id', 'favoritos-vacio');
    // corazon.setAttribute('class', 'far fa-heart');
    descargas.setAttribute('id', 'descarga-icon');
    conteinerDescargas.setAttribute('class', 'descarga-conteiner');
    conteinerFav.setAttribute('id', 'favoritos-conteiner');
    conteinerFav.setAttribute('class', 'favoritos-conteiner');

    sectionGifosMax.style.background = '#fffff';
    corazon.style.color = '#572ee5';
    corazon.style.width = '32px';
    corazon.style.height = '32px';
    corazon.style.lineHeight = '34px';
    corazon.style.marginLeft = '8px';

    // corazon.addEventListener('click', (e) => {

    //     if (screen.width <= 600) {
    //         if (corazon.classList.contains('fa')) {
    //             corazon.classList.remove('fa');
    //             corazon.classList.add('far');
    //         } else {
    //             corazon.classList.remove('far');
    //             corazon.classList.add('fa');
    //         }
    //     }

    //     class favoritosStorage {
    //         constructor(id, src, title, user) {
    //             this._id = id;
    //             this._src = src;
    //             this._title = title;
    //             this._user = user;
    //         }

    //     }
    //     let evento = e.target.parentNode.parentNode.parentNode.children[1].firstChild;

    //     // let arrayFavoritos = [];
    //     var favId = evento.id;
    //     var favSrc = evento.src.toString();
    //     var favTitle = evento.title;
    //     var favUserName = evento.user;
    //     var fav = new favoritosStorage(favId,favSrc, favTitle, favUserName);
    //     arrayFavoritosGuardados.push(fav);



    //     localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));




    //     if (arrayFavoritosGuardados.length == 0) {
    //         corazon.setAttribute('class', 'fas');
    //         corazon.removeAttribute('class', 'far');
    //         arrayFavoritosGuardados.push(fav);
    //         localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));

    //     } else {

    //         if (JSON.stringify(arrayFavoritosGuardados).indexOf(JSON.stringify(favId)) == -1) {
    //             corazon.setAttribute('class', 'fas');
    //             corazon.removeAttribute('class', 'far');
    //             arrayFavoritosGuardados.push(fav);
    //             localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
    //         } else {
    //             for (let i = 0; i < arrayFavoritosGuardados.length; i++) {
    //                 if (JSON.stringify(arrayFavoritosGuardados[i]._id) === JSON.stringify(favId)) {
    //                     arrayFavoritosGuardados.splice(i, 1);
    //                     localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
    //                     corazon.setAttribute('class', 'fas');
    //                     corazon.removeAttribute('class', 'far');
    //                 }

    //             }
    //         }
    //     }


    // });

    // CODIGO DE DESCARGA ///////////////////////////////////////////////////////////////////////////////////

    descargas.addEventListener("click", async function () {
        let a = document.createElement("a");
        let response = await fetch(imagen.src);
        let gif = await response.blob();
        a.download = "Gif";
        a.href = window.URL.createObjectURL(gif);
        a.dataset.downloadurl = [
            "application/octet-stream",
            a.download,
            a.href,
        ].join(":");
        a.click();
    });




    // if (document.getElementById('gifs-busqueda-section') != null) {



    // // // Cree un indice que sirve para buscar el nombre del usuario y el nombre del GIF


    //     let indice;
    //     for (let i = 0; i < busquedaGifs.length ; i++) {
    //         if (busquedaGifs[i].images.original.url == event.target.src) {

    //             indice = i;
    //         }

    //     }
    //     labelUser.textContent = busquedaGifs[indice].username;
    //     labelName.textContent = busquedaGifs[indice].title;



    // }

    cruz.addEventListener('click', () => {
        document.getElementById('section-gifos-max').remove();
        window.onscroll = false;

    });





    // funcion del boton de favoritos en gifos max

    conteinerFav.addEventListener('click', () => {

        if (document.getElementById('gifs-busqueda-section') != null) {

            if (corazon.classList[0] == 'far' || corazon.classList[1] == 'far') {
                corazon.removeAttribute('class', 'far');
                corazon.setAttribute('class', 'fas');


            } else {
                corazon.removeAttribute('class', 'fas');
                corazon.setAttribute('class', 'far');
            }


        }



        if (favoritos.classList.contains('enabled-favoritos')) {
            
           

            for (let i = 0; i < arrayFavoritosGuardados.length; i++) {
                if (arrayFavoritosGuardados[i]._src == event.target.src) {
                    console.log('se borra')
                    arrayFavoritosGuardados.splice(i, 1);
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
                    
                            document.getElementById('favoritos-conteiner').remove();
                            muestraFavoritos();     
                       
                    return;

                }

            }




            event.target.parentNode.remove();
            console.warn(arrayFavoritosGuardados.length);
            if (arrayFavoritosGuardados.length == 0 && document.getElementById('div-contenedor-fav-vacio') == null) {
                document.getElementById('favoritos-conteiner').remove();


                // CREAR IMAGEN DE FAVORITOS SIN CONTENIDO
                let divContenedorFavVacio = document.createElement('div');
                let divImgFavVacio = document.createElement('div');
                let imgFavVacio = document.createElement('img');
                let divTextoFavVacio = document.createElement('div');
                let textoFavVacio = document.createElement('p');

                divImgFavVacio.setAttribute('class', 'div-img-fav-vacio')
                divImgFavVacio.setAttribute('id', 'div-img-fav-vacio')
                divTextoFavVacio.setAttribute('class', 'div-texto-fav-vacio');
                divTextoFavVacio.setAttribute('id', 'div-texto-fav-vacio');
                imgFavVacio.setAttribute('class', 'img-fav-vacio');
                textoFavVacio.setAttribute('class', 'texto-fav-vacio');
                imgFavVacio.setAttribute('src', '/assets/icon-fav-sin-contenido.svg');
                divContenedorFavVacio.setAttribute('id', 'div-contenedor-fav-vacio');

                divTextoFavVacio.appendChild(textoFavVacio);
                divImgFavVacio.appendChild(imgFavVacio);
                divContenedorFavVacio.appendChild(divImgFavVacio);
                divContenedorFavVacio.appendChild(divTextoFavVacio);
                document.getElementById('favoritos').appendChild(divContenedorFavVacio);

                textoFavVacio.textContent = '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!';


            }

            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));

        } else {

            for (let i = 0; i < arrayFavoritosGuardados.length; i++) {

                if (arrayFavoritosGuardados[i]._src == event.target.src) {
                    arrayFavoritosGuardados.splice(i, 1);
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
                    return;

                }

            }

            class favoritosStorage {
                constructor(id, src, title, user) {
                    this._id = id;
                    this._src = src;
                    this._title = title;
                    this._user = user;
                }
            }
            // let arrayFavoritos = [];
            var favId = event.target.id;
            var favSrc = event.target.src;
            var favTitle = event.target.title;
            var favUserName = event.target.user;
            var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);

            arrayFavoritosGuardados.push(fav);
            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));


        }
    })

    // });

    // if (screen.width >= 600) {

    //     document.getElementById('corazon-tarjeta').addEventListener('click', () => {

    //         if (favoritos.classList.contains('enabled-favoritos')) {
    //             for (let i = 0; i < arrayFavoritosGuardados.length; i++) {
    //                     if (arrayFavoritosGuardados[i]._src == event.target.src) {
    //                         arrayFavoritosGuardados.splice(i, 1) ;

    //                     }


    //             }
    //             event.target.parentNode.remove();
    //             console.warn(arrayFavoritosGuardados.length);
    //             if (arrayFavoritosGuardados.length == 0 && document.getElementById('div-contenedor-fav-vacio') == null) {
    //                 document.getElementById('favoritos-conteiner').remove();


    //                 // CREAR IMAGEN DE FAVORITOS SIN CONTENIDO
    //                 let divContenedorFavVacio = document.createElement('div');   
    //                 let divImgFavVacio = document.createElement('div');
    //                 let imgFavVacio = document.createElement('img');
    //                 let divTextoFavVacio = document.createElement('div');
    //                 let textoFavVacio = document.createElement('p');

    //                 divImgFavVacio.setAttribute('class', 'div-img-fav-vacio')
    //                 divImgFavVacio.setAttribute('id', 'div-img-fav-vacio')
    //                 divTextoFavVacio.setAttribute('class', 'div-texto-fav-vacio');
    //                 divTextoFavVacio.setAttribute('id', 'div-texto-fav-vacio');
    //                 imgFavVacio.setAttribute('class', 'img-fav-vacio');
    //                 textoFavVacio.setAttribute('class', 'texto-fav-vacio');
    //                 imgFavVacio.setAttribute('src', '/assets/icon-fav-sin-contenido.svg');
    //                 divContenedorFavVacio.setAttribute('id', 'div-contenedor-fav-vacio');

    //                 divTextoFavVacio.appendChild(textoFavVacio);
    //                 divImgFavVacio.appendChild(imgFavVacio);
    //                 divContenedorFavVacio.appendChild(divImgFavVacio);
    //                 divContenedorFavVacio.appendChild(divTextoFavVacio);
    //                 document.getElementById('favoritos').appendChild(divContenedorFavVacio);

    //                 textoFavVacio.textContent = '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!'; 


    //             } 

    //             localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));

    //         } else {

    //             class favoritosStorage {
    //                 constructor(id, src, title, user) {
    //                     this._id = id;
    //                     this._src = src;
    //                     this._title = title;
    //                     this._user = user;
    //                 }
    //             }
    //             // let arrayFavoritos = [];
    //             var favId = event.target.id;
    //             var favSrc = event.target.src;
    //             var favTitle = event.target.title;
    //             var favUserName = event.target.user;
    //             var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);

    //             arrayFavoritosGuardados.push(fav);
    //             localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));


    //         }

    //     });



    //     let favoritosGuardados = [];
    //     if(localStorage.getItem('favoritos') !== null) {

    //         favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    //     }

    // }

    // if (arrayFavoritosGuardados != 0) {
    //     if (screen.width <= 600) {
    //         if (corazon.classList.contains('fa')) {
    //             corazon.classList.remove('fa');
    //             corazon.classList.add('far');
    //         } else {
    //             corazon.classList.remove('far');
    //             corazon.classList.add('fa');
    //         }
    //     }

    // }


    // if (document.getElementById('gifs-busqueda-section') != null) {
    //     if (corazon.classList.contains('far')) {
    //         corazon.classList.remove('far');
    //         corazon.classList.add('fa');
    //     } else {
    //         corazon.classList.remove('fa');
    //         corazon.classList.add('far');
    //     }
    // }

}