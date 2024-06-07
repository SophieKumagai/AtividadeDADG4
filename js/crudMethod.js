class CrudMethod{
    constructor(){
    }

    listaPokemon = [
        {
            nome: "Bulbasaur",
            tipo1: "Planta",
            tipo2: "Veneno",
            peso: "6,9 kg",
            altura: "0,7 m",
            ataque: 49,
            defesa: 49,
            nivel: 5
        },
        {
            nome: "Ivysaur",
            tipo1: "Planta",
            tipo2: "Veneno",
            peso: "13,0 kg",
            altura: "1,0 m",
            ataque: 62,
            defesa: 63,
            nivel: 16
        },
        {
            nome: "Venusaur",
            tipo1: "Planta",
            tipo2: "Veneno",
            peso: "100,0 kg",
            altura: "2,0 m",
            ataque: 82,
            defesa: 83,
            nivel: 32
        },
        {
            nome: "Charmander",
            tipo1: "Fogo",
            tipo2: null,
            peso: "8,5 kg",
            altura: "0,6 m",
            ataque: 52,
            defesa: 43,
            nivel: 5
        },
        {
            nome: "Charmeleon",
            tipo1: "Fogo",
            tipo2: null,
            peso: "19,0 kg",
            altura: "1,1 m",
            ataque: 64,
            defesa: 58,
            nivel: 16
        },
        {
            nome: "Charizard",
            tipo1: "Fogo",
            tipo2: "Voador",
            peso: "90,5 kg",
            altura: "1,7 m",
            ataque: 84,
            defesa: 78,
            nivel: 36
        },
        {
            nome: "Squirtle",
            tipo1: "Água",
            tipo2: null,
            peso: "9,0 kg",
            altura: "0,5 m",
            ataque: 48,
            defesa: 65,
            nivel: 5
        },
        {
            nome: "Wartortle",
            tipo1: "Água",
            tipo2: null,
            peso: "22,5 kg",
            altura: "1,0 m",
            ataque: 63,
            defesa: 80,
            nivel: 16
        },
        {
            nome: "Blastoise",
            tipo1: "Água",
            tipo2: null,
            peso: "85,5 kg",
            altura: "1,6 m",
            ataque: 83,
            defesa: 100,
            nivel: 36
        },
        {
            nome: "Caterpie",
            tipo1: "Inseto",
            tipo2: null,
            peso: "2,9 kg",
            altura: "0,3 m",
            ataque: 30,
            defesa: 35,
            nivel: 1
        },
        {
            nome: "Metapod",
            tipo1: "Inseto",
            tipo2: null,
            peso: "9,9 kg",
            altura: "0,7 m",
            ataque: 20,
            defesa: 55,
            nivel: 7
        },
        {
            nome: "Butterfree",
            tipo1: "Inseto",
            tipo2: "Voador",
            peso: "32,0 kg",
            altura: "1,1 m",
            ataque: 45,
            defesa: 50,
            nivel: 10
        },
        {
            nome: "Weedle",
            tipo1: "Inseto",
            tipo2: "Veneno",
            peso: "3,2 kg",
            altura: "0,3 m",
            ataque: 35,
            defesa: 30,
            nivel: 1
        },
        {
            nome: "Kakuna",
            tipo1: "Inseto",
            tipo2: "Veneno",
            peso: "10,0 kg",
            altura: "0,6 m",
            ataque: 25,
            defesa: 50,
            nivel: 7
        },
        {
            nome: "Beedrill",
            tipo1: "Inseto",
            tipo2: "Veneno",
            peso: "29,5 kg",
            altura: "1,0 m",
            ataque: 90,
            defesa: 40,
            nivel: 10
        },
        {
              nome: "Pidgey",
              tipo1: "Normal",
              tipo2: "Voador",
              peso: "1,8 kg",
              altura: "0,3 m",
              ataque: 45,
              defesa: 40,
              nivel: 5
          },
          {
              nome: "Pidgeotto",
              tipo1: "Normal",
              tipo2: "Voador",
              peso: "30,0 kg",
              altura: "1,1 m",
              ataque: 60,
              defesa: 55,
              nivel: 18
          },
          {
              nome: "Pidgeot",
              tipo1: "Normal",
              tipo2: "Voador",
              peso: "39,5 kg",
              altura: "1,5 m",
              ataque: 80,
              defesa: 75,
              nivel: 36
          },
          {
              nome: "Rattata",
              tipo1: "Normal",
              tipo2: null,
              peso: "3,5 kg",
              altura: "0,3 m",
              ataque: 56,
              defesa: 35,
              nivel: 5
          },
          {
              nome: "Raticate",
              tipo1: "Normal",
              tipo2: null,
              peso: "18,5 kg",
              altura: "0,7 m",
              ataque: 81,
              defesa: 60,
              nivel: 20
          },
          {
              nome: "Spearow",
              tipo1: "Normal",
              tipo2: "Voador",
              peso: "2,0 kg",
              altura: "0,3 m",
              ataque: 60,
              defesa: 30,
              nivel: 5
          },
          {
              nome: "Fearow",
              tipo1: "Normal",
              tipo2: "Voador",
              peso: "38,0 kg",
              altura: "1,2 m",
              ataque: 90,
              defesa: 65,
              nivel: 20
          },
          {
              nome: "Ekans",
              tipo1: "Veneno",
              tipo2: null,
              peso: "6,9 kg",
              altura: "2,0 m",
              ataque: 60,
              defesa: 44,
              nivel: 5
          },
          {
              nome: "Arbok",
              tipo1: "Veneno",
              tipo2: null,
              peso: "65,0 kg",
              altura: "3,5 m",
              ataque: 85,
              defesa: 69,
              nivel: 22
          },
          {
              nome: "Pikachu",
              tipo1: "Elétrico",
              tipo2: null,
              peso: "6,0 kg",
              altura: "0,4 m",
              ataque: 55,
              defesa: 40,
              nivel: 5
          },
          {
              nome: "Raichu",
              tipo1: "Elétrico",
              tipo2: null,
              peso: "30,0 kg",
              altura: "0,8 m",
              ataque: 90,
              defesa: 55,
              nivel: 20
          },
          {
              nome: "Sandshrew",
              tipo1: "Terra",
              tipo2: null,
              peso: "12,0 kg",
              altura: "0,6 m",
              ataque: 75,
              defesa: 85,
              nivel: 5
          },
          {
              nome: "Sandslash",
              tipo1: "Terra",
              tipo2: null,
              peso: "29,5 kg",
              altura: "1,0 m",
              ataque: 100,
              defesa: 110,
              nivel: 22
          },
          {
              nome: "Nidoran♀",
              tipo1: "Veneno",
              tipo2: null,
              peso: "7,0 kg",
              altura: "0,4 m",
              ataque: 47,
              defesa: 52,
              nivel: 5
          },
          {
              nome: "Nidorina",
              tipo1: "Veneno",
              tipo2: null,
              peso: "20,0 kg",
              altura: "0,8 m",
              ataque: 62,
              defesa: 67,
              nivel: 16
          },
          {
              nome: "Nidoqueen",
              tipo1: "Veneno",
              tipo2: "Terra",
              peso: "60,0 kg",
              altura: "1,3 m",
              ataque: 92,
              defesa: 87,
              nivel: 36
          },
          {
              nome: "Nidoran♂",
              tipo1: "Veneno",
              tipo2: null,
              peso: "9,0 kg",
              altura: "0,5 m",
              ataque: 57,
              defesa: 40,
              nivel: 5
          },
          {
              nome: "Nidorino",
              tipo1: "Veneno",
              tipo2: null,
              peso: "19,5 kg",
              altura: "0,9 m",
              ataque: 72,
              defesa: 57,
              nivel: 16
          },
          {
              nome: "Nidoking",
              tipo1: "Veneno",
              tipo2: "Terra",
              peso: "62,0 kg",
              altura: "1,4 m",
              ataque: 102,
              defesa: 77,
              nivel: 36
          },
          {
              nome: "Clefairy",
              tipo1: "Fada",
              tipo2: null,
              peso: "7,5 kg",
              altura: "0,6 m",
              ataque: 45,
              defesa: 48,
              nivel: 5
          },
          {
              nome: "Clefable",
              tipo1: "Fada",
              tipo2: null,
              peso: "40,0 kg",
              altura: "1,3 m",
              ataque: 70,
              defesa: 73,
              nivel: 16
          },
          {
              nome: "Vulpix",
              tipo1: "Fogo",
              tipo2: null,
              peso: "9,9 kg",
              altura: "0,6 m",
              ataque: 41,
              defesa: 40,
              nivel: 5
          },
          {
              nome: "Ninetales",
              tipo1: "Fogo",
              tipo2: null,
              peso: "19,9 kg",
              altura: "1,1 m",
              ataque: 76,
              defesa: 75,
              nivel: 36
          },
          {
              nome: "Jigglypuff",
              tipo1: "Normal",
              tipo2: "Fada",
              peso: "5,5 kg",
              altura: "0,5 m",
              ataque: 45,
              defesa: 20,
              nivel: 5
          },
          {
              nome: "Wigglytuff",
              tipo1: "Normal",
              tipo2: "Fada",
              peso: "12,0 kg",
              altura: "1,0 m",
              ataque: 70,
              defesa: 45,
              nivel: 36
          },
          {
              nome: "Zubat",
              tipo1: "Veneno",
              tipo2: "Voador",
              peso: "7,5 kg",
              altura: "0,8 m",
              ataque: 45,
              defesa: 35,
              nivel: 5
          },
          {
              nome: "Golbat",
              tipo1: "Veneno",
              tipo2: "Voador",
              peso: "55,0 kg",
              altura: "1,6 m",
              ataque: 80,
              defesa: 70,
              nivel: 22
          },
          {
              nome: "Oddish",
              tipo1: "Planta",
              tipo2: "Veneno",
              peso: "5,4 kg",
              altura: "0,5 m",
              ataque: 50,
              defesa: 55,
              nivel: 5
          },
          {
              nome: "Gloom",
              tipo1: "Planta",
              tipo2: "Veneno",
              peso: "8,6 kg",
              altura: "0,8 m",
              ataque: 65,
              defesa: 70,
              nivel: 21
          },
          {
              nome: "Vileplume",
              tipo1: "Planta",
              tipo2: "Veneno",
              peso: "18,6 kg",
              altura: "1,2 m",
              ataque: 80,
              defesa: 85,
              nivel: 36
          },
          {
              nome: "Paras",
              tipo1: "Inseto",
              tipo2: "Planta",
              peso: "5,4 kg",
              altura: "0,3 m",
              ataque: 70,
              defesa: 55,
              nivel: 5
          },
          {
              nome: "Parasect",
              tipo1: "Inseto",
              tipo2: "Planta",
              peso: "29,5 kg",
              altura: "1,0 m",
              ataque: 95,
              defesa: 80,
              nivel: 24
          },
          {
              nome: "Venonat",
              tipo1: "Inseto",
              tipo2: "Veneno",
              peso: "30,0 kg",
              altura: "1,0 m",
              ataque: 55,
              defesa: 50,
              nivel: 5
          },
          {
              nome: "Venomoth",
              tipo1: "Inseto",
              tipo2: "Veneno",
              peso: "12,5 kg",
              altura: "1,5 m",
              ataque: 90,
              defesa: 75,
              nivel: 31
          },
          {
              nome: "Diglett",
              tipo1: "Terra",
              tipo2: null,
              peso: "0,8 kg",
              altura: "0,2 m",
              ataque: 55,
              defesa: 25,
              nivel: 5
          },
          {
              nome: "Dugtrio",
              tipo1: "Terra",
              tipo2: null,
              peso: "33,3 kg",
              altura: "0,7 m",
              ataque: 80,
              defesa: 50,
              nivel: 26
          },
          {
              nome: "Meowth",
              tipo1: "Normal",
              tipo2: null,
              peso: "4,2 kg",
              altura: "0,4 m",
              ataque: 45,
              defesa: 35,
              nivel: 5
          },
          {
              nome: "Persian",
              tipo1: "Normal",
              tipo2: null,
              peso: "32,0 kg",
              altura: "1,0 m",
              ataque: 70,
              defesa: 60,
              nivel: 28
          },
          {
              nome: "Psyduck",
              tipo1: "Água",
              tipo2: null,
              peso: "19,6 kg",
              altura: "0,8 m",
              ataque: 52,
              defesa: 48,
              nivel: 5
          },
          {
              nome: "Golduck",
              tipo1: "Água",
              tipo2: null,
              peso: "76,6 kg",
              altura: "1,7 m",
              ataque: 82,
              defesa: 78,
              nivel: 33
          },
          {
              nome: "Mankey",
              tipo1: "Lutador",
              tipo2: null,
              peso: "28,0 kg",
              altura: "0,5 m",
              ataque: 80,
              defesa: 35,
              nivel: 5
          },
          {
              nome: "Primeape",
              tipo1: "Lutador",
              tipo2: null,
              peso: "32,0 kg",
              altura: "1,0 m",
              ataque: 105,
              defesa: 60,
              nivel: 28
          },
          {
              nome: "Growlithe",
              tipo1: "Fogo",
              tipo2: null,
              peso: "19,0 kg",
              altura: "0,7 m",
              ataque: 70,
              defesa: 45,
              nivel: 5
          },
          {
              nome: "Arcanine",
              tipo1: "Fogo",
              tipo2: null,
              peso: "155,0 kg",
              altura: "1,9 m",
              ataque: 110,
              defesa: 80,
              nivel: 36
          },
          {
              nome: "Poliwag",
              tipo1: "Água",
              tipo2: null,
              peso: "12,4 kg",
              altura: "0,6 m",
              ataque: 50,
              defesa: 40,
              nivel: 5
          },
          {
              nome: "Poliwhirl",
              tipo1: "Água",
              tipo2: null,
              peso: "20,0 kg",
              altura: "1,0 m",
              ataque: 65,
              defesa: 65,
              nivel: 25
          },
          {
              nome: "Poliwrath",
              tipo1: "Água",
              tipo2: "Lutador",
              peso: "54,0 kg",
              altura: "1,3 m",
              ataque: 95,
              defesa: 95,
              nivel: 36
          },
          {
              nome: "Abra",
              tipo1: "Psíquico",
              tipo2: null,
              peso: "19,5 kg",
              altura: "0,9 m",
              ataque: 20,
              defesa: 15,
              nivel: 5
          },
        {
            nome: "Kadabra",
            tipo1: "Psíquico",
            tipo2: null,
            peso: "56,5 kg",
            altura: "1,3 m",
            ataque: 35,
            defesa: 30,
            nivel: 16
        },
        {
            nome: "Alakazam",
            tipo1: "Psíquico",
            tipo2: null,
            peso: "48,0 kg",
            altura: "1,5 m",
            ataque: 50,
            defesa: 45,
            nivel: 36
        },
        {
            nome: "Machop",
            tipo1: "Lutador",
            tipo2: null,
            peso: "19,5 kg",
            altura: "0,8 m",
            ataque: 80,
            defesa: 50,
            nivel: 5
        },
        {
            nome: "Machoke",
            tipo1: "Lutador",
            tipo2: null,
            peso: "70,5 kg",
            altura: "1,5 m",
            ataque: 100,
            defesa: 70,
            nivel: 28
        },
        {
            nome: "Machamp",
            tipo1: "Lutador",
            tipo2: null,
            peso: "130,0 kg",
            altura: "1,6 m",
            ataque: 130,
            defesa: 80,
            nivel: 36
        },
        {
            nome: "Bellsprout",
            tipo1: "Planta",
            tipo2: "Veneno",
            peso: "4,0 kg",
            altura: "0,7 m",
            ataque: 75,
            defesa: 35,
            nivel: 5
        },
        {
            nome: "Weepinbell",
            tipo1: "Planta",
            tipo2: "Veneno",
            peso: "6,4 kg",
            altura: "1,0 m",
            ataque: 90,
            defesa: 50,
            nivel: 21
        },
        {
            nome: "Victreebel",
            tipo1: "Planta",
            tipo2: "Veneno",
            peso: "15,5 kg",
            altura: "1,7 m",
            ataque: 105,
            defesa: 65,
            nivel: 36
        },
        {
            nome: "Tentacool",
            tipo1: "Água",
            tipo2: "Veneno",
            peso: "45,5 kg",
            altura: "0,9 m",
            ataque: 40,
            defesa: 35,
            nivel: 5
        },
        {
            nome: "Tentacruel",
            tipo1: "Água",
            tipo2: "Veneno",
            peso: "55,0 kg",
            altura: "1,6 m",
            ataque: 70,
            defesa: 65,
            nivel: 30
        },
        {
            nome: "Geodude",
            tipo1: "Pedra",
            tipo2: "Terra",
            peso: "20,0 kg",
            altura: "0,4 m",
            ataque: 80,
            defesa: 100,
            nivel: 5
        },
        {
            nome: "Graveler",
            tipo1: "Pedra",
            tipo2: "Terra",
            peso: "105,0 kg",
            altura: "1,0 m",
            ataque: 95,
            defesa: 115,
            nivel: 25
        },
        {
            nome: "Golem",
            tipo1: "Pedra",
            tipo2: "Terra",
            peso: "300,0 kg",
            altura: "1,4 m",
            ataque: 120,
            defesa: 130,
            nivel: 40
        },
        {
            nome: "Ponyta",
            tipo1: "Fogo",
            tipo2: null,
            peso: "30,0 kg",
            altura: "1,0 m",
            ataque: 85,
            defesa: 55,
            nivel: 5
        },
        {
            nome: "Rapidash",
            tipo1: "Fogo",
            tipo2: null,
            peso: "95,0 kg",
            altura: "1,7 m",
            ataque: 100,
            defesa: 70,
            nivel: 40
        },
        {
            nome: "Slowpoke",
            tipo1: "Água",
            tipo2: "Psíquico",
            peso: "36,0 kg",
            altura: "1,2 m",
            ataque: 65,
            defesa: 65,
            nivel: 5
        },
        {
            nome: "Slowbro",
            tipo1: "Água",
            tipo2: "Psíquico",
            peso: "78,5 kg",
            altura: "1,6 m",
            ataque: 75,
            defesa: 110,
            nivel: 37
        },
        {
            nome: "Magnemite",
            tipo1: "Elétrico",
            tipo2: "Aço",
            peso: "6,0 kg",
            altura: "0,3 m",
            ataque: 35,
            defesa: 70,
            nivel: 5
        },
        {
            nome: "Magneton",
            tipo1: "Elétrico",
            tipo2: "Aço",
            peso: "60,0 kg",
            altura: "1,0 m",
            ataque: 60,
            defesa: 95,
            nivel: 30
        },
        {
            nome: "Farfetch'd",
            tipo1: "Normal",
            tipo2: "Voador",
            peso: "15,0 kg",
            altura: "0,8 m",
            ataque: 65,
            defesa: 55,
            nivel: 5
        },
        {
            nome: "Doduo",
            tipo1: "Normal",
            tipo2: "Voador",
            peso: "39,2 kg",
            altura: "1,4 m",
            ataque: 85,
            defesa: 45,
            nivel: 5
        },
        {
            nome: "Dodrio",
            tipo1: "Normal",
            tipo2: "Voador",
            peso: "85,2 kg",
            altura: "1,8 m",
            ataque: 110,
            defesa: 70,
            nivel: 31
        },
        {
            nome: "Seel",
            tipo1: "Água",
            tipo2: null,
            peso: "90,0 kg",
            altura: "1,1 m",
            ataque: 45,
            defesa: 55,
            nivel: 5
        },
        {
            nome: "Dewgong",
            tipo1: "Água",
            tipo2: "Gelo",
            peso: "120,0 kg",
            altura: "1,7 m",
            ataque: 70,
            defesa: 80,
            nivel: 34
        },
        {
            nome: "Grimer",
            tipo1: "Veneno",
            tipo2: null,
            peso: "30,0 kg",
            altura: "0,9 m",
            ataque: 80,
            defesa: 50,
            nivel: 5
        },
        {
            nome: "Muk",
            tipo1: "Veneno",
            tipo2: null,
            peso: "30,0 kg",
            altura: "1,2 m",
            ataque: 105,
            defesa: 75,
            nivel: 38
        },
        {
            nome: "Shellder",
            tipo1: "Água",
            tipo2: null,
            peso: "4,0 kg",
            altura: "0,3 m",
            ataque: 65,
            defesa: 100,
            nivel: 5
        },
        {
            nome: "Cloyster",
            tipo1: "Água",
            tipo2: "Gelo",
            peso: "132,5 kg",
            altura: "1,5 m",
            ataque: 95,
            defesa: 180,
            nivel: 36
        },
        {
            nome: "Gastly",
            tipo1: "Fantasma",
            tipo2: "Veneno",
            peso: "0,1 kg",
            altura: "1,3 m",
            ataque: 35,
            defesa: 30,
            nivel: 5
        },
        {
            nome: "Haunter",
            tipo1: "Fantasma",
            tipo2: "Veneno",
            peso: "0,1 kg",
            altura: "1,6 m",
            ataque: 50,
            defesa: 45,
            nivel: 25
        },
        {
          nome: "Gengar",
          tipo1: "Fantasma",
          tipo2: "Venenoso",
          peso: "40,5 kg",
          altura: "1,5 m",
          ataque: 65,
          defesa: 60,
          nivel: 5
      },
      {
          nome: "Onix",
          tipo1: "Pedra",
          tipo2: "Terra",
          peso: "210 kg",
          altura: "8,8 m",
          ataque: 45,
          defesa: 160,
          nivel: 5
      },
      {
          nome: "Drowzee",
          tipo1: "Psíquico",
          tipo2: null,
          peso: "32,4 kg",
          altura: "1,0 m",
          ataque: 48,
          defesa: 45,
          nivel: 5
      },
      {
          nome: "Hypno",
          tipo1: "Psíquico",
          tipo2: null,
          peso: "75,6 kg",
          altura: "1,6 m",
          ataque: 73,
          defesa: 70,
          nivel: 5
      },
      {
          nome: "Krabby",
          tipo1: "Água",
          tipo2: null,
          peso: "6,5 kg",
          altura: "0,4 m",
          ataque: 105,
          defesa: 90,
          nivel: 5
      },
      {
          nome: "Kingler",
          tipo1: "Água",
          tipo2: null,
          peso: "60,0 kg",
          altura: "1,3 m",
          ataque: 130,
          defesa: 115,
          nivel: 5
      },
      {
          nome: "Voltorb",
          tipo1: "Elétrico",
          tipo2: null,
          peso: "10,4 kg",
          altura: "0,5 m",
          ataque: 30,
          defesa: 50,
          nivel: 5
      },
      {
          nome: "Electrode",
          tipo1: "Elétrico",
          tipo2: null,
          peso: "66,6 kg",
          altura: "1,2 m",
          ataque: 50,
          defesa: 70,
          nivel: 5
      },
      {
          nome: "Exeggcute",
          tipo1: "Planta",
          tipo2: "Psíquico",
          peso: "2,5 kg",
          altura: "0,4 m",
          ataque: 40,
          defesa: 80,
          nivel: 5
      },
      {
          nome: "Exeggutor",
          tipo1: "Planta",
          tipo2: "Psíquico",
          peso: "120,0 kg",
          altura: "2,0 m",
          ataque: 95,
          defesa: 85,
          nivel: 5
      },
      {
          nome: "Cubone",
          tipo1: "Terra",
          tipo2: null,
          peso: "6,5 kg",
          altura: "0,4 m",
          ataque: 50,
          defesa: 95,
          nivel: 5
      },
      {
          nome: "Marowak",
          tipo1: "Terra",
          tipo2: null,
          peso: "45,0 kg",
          altura: "1,0 m",
          ataque: 80,
          defesa: 110,
          nivel: 5
      },
      {
          nome: "Hitmonlee",
          tipo1: "Lutador",
          tipo2: null,
          peso: "49,8 kg",
          altura: "1,5 m",
          ataque: 120,
          defesa: 53,
          nivel: 5
      },
      {
          nome: "Hitmonchan",
          tipo1: "Lutador",
          tipo2: null,
          peso: "50,2 kg",
          altura: "1,4 m",
          ataque: 105,
          defesa: 79,
          nivel: 5
      },
      {
          nome: "Lickitung",
          tipo1: "Normal",
          tipo2: null,
          peso: "65,5 kg",
          altura: "1,2 m",
          ataque: 55,
          defesa: 75,
          nivel: 5
      },
      {
          nome: "Koffing",
          tipo1: "Venenoso",
          tipo2: null,
          peso: "1,0 kg",
          altura: "0,6 m",
          ataque: 65,
          defesa: 95,
          nivel: 5
      },
      {
        nome: "Weezing",
        tipo1: "Veneno",
        peso: "9,5 kg",
        altura: "1,2 m",
        ataque: 90,
        defesa: 120,
        nivel: 50
      },
      {
        nome: "Rhyhorn",
        tipo1: "Solo",
        tipo2: "Pedra",
        peso: "115,0 kg",
        altura: "1,0 m",
        ataque: 85,
        defesa: 95,
        nivel: 42
      },
      {
        nome: "Rhydon",
        tipo1: "Solo",
        tipo2: "Pedra",
        peso: "120,0 kg",
        altura: "1,9 m",
        ataque: 130,
        defesa: 120,
        nivel: 67
      },
      {
        nome: "Chansey",
        tipo1: "Normal",
        peso: "34,6 kg",
        altura: "1,1 m",
        ataque: 5,
        defesa: 5,
        nivel: 80
      },
      {
        nome: "Tangela",
        tipo1: "Planta",
        peso: "35,0 kg",
        altura: "1,0 m",
        ataque: 55,
        defesa: 115,
        nivel: 40
      },
      {
        nome: "Kangaskhan",
        tipo1: "Normal",
        peso: "80,0 kg",
        altura: "2,2 m",
        ataque: 95,
        defesa: 80,
        nivel: 105
      },
      {
        nome: "Horsea",
        tipo1: "Água",
        peso: "8,0 kg",
        altura: "0,4 m",
        ataque: 40,
        defesa: 70,
        nivel: 40
      },
      {
        nome: "Seadra",
        tipo1: "Água",
        peso: "25,0 kg",
        altura: "1,2 m",
        ataque: 65,
        defesa: 95,
        nivel: 55
      },
      {
        nome: "Goldeen",
        tipo1: "Água",
        peso: "15,0 kg",
        altura: "0,6 m",
        ataque: 67,
        defesa: 60,
        nivel: 33
      },
      {
        nome: "Seaking",
        tipo1: "Água",
        peso: "39,0 kg",
        altura: "1,3 m",
        ataque: 92,
        defesa: 65,
        nivel: 63
      },
      {
        nome: "Staryu",
        tipo1: "Água",
        peso: "34,5 kg",
        altura: "0,8 m",
        ataque: 45,
        defesa: 55,
        nivel: 30
      },
      {
        nome: "Starmie",
        tipo1: "Água",
        tipo2: "Psíquico",
        peso: "80,0 kg",
        altura: "1,1 m",
        ataque: 75,
        defesa: 85,
        nivel: 60
      },
      {
        nome: "Mr. Mime",
        tipo1: "Psíquico",
        tipo2: "Fada",
        peso: "54,5 kg",
        altura: "1,3 m",
        ataque: 45,
        defesa: 65,
        nivel: 40
      },
      {
        nome: "Scyther",
        tipo1: "Inseto",
        tipo2: "Voador",
        peso: "56,0 kg",
        altura: "1,5 m",
        ataque: 110,
        defesa: 80,
        nivel: 40
      },
      {
        nome: "Jynx",
        tipo1: "Gelo",
        tipo2: "Psíquico",
        peso: "40,6 kg",
        altura: "1,4 m",
        ataque: 50,
        defesa: 35,
        nivel: 50
      },
      {
        nome: "Electabuzz",
        tipo1: "Elétrico",
        peso: "30,0 kg",
        altura: "1,1 m",
        ataque: 83,
        defesa: 57,
        nivel: 50
      },
      {
        nome: "Magmar",
        tipo1: "Fogo",
        peso: "44,5 kg",
        altura: "1,3 m",
        ataque: 95,
        defesa: 57,
        nivel: 50
      },
      {
        nome: "Pinsir",
        tipo1: "Inseto",
        peso: "55,0 kg",
        altura: "1,5 m",
        ataque: 125,
        defesa: 100,
        nivel: 50
      },
      {
        nome: "Tauros",
        tipo1: "Normal",
        peso: "88,4 kg",
        altura: "1,4 m",
        ataque: 100,
        defesa: 95,
        nivel: 75
      },
      {
        nome: "Magikarp",
        tipo1: "Água",
        peso: "10,0 kg",
        altura: "0,9 m",
        ataque: 10,
        defesa: 55,
        nivel: 20
      },
      {
        nome: "Gyarados",
        tipo1: "Água",
        tipo2: "Voador",
        peso: "235,0 kg",
        altura: "6,5 m",
        ataque: 125,
        defesa: 79,
        nivel: 100
      },
      {
        nome: "Lapras",
        tipo1: "Água",
        tipo2: "Gelo",
        peso: "220,0 kg",
        altura: "2,5 m",
        ataque: 85,
        defesa: 80,
        nivel: 70
      },
      {
        nome: "Ditto",
        tipo1: "Normal",
        peso: "4,0 kg",
        altura: "0,3 m",
        ataque: 48,
        defesa: 48,
        nivel: 48
      },
      {
        nome: "Eevee",
        tipo1: "Normal",
        peso: "6,5 kg",
        altura: "0,3 m",
        ataque: 55,
        defesa: 50,
        nivel: 10
      },
      {
        nome: "Vaporeon",
        tipo1: "Água",
        peso: "29,0 kg",
        altura: "1,0 m",
        ataque: 65,
        defesa: 60,
        nivel: 50
      },
      {
        nome: "Jolteon",
        tipo1: "Elétrico",
        peso: "24,5 kg",
        altura: "0,8 m",
        ataque: 65,
        defesa: 60,
        nivel: 50
      },
      {
        nome: "Flareon",
        tipo1: "Fogo",
        peso: "25,0 kg",
        altura: "0,9 m",
        ataque: 130,
        defesa: 60,
        nivel: 50
      }
    ]
    findAll(){
    var json = JSON.stringify(listaPokemon);
    return json
}

 findByType(type){
    var json=""
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].tipo1==type || listaPokemon[i].tipo2==type){
            json+=listaPokemon[i]
        }
    }
    return json
}
 findOneByName(nome){
    var json=""
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].nome==nome){
            json+=listaPokemon[i]
            return json
        }
    }
    return "Não encontrado :("
}

 insertPokemon(nome, tipo1, tipo2, peso, altura){
    listaPokemon.push({nome, tipo1, tipo2, peso, altura})
    var json = JSON.stringify({nome, tipo1, tipo2, peso, altura});
    return json
}

 updatePokemon(nome, tipo1, tipo2){
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].nome==nome){
            listaPokemon[i].tipo1=tipo1
            listaPokemon[i].tipo2=tipo2
            var json = JSON.stringify(listaPokemon[i]);
            return json
        }
    }
}
 deletePokemon(nome){
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].nome==nome){
            var json = JSON.stringify(listaPokemon[i])
            listaPokemon[i].pop()
            return json
        }
    }
 }


 verifyAnswer(answer, rightAnswer){
    if(answer==rightAnswer){
        return true
    }else{
        return false
    }
}


}