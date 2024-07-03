/* document.addEventListener("DOMContentLoaded", function () {
  console.log("sesion: ", localStorage.getItem("isLogged"));
  if (!localStorage.getItem("isLogged")) {
    window.location.href = "./login.html";
  }
}); */

const containerFavoritos = document.getElementById("favoritos");
const iconosBucador = document.getElementById("iconosBuscar");

class Musica {
  constructor(
    id,
    imagen,
    nombre,
    autor,
    duracion,
    genero,
    anio,
    sonido,
    isFavorite = false,
    isMyplaylist = false
  ) {
    (this.id = id), (this.imagen = imagen);
    this.nombre = nombre;
    this.duracion = duracion;
    this.genero = genero;
    this.anio = anio;
    this.sonido = sonido;
    this.autor = autor;
    this.isFavorite = isFavorite;
    this.isMyplaylist = isMyplaylist;
  }

  static obtenerPorNombre(nombre) {
    return AllSongs.find((song) => song.nombre === nombre) || null;
  }
}

const AllSongs = [
  new Musica(
    0,
    "./imagenes/SimplementeAmigos.jpeg",
    "Simplemente Amigos",
    "Ana Gabriel",
    "4:20",
    "Balada",
    "2013",
    "./canciones/Simplemente_Amigos.mp3"
  ),

  new Musica(
    1,
    "./imagenes/portada1.jpeg",
    "Eres",
    "Café Tacuba",
    "4:20",
    "Balada",
    "2009",
    "./canciones/Eres.mp3"
  ),

  new Musica(
    2,
    "./imagenes/portada2.jpeg",
    "Un siglo sin ti",
    "Chayanne",
    "4:23",
    "Balada",
    "2009",
    "./canciones/Unsiglosinti.mp3"
  ),

  new Musica(
    3,
    "./imagenes/portada3.jpeg",
    "Te pido",
    "TINI",
    "2:54",
    "Reggaeton",
    "2023",
    "./canciones/TePido.mp3"
  ),

  new Musica(
    4,
    "./imagenes/portada4.jpeg",
    "Luna",
    "Feid,ATL Jacob",
    "3:16",
    "Regueton",
    "2023",
    "./canciones/Luna.mp3"
  ),

  new Musica(
    5,
    "./imagenes/portada5.jpeg",
    "Extrañandote",
    "Jay Wheeler y Zhamira Zambrano",
    "3:08",
    "Balada",
    "2023",
    "./canciones/Extrañándote.mp3"
  ),

  new Musica(
    6,
    "./imagenes/portada6.jpeg",
    "Necio",
    "Romeo Santos",
    "4:20",
    "Bachata",
    "2015",
    "./canciones/Necio.mp3"
  ),

  new Musica(
    7,
    "./imagenes/portada7.jpeg",
    "Dejala Volar",
    "Tito El Bambino",
    "3:20",
    "Reggaeton",
    "2015",
    "./canciones/DejalaVolar.mp3"
  ),

  new Musica(
    8,
    "./imagenes/portada8.avif",
    "Igual Que Ayer",
    "Rakim Ken-y",
    "3:52",
    "Reggaeton",
    "2009",
    "./canciones/IgualQueAyer.mp3"
  ),

  new Musica(
    9,
    "./imagenes/portada9.jpeg",
    "Eres Mía",
    "Romeo Santos",
    "4:10",
    "Bachata",
    "2022",
    "./canciones/EresMía.mp3"
  ),

  new Musica(
    10,
    "./imagenes/portada10.jpeg",
    "Ojitos Chiquitos",
    "Don Omar",
    "4:10",
    "Reggaeton",
    "2019",
    "./canciones/OjitosChiquitos.mp3"
  ),

  new Musica(
    11,
    "./imagenes/portada11.jpg",
    "Lo Aprendí De Ti",
    "Ha-Ash",
    "4:23",
    "Balada",
    "2016",
    "./canciones/LoAprendíDeTi.mp3"
  ),

  new Musica(
    12,
    "./imagenes/portada12.jpeg",
    "Mientes",
    "Camila",
    "4:00",
    "Balada",
    "2013",
    "./canciones/Mientes.mp3"
  ),

  new Musica(
    13,
    "./imagenes/portada13.jpeg",
    "Imitadora ",
    "Romeo Santos",
    "3:55",
    "Bachata",
    "2018",
    "./canciones/Imitadora.mp3"
  ),

  new Musica(
    14,
    "./imagenes/portada14.jpeg",
    "Rosa Pastel",
    "Belanova ",
    "3:05",
    "Pop",
    "2009",
    "./canciones/RosaPastel.mp3"
  ),

  new Musica(
    15,
    "./imagenes/portada15.jpeg",
    "Jailhouse Rock",
    "Elvis Presley",
    "2:55",
    "Rock and Roll",
    "1957",
    "./canciones/JailhouseRock.mp3"
  ),

  new Musica(
    16,
    "./imagenes/portada16.png",
    "Perdón, Perdón",
    "HA-ASH",
    "3:39",
    "Balada",
    "2015",
    "./canciones/Perdón.mp3"
  ),

  new Musica(
    17,
    "./imagenes/portada17.jpg",
    "Luna",
    "Zoé",
    "5:01",
    "Rock en español",
    "2008",
    "./canciones/Luna-zoe.mp3"
  ),

  new Musica(
    18,
    "./imagenes/portada18.jpeg",
    "SimplYou're",
    "John Travolta, Olivia",
    "2:49",
    "Rock and Roll",
    "1978",
    "./canciones/Grease.mp3"
  ),

  new Musica(
    19,
    "./imagenes/portada19.jpeg",
    "Rosas",
    "La Oreja de Van Gogh",
    "4:20",
    "Pop",
    "2015",
    "./canciones/Rosas.mp3"
  ),

  new Musica(
    20,
    "./imagenes/portada20.png",
    "La diabla",
    "Romeo Santos",
    "4:00",
    "Bachata",
    "2022",
    "./canciones/La_diabla.mp3"
  ),

  new Musica(
    21,
    "./imagenes/portada21.jpeg",
    "Lost on You",
    "LP",
    "5:01",
    "Pop",
    "2016",
    "./canciones/LostonYou.mp3"
  ),

  new Musica(
    22,
    "./imagenes/portada22.jpeg",
    "Hace Mucho Tiempo",
    "Arcángel ",
    "3:20",
    "Reggaeton",
    "2014",
    "./canciones/HaceMuchoTiempo.mp3"
  ),

  new Musica(
    23,
    "./imagenes/portada23.jpeg",
    "Labios Rotos ",
    "Zoé ",
    "4:22",
    "Rock en español",
    "2011",
    "./canciones/LabiosRotos.mp3"
  ),

  new Musica(
    24,
    "./imagenes/portada24.jpeg",
    "Una Hoja En Blanco",
    "Omar Geles, Esmeralda Orozco",
    "4:44",
    "Vallenatos",
    "1997",
    "./canciones/UnaHojaEnBlanco.mp3"
  ),

  new Musica(
    25,
    "./imagenes/portada25.jpeg",
    "Olvídala",
    "Binomio De Oro De América, Jorge Celedón",
    "4:20",
    "Vallenatos",
    "2007",
    "./canciones/Olvídala.mp3"
  ),

  new Musica(
    26,
    "./imagenes/portada26.jpeg",
    "Mi Santa",
    "Romeo Santos",
    "4:23",
    "Bachata",
    "2011",
    "./canciones/MiSanta.mp3"
  ),

  new Musica(
    27,
    "./imagenes/portada27.jpeg",
    "Amor prohibido",
    "Selena",
    "2:50",
    "Cumbia",
    "1994",
    "./canciones/AmorProhibido.mp3"
  ),

  new Musica(
    28,
    "./imagenes/portada28.jpg",
    "Me Matas",
    "Rakim y Ken-y",
    "4:20",
    "Reggaeton",
    "2019",
    "./canciones/MeMatas.mp3"
  ),

  new Musica(
    29,
    "./imagenes/portada29.jpg",
    "Soñé",
    "Zoé",
    "3:52",
    "Rock en español",
    "2003",
    "./canciones/Soñé.mp3"
  ),
];

class ListaCanciones {
  constructor(canciones) {
    this.canciones = canciones;
    this.cancionesFavoritas = [];
    this.cancionesPlaylist = [];
  }

  inicializarBusqueda() {
    const iconosBucador = document.getElementById("iconosBuscar");
    const InputBuscador = document.getElementById("inputBuscador");
    const btnBuscar = document.getElementById("btnBuscar");
    const listaBuscar = document.getElementById("lista-buscar");

    iconosBucador.style.display = "none";

    btnBuscar.addEventListener("click", () => {
      const valor = InputBuscador.value;

      const cancionesFiltradas = this.buscarCanciones(valor);

      if (cancionesFiltradas.length > 0) {
        iconosBucador.style.display = "block";
        this.actualizarInterfaz(cancionesFiltradas);
      } else {
        listaBuscar.innerHTML = `<li>No se encontraron canciones</li>`;
      }
    });
  }

  buscarCanciones(valor) {
    return this.canciones.filter(
      (c) =>
        c.nombre.toLowerCase().includes(valor.toLowerCase()) ||
        c.autor.toLowerCase().includes(valor.toLowerCase()) ||
        c.genero.toLowerCase().includes(valor.toLowerCase())
    );
  }

  changeConcurrentProduct(music) {
    const sonido = playMusic(music.Audio);

    const containerMusic = document.getElementById("contenedor-portada");
    let concurretMusic;
    concurretMusic = music;
    containerMusic.innerHTML = ` <img src="${concurretMusic.imagen}" alt="" />
            <div class="descripcion">
              <h3>${concurretMusic.nombre}</h3>
              <ul>
                <li><b>Artista:</b> ${concurretMusic.autor}</li>
                <li><b>Duración:</b> ${concurretMusic.duracion}</li>
                <li><b>Género:</b> ${concurretMusic.genero}</li>
                <li><b>Año:</b> ${concurretMusic.anio}</li>
              </ul>
            </div>
            
        
            
            <div class="botones">
              <i id="botonBlack" class="bi bi-skip-backward-circle" ></i>
              <i id="botonPlay" class="bi bi-play-circle" onclick="${playMusic(
                concurretMusic.sonido
              )}"></i>
            
              <i id="botonpause" class="bi bi-pause-circle" onclick="playMusic()"></i>
              <i class="bi bi-stop-circle" onclick="stopMusic()"></i>
              <i class="bi bi-bell-slash"></i>
            </div>`;

    const playButton = document.getElementById("botonPlay");
    playButton.addEventListener("click", function () {
      playMusic(concurretMusic.sonido);
    });

    const blackButton = document.getElementById("botonBlack");
    blackButton.addEventListener("click", function () {
      retrocederEnPlaylist(concurretMusic.id);
    });
  }

  agregarAPlaylist(nombreCancion) {
    const listaPlaylist = document.getElementById("listaPlaylistCanciones");
    const idM = obtenerID(nombreCancion);

    if (!this.cancionesPlaylist.includes(nombreCancion)) {
      listaPlaylist.innerHTML += `
        <div class="item">
            <span>${nombreCancion}</span>
            <div class="iconos">
                <button class="bi bi-play-fill" onclick="listaCanciones.changeConcurrentProduct(AllSongs['${idM}'])"></button>
                <button class="bi bi-heart" onclick="listaCanciones.agregarAFavoritos('${nombreCancion}')"></button>
                <button class="bi bi-trash" onclick="listaCanciones.eliminarCancionPlaylist('${nombreCancion}')"></button>
            </div>
        </div>`;
      this.cancionesPlaylist.push(nombreCancion);
    }
  }

  agregarAFavoritos(nombreCancion) {
    const listaFavoritos = document.getElementById("listaFavoritosCanciones");
    const idM = obtenerID(nombreCancion);

    if (!this.cancionesFavoritas.includes(nombreCancion)) {
      listaFavoritos.innerHTML += `
                <div class="item">
                    <span>${nombreCancion}</span>
                    <div class="iconos">
                    <button class="bi bi-play-fill" onclick="listaCanciones.changeConcurrentProduct(AllSongs['${idM}'])"></button>
                        <button class="bi bi-plus" onclick="listaCanciones.agregarAPlaylist('${nombreCancion}')"></button>
                        <button class="bi bi-trash" onclick="listaCanciones.eliminarCancionFavoritos('${nombreCancion}')"></button>
                    </div>
                </div>`;
      this.cancionesFavoritas.push(nombreCancion); // Agregar la canción a la lista de favoritos
      // this.actualizarInterfaz(this.buscarCanciones('')); // Actualizar la interfaz para mostrar las canciones actualizadas
    }
  }

  actualizarInterfaz(cancionesMostrar) {
    const listaBuscar = document.getElementById("lista-buscar");
    listaBuscar.innerHTML = cancionesMostrar
      .map(
        (c) =>
          `<div class="item">
                    <span>${c.nombre}</span>
                    <div class="iconos">
                        <button class="bi bi-play-fill" onclick="listaCanciones.changeConcurrentProduct(AllSongs['${c.id}'])"></button>
                        <button class="bi bi-heart" onclick="listaCanciones.agregarAFavoritos('${c.nombre}')"></button>
                        <button class="bi bi-plus" onclick="listaCanciones.agregarAPlaylist('${c.nombre}')"></button>
                    </div>
                </div>`
      )
      .join("");
  }

  eliminarCancionFavoritos(nombreCancion) {
    const listaFavoritos = document.getElementById("listaFavoritosCanciones");
    const elementosCancion = listaFavoritos.querySelectorAll(".item");
    elementosCancion.forEach((elemento) => {
      if (elemento.querySelector("span").textContent === nombreCancion) {
        elemento.remove();
      }
    });

    // También debes eliminar la canción de la lista de canciones favoritas en tu clase ListaCanciones
    this.cancionesFavoritas = this.cancionesFavoritas.filter(
      (cancion) => cancion !== nombreCancion
    );
  }

  eliminarCancionPlaylist(nombreCancion) {
    const listaFavoritos = document.getElementById("listaPlaylistCanciones");
    const elementosCancion = listaFavoritos.querySelectorAll(".item");
    elementosCancion.forEach((elemento) => {
      if (elemento.querySelector("span").textContent === nombreCancion) {
        elemento.remove();
      }
    });

    // También debes eliminar la canción de la lista de canciones favoritas en tu clase ListaCanciones
    this.cancionesFavoritas = this.cancionesFavoritas.filter(
      (cancion) => cancion !== nombreCancion
    );
  }
}

// CLASE HEREDADA DE LISTA DE CANCIONES

class ListaFavoritos extends ListaCanciones {
  constructor(canciones) {
    super(canciones);
    this.cancionesFavoritas = [];
  }

  agregar(nombreCancion) {
    this.cancionesFavoritas.push(nombreCancion);
    this.actualizarInterfaz();
  }

  actualizarInterfaz() {
    const listaFavoritos = document.getElementById("listaFavoritosCanciones");
    listaFavoritos.innerHTML = this.cancionesFavoritas
      .map((nombre) => `<div>${nombre}</div>`)
      .join("");
  }
}

const listaCanciones = new ListaCanciones(AllSongs);
const favoritos = new ListaFavoritos(AllSongs);
listaCanciones.inicializarBusqueda();

//obtner id para cambio de portada
function obtenerID(nombre) {
  const cancionBuscada = Musica.obtenerPorNombre(nombre);

  return cancionBuscada.id;
}

function adelantarEnPlaylist(currentIndex) {
  if (currentIndex < AllSongs.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  const cancionSiguiente = AllSongs[currentIndex];
  playMusic(cancionSiguiente.sonido);
}

let currentIndex = AllSongs.length - 1;

function retrocederEnPlaylist() {
  if (currentIndex === undefined || currentIndex === 0) {
    alert("Estamos en la primera canción");
    currentIndex = 0;
  } else {
    currentIndex--;
    // Obtener la canción actual
    const cancionAnterior = AllSongs[currentIndex];

    playMusic(cancionAnterior.sonido);
  }
}

//////BOTON PLAY
// Variable para mantener la referencia al objeto de audio actual
var audioActual;

function playMusic(sonido) {
  // Detener la reproducción del audio actual si existe
  if (audioActual) {
    audioActual.pause();
    audioActual.currentTime = 0; // Reiniciar el tiempo de reproducción
  }

  // Crear un nuevo objeto de audio
  var audio = new Audio(sonido);

  // Almacenar la referencia al nuevo objeto de audio
  audioActual = audio;

  // Reproducir el sonido
  audioActual.play();
}

/////BOTON STOP
function stopMusic() {
  if (audioActual && !audioActual.paused) {
    audioActual.pause();
    audioActual.currentTime = 0;
  }
}

////////por default botones portada
////PLAY
const botonPlay = document.getElementById("botonPlay");

// Agregar un controlador de eventos al botón para llamar a la función de reproducción
botonPlay.addEventListener("click", function () {
  playMusic("./canciones/Simplemente_Amigos.mp3");
});

////STOP
const botonStop = document.getElementById("botonstop");

// Agregar un controlador de eventos al botón para llamar a la función de reproducción
botonStop.addEventListener("click", function () {
  stopMusic();
});
