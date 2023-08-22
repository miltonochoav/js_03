/*
Construir un array con mínimo 2 objetos.
Cada objeto debe tener adentro otro objeto.
Usar mínimo 3 métodos de arrays.
*/

let misRaperosFavoritos = [
  {
    nombre: "rapEnEspanol",
    artistas: [
      {
        nombre: "Espana",
        raperos: [
          "Nach",
          "Kase_O",
          "Mala_Rodriguez",
          "Ayax",
          "Fernando_Costa",
          "Follone",
          "LNDC",
          "Santa_Salut",
          "Dollar",
          "Bejo",
        ],
      },
      {
        nombre: "Venezuela",
        raperos: [
          "Canserbero",
          "Lil_Supa",
          "Apache",
          "Akapellah",
          "Gabilonia",
          "Gona",
          "Mcklopedia",
          "Nk_Profeta",
          "Sibilino",
          "Rial_Guawanko",
        ],
      },
      {
        nombre: "Rdominicana",
        raperos: [
          "Original_Juan",
          "Ariana_Puello",
          "Lapiz_Conciente",
          "Dkano",
          "Wilmer_Roberts",
        ],
      },
      {
        nombre: "Cuba",
        raperos: ["Rxnde_Akozta", "Aldeanos", "Orishas"],
      },
      {
        nombre: "Chile",
        raperos: ["Chystemc", "Bubaseta", "Portavoz", "DrefQuila"],
      },
    ],
  },
  {
    nombre: "rapEnIngles",
    artistas: [
      {
        nombre: "EstadosUnidos",
        raperos: [
          "Eminem",
          "Jay-Z",
          "Kendrick Lamar",
          "Dr_Dre",
          "Notorius_BIG",
          "2Pac",
          "Lil_Wayne",
          "DMX",
          "Nas",
          "Rakim",
          "Busta_Rhymes",
          "Metod_Man",
          "KRS_One",
          "Sean_Price",
          "Roc_Marciano",
        ],
      },

      {
        nombre: "Reino Unido",
        raperos: ["Stormzy", "Skepta", "Dave", "Giggs", "AJ_Tracey"],
      },
    ],
  },
];

console.log(misRaperosFavoritos);

// Método 1: map()
// Obtener los nombres de los artistas de rap en español
let artistasRapEnEspanol = misRaperosFavoritos
  .find((objeto) => objeto.nombre === "rapEnEspanol")
  .artistas.map((objeto) => objeto.nombre);

console.log(artistasRapEnEspanol);

// Método 2: filter()
// Filtrar los raperos de Cuba en el objeto rapEnEspanol
let raperosCuba = misRaperosFavoritos
  .find((objeto) => objeto.nombre === "rapEnEspanol")
  .artistas.find((objeto) => objeto.nombre === "Cuba").raperos;

console.log(raperosCuba);

// Método 3: forEach()
// Recorrer y mostrar todos los raperos de Venezuela en el objeto rapEnEspanol
misRaperosFavoritos
  .find((objeto) => objeto.nombre === "rapEnEspanol")
  .artistas.find((objeto) => objeto.nombre === "Venezuela")
  .raperos.forEach((rapero) => {
    console.log(rapero);
  });
