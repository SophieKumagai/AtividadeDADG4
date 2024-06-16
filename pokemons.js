const listaPokemon = [
    {
      nome: "Bulbasaur",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "6,9 kg",
      altura: "0,7 m"
    },
    {
      nome: "Ivysaur",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "13,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Venusaur",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "100,0 kg",
      altura: "2,0 m"
    },
    {
      nome: "Charmander",
      tipo1: "Fogo",
      tipo2: null,
      peso: "8,5 kg",
      altura: "0,6 m"
    },
    {
      nome: "Charmeleon",
      tipo1: "Fogo",
      tipo2: null,
      peso: "19,0 kg",
      altura: "1,1 m"
    },
    {
      nome: "Charizard",
      tipo1: "Fogo",
      tipo2: "Voador",
      peso: "90,5 kg",
      altura: "1,7 m"
    },
    {
      nome: "Squirtle",
      tipo1: "Água",
      tipo2: null,
      peso: "9,0 kg",
      altura: "0,5 m"
    },
    {
      nome: "Wartortle",
      tipo1: "Água",
      tipo2: null,
      peso: "22,5 kg",
      altura: "1,0 m"
    },
    {
      nome: "Blastoise",
      tipo1: "Água",
      tipo2: null,
      peso: "85,5 kg",
      altura: "1,6 m"
    },
    {
      nome: "Caterpie",
      tipo1: "Inseto",
      tipo2: null,
      peso: "2,9 kg",
      altura: "0,3 m"
    },
    {
      nome: "Metapod",
      tipo1: "Inseto",
      tipo2: null,
      peso: "9,9 kg",
      altura: "0,7 m"
    },
    {
      nome: "Butterfree",
      tipo1: "Inseto",
      tipo2: "Voador",
      peso: "32,0 kg",
      altura: "1,1 m"
    },
    {
      nome: "Weedle",
      tipo1: "Inseto",
      tipo2: "Veneno",
      peso: "3,2 kg",
      altura: "0,3 m"
    },
    {
      nome: "Kakuna",
      tipo1: "Inseto",
      tipo2: "Veneno",
      peso: "10,0 kg",
      altura: "0,6 m"
    },
    {
      nome: "Beedrill",
      tipo1: "Inseto",
      tipo2: "Veneno",
      peso: "29,5 kg",
      altura: "1,0 m"
    },
    {
      nome: "Pidgey",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "1,8 kg",
      altura: "0,3 m"
    },
    {
      nome: "Pidgeotto",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "30,0 kg",
      altura: "1,1 m"
    },
    {
      nome: "Pidgeot",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "39,5 kg",
      altura: "1,5 m"
    },
    {
      nome: "Rattata",
      tipo1: "Normal",
      tipo2: null,
      peso: "3,5 kg",
      altura: "0,3 m"
    },
    {
      nome: "Raticate",
      tipo1: "Normal",
      tipo2: null,
      peso: "18,5 kg",
      altura: "0,7 m"
    },
    {
      nome: "Spearow",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "2,0 kg",
      altura: "0,3 m"
    },
    {
      nome: "Fearow",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "38,0 kg",
      altura: "1,2 m"
    },
    {
      nome: "Ekans",
      tipo1: "Veneno",
      tipo2: null,
      peso: "6,9 kg",
      altura: "2,0 m"
    },
    {
      nome: "Arbok",
      tipo1: "Veneno",
      tipo2: null,
      peso: "65,0 kg",
      altura: "3,5 m"
    },
    {
      nome: "Pikachu",
      tipo1: "Elétrico",
      tipo2: null,
      peso: "6,0 kg",
      altura: "0,4 m"
    },
    {
      nome: "Raichu",
      tipo1: "Elétrico",
      tipo2: null,
      peso: "30,0 kg",
      altura: "0,8 m"
    },
    {
      nome: "Sandshrew",
      tipo1: "Terra",
      tipo2: null,
      peso: "12,0 kg",
      altura: "0,6 m"
    },
    {
      nome: "Sandslash",
      tipo1: "Terra",
      tipo2: null,
      peso: "29,5 kg",
      altura: "1,0 m"
    },
    {
      nome: "Nidoran♀",
      tipo1: "Venenoso",
      tipo2: null,
      peso: "7,0 kg",
      altura: "0,4 m"
    },
    {
      nome: "Nidorina",
      tipo1: "Venenoso",
      tipo2: null,
      peso: "20,0 kg",
      altura: "0,8 m"
    },
    {
      nome: "Nidoqueen",
      tipo1: "Venenoso",
      tipo2: "Terra",
      peso: "60,0 kg",
      altura: "1,3 m"
    },
    {
      nome: "Nidoran♂",
      tipo1: "Venenoso",
      tipo2: null,
      peso: "9,0 kg",
      altura: "0,5 m"
    },
    {
      nome: "Nidorino",
      tipo1: "Venenoso",
      tipo2: null,
      peso: "19,5 kg",
      altura: "0,9 m"
    },
    {
      nome: "Nidoking",
      tipo1: "Venenoso",
      tipo2: "Terra",
      peso: "62,0 kg",
      altura: "1,4 m"
    },
    {
      nome: "Clefairy",
      tipo1: "Fada",
      tipo2: null,
      peso: "7,5 kg",
      altura: "0,6 m"
    },
    {
      nome: "Clefable",
      tipo1: "Fada",
      tipo2: null,
      peso: "40,0 kg",
      altura: "1,3 m"
    },
    {
      nome: "Vulpix",
      tipo1: "Fogo",
      tipo2: null,
      peso: "9,9 kg",
      altura: "0,6 m"
    },
    {
      nome: "Ninetales",
      tipo1: "Fogo",
      tipo2: null,
      peso: "19,9 kg",
      altura: "1,1 m"
    },
    {
      nome: "Jigglypuff",
      tipo1: "Normal",
      tipo2: "Fada",
      peso: "5,5 kg",
      altura: "0,5 m"
    },
    {
      nome: "Wigglytuff",
      tipo1: "Normal",
      tipo2: "Fada",
      peso: "12,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Zubat",
      tipo1: "Voador",
      tipo2: "Veneno",
      peso: "7,5 kg",
      altura: "0,8 m"
    },
    {
      nome: "Golbat",
      tipo1: "Voador",
      tipo2: "Veneno",
      peso: "55,0 kg",
      altura: "1,6 m"
    },
    {
      nome: "Oddish",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "5,4 kg",
      altura: "0,5 m"
    },
    {
      nome: "Gloom",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "8,6 kg",
      altura: "0,8 m"
    },
    {
      nome: "Vileplume",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "18,6 kg",
      altura: "1,2 m"
    },
    {
      nome: "Paras",
      tipo1: "Inseto",
      tipo2: "Planta",
      peso: "5,4 kg",
      altura: "0,3 m"
    },
    {
      nome: "Parasect",
      tipo1: "Inseto",
      tipo2: "Planta",
      peso: "29,5 kg",
      altura: "1,0 m"
    },
    {
      nome: "Venonat",
      tipo1: "Inseto",
      tipo2: "Veneno",
      peso: "30,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Venomoth",
      tipo1: "Inseto",
      tipo2: "Veneno",
      peso: "12,5 kg",
      altura: "1,5 m"
    },
    {
      nome: "Diglett",
      tipo1: "Terra",
      tipo2: null,
      peso: "0,8 kg",
      altura: "0,2 m"
    },
    {
      nome: "Dugtrio",
      tipo1: "Terra",
      tipo2: null,
      peso: "33,3 kg",
      altura: "0,7 m"
    },
    {
      nome: "Meowth",
      tipo1: "Normal",
      tipo2: null,
      peso: "4,2 kg",
      altura: "0,4 m"
    },
    {
      nome: "Persian",
      tipo1: "Normal",
      tipo2: null,
      peso: "32,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Psyduck",
      tipo1: "Água",
      tipo2: null,
      peso: "19,6 kg",
      altura: "0,8 m"
    },
    {
      nome: "Golduck",
      tipo1: "Água",
      tipo2: null,
      peso: "76,6 kg",
      altura: "1,7 m"
    },
    {
      nome: "Mankey",
      tipo1: "Lutador",
      tipo2: null,
      peso: "28,0 kg",
      altura: "0,5 m"
    },
    {
      nome: "Primeape",
      tipo1: "Lutador",
      tipo2: null,
      peso: "32,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Growlithe",
      tipo1: "Fogo",
      tipo2: null,
      peso: "19,0 kg",
      altura: "0,7 m"
    },
    {
      nome: "Arcanine",
      tipo1: "Fogo",
      tipo2: null,
      peso: "155,0 kg",
      altura: "1,9 m"
    },
    {
      nome: "Poliwag",
      tipo1: "Água",
      tipo2: null,
      peso: "12,4 kg",
      altura: "0,6 m"
    },
    {
      nome: "Poliwhirl",
      tipo1: "Água",
      tipo2: null,
      peso: "20,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Poliwrath",
      tipo1: "Água",
      tipo2: "Lutador",
      peso: "54,0 kg",
      altura: "1,3 m"
    },
    {
      nome: "Abra",
      tipo1: "Psíquico",
      tipo2: null,
      peso: "19,5 kg",
      altura: "0,9 m"
    },
    {
      nome: "Kadabra",
      tipo1: "Psíquico",
      tipo2: null,
      peso: "56,5 kg",
      altura: "1,3 m"
    },
    {
      nome: "Alakazam",
      tipo1: "Psíquico",
      tipo2: null,
      peso: "48,0 kg",
      altura: "1,5 m"
    },
    {
      nome: "Machop",
      tipo1: "Lutador",
      tipo2: null,
      peso: "19,5 kg",
      altura: "0,8 m"
    },
    {
      nome: "Machoke",
      tipo1: "Lutador",
      tipo2: null,
      peso: "70,5 kg",
      altura: "1,5 m"
    },
    {
      nome: "Machamp",
      tipo1: "Lutador",
      tipo2: null,
      peso: "130,0 kg",
      altura: "1,6 m"
    },
    {
      nome: "Bellsprout",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "4,0 kg",
      altura: "0,7 m"
    },
    {
      nome: "Weepinbell",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "6,4 kg",
      altura: "1,0 m"
    },
    {
      nome: "Victreebel",
      tipo1: "Planta",
      tipo2: "Veneno",
      peso: "15,5 kg",
      altura: "1,7 m"
    },
    {
      nome: "Tentacool",
      tipo1: "Água",
      tipo2: "Veneno",
      peso: "45,5 kg",
      altura: "0,9 m"
    },
    {
      nome: "Tentacruel",
      tipo1: "Água",
      tipo2: "Veneno",
      peso: "55,0 kg",
      altura: "1,6 m"
    },
    {
      nome: "Geodude",
      tipo1: "Pedra",
      tipo2: "Terra",
      peso: "20,0 kg",
      altura: "0,4 m"
    },
    {
      nome: "Graveler",
      tipo1: "Pedra",
      tipo2: "Terra",
      peso: "105,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Golem",
      tipo1: "Pedra",
      tipo2: "Terra",
      peso: "300,0 kg",
      altura: "1,4 m"
    },
    {
      nome: "Ponyta",
      tipo1: "Fogo",
      tipo2: null,
      peso: "30,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Rapidash",
      tipo1: "Fogo",
      tipo2: null,
      peso: "95,0 kg",
      altura: "1,7 m"
    },
    {
      nome: "Slowpoke",
      tipo1: "Água",
      tipo2: "Psíquico",
      peso: "36,0 kg",
      altura: "1,2 m"
    },
    {
      nome: "Slowbro",
      tipo1: "Água",
      tipo2: "Psíquico",
      peso: "78,5 kg",
      altura: "1,6 m"
    },
    {
      nome: "Magnemite",
      tipo1: "Elétrico",
      tipo2: "Aço",
      peso: "6,0 kg",
      altura: "0,3 m"
    },
    {
      nome: "Magneton",
      tipo1: "Elétrico",
      tipo2: "Aço",
      peso: "60,0 kg",
      altura: "1,0 m"
    },
    {
      nome: "Farfetch'd",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "15,0 kg",
      altura: "0,8 m"
    },
    {
      nome: "Doduo",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "39,2 kg",
      altura: "1,4 m"
    },
    {
      nome: "Dodrio",
      tipo1: "Normal",
      tipo2: "Voador",
      peso: "85,2 kg",
      altura: "1,8 m"
    },
    {
      nome: "Seel",
      tipo1: "Água",
      tipo2: null,
      peso: "90,0 kg",
      altura: "1,1 m"
    },
    {
      nome: "Dewgong",
      tipo1: "Água",
      tipo2: "Gelo",
      peso: "120,0 kg",
      altura: "1,7 m"
    },
    {
      nome: "Grimer",
      tipo1: "Venenoso",
      tipo2: null,
      peso: "30,0 kg",
      altura: "0,9 m"
    },
    {
      nome: "Muk",
      tipo1: "Venenoso",
      tipo2: null,
      peso: "30,0 kg",
      altura: "1,2 m"
    },
    {
      nome: "Shellder",
      tipo1: "Água",
      tipo2: null,
      peso: "4,0 kg",
      altura: "0,3 m"
    },
    {
      nome: "Cloyster",
      tipo1: "Água",
      tipo2: "Gelo",
      peso: "132,5 kg",
      altura: "1,5 m"
    },
    {
        nome: "Gastly",
        tipo1: "Fantasma",
        tipo2: "Veneno",
        peso: "0,1 kg",
        altura: "1,3 m"
      },
      {
        nome: "Haunter",
        tipo1: "Fantasma",
        tipo2: "Veneno",
        peso: "0,1 kg",
        altura: "1,6 m"
      },
      {
        nome: "Gengar",
        tipo1: "Fantasma",
        tipo2: "Veneno",
        peso: "40,5 kg",
        altura: "1,5 m"
      },
      {
        nome: "Onix",
        tipo1: "Pedra",
        tipo2: "Terra",
        peso: "210,0 kg",
        altura: "8,8 m"
      },
      {
        nome: "Drowzee",
        tipo1: "Psíquico",
        tipo2: null,
        peso: "32,4 kg",
        altura: "1,0 m"
      },
      {
        nome: "Hypno",
        tipo1: "Psíquico",
        tipo2: null,
        peso: "75,6 kg",
        altura: "1,6 m"
      },
      {
        nome: "Krabby",
        tipo1: "Água",
        tipo2: null,
        peso: "6,5 kg",
        altura: "0,4 m"
      },
      {
        nome: "Kingler",
        tipo1: "Água",
        tipo2: null,
        peso: "60,0 kg",
        altura: "1,3 m"
      },
      {
        nome: "Voltorb",
        tipo1: "Elétrico",
        tipo2: null,
        peso: "10,4 kg",
        altura: "0,5 m"
      },
      {
        nome: "Electrode",
        tipo1: "Elétrico",
        tipo2: null,
        peso: "66,6 kg",
        altura: "1,2 m"
      },
      {
        nome: "Exeggcute",
        tipo1: "Planta",
        tipo2: "Psíquico",
        peso: "2,5 kg",
        altura: "0,4 m"
      },
      {
        nome: "Exeggutor",
        tipo1: "Planta",
        tipo2: "Psíquico",
        peso: "120,0 kg",
        altura: "2,0 m"
      },
        {
          nome: "Cubone",
          tipo1: "Terra",
          tipo2: null,
          peso: "6,5 kg",
          altura: "0,4 m"
        },
        {
          nome: "Marowak",
          tipo1: "Terra",
          tipo2: null,
          peso: "45,0 kg",
          altura: "1,0 m"
        },
        {
          nome: "Hitmonlee",
          tipo1: "Lutador",
          tipo2: null,
          peso: "49,8 kg",
          altura: "1,5 m"
        },
        {
          nome: "Hitmonchan",
          tipo1: "Lutador",
          tipo2: null,
          peso: "50,2 kg",
          altura: "1,4 m"
        },
        {
          nome: "Lickitung",
          tipo1: "Normal",
          tipo2: null,
          peso: "65,5 kg",
          altura: "1,2 m"
        },
        {
          nome: "Koffing",
          tipo1: "Venenoso",
          tipo2: null,
          peso: "1,0 kg",
          altura: "0,6 m"
        },
        {
          nome: "Weezing",
          tipo1: "Venenoso",
          tipo2: null,
          peso: "9,5 kg",
          altura: "1,2 m"
        },
        {
          nome: "Rhyhorn",
          tipo1: "Terra",
          tipo2: "Pedra",
          peso: "115,0 kg",
          altura: "1,0 m"
        },
        {
          nome: "Rhydon",
          tipo1: "Terra",
          tipo2: "Pedra",
          peso: "120,0 kg",
          altura: "1,9 m"
        },
        {
          nome: "Chansey",
          tipo1: "Normal",
          tipo2: null,
          peso: "34,6 kg",
          altura: "1,1 m"
        },
        {
          nome: "Tangela",
          tipo1: "Planta",
          tipo2: null,
          peso: "35,0 kg",
          altura: "1,0 m"
        },
        {
          nome: "Kangaskhan",
          tipo1: "Normal",
          tipo2: null,
          peso: "80,0 kg",
          altura: "2,2 m"
        },
        {
          nome: "Horsea",
          tipo1: "Água",
          tipo2: null,
          peso: "8,0 kg",
          altura: "0,4 m"
        },
        {
          nome: "Seadra",
          tipo1: "Água",
          tipo2: null,
          peso: "25,0 kg",
          altura: "1,2 m"
        },
        {
          nome: "Goldeen",
          tipo1: "Água",
          tipo2: null,
          peso: "15,0 kg",
          altura: "0,6 m"
        },
        {
          nome: "Seaking",
          tipo1: "Água",
          tipo2: null,
          peso: "39,0 kg",
          altura: "1,3 m"
        },
        {
          nome: "Staryu",
          tipo1: "Água",
          tipo2: null,
          peso: "34,5 kg",
          altura: "0,8 m"
        },
        {
          nome: "Starmie",
          tipo1: "Água",
          tipo2: "Psíquico",
          peso: "80,0 kg",
          altura: "1,1 m"
        },
        {
          nome: "Mr. Mime",
          tipo1: "Psíquico",
          tipo2: "Fada",
          peso: "54,5 kg",
          altura: "1,3 m"
        },
        {
          nome: "Scyther",
          tipo1: "Inseto",
          tipo2: "Voador",
          peso: "56,0 kg",
          altura: "1,5 m"
        },
        {
          nome: "Jynx",
          tipo1: "Gelo",
          tipo2: "Psíquico",
          peso: "40,6 kg",
          altura: "1,4 m"
        },
        {
          nome: "Electabuzz",
          tipo1: "Elétrico",
          tipo2: null,
          peso: "30,0 kg",
          altura: "1,1 m"
        },
        {
          nome: "Magmar",
          tipo1: "Fogo",
          tipo2: null,
          peso: "44,5 kg",
          altura: "1,3 m"
        },
        {
          nome: "Pinsir",
          tipo1: "Inseto",
          tipo2: null,
          peso: "55,0 kg",
          altura: "1,5 m"
        },
        {
          nome: "Tauros",
          tipo1: "Normal",
          tipo2: null,
          peso: "88,4 kg",
          altura: "1,4 m"
        },
        {
          nome: "Magikarp",
          tipo1: "Água",
          tipo2: null,
          peso: "10,0 kg",
          altura: "0,9 m"
        },
        {
          nome: "Gyarados",
          tipo1: "Água",
          tipo2: "Voador",
          peso: "235,0 kg",
          altura: "6,5 m"
        },
        {
          nome: "Lapras",
          tipo1: "Água",
          tipo2: "Gelo",
          peso: "220,0 kg",
          altura: "2,5 m"
        },
        {
          nome: "Ditto",
          tipo1: "Normal",
          tipo2: null,
          peso: "4,0 kg",
          altura: "0,3 m"
        },
        {
          nome: "Eevee",
          tipo1: "Normal",
          tipo2: null,
          peso: "6,5 kg",
          altura: "0,3 m"
        },
        {
          nome: "Vaporeon",
          tipo1: "Água",
          tipo2: null,
          peso: "29,0 kg",
          altura: "1,0 m"
        },
        {
            nome: "Jolteon",
            tipo1: "Elétrico",
            tipo2: null,
            peso: "24,5 kg",
            altura: "0,8 m"
          },
          {
            nome: "Flareon",
            tipo1: "Fogo",
            tipo2: null,
            peso: "25,0 kg",
            altura: "0,9 m"
          },
          {
            nome: "Porygon",
            tipo1: "Normal",
            tipo2: null,
            peso: "36,5 kg",
            altura: "0,8 m"
          },
          {
            nome: "Omanyte",
            tipo1: "Pedra",
            tipo2: "Água",
            peso: "7,5 kg",
            altura: "0,4 m"
          },
          {
            nome: "Omastar",
            tipo1: "Pedra",
            tipo2: "Água",
            peso: "35,0 kg",
            altura: "1,0 m"
          },
          {
            nome: "Kabuto",
            tipo1: "Pedra",
            tipo2: "Água",
            peso: "11,5 kg",
            altura: "0,5 m"
          },
          {
            nome: "Kabutops",
            tipo1: "Pedra",
            tipo2: "Água",
            peso: "40,5 kg",
            altura: "1,3 m"
          },
          {
            nome: "Aerodactyl",
            tipo1: "Pedra",
            tipo2: "Voador",
            peso: "59,0 kg",
            altura: "1,8 m"
          },
          {
            nome: "Snorlax",
            tipo1: "Normal",
            tipo2: null,
            peso: "460,0 kg",
            altura: "2,1 m"
          },
          {
            nome: "Articuno",
            tipo1: "Gelo",
            tipo2: "Voador",
            peso: "55,4 kg",
            altura: "1,7 m"
          },
          {
            nome: "Zapdos",
            tipo1: "Elétrico",
            tipo2: "Voador",
            peso: "52,6 kg",
            altura: "1,6 m"
          },
          {
            nome: "Moltres",
            tipo1: "Fogo",
            tipo2: "Voador",
            peso: "60,0 kg",
            altura: "2,0 m"
          },
          {
            nome: "Dratini",
            tipo1: "Dragão",
            tipo2: null,
            peso: "3,3 kg",
            altura: "1,8 m"
          },
          {
            nome: "Dragonair",
            tipo1: "Dragão",
            tipo2: null,
            peso: "16,5 kg",
            altura: "4,0 m"
          },
          {
            nome: "Dragonite",
            tipo1: "Dragão",
            tipo2: "Voador",
            peso: "210,0 kg",
            altura: "2,2 m"
          },
          {
            nome: "Mewtwo",
            tipo1: "Psíquico",
            tipo2: null,
            peso: "122,0 kg",
            altura: "2,0 m"
          },
          {
            nome: "Mew",
            tipo1: "Psíquico",
            tipo2: null,
            peso: "4,0 kg",
            altura: "0,4 m"
          }
]