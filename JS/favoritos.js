let favoritosGuardados = [];

if (localStorage.getItem('favoritos') !== null) {

    favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
}



document.getElementById('conteiner-btn-ver-mas-favoritos').addEventListener('click', () => {
    if (arrayFavoritosGuardados.length > 12) {
        verMasFavoritos();
        document.getElementById('favoritos').style.marginBottom = '700';
    } else {
        document.getElementById('favoritos').style.marginBottom = '0';
    }
});


let arrayFavoritosGuardados = [];
function muestraFavoritos() {

    if (document.getElementById('div-contenedor-fav-vacio') != null) {
        document.getElementById('div-contenedor-fav-vacio').remove();
    }
    if (document.getElementById('busqueda') != null) {
        if (document.getElementById('gifs-busqueda-section') != null) {
            document.getElementById('gifs-busqueda-section').remove();
        }

        document.getElementById('busqueda').style.display = 'none';



        // cuando el array de los favoritos sea mayor o igual a 12 va mostrar el boton de ver mas
        if (arrayFavoritosGuardados.length > 12) {
            document.getElementById('conteiner-btn-ver-mas-favoritos').style.display = 'block';

        }


    } else {
        document.getElementById('conteiener-btn-ver-mas-favoritos').style.display = 'none';
    }


    if (JSON.parse(localStorage.getItem('favoritos')) == null) {
        favoritosGuardados = [];
    } else {
        favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    }

    if (favoritosGuardados.length != 0) {



        let freno = Math.min(favoritosGuardados.length, 12);
        let favoritosConteiner = document.createElement('div');
        favoritosConteiner.setAttribute('id', 'favoritos-conteiner');
        favoritosConteiner.setAttribute('class', 'gifs-12-conteiner');

        for (let i = 0; i < freno; i++) {
            let div = document.createElement('div');
            let img = document.createElement('img');
            // img.setAttribute('src', favoritosGuardados[i]._src);
            img.src = favoritosGuardados[i]._src;
            // img.style.width = '156px';
            // img.style.height = '120px';
            img.setAttribute('class', 'gifs12');
            favoritosConteiner.appendChild(img);
            favoritosConteiner.appendChild(div);
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
                corazonTarjeta.setAttribute('src', '/assets/icon-trash-normal.svg');

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


                // CODIGO DE DESCARGA/////////////

            descargaTarjeta.addEventListener("click", async function () {
                let a = document.createElement("a");
                let response = await fetch(img.src);
                 let gif = await response.blob();
                a.download = "Gif";
                a.href = window.URL.createObjectURL(gif);
                a.dataset.downloadurl = ["application/octet-stream", a.download, a.href,].join(":");
                a.click();
            });



                corazonTarjeta.addEventListener('click', (e) => {

                    let source = corazonTarjeta.src;
                    
                    // console.log(e.target.parentNode.previousSibling.src);
                    for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                        // console.log(arrayFavoritosGuardados[k]._src);
                        // console.log(e.target.parentNode.previousSibling.src);
                        if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                            console.log('se borra')
                            arrayFavoritosGuardados.splice(k, 1);
                            // console.log(arrayFavoritosGuardados)
                            if (arrayFavoritosGuardados.length == 0) {
                                e.target.parentNode.parentNode.remove();
                                setTimeout(() => {
                                    muestraFavoritos()
                                }, 100)

                            } else {
                                e.target.parentNode.parentNode.remove();

                            }

                        }
                    }
                    

                    // if(source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                    //     corazonTarjeta.src = '/assets/icon-fav.svg';
                    // } else {
                    //     corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    // }

                    //
                    // class favoritosStorage {
                    //     constructor(id, src, title, user) {
                    //         this._id = id;
                    //         this._src = src;
                    //         this._title = title;
                    //         this._user = user;
                    //     }

                    // }

                    // 
                    // if (arrayFavoritosGuardados.length != 0) {
                    //     if (localStorage.getItem('favoritos').includes(JSON.stringify(_id))) {
                    //         corazonTarjeta.removeAttribute('src', '/assets/icon-fav.svg')
                    //         corazonTarjeta.setAttribute('src', '/assets/icon-fav-active.svg')
                    //     } else {
                    //         corazonTarjeta.removeAttribute('src', '/assets/icon-fav-active.svg')
                    //         corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg')
                    //     }

                    // }
                    // let evento = event.target.parentNode.previousSibling;
                    // // let arrayFavoritos = [];
                    // var favId = evento.id;
                    // var favSrc = evento.src;
                    // var favTitle = evento.title;
                    // var favUserName = evento.user;
                    // var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);

                    // arrayFavoritosGuardados.push(fav);
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));


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
                    // title.textContent = newTitle;
                    // userName.textContent = newUserName;
                });

                div.addEventListener('mouseout', () => {

                    divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                    divTarjetas.classList.remove('div-tarjetas-muestra');

                });

                document.getElementById('flechas').style.display = 'flex';

            }





        }
        document.getElementById('favoritos').insertBefore(favoritosConteiner, document.getElementById('conteiner-btn-ver-mas-favoritos'));

    } else {

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
        divContenedorFavVacio.setAttribute('class', 'div-contenedor-fav-vacio');

        divTextoFavVacio.appendChild(textoFavVacio);
        divImgFavVacio.appendChild(imgFavVacio);
        divContenedorFavVacio.appendChild(divImgFavVacio);
        divContenedorFavVacio.appendChild(divTextoFavVacio);
        document.getElementById('favoritos').appendChild(divContenedorFavVacio);

        textoFavVacio.textContent = '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!';

    }

}

function actualizaFavoritosAnteriores() {
    if (favoritosGuardados.length != 0) {
        for (let i = 0; i < favoritosGuardados.length; i++) {
            arrayFavoritosGuardados.push(favoritosGuardados[i]);

        }
    }
}

actualizaFavoritosAnteriores()


// BOTON DE VER MAS FAVORITOS----------------------------------------

function verMasFavoritos() {

    let freno = Math.min(favoritosGuardados.length, 24);
    let favoritosConteinerVerMAs = document.getElementById('favoritos-conteiner');




    for (let i = 12; i < freno; i++) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        // img.setAttribute('src', favoritosGuardados[i]._src);
        img.src = favoritosGuardados[i]._src;
        // img.style.width = '156px';
        // img.style.height = '120px';
        img.setAttribute('class', 'gifs12');
        favoritosConteinerVerMAs.appendChild(img);
        favoritosConteinerVerMAs.appendChild(div);
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

            // CODIGO DE DESCARGA/////////////

            descargaTarjeta.addEventListener("click", async function () {
                let a = document.createElement("a");
                let response = await fetch(img.src);
                 let gif = await response.blob();
                a.download = "Gif";
                a.href = window.URL.createObjectURL(gif);
                a.dataset.downloadurl = ["application/octet-stream", a.download, a.href,].join(":");
                a.click();
            });




            corazonTarjeta.addEventListener('click', (e) => {

                let source = corazonTarjeta.src;
                
                // console.log(e.target.parentNode.previousSibling.src);
                for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                    // console.log(arrayFavoritosGuardados[k]._src);
                    // console.log(e.target.parentNode.previousSibling.src);
                    if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                        console.log('se borra')
                        arrayFavoritosGuardados.splice(k, 1);
                        // console.log(arrayFavoritosGuardados)
                        if (arrayFavoritosGuardados.length == 0) {
                            e.target.parentNode.parentNode.remove();
                            setTimeout(() => {
                                muestraFavoritos()
                            }, 100)

                        } else {
                            e.target.parentNode.parentNode.remove();

                        }

                    }
                }
                //

                // if(source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                //     corazonTarjeta.src = '/assets/icon-fav.svg';
                // } else {
                //     corazonTarjeta.src = '/assets/icon-fav-active.svg';
                // }

                //
                // class favoritosStorage {
                //     constructor(id, src, title, user) {
                //         this._id = id;
                //         this._src = src;
                //         this._title = title;
                //         this._user = user;
                //     }

                // }

                // 
                // if (arrayFavoritosGuardados.length != 0) {
                //     if (localStorage.getItem('favoritos').includes(JSON.stringify(_id))) {
                //         corazonTarjeta.removeAttribute('src', '/assets/icon-fav.svg')
                //         corazonTarjeta.setAttribute('src', '/assets/icon-fav-active.svg')
                //     } else {
                //         corazonTarjeta.removeAttribute('src', '/assets/icon-fav-active.svg')
                //         corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg')
                //     }

                // }
                // let evento = event.target.parentNode.previousSibling;
                // // let arrayFavoritos = [];
                // var favId = evento.id;
                // var favSrc = evento.src;
                // var favTitle = evento.title;
                // var favUserName = evento.user;
                // var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);

                // arrayFavoritosGuardados.push(fav);
                localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));


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

    if (document.getElementById('conteiner-btn-ver-mas-favoritos').style.display == 'none') {
        // document.getElementById('gifos-section').style.marginTop = '50px';

    }



}


