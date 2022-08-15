import { Collection } from './collections.types';

export const CollectionsSample: Collection[] = [
  {
    category: {
      id: 0o1,
      title: 'Wines',
      slug: 'wines',
      linkUrl: ''
    },
    products: [
      {
        _id: 0o11,
        name: 'San Telmo Malbec',
        imageUrl: '/images/san-telmo-malbec.png',
        brand: 'San Telmo',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        price: 165,
        quantity: 40,
        countInStock: 40,
        size: '750mL',
      },
      {
        _id: 0o12,
        name: 'Chacabuco Malbec',
        imageUrl: '/images/chacabuco-malbec.png',
        price: 200,
        brand: 'Chacabuco',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        quantity: 40,
        countInStock: 40,
        size: '750mL',
      },
      {
        _id: 0o13,
        quantity: 40,
        countInStock: 40,
        name: 'Dada Art',
        imageUrl: '/images/dada-art.jpg',
        price: 210,
        brand: 'Chacabuco',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o14,
        quantity: 40,
        countInStock: 40,
        name: 'Portillo Malbec',
        imageUrl: '/images/portillo-malbec.jpg',
        price: 220,
        brand: 'Portillo',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o15,
        quantity: 40,
        countInStock: 40,
        name: 'Benjamín Nieto Malbec',
        imageUrl: '/images/benjamin-nieto-malbec.jpg',
        price: 230,
        brand: 'Benjamín Nieto',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o16,
        quantity: 40,
        countInStock: 40,
        name: 'Alma Mora Malbec',
        imageUrl: '/images/alma-mora-malbec.jpg',
        price: 230,
        brand: 'Alma Mora',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o17,
        quantity: 40,
        countInStock: 40,
        name: 'Cordero con Piel de Lobo Malbec',
        imageUrl: '/images/cordero-malbec.jfif',
        price: 260,
        brand: 'Mosquita Muerta',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o20,
        quantity: 40,
        countInStock: 40,
        name: 'Fond de Cave Malbec',
        imageUrl: '/images/fond-de-cave-malbec.png',
        price: 230,
        brand: 'Fond de Cave',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o21,
        quantity: 40,
        countInStock: 40,
        name: 'Circus Malbec',
        imageUrl: '/images/circus-malbec.jpg',
        price: 195,
        brand: 'Circus',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o22,
        quantity: 40,
        countInStock: 40,
        name: 'Elementos Cabernet Sauvignon',
        imageUrl: '/images/elementos-cabernet-sauvignon.jpg',
        price: 450,
        brand: 'Elementos',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o23,
        quantity: 40,
        countInStock: 40,
        name: 'Elementos Malbec',
        imageUrl: '/images/elementos-malbec.jpg',
        price: 470,
        brand: 'Elementos',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',        
        size: '750mL',
      },
      {
        _id: 0o24,
        quantity: 40,
        countInStock: 40,
        name: 'Lola Montes Malbec',
        imageUrl: '/images/lola-montes-malbec.jpg',
        price: 400,
        brand: 'Lola Montes',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o25,
        quantity: 40,
        countInStock: 40,
        name: 'Norton Cosecha Tardia',
        imageUrl: '/images/lola-montes-malbec.jpg',
        price: 520,
        brand: 'Norton',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda19'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o26,
        quantity: 40,
        countInStock: 40,
        name: 'Cordero con Piel de Lobo',
        imageUrl: '/images/cordero-cabernet-rose.jpg',
        price: 230,
        brand: 'Mosquita Muerta',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda1a'],
        description: 'Some description',
        size: '750mL',
      },
      {
        _id: 0o27,
        quantity: 40,
        countInStock: 40,
        name: 'Colome Torrontes',
        imageUrl: '/images/colome-torrontes.jpg',
        price: 320,
        brand: 'Colome',
        categoryIds: ['604676094750f24af0cbda15', '604676094750f24af0cbda1a'],
        description: 'Some description',
        size: '750mL',
      }
    ]
  },
  {
    category: {
    id: 0o3,
    title: 'Spirits',
    slug: 'spirits',
    linkUrl: ''
    },
    products: [
      {
        _id: 0o31,
        quantity: 40,
        countInStock: 40,
        name: "Gordon's",
        imageUrl: '/images/gordons.webp',
        price: 530,
        brand: "Gordon's",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o32,
        quantity: 40,
        countInStock: 40,
        name: "Chivas Regal 12",
        imageUrl: '/images/chivas-regal-12.jpeg',
        price: 2350,
        brand: 'Chivas',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o33,
        quantity: 40,
        countInStock: 40,
        name: "Jim Bean Honey",
        imageUrl: '/images/jim-beam-honey.jpeg',
        price: 2000,
        brand: 'Jim Bean',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o34,
        quantity: 40,
        countInStock: 40,
        name: "Johnnie Walker White GOT",
        imageUrl: '/images/jw-white.jpg',
        price: 2300,
        brand: 'Johnnie Walker',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o35,
        quantity: 40,
        countInStock: 40,
        name: "Johnnie Walker Black Label",
        imageUrl: '/images/jw-black-label.jpeg',
        price: 2950,
        brand: 'Johnnie Walker',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o36,
        quantity: 40,
        countInStock: 40,
        name: "Johnnie Walker Red Label",
        imageUrl: '/images/jw-red-label.jpeg',
        price: 1750,
        brand: 'Johnnie Walker',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o37,
        quantity: 40,
        countInStock: 40,
        name: "Jameson Reg.",
        imageUrl: '/images/jameson.jpeg',
        price: 1450,
        brand: 'Jameson',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',        
        size: '750mL'
      },
      {
        _id: 0o41,
        quantity: 40,
        countInStock: 40,
        name: "Jameson Caskmate IPA",
        imageUrl: '/images/jameson-caskmate.jpeg',
        price: 1650,
        brand: 'Jameson',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o42,
        quantity: 40,
        countInStock: 40,
        name: "Ballantine's Reg.",
        imageUrl: '/images/ballantines.jpeg',
        price: 1200,
        brand: 'Jameson',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',        
        size: '750mL'
      },
      {
        _id: 0o43,
        quantity: 40,
        countInStock: 40,
        name: "J&B",
        imageUrl: '/images/jyb.jpeg',
        price: 1250,
        brand: 'J&B',
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',        
        size: '750mL'
      },
      {
        _id: 0o44,
        quantity: 40,
        countInStock: 40,
        name: "Jack Daniel's Reg.",
        imageUrl: '/images/jack-daniels.jpeg',
        price: 4000,
        brand: "Jack Daniel's",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o45,
        quantity: 40,
        countInStock: 40,
        name: "Jack Daniel's Honey",
        imageUrl: '/images/jack-daniels-honey.png',
        price: 4350,
        brand: "Jack Daniel's",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',        
        size: '750mL'
      },
      {
        _id: 0o46,
        quantity: 40,
        countInStock: 40,
        name: "Wild Turkey Honey",
        imageUrl: '/images/wild-turkey-honey.jpeg',
        price: 2200,
        brand: "Wild Turkey",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1c'],
        description: 'Some description',
        size: '750mL'
      },
      {
        _id: 0o47,
        quantity: 40,
        countInStock: 40,
        name: "Heraclito London Dry",
        imageUrl: '/images/heraclito-gin.jpg',
        price: 1000,
        size: '750mL',
        brand: "Heraclito",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o51,
        quantity: 40,
        countInStock: 40,
        name: "Heraclito & Macedonio",
        imageUrl: '/images/heraclito-macedonio.jpg',
        price: 1100,
        size: '750mL',
        brand: "Heraclito",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description',
      },
      {
        _id: 0o52,
        quantity: 40,
        countInStock: 40,
        name: "Gin MG",
        imageUrl: '/images/gin-mg.png',
        price: 1300,
        size: '750mL',
        brand: "Heraclito",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o53,
        quantity: 40,
        countInStock: 40,
        name: "Principe de los Apostoles",
        imageUrl: '/images/principe-apostoles.jfif',
        price: 1200,
        size: '700mL',
        brand: "Príncipe de los Apóstoles",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o54,
        quantity: 40,
        countInStock: 40,
        name: "Beefeater",
        imageUrl: '/images/beefeater.jpeg',
        price: 1650,
        size: '1L',
        brand: "Beefeater",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o55,
        quantity: 40,
        countInStock: 40,
        name: "Beefeater Pink",
        imageUrl: '/images/beefeater-pink.png',
        price: 1600,
        size: '750mL',
        brand: "Beefeater",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o56,
        quantity: 40,
        countInStock: 40,
        name: "Bombay",
        imageUrl: '/images/bombay.webp',
        price: 2100,
        size: '750mL',
        brand: "Bombay",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o57,
        quantity: 40,
        countInStock: 40,
        name: "Gin Terrier Wild",
        imageUrl: '/images/bombay.webp',
        price: 1150,
        size: '750mL',
        brand: "Bombay",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o61,
        quantity: 40,
        countInStock: 40,
        name: "Absolut",
        imageUrl: '/images/absolut.png',
        price: 1200,
        size: '750mL',
        brand: "Absolut",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o62,
        quantity: 40,
        countInStock: 40,
        name: "Absolut Citron",
        imageUrl: '/images/absolut-citron.jpeg',
        price: 1350,
        size: '750mL',
        brand: "Absolut",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o63,
        quantity: 40,
        countInStock: 40,
        name: "Absolut Lime",
        imageUrl: '/images/absolut-lime.jpg',
        price: 1350,
        size: '750mL',
        brand: "Absolut",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o64,
        quantity: 40,
        countInStock: 40,
        name: "Absolut Pear",
        imageUrl: '/images/absolut-pear.jpg',
        price: 1350,
        size: '750mL',
        brand: "Absolut",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o65,
        quantity: 40,
        countInStock: 40,
        name: "Absolut Raspberry",
        imageUrl: '/images/absolut-raspberry.jpg',
        price: 1350,
        size: '750mL',
        brand: "Absolut",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o66,
        quantity: 40,
        countInStock: 40,
        name: "Smirnoff",
        imageUrl: '/images/smirnoff.jpg',
        price: 420,
        size: '750mL',
        brand: "Smirnoff",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o67,
        quantity: 40,
        countInStock: 40,
        name: "Smirnoff flavours",
        imageUrl: '/images/smirnoff-flavours.png',
        price: 440,
        size: '750mL',
        brand: "Smirnoff",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1e'],
        description: 'Some description'
      },
      {
        _id: 0o71,
        quantity: 40,
        countInStock: 40,
        name: "Aperol",
        imageUrl: '/images/aperol.jpg',
        price: 380,
        size: '750mL',
        brand: "Smirnoff",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o72,
        quantity: 40,
        countInStock: 40,
        name: "Fernet Branca",
        imageUrl: '/images/ferne.jpg',
        price: 495,
        size: '750mL',
        brand: "Branca",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o73,
        quantity: 40,
        countInStock: 40,
        name: "Cinzano Rosso",
        imageUrl: '/images/cinzano-rosso.jpg',
        price: 250,
        size: '950mL',
        brand: "Cinzano",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o74,
        quantity: 40,
        countInStock: 40,
        name: "Campari",
        imageUrl: '/images/campari.jpg',
        price: 350,
        size: '750mL',
        brand: "Campari",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o75,
        quantity: 40,
        countInStock: 40,
        name: "Cynar",
        imageUrl: '/images/cynar.jpg',
        price: 275,
        size: '750mL',
        brand: "Cynar",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o76,
        quantity: 40,
        countInStock: 40,
        name: "Ron Havana Club Dorado",
        imageUrl: '/images/havana-dorado.jpg',
        price: 800,
        size: '750mL',
        brand: "Havana Club",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o77,
        quantity: 40,
        countInStock: 40,
        name: "Ron Havana Club Blanco",
        imageUrl: '/images/havana-blanco.jpg',
        price: 750,
        size: '750mL',
        brand: "Havana Club",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o111,
        quantity: 40,
        countInStock: 40,
        name: "Tequila Jose Cuervo Oro",
        imageUrl: '/images/jose-cuervo-oro.jpeg',
        price: 1250,
        size: '750mL',
        brand: "José Cuervo",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      },
      {
        _id: 0o112,
        quantity: 40,
        countInStock: 40,
        name: "Jägermeister",
        imageUrl: '/images/jagerm.jpg',
        price: 1850,
        size: '700mL',
        brand: "Jägermeister",
        categoryIds: ['604676094750f24af0cbda16', '604676094750f24af0cbda1d'],
        description: 'Some description'
      }
    ]
  },
  {
    category: {
    id: 0o3,
    title: 'Beers',
    slug: 'beers',
    linkUrl: ''
    },
    products: [
      {
        _id: 0o311,
        quantity: 40,
        countInStock: 40,
      name: "Imperial IPA",
      brand: "Imperial",
      imageUrl: '/images/imperial-ipa.jpg',
      size: '473mL',
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description',
      price: 10,
      // priceSixPack: 630,
      // priceCase: 2300,
    },
    {
      _id: 0o312,
      quantity: 40,
      countInStock: 40,
      name: "Imperial Red",
      brand: "Imperial",
      imageUrl: '/images/imperial-red-sixpack.png',
      size: '473mL',
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description',
      price: 10,
      // priceSixPack: 630,
      // priceCase: 2300,
    },
    {
      _id: 0o313,
      quantity: 40,
      countInStock: 40,
      name: "Imperial Lager",
      brand: "Imperial",
      imageUrl: '/images/imperial-lager-sixpack.jpg',
      size: '473mL',
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description',
      // priceSixPack: 630,
      // priceCase: 2300,
      price: 10,
    },
    {
      _id: 0o314,
      quantity: 40,
      countInStock: 40,
      name: "Patagonia Bohemian",
      brand: "Patagonia",
      imageUrl: '/images/patagonia-bohemian.jpg',
      // priceSixPack: 700,
      // priceCase: 2700,
      price: 10,
      size: '473mL',
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description'
    },
    {
      _id: 0o315,
      quantity: 40,
      countInStock: 40,
      name: "Patagonia Amber Lager",
      brand: "Patagonia",
      imageUrl: '/images/patagonia-amber-sixpack.jpg',
      // priceSixPack: 700,
      // priceCase: 2700,
      price: 10,
      size: '473mL',
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description'
    },
    {
      _id: 0o316,
      quantity: 40,
      countInStock: 40,
      name: "Corona",
      brand: "Corona",
      imageUrl: '/images/corona-sixpack.jpg',
      // imageUrlCase: '/images/corona-case.jpg',
      size: '335mL',
      price: 10,
      // priceSixPack: 700,
      // priceCase: 2700,
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description'
    },
    {        
      _id: 0o317,
      quantity: 40,
      countInStock: 40,
      name: "Heineken",
      brand: "Heineken",
      imageUrl: '/images/heineken-sixpack.jpg',
      // imageUrl: '/images/heineken-case.jpg',
      size: '473mL',
      price: 10,
      // priceSixPack: 650,
      // priceCase: 2650,
      categoryIds: ['604676094750f24af0cbda17'],
      description: 'Some description'
    }]
  },
  {
    category: {
    id: 0o4,
    title: 'Gourmet',
    slug: 'gourmet',
    linkUrl: ''
    },
    products: [{
      _id: 0o411,
      quantity: 40,
      countInStock: 40,
      name: "Olive Oil Zuelo",
      brand: "Zuelo",
      imageUrl: '/images/olive-oil-zuelo.jpg',
      price: 720,
      size: '1Kg',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda1f'],
      description: 'Some description'
    },
    {
      _id: 0o412,
      quantity: 40,
      countInStock: 40,
      name: "Olive Oil Laur",
      brand: "Laur",
      imageUrl: '/images/olive-oil-laur.jpg',
      price: 480,
      size: '500mL',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda1f'],
      description: 'Some description'
    },
    {
      _id: 0o413,
      quantity: 40,
      countInStock: 40,
      name: "Green Olives Paste",
      brand: "Laur",
      imageUrl: '/images/green-olives-paste-laur.jpg',
      price: 290,
      size: '180g',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda20'],
      description: 'Some description'
    },
    {
      _id: 0o414,
      quantity: 40,
      countInStock: 40,
      name: "Dried Tomatoes Paste",
      brand: "Laur",
      imageUrl: '/images/dried-tomatoes-paste.jpg',
      price: 290,
      size: '180g',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda20'],
      description: 'Some description'
    },
    {
      _id: 0o415,
      quantity: 40,
      countInStock: 40,
      name: "Green Olives",
      brand: "Laur",
      imageUrl: '/images/green-olives-laur.jpg',
      price: 220,
      size: '220g',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda20'],
      description: 'Some description' 
    },
    {
      _id: 0o416,
      quantity: 40,
      countInStock: 40,
      name: "Garlic & Herbs Paste",
      brand: "Gusto Cuyo",
      imageUrl: '/images/garlic-paste-gusto-cuyo.jpg',
      price: 150,
      size: '180g',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda20'],
      description: 'Some description' 
    },
    {
      _id: 0o417,
      quantity: 40,
      countInStock: 40,
      name: "Red Beans Paste",
      brand: "Laur",
      imageUrl: '/images/red-beans-paste-laur.jpg',
      price: 290,
      size: '180g',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda20'],
      description: 'Some description' 
    },
    {
      _id: 0o511,
      quantity: 40,
      countInStock: 40,
      name: "Aceto Balsamico",
      brand: "Contra Viento",
      imageUrl: '/images/aceto-contra-viento.png',
      price: 300,
      size: '500mL',
      categoryIds: ['604676094750f24af0cbda18', '604676094750f24af0cbda1f'],
      description: 'Some description' 
    },
    {
      _id: 0o512,
      quantity: 40,
      countInStock: 40,
      name: "Corona Cooler",
      brand: "Corona",
      imageUrl: '/images/corona-cooler.jpg',
      price: 2600,
      size: '15L',
      categoryIds: ['604676094750f24af0cbda17', '604676094750f24af0cbda21'],
      description: 'Some description' 
    },
    {
      _id: 0o513,
      quantity: 40,
      countInStock: 40,
      name: "Patagonia Tekku Glass",
      brand: "Patagonia",
      imageUrl: '/images/patagonia-tekku-cup.jpg',
      price: 450,
      size: '400mL',
      categoryIds: ['604676094750f24af0cbda17', '604676094750f24af0cbda21'],
      description: 'Some description' 
    },
    {
      _id: 0o514,
      quantity: 40,
      countInStock: 40,
      name: "Vaso Only Cup",
      brand: "Only Cup",
      imageUrl: '/images/only-cup-red.webp',
      price: 300,
      size: '710mL',
      categoryIds: ['604676094750f24af0cbda17', '604676094750f24af0cbda21'],
      description: 'Some description' 
    }]
  }
]