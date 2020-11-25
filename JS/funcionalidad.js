// APERTURA Y CIERRE DEL MENU HAMBURGUESA

let boton = document.getElementById('btn-menu');
boton.addEventListener('click', showMenu);

function showMenu() {
    let menu = document.getElementById('opc-menu');
    if (menu.classList.contains('disabled-menu')) {
        menu.classList.remove('disabled-menu');
        menu.classList.add('enabled-menu');
        boton.classList.remove('fa-bars');
        boton.classList.add('fa-times');
    } else {
        menu.classList.remove('enabled-menu');
        menu.classList.add('disabled-menu');
        boton.classList.remove('fa-times');
        boton.classList.add('fa-bars');
    }
}


// DARK NIGHT MOOD

const dark = document.getElementById("dark-night");
const headerDark = document.getElementById('headerDark');


dark.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        dark.textContent = 'Modo Diurno';
        logo.src = '/assets/logo-mobile-modo-noct.svg';
        // document.getElementById('img-button-crear-gifo').src = '/assets/button-crear-gifo-modo-noct.svg';
    } else {
        dark.textContent = 'Modo Nocturno';
        logo.src = '/assets/logo-mobile.svg';
        // document.getElementById('img-button-crear-gifo').src = '/assets/button-crear-gifo.svg';
    }



});


// FUNCION DE REFRESH DE LA PAGINA DESDE EL ICONO DE GIFOS//////////

let logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    window.location.reload(true);
});



// CAMBIO A LA PANTALLA FAVORITOS

const liFavoritos = document.getElementById('li-favoritos');
const favoritos = document.getElementById('favoritos');


liFavoritos.addEventListener('click', () => {

    if (favoritos.classList.contains('disabled-favoritos')) {
        favoritos.classList.remove('disabled-favoritos');
        favoritos.classList.add('enabled-favoritos');
        document.getElementById('conteiner-title-favoritos').style.display = 'block';
        // document.getElementById('btn-ver-mas-favoritos').style.display = 'block';

        // document.body.classList.toggle('enabled-favoritos');

        document.getElementById('favoritos').style.display = 'flex';
        document.getElementById('search-section').style.display = 'none';
        titleSection.style.display = 'none';

        document.getElementById('favoritos').style.marginBottom = '50px';
        document.getElementById('trending-section').style.display = 'none';
        document.getElementById('busqueda').style.display = 'none';
        document.getElementById('mis-gifos').style.display = 'none';
        document.getElementById('grabargif').style.display = 'none';
        document.getElementById('title-section').style.display = 'none';

        if (misGifos.classList.contains('enabled-mis-gifos')) {
            misGifos.classList.remove('enabled-mis-gifos');
            misGifos.classList.add('disabled-mis-gifos');
            // document.getElementById('gifos-section').style.display = 'block';
        }


        muestraFavoritos();


    } else {

        // document.getElementById('favoritos-conteiner').style.marginTop = '0px';
        favoritos.classList.remove('enabled-favoritos');
        favoritos.classList.add('disabled-favoritos');
        document.getElementById('conteiner-title-favoritos').style.display = 'none';

        document.getElementById('busqueda').style.display = 'block';
        document.getElementById('search-section').style.display = 'block';
        titleSection.style.display = 'block';
        document.getElementById('title-section').style.display = 'block';
        document.getElementById('favoritos').style.display = 'none';
        document.getElementById('trending-section').style.display = 'block';

        if (document.getElementById('favoritos-conteiner') != null) {
            document.getElementById('favoritos-conteiner').remove();
            // document.getElementById('div-img-fav-vacio').remove(); VER PORQUE DA ERROR
            document.getElementById('div-texto-fav-vacio').remove();


        }

    }

});




// CAMBIO DE PANTALLA A MIS GIFOS

const liMisGifos = document.getElementById('li-mis-gifos');
const misGifos = document.getElementById('mis-gifos');



// SECCION DE BUSQUEDA

let searchIconClose = document.getElementById('search-icon-close');
let search = document.getElementById('search-section');
let imageSearch = document.getElementById('image-search');
let titleSection = document.getElementById('title-section');
let searchBox = document.getElementById('search-input');
let trendingSection = document.getElementById('trending-section');
let centerBorder = document.getElementById('center-border');
let titleBusqueda = document.getElementById('title-busqueda');
let gifosSection = document.getElementById('gifos-section');
let gifsBusquedaSection = document.getElementById('gifs-busqueda-section');
// function eventoBusqueda() {




let letSearch = search.addEventListener('input', () => {


    centerBorder.style.display = 'block';



    titleBusqueda.textContent = searchBox.value;

    //    validacion de que si el input contiene alguna busqueda, la seccion de gifos trending tenga un margentop de 46%



    let conteinerBtnVerMasBusqueda = document.getElementById('conteiner-btn-ver-mas-busqueda');


    conteinerBtnVerMasBusqueda.style.display = 'block';



    const desktop = 600;

    if (screen.width >= desktop) {

        searchBox.addEventListener('input', () => {
            document.getElementById('search-section').style.display = 'block';
            document.getElementById('title-section').style.display = 'block';
            document.getElementById('trending-title').style.display = 'none';
            document.getElementById('paragraph-conteiner').style.display = 'none';
            searchIcon.style.marginLeft = '-445px';
            searchIcon.style.color = '#9CAFC3';
            searchIconClose.style.marginLeft = '47px';
            searchIconClose.style.display = 'block';
            searchIconClose.style.marginTop = '-20px';
            titleSection.style.display = 'block';
            imageSearch.style.display = 'block';
            trendingSection.style.marginTop = '100px';
            gifosSection.style.marginTop = '27%';
            //
            // FIJARSE PORQUE ESTO DA ERROR, DICE QUE gifsBusquedaSection ESTA UNDEFINED
            // gifsBusquedaSection.style.marginTop = '32%';



        });

    } else {
        searchIcon.style.marginLeft = '-280px';
        searchIcon.style.color = '#9CAFC3'
        searchIconClose.style.display = 'block';
        titleSection.style.display = 'none';
        imageSearch.style.display = 'none';
        searchIconClose.style.marginLeft = '10px';
        searchIconClose.style.marginTop = '-20px';
        gifosSection.style.marginTop = '46%';

    }

});



let funcionamientoIconoClose = searchIconClose.addEventListener('click', () => {

    document.getElementById('search-input').value = "";

    document.getElementById('image-search').style.display = 'block';

    document.getElementById('title-section').style.display = 'block';

    searchIconClose.style.display = 'none';

    document.getElementById('search-icon').style.display = 'block';

    document.getElementById('search-input').style.marginTop = '0px';

    document.getElementById('conteiner-sugerencias').style.display = 'none';

    let searchIcon = document.getElementById('search-icon');
    searchIcon.style.marginLeft = '0px';
    searchIcon.style.color = '#572ee5';

    document.getElementById('search-input').style.border = '#572ee5 1px solid';



});



// CONECCION CON LA API

let busquedaGifs;

const searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const q = searchInput.value;
    busqueda(q);
})


function busqueda(q) {

    const apiKey = "wY4NEFy3OoeNLKpxGo034KQHjEqINnrT";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=48&offset=0&rating=g&lang=en`;
    const conteiner = document.getElementById('busqueda');

    fetch(path)
        .then(Response => {
            return Response.json();
        })
        .then(json => {

            if (document.getElementById('gifs-busqueda-section') != null) {
                document.getElementById('gifs-busqueda-section').remove();

            }


            let arrayGifs = [];

            let divContenedor = document.createElement('div');
            conteiner.insertBefore(divContenedor, document.getElementById('conteiner-btn-ver-mas-busqueda'));


            divContenedor.classList.add('gifs-busqueda-section');
            divContenedor.setAttribute('id', 'gifs-busqueda-section');

            if (arrayGifs.length !== null) {

                for (let i = 0; i < 12; i++) {
                    let div = document.createElement('div');
                    let img = document.createElement('img');
                    // img.setAttribute('src', json.data[i].images.original.url);
                    img.src = json.data[i].images.original.url;
                    // img.style.width = '156px';
                    // img.style.height = '120px';
                    img.setAttribute('class', 'gifs12');
                    img.setAttribute('id', json.data[i].id);
                    div.setAttribute('class', 'gifs-12-conteiner');
                    div.setAttribute('id', `gifs-${i}-conteiner`);
                    divContenedor.appendChild(img);
                    divContenedor.appendChild(div);
                    div.appendChild(img);
                    arrayGifs.push(img);
                    img.addEventListener('click', gifosMax);


                    if (screen.width >= 600) {




                        let divTarjetas = document.createElement('div');

                        let corazonTarjeta = document.createElement('img');


                        let descargaTarjeta = document.createElement('img');


                        let ampliarTarjeta = document.createElement('img');



                        divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                        divTarjetas.setAttribute('id', 'div-tarjetas');

                        corazonTarjeta.setAttribute('class', 'corazon-tarjeta');
                        corazonTarjeta.setAttribute('id', 'corazon-tarjeta');
                        // corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');

                        descargaTarjeta.setAttribute('class', 'descarga-tarjeta');
                        descargaTarjeta.setAttribute('id', 'descarga-tarjeta');
                        descargaTarjeta.setAttribute('src', '/assets/icon-download.svg');

                        ampliarTarjeta.setAttribute('id', 'ampliar-tarjeta');
                        ampliarTarjeta.setAttribute('class', 'ampliar-tarjeta');
                        ampliarTarjeta.setAttribute('src', 'assets/icon-max-normal.svg');


                        divTarjetas.appendChild(corazonTarjeta);
                        divTarjetas.appendChild(descargaTarjeta);
                        divTarjetas.appendChild(ampliarTarjeta);


                        div.appendChild(divTarjetas);
                        //////////////////////

                        let favoStorage = JSON.parse(localStorage.getItem('favoritos'));
                        if (favoStorage == null) {
                            favoStorage = [];
                        }
                        if (favoStorage.length > 0) {

                            for (j = 0; j < favoStorage.length; j++) {
                                if (json.data[i].id === favoStorage[j]._id) {
                                    corazonTarjeta.removeAttribute('src', '/assets/icon-fav.svg');
                                    corazonTarjeta.setAttribute('src', '/assets/icon-fav-active.svg');

                                } else {
                                    corazonTarjeta.removeAttribute('src', '/assets/icon-fav-active.svg');
                                    corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');
                                }
                            }
                        } else {
                            console.log('asdasdasd')
                            corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');
                        }

                        //////////////////////

                        // CODIGO DE GUARDAR EN LOCALSTORAGE FAVORITOS DESKTOP////////////////////////////////////////////////////

                        corazonTarjeta.addEventListener('click', (e) => {

                            let source = corazonTarjeta.src;


                            if (source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                                corazonTarjeta.src = '/assets/icon-fav.svg';
                            } else {
                                corazonTarjeta.src = '/assets/icon-fav-active.svg';
                            }

                            
                            for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                                // console.log(arrayFavoritosGuardados[k]._src);
                                // console.log(e.target.parentNode.previousSibling.src);
                                if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                                    console.log(arrayFavoritosGuardados)
                                    arrayFavoritosGuardados.splice(k, 1);
                                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));

                                    return;
                                    // console.log(arrayFavoritosGuardados)
                                }
                            }
                            
                            // console.log('esta mal');
                            class favoritosStorage {
                                constructor(id, src, title, user) {
                                    this._id = id;
                                    this._src = src;
                                    this._title = title;
                                    this._user = user;
                                }

                            }

                            let evento = e.target.parentNode.previousSibling;
                            // console.warn('/////')
                            // console.log(e.target.parentNode.previousSibling);
                            // console.warn('/////')
                            // let arrayFavoritos = [];
                            var favId = evento.id;
                            var favSrc = evento.src;
                            var favTitle = evento.title;
                            var favUserName = evento.user;
                            var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);
                            arrayFavoritosGuardados.push(fav);

                            

                            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));



                        });
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////

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



                        corazonTarjeta.addEventListener('mouseover', () => {
                            corazonTarjeta.src = '/assets/icon-fav-hover.svg';
                        });

                        corazonTarjeta.addEventListener('mouseout', () => {
                            corazonTarjeta.src = '/assets/icon-fav.svg';
                        });

                        corazonTarjeta.addEventListener('click', () => {

                            corazonTarjeta.addEventListener('mouseover', () => {
                                corazonTarjeta.src = '/assets/icon-fav-active.svg';
                            });

                            corazonTarjeta.addEventListener('mouseout', () => {

                                corazonTarjeta.src = '/assets/icon-fav-active.svg';
                            });




                        });
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


                        descargaTarjeta.addEventListener('mouseover', () => {
                            descargaTarjeta.src = '/assets/icon-download-hover.svg';



                        });

                        descargaTarjeta.addEventListener('mouseout', () => {
                            descargaTarjeta.src = '/assets/icon-download.svg';
                        });

                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
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

                        });

                        div.addEventListener('mouseout', () => {

                            divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                            divTarjetas.classList.remove('div-tarjetas-muestra');

                        });

                    }

                        
                }
            } else {


                let imagenBusquedaVacio = document.createElement('img');
                let textoBusquedaVacio = document.createElement('p');

                imagenBusquedaVacio.setAttribute('src', '/assets/icon-busqueda-sin-resultado.svg');

                textoBusquedaVacio.textContent = 'Intenta con otra búsqueda.';

                document.getElementById('busqueda').appendChild(imagenBusquedaVacio);
                document.getElementById('busqueda').appendChild(textoBusquedaVacio);

            }


            busquedaGifs = json.data;

            

        })
        .catch(function (err) {
            console.log(err);
        });



}


let main = document.getElementById('main');





// FUNCIONAMIENTO DEL ICONO DE BUSQUEDA----------------------------------------------


let searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', () => {
    busqueda(document.getElementById('search-input').value);
});



// BOTON VER MAS---------------------------------------------------------


function verMas(q) {


    const apiKey = "wY4NEFy3OoeNLKpxGo034KQHjEqINnrT";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=48&offset=0&rating=g&lang=en`;
    const conteiner = document.getElementById('gifs-busqueda-section');


    fetch(path)
        .then(Response => {
            return Response.json();
        })
        .then(json => {
            conteiner.innerHTML = [];
            let arrayGifs = [];

            for (let i = 0; i < 24; i++) {
                let div = document.createElement('div');
                let img = document.createElement('img');
                // img.setAttribute('src', json.data[i].images.original.url);
                img.src = json.data[i].images.original.url;
                img.setAttribute('class', 'gifs12');
                div.setAttribute('class', 'gifs-12-conteiner');
                conteiner.appendChild(img);
                conteiner.appendChild(div);
                div.appendChild(img);
                arrayGifs.push(img);
                img.addEventListener('click', gifosMax);


                if (screen.width >= 600) {

                    let divTarjetas = document.createElement('div');

                    let corazonTarjeta = document.createElement('img');


                    let descargaTarjeta = document.createElement('img');


                    let ampliarTarjeta = document.createElement('img');



                    divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                    divTarjetas.setAttribute('id', 'div-tarjetas');

                    corazonTarjeta.setAttribute('class', 'corazon-tarjeta');
                    corazonTarjeta.setAttribute('id', 'corazon-tarjeta');
                    corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');

                    descargaTarjeta.setAttribute('class', 'descarga-tarjeta');
                    descargaTarjeta.setAttribute('id', 'descarga-tarjeta');
                    descargaTarjeta.setAttribute('src', '/assets/icon-download.svg');

                    ampliarTarjeta.setAttribute('id', 'ampliar-tarjeta');
                    ampliarTarjeta.setAttribute('class', 'ampliar-tarjeta');
                    ampliarTarjeta.setAttribute('src', 'assets/icon-max-normal.svg');


                    divTarjetas.appendChild(corazonTarjeta);
                    divTarjetas.appendChild(descargaTarjeta);
                    divTarjetas.appendChild(ampliarTarjeta);


                    div.appendChild(divTarjetas);
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

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


                    corazonTarjeta.addEventListener('mouseover', () => {
                        corazonTarjeta.src = '/assets/icon-fav-hover.svg';
                    });

                    corazonTarjeta.addEventListener('mouseout', () => {
                        corazonTarjeta.src = '/assets/icon-fav.svg';
                    });

                    corazonTarjeta.addEventListener('click', () => {

                        corazonTarjeta.addEventListener('mouseover', () => {
                            corazonTarjeta.src = '/assets/icon-fav-active.svg';
                        });

                        corazonTarjeta.addEventListener('mouseout', () => {

                            corazonTarjeta.src = '/assets/icon-fav-active.svg';
                        });

                    });
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


                    descargaTarjeta.addEventListener('mouseover', () => {
                        descargaTarjeta.src = '/assets/icon-download-hover.svg';
                    });

                    descargaTarjeta.addEventListener('mouseout', () => {
                        descargaTarjeta.src = '/assets/icon-download.svg';
                    });

                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////                   
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

                    });

                    div.addEventListener('mouseout', () => {

                        divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                        divTarjetas.classList.remove('div-tarjetas-muestra');

                    });
                }

            }

        })
        .catch(function (err) {
            console.log(err);
        });

    for (i = 0; i < arrayFavoritosGuardados.length; i++) {
        if (
            JSON.stringify(arrayFavoritosGuardados[i].id) ===
            JSON.stringify(fav.id)
        ) {
            arrayFavoritosGuardados.splice(i, 1);
            localStorage.setItem(
                "favoritos",
                JSON.stringify(arrayFavoritosGuardados)
            );
        }
    }

}

let verMasBtn = document.getElementById('search-input');
let btnVerMas = document.getElementById('conteiner-btn-ver-mas-busqueda');
btnVerMas.addEventListener('click', () => {
    verMas(document.getElementById('search-input').value);
});



// LOS TRENDINGS ////////////////////////////////////////////////////////////////////////////////////////////

const apiKeyTrending = "wY4NEFy3OoeNLKpxGo034KQHjEqINnrT";
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKeyTrending}`;
const conteinerTrending = document.getElementById('gifos-section-conteiner');

fetch(url)
    .then(Response => {
        return Response.json();
    })
    .then(json => {
        let arrayTrending = [];

        class gifTrendings {
            constructor(id, src, title, user) {
                this._id = id;
                this._src = src;
                this._title = title;
                this._user = user;
            }
        }



        for (let i = 0; i < 12; i++) {


            let newId = json.data[i].images.original.id;
            let newSrc = json.data[i].images.original.url;
            let newTitle = json.data[i].title;
            let newUserName = json.data[i].username;


            let gif = new gifTrendings(
                newId,
                newSrc,
                newTitle,
                newUserName
            );
            arrayTrending.push(gif);
            let div = document.createElement('div');
            let img = document.createElement('img');

            img.setAttribute('class', 'img-gifos-section');

            img.src = newSrc;
            img.id = newId;
            img.title = newTitle;
            img.user = newUserName;

            div.appendChild(img);
            conteinerTrending.appendChild(div);


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


                    if (source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                        corazonTarjeta.src = '/assets/icon-fav.svg';
                    } else {
                        corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    }

                    if (arrayFavoritosGuardados.length != null) {
                        corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    }
                    for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                        // console.log(arrayFavoritosGuardados[k]._src);
                        // console.log(e.target.parentNode.previousSibling.src);
                        if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                            console.log(arrayFavoritosGuardados);
                            arrayFavoritosGuardados.splice(k, 1);
                            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
                            return;
                            // console.log(arrayFavoritosGuardados)
                        }
                    }
                    console.log('no anda')
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

                    arrayFavoritosGuardados.push(fav);
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

                

            } else {
                document.getElementById('flechas').style.display = 'none';



            }

        }
                    
       

        document.getElementById("hover-der").addEventListener("click", () => {
            if (screen.width >= 1280) {
                document.getElementById("gifos-section-conteiner").scrollLeft += 1158;
            }
        });
        document.getElementById("hover-izq").addEventListener("click", () => {
            if (screen.width >= 1280) {
                document.getElementById("gifos-section-conteiner").scrollLeft -= 1158;
            }
        });

    })
    .catch(function (err) {
        console.log(err);
    })


// SUGERENCIAS


let buscarSugerencia = document.getElementById('search-input');

const apiKey = 'wY4NEFy3OoeNLKpxGo034KQHjEqINnrT';
const conteinerSugerencias = document.getElementById('conteiner-sugerencias');

// const urlSuggestion = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${buscarSugerencia}`;

arraySugerencias = [];

function sugerencias(textoABuscar) {
    let urlSuggestion = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${textoABuscar}`;
    // console.log(urlSuggestion);
    fetch(urlSuggestion)
        .then(Response => {
            return Response.json();
        })
        .then(json => {
            // console.log(json);



            buscarSugerencia.value
            conteinerSugerencias.innerHTML = '';
            arraySugerencias = [];

            let divContenedor = document.createElement('div');
            let div1 = document.createElement('div');
            let div3 = document.createElement('div');
            let div2 = document.createElement('div');
            let div4 = document.createElement('div');
            let lupa1 = document.createElement('i')
            let lupa2 = document.createElement('i')
            let lupa3 = document.createElement('i')
            let lupa4 = document.createElement('i')

            divContenedor.setAttribute('class', 'sugerencias-contenedor');
            div1.setAttribute('class', 'sugerencia-1');
            div2.setAttribute('class', 'sugerencia-2');
            div3.setAttribute('class', 'sugerencia-3');
            div4.setAttribute('class', 'sugerencia-4');
            lupa1.setAttribute('class', 'fas fa-search');
            lupa2.setAttribute('class', 'fas fa-search');
            lupa3.setAttribute('class', 'fas fa-search');
            lupa4.setAttribute('class', 'fas fa-search');

            div1.textContent = (json.data[0].name);
            div2.textContent = (json.data[1].name);
            div3.textContent = (json.data[2].name);
            div4.textContent = (json.data[3].name);
            divContenedor.appendChild(div1);
            divContenedor.appendChild(div2);
            divContenedor.appendChild(div3);
            divContenedor.appendChild(div4);
            div1.appendChild(lupa1);
            div2.appendChild(lupa2);
            div3.appendChild(lupa3);
            div4.appendChild(lupa4);
            conteinerSugerencias.appendChild(divContenedor);
            arraySugerencias.push(div1);
            arraySugerencias.push(div2);
            arraySugerencias.push(div3);
            arraySugerencias.push(div4);
            // div1.addEventListener('click', () => {
            //     busqueda(buscarSugerencia);
            // });


            if (buscarSugerencia == "") {
                divContenedor.style.display = 'none';
            } else {
                divContenedor.style.display = 'block';
            }

            div1.addEventListener('click', () => {
                busqueda(json.data[0].name);
                titleBusqueda.textContent = json.data[0].name;
            });

            div2.addEventListener('click', () => {
                busqueda(json.data[1].name);
                titleBusqueda.textContent = json.data[1].name;
            });

            div3.addEventListener('click', () => {
                busqueda(json.data[2].name);
                titleBusqueda.textContent = json.data[2].name;
            });

            div4.addEventListener('click', () => {
                busqueda(json.data[3].name);
                titleBusqueda.textContent = json.data[3].name;
            });

        })
        .catch(function (err) {
            console.log(err.message);
        });



}


buscarSugerencia.addEventListener('input', () => {

    sugerencias(document.getElementById('search-input').value);
    conteinerSugerencias.style.display = 'block';
});





// FUNCIONAMIENTO DEL HOVER DE LOS BOTONES DE IZQUIERDA Y DERECHA DE SLIDER



let flechaIzquierda = document.getElementById('flecha-izquierda-conteiner');
let flechaDerecha = document.getElementById('flecha-derecha-conteiner');
let flechaIzqHover = document.getElementById('hover-izq');
let flechaDerHover = document.getElementById('hover-der');

flechaIzquierda.addEventListener('mouseover', () => {

    flechaIzqHover.style.display = 'block';

});

flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzqHover.style.display = 'none';

});



flechaDerecha.addEventListener('mouseover', () => {
    flechaDerHover.style.display = 'block';
});


flechaDerecha.addEventListener('mouseout', () => {
    flechaDerHover.style.display = 'none';
});





