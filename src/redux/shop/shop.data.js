const SHOP_DATA = {
  films: {
    id: 1,
    title: "Films",
    routeName: "films",
    items: [
      {
        id: 1,
        name: "Avengers: Endgame",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81872685/fee_786_587_png",
        price: 11.11,
      },
      {
        id: 2,
        name: "Star Wars: The Rise of Skywalker",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72049908/fee_786_587_png/Star-Wars-Episode-9---The-Rise-Of-Skywalker-%283D%29-%7C-Blu-ray",
        price: 24.99,
      },
      {
        id: 3,
        name: "The Lion King",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_69972544/fee_786_587_png",
        price: 24.99,
      },
      {
        id: 4,
        name: "Fast & Furious - Hobbs & Shaw",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70150035/fee_786_587_png/Fast-%26-Furious---Hobbs-%26-Shaw-%7C-Blu-ray",
        price: 7.99,
      },
      {
        id: 5,
        name: "Fantastic Beasts - The Crimes Of Grindelwald",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_69900126/fee_786_587_png",
        price: 9.99,
      },
      {
        id: 6,
        name: "Aladdin (2019)",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81847981/fee_786_587_png/Aladdin-%282019%29-%7C-Blu-ray",
        price: 9.99,
      },
      {
        id: 7,
        name: "1917",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72211618/fee_786_587_png/1917-%7C-Blu-ray",
        price: 17.99,
      },
      {
        id: 8,
        name: "Frozen 2",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71089684/fee_786_587_png",
        price: 21.99,
      },
      {
        id: 9,
        name: "Bad Boys For Life",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72476245/fee_786_587_png",
        price: 18.99,
      },
      {
        id: 10,
        name: "Invisible Man (2020)",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75682150/fee_786_587_png",
        price: 17.99,
      },
      {
        id: 11,
        name: "John Wick 3",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82077708/fee_786_587_png",
        price: 7.99,
      },
      {
        id: 12,
        name: "Birds Of Prey",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_73975513/fee_786_587_png/Birds-Of-Prey-%7C-Blu-ray",
        price: 21.99,
      },
      {
        id: 13,
        name: "Terminator - Dark Fate",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72211584/fee_786_587_png",
        price: 21.99,
      },
      {
        id: 14,
        name: "It - Chapter Two",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70912029/fee_786_587_png/It---Chapter-Two-%7C-Blu-ray",
        price: 13.99,
      },
      {
        id: 15,
        name: "Ad Astra",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70555103/fee_786_587_png/Ad-Astra-%7C-Blu-ray",
        price: 17.99,
      },
      {
        id: 16,
        name: "Joker",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71330305/fee_786_587_png",
        price: 17.99,
      },
      {
        id: 17,
        name: "Maleficent 2 - Mistress Of Evil ",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71054336/fee_786_587_png/Maleficent-2---Mistress-Of-Evil-%7C-Blu-ray",
        price: 14.99,
      },
      {
        id: 18,
        name: "Mortal Engines",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80673647/fee_786_587_png",
        price: 8.99,
      },
      {
        id: 19,
        name: "The James Bond Collection",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-68634673/fee_786_587_png/The-James-Bond-Collection-%7C-DVD",
        price: 89.99,
      },
      {
        id: 20,
        name: "Bloodshot",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74951879/fee_786_587_png",
        price: 17.99,
      },
      {
        id: 21,
        name: "Onward",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75141839/fee_786_587_png",
        price: 21.99,
      },
      {
        id: 22,
        name: "Little Women",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72788527/fee_786_587_png",
        price: 16.99,
      },
      {
        id: 23,
        name: "A Star Is Born",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71330224/fee_786_587_png",
        price: 8.99,
      },
      {
        id: 24,
        name: "Bohemian Rhapsody",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80216524/fee_786_587_png",
        price: 11.99,
      },
      {
        id: 25,
        name: "Deadpool 2",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78433474/fee_786_587_png",
        price: 7.99,
      },
      {
        id: 26,
        name: "Jumanji - The Next Level",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72476272/fee_786_587_png",
        price: 19.99,
      },
      {
        id: 27,
        name: "Game of Thrones - Seizoen 1 t/m 7",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76394987/fee_786_587_png",
        price: 145.99,
      },
      {
        id: 28,
        name: "Shallows",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-72170751/fee_786_587_png",
        price: 12.99,
      },
      {
        id: 29,
        name: "Spider-man - Far From Home",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82127868/fee_786_587_png",
        price: 12.99,
      },
      {
        id: 30,
        name: "Blumhouse Fantasy Island",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74951873/fee_786_587_png",
        price: 12.99,
      },
      {
        id: 31,
        name: "Shazam!",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81317902/fee_786_587_png",
        price: 16.99,
      },
      {
        id: 32,
        name: "Planet Of The Apes 1-3",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76713273/fee_786_587_png",
        price: 23.99,
      },
      {
        id: 33,
        name: "Full Metal Jacket",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77628457/fee_786_587_png",
        price: 13.99,
      },
    ],
  },
  games: {
    id: 2,
    title: "Games",
    routeName: "games",
    items: [
      {
        id: 50,
        name: "FIFA 21 - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76287492/fee_786_587_png/PS4-FIFA-21-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 51,
        name: "F1 2020 Seventy Edition - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74863718/fee_786_587_png/F1-2020-Seventy-Edition-%7C-PlayStation-4",
        price: 56.99,
      },
      {
        id: 52,
        name: "Ghost Of Tsushima - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_73482609/fee_786_587_png/Ghost-Of-Tsushima-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 53,
        name: "GTA V Premium Edition - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70144697/fee_786_587_png/GTA-V-Premium-Edition",
        price: 24.99,
      },
      {
        id: 54,
        name: "Call of Duty: Modern Warfare - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82312374/fee_786_587_png/Call-of-Duty%3A-Modern-Warfare-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 55,
        name: "Red Dead Redemption 2 - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77503792/fee_786_587_png",
        price: 29.99,
      },
      {
        id: 56,
        name: "Marvel’s Avengers - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72800316/fee_786_587_png/Marvel%E2%80%99s-Avengers-%7C-PlayStation-4",
        price: 55,
      },
      {
        id: 57,
        name: "The Last Of Us Part II - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74842946/fee_786_587_png/The-Last-Of-Us-Part-II-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 58,
        name: "Need For Speed Heat - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_69826268/fee_786_587_png/Need-For-Speed-Heat",
        price: 59.99,
      },
      {
        id: 59,
        name: "Star Wars: Battlefront II - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-74755730/fee_786_587_png",
        price: 29.99,
      },
      {
        id: 60,
        name: "Mafia Definitive Edition - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75013701/fee_786_587_png/Mafia-Definitive-Edition-%7C-PlayStation-4",
        price: 29.99,
      },
      {
        id: 61,
        name: "Battlefield 5 - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70081210/fee_786_587_png/Battlefield-5-%7C-PlayStation-4",
        price: 49.99,
      },
      {
        id: 62,
        name: "God Of War - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70509817/fee_786_587_png",
        price: 19.99,
      },
      {
        id: 63,
        name: "Far Cry 5 - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-75393256/fee_786_587_png/Far-Cry-5-%7C-PlayStation-4",
        price: 17.99,
      },
      {
        id: 64,
        name: "MotoGP 20 - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72918971/fee_786_587_png/MotoGP-20-%7C-PlayStation-4",
        price: 37.99,
      },
      {
        id: 65,
        name: "Marvel's Spider-Man - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77375113/fee_786_587_png/Marvel%27s-Spider-Man-%7C-PlayStation-4",
        price: 39.99,
      },
      {
        id: 66,
        name: "Crash Bandicoot - Nsane Trilogy - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82254968/fee_786_587_png/Crash-Bandicoot---Nsane-Trilogy-%7C-PlayStation-4",
        price: 29.99,
      },
      {
        id: 67,
        name: "Assassins Creed – Origins - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-75464910/fee_786_587_png/Assassins-Creed-%E2%80%93-Origins-%7C-PlayStation-4",
        price: 17.99,
      },
      {
        id: 68,
        name: "Assassin's Creed Valhalla - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76012536/fee_786_587_png/Assassin%27s-Creed-Valhalla-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 69,
        name: "Assassins Creed - Odyssey - PS4",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77899999/fee_786_587_png/Assassins-Creed---Odyssey-%7C-PlayStation-4",
        price: 24.99,
      },
      {
        id: 70,
        name: "Battlefield 5 - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77645863/fee_786_587_png/Battlefield-5-%7C-PC",
        price: 49.99,
      },
      {
        id: 71,
        name: "Overwatch (GOTY Edition) - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-75699106/fee_786_587_png/Overwatch-%28GOTY-Edition%29",
        price: 62.99,
      },
      {
        id: 72,
        name: "De Sims 4 - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-65956152/fee_786_587_png/De-Sims-4",
        price: 19.95,
      },
      {
        id: 73,
        name: "Farming Simulator 19 - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78543442/fee_786_587_png/Farming-Simulator-19-%7C-PC",
        price: 14.77,
      },
      {
        id: 74,
        name: "Football Manager 2020 - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70207113/fee_786_587_png/Football-Manager-2020",
        price: 54.99,
      },
      {
        id: 75,
        name: "Star Wars Jedi - Fallen Order - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77751505/fee_786_587_png",
        price: 29.98,
      },
      {
        id: 76,
        name: "FIFA 21 (Code In A Box) - PC",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76287497/fee_786_587_png/FIFA-21-%28Code-In-A-Box%29-%7C-PC",
        price: 54.99,
      },
      {
        id: 77,
        name: "Animal Crossing – New Horizons - Nintendo Switch",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72059223/fee_786_587_png/Animal-Crossing-%E2%80%93-New-Horizons-%7C-Nintendo-Switch",
        price: 57.99,
      },
      {
        id: 78,
        name: "Mario Kart 8 Deluxe - Nintendo Switch",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-73371502/fee_786_587_png/Mario-Kart-8-Deluxe-%7C-Nintendo-Switch",
        price: 54.99,
      },
      {
        id: 79,
        name: "Ring Fit Adventure - Nintendo Switch",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82277566/fee_786_587_png/Ring-Fit-Adventure-%7C-Nintendo-Switch",
        price: 74.99,
      },
      {
        id: 80,
        name: "Super Mario Party - Nintendo Switch",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78212991/fee_786_587_png/Super-Mario-Party-%7C-Nintendo-Switch",
        price: 49.99,
      },
      {
        id: 81,
        name: "Legend Of Zelda - Breath Of The Wild - Nintendo Switch",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-73371567/fee_786_587_png",
        price: 58.99,
      },
    ],
  },
  boeken: {
    id: 3,
    title: "Boeken",
    routeName: "boeken",
    items: [
      {
        id: 100,
        name: "Grand Hotel Europa ",
        imageUrl:
          "https://mindbooks.blob.core.windows.net/cachestaging/c/e/3/2/a/1/ce32a1799e7b3df137952e10fabed5c5289625b1.jpg",
        price: 26.99,
      },
      {
        id: 101,
        name: "Façade",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789044641196?hash=fb22336&width=170",
        price: 19.99,
      },
      {
        id: 102,
        name: "De meeste mensen deugen ",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789082942187?hash=8cb909f&width=170",
        price: 25,
      },
      {
        id: 103,
        name: "De waanzinnige boomhut van 104 verdiepingen",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789401457620?hash=0da138e&width=170",
        price: 15.99,
      },
      {
        id: 104,
        name: "Simpel",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789059568266?hash=cbb4d05&width=170",
        price: 32,
      },
      {
        id: 105,
        name: "De geschiedenis van Nederland in 100 oude kaarten",
        imageUrl:
          "https://mindbooks.blob.core.windows.net/cachestaging/f/4/d/b/3/c/f4db3cf6620467fbf06656b70005b5e6a59a0579.jpg",
        price: 79,
      },
      {
        id: 106,
        name: "De zeven zussen",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789401609371?hash=73d9f7c&width=170",
        price: 12.99,
      },
      {
        id: 107,
        name: "Otmars zonen",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789403123004?hash=4b8b3a2&width=170",
        price: 27.5,
      },
      {
        id: 108,
        name: "Rinkeldekink",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789025453398?hash=8603816&width=170",
        price: 14.99,
      },
      {
        id: 109,
        name: "De goede zoon",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789025453411?hash=272c3e3&width=170",
        price: 21.99,
      },
      {
        id: 110,
        name: "Een glimp van jou",
        imageUrl: "https://media.s-bol.com/lRxvoABE5lmJ/550x822.jpg",
        price: 19.99,
      },
      {
        id: 111,
        name: "Carry on en leef",
        imageUrl: "https://media.s-bol.com/Vml44KxXqZQX/547x840.jpg",
        price: 21.5,
      },
      {
        id: 112,
        name: "Twilight - Midnight Sun",
        imageUrl: "https://media.s-bol.com/jYPQRVXgMZ9z/550x834.jpg",
        price: 22.99,
      },
      {
        id: 113,
        name: "Himalaya De reis naar binnen",
        imageUrl: "https://media.s-bol.com/ROqpjAQWWNxE/538x840.jpg",
        price: 19.95,
      },
      {
        id: 114,
        name: "De rat van Amsterdam",
        imageUrl: "https://media.s-bol.com/BNgqoYppzzZn/545x840.jpg",
        price: 26.99,
      },
      {
        id: 115,
        name: "De vlinderkamer",
        imageUrl: "https://media.s-bol.com/Vml44KxXqZQX/547x840.jpg",
        price: 11.99,
      },
      {
        id: 116,
        name: "Tropenbruid",
        imageUrl: "https://media.s-bol.com/Z4gPqZO8M52R/541x840.jpg",
        price: 7.99,
      },
      {
        id: 117,
        name: "Uit het leven van een hond",
        imageUrl: "https://media.s-bol.com/YW4Mv6ml5JxM/539x840.jpg",
        price: 20,
      },
      {
        id: 118,
        name: "'t Hooge Nest",
        imageUrl: "https://media.s-bol.com/qxx2EM7V5XAk/527x840.jpg",
        price: 4.99,
      },
      {
        id: 119,
        name: "Het zoutpad - Over oude wegen naar een nieuw begin",
        imageUrl: "https://media.s-bol.com/xQ5Grz5ZVLl/527x840.jpg",
        price: 7.99,
      },
      {
        id: 120,
        name: "Ik wil met je mee!",
        imageUrl: "https://media.s-bol.com/qxx2Zo1BM7rp/550x833.jpg",
        price: 12.99,
      },
      {
        id: 121,
        name: "De antwoorden op de grote vragen",
        imageUrl: "https://media.s-bol.com/jR1PpYrQn3QR/535x840.jpg",
        price: 19.99,
      },
      {
        id: 122,
        name: "Het Italiaanse meisje",
        imageUrl: "https://media.s-bol.com/l5GnyKDNjy2l/546x840.jpg",
        price: 15,
      },
    ],
  },
  computer: {
    id: 4,
    title: "Computer",
    routeName: "computer",
    items: [
      {
        id: 150,
        name: "ACER Nitro 5",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75865280/fee_786_587_png/ACER-Nitro-5-%28AN517-52-75DN%29",
        price: 1599,
      },
      {
        id: 151,
        name: "MSI GF75",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75303643/fee_786_587_png/MSI-GF75-%2810SDR-227NL%29",
        price: 1277,
      },
      {
        id: 152,
        name: "SAMSUNG Galaxy Tab A",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80745610/fee_786_587_png/SAMSUNG-Galaxy-Tab-A-10.1-2019-32GB-Zwart",
        price: 179,
      },
      {
        id: 153,
        name: "APPLE iPad",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82241188/fee_786_587_png/APPLE-iPad-%282019%29-32GB-WiFi---Space-Gray",
        price: 369,
      },
      {
        id: 154,
        name: "ACER Nitro XV270Pbmiiprx",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72543829/fee_786_587_png/ACER-Nitro-XV270Pbmiiprx",
        price: 243,
      },
      {
        id: 155,
        name: "SAMSUNG LC24F396FHUXEN",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-79402359/fee_786_587_png/SAMSUNG-LC24F396FHUXEN",
        price: 129,
      },
      {
        id: 156,
        name: "HP DeskJet All-in-One",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76350450/fee_786_587_png/HP-DeskJet-2630-All-in-One",
        price: 49,
      },
      {
        id: 157,
        name: "EPSON EcoTank ET-2721",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71184810/fee_786_587_png/EPSON-EcoTank-ET-2721",
        price: 199,
      },
      {
        id: 158,
        name: "KOBO Libra H20 - Zwart",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82181337/fee_786_587_png/KOBO-Libra-H20---Zwart",
        price: 179,
      },
      {
        id: 159,
        name: "APPLE MacBook Air",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_73845148/fee_786_587_png/APPLE-MacBook-Air-13.3-%282020%29---Zilver-i3-8GB-256-GB",
        price: 1129,
      },
      {
        id: 160,
        name: "ACER Aspire XC-886",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72615775/fee_786_587_png/ACER-Aspire-XC-886-%28I5424-NL%29",
        price: 599,
      },
      {
        id: 161,
        name: "HP Pavlion Gaming TG01-0450ND",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72577701/fee_786_587_png/HP-Pavlion-Gaming-TG01-0450ND",
        price: 1129,
      },
      {
        id: 162,
        name: "MICROSOFT Surface Pro",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76130250/fee_786_587_png/MICROSOFT-Surface-Pro-Type-Cover-Zwart",
        price: 142,
      },
      {
        id: 163,
        name: "LOGITECH MK540 Advanced Wireless",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77055702/fee_786_587_png/LOGITECH-MK540-Advanced-Wireless",
        price: 48,
      },
      {
        id: 164,
        name: "TRUST GXT 105",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-73090325/fee_786_587_png/TRUST-GXT-105",
        price: 14.99,
      },
      {
        id: 165,
        name: "LOGITECH Ergonomische Muis",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78392221/fee_786_587_png/LOGITECH-MX-Vertical-Ergonomische-Muis",
        price: 70.99,
      },
      {
        id: 166,
        name: "HYPERX Cloud II Zilver",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-70148911/fee_786_587_png/HYPERX-Cloud-II-Zilver",
        price: 85.99,
      },
      {
        id: 167,
        name: "LOGITECH PC Speakerset",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-74133970/fee_786_587_png/LOGITECH-Z333-Multimedia-PC-Speakerset",
        price: 59.99,
      },
      {
        id: 168,
        name: "TRUST Webcam",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77980619/fee_786_587_png/TRUST-GXT-1160-Vero-Streaming-Webcam",
        price: 59.99,
      },
      {
        id: 169,
        name: "TP-LINK TL-WR940N",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77521441/fee_786_587_png/TP-LINK-TL-WR940N",
        price: 29.95,
      },
      {
        id: 170,
        name: "SANDISK SSD Ultra 3D 500GB",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80639574/fee_786_587_png/SANDISK-SSD-Ultra-3D-500GB",
        price: 76.99,
      },
      {
        id: 171,
        name: "SEAGATE BarraCuda 120 500GB SSD",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71758184/fee_786_587_png/SEAGATE-BarraCuda-120-500GB-SSD",
        price: 66.99,
      },
      {
        id: 172,
        name: "HAMA USB 3.0 verlengkabel 1 ster 0,5m",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-68986195/fee_786_587_png/HAMA-USB-3.0-verlengkabel-1-ster-0-5m",
        price: 11.99,
      },
      {
        id: 173,
        name: "HAMA Micro-USB-kabel verguld 3 sterren 1,8m",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-35606268/fee_786_587_png/HAMA-Micro-USB-kabel-verguld-3-sterren-1-8m",
        price: 14.99,
      },
    ],
  },
  kleding: {
    id: 5,
    title: "Kleding",
    routeName: "kleding",
    items: [
      {
        id: 201,
        name: "Borsalino hoed",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      {
        id: 202,
        name: "Blauwe Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
      },
      {
        id: 203,
        name: "Bruine Cowboyhoed",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 204,
        name: "Grijze Brim hoed",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 205,
        name: "Groene Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 206,
        name: "Palmboom Pet",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 207,
        name: "Rode Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 208,
        name: "Wolf Pet",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 209,
        name: "Blauwe Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
      {
        id: 210,
        name: "Zwarte Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 211,
        name: "Blauwe Denim Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 212,
        name: "Grijze Denim Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 213,
        name: "Bruine Lammy",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 214,
        name: "Bruine Trenchcoat",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
      {
        id: 215,
        name: "Blauwe Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 216,
        name: "Bloemenprint Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 217,
        name: "Bloemenprint Jurk",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 218,
        name: "Rode Jurk met Witte Stippen",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 219,
        name: "Gestreepte Trui",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 220,
        name: "Gele Trainingspak",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 221,
        name: "Witte Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
      {
        id: 222,
        name: "Cameo Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 223,
        name: "Bloemenprint T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 224,
        name: "Zwart & Witte  Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 225,
        name: "Roze T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 226,
        name: "Jeans Longsleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 227,
        name: "Polkadot T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
  schoenen: {
    id: 6,
    title: "Schoenen",
    routeName: "schoenen",
    items: [
      {
        id: 251,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 252,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 253,
        name: "zwarte Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 254,
        name: "Nike witte AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 255,
        name: "Nike rode High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 256,
        name: "Nike bruine High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 257,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 258,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
      {
        id: 259,
        name: "Zwarte Neopreen Heren Instap Sneakers",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxIIfZ2TNP74oJqPKj6X7qKCSa7gNpOQANKCs7JHTtW84XsPmyxKu3ywKNn6PkwkG4LmA7keRbNh4Jh88gnm3CcwPBzdMl7qsYDIMWCgreFNWYwBvQblXi&usqp=CAE",
        price: 15.98,
      },
      {
        id: 260,
        name: "Denim Stof Laag Flats Dans Sneakers Platte hak Vrouwen",
        imageUrl:
          "https://image.floryday.com/image/webp/500_500/1a/26/1a26448cf02ec1158ed06ec5d9dd6e71.jpg",
        price: 5.69,
      },
      {
        id: 261,
        name: "Half-Kuit Laarzen Laarzen Lage hak Vrouwen",
        imageUrl:
          "https://image.floryday.com/image/webp/500_500/c9/3a/c93a662bc55bfa974c661b2eb7815e77.jpg",
        price: 36.69,
      },
      {
        id: 262,
        name: "Stof Flats Dans Sneakers Platte hak Vrouwen",
        imageUrl:
          "https://image.floryday.com/image/webp/500_500/9b/df/9bdf73a84b542fdbbb6bbef0885246d8.jpg",
        price: 13.65,
      },
      {
        id: 263,
        name: "Peep Toe Pumps Blokhak Gesp Hollow-out Vrouwen",
        imageUrl:
          "https://image.floryday.com/image/webp/500_500/b0/65/b06542fc98fa12fe1ae53c1f5f4cd478.jpg",
        price: 22.18,
      },
      {
        id: 264,
        name: "Heren Dames 350 V2 Boost Sneakers Grijs Oranje Zebra",
        imageUrl:
          "https://contestimg.wish.com/api/webimage/598ed77e0cbce935d8f0485d-large.jpg?cache_buster=da23b7f4b428d4082beaf16602b8fec0",
        price: 35,
      },
      {
        id: 265,
        name: "Santoni Clean Icon - wit",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0024/0353/2870/products/SantoniCleanIconLifestylePic_720x.jpg?v=1587377646",
        price: 390,
      },
      {
        id: 266,
        name: "Mario Bemer Lido",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0024/0353/2870/products/MarioBemer_Lido_Loafer_Burgundy_165_1_720x.jpg?v=1579297429",
        price: 965,
      },
      {
        id: 267,
        name: "TLB Artista Chelsea Suede - Lichtbruin",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0024/0353/2870/products/tlbmallorcaartista_132_chelsea_lightbrown_goya_132_1_720x.jpg?v=1585139950",
        price: 475,
      },
      {
        id: 268,
        name: "JIMMY CHOO - Gouden Sneakers met Diamanten",
        imageUrl:
          "https://static.miinto.net/products/337b868a38a7b65d2ea276e14c3eaf80.jpg?width=400&height=600&title=sneakers-diamond",
        price: 562.95,
      },
      {
        id: 269,
        name: "Nike Training - Renew - Sneakers in zwart",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_s0tTsdB_4eDxyqVxXLso_NreBxTm0Xk_ilTQg80zjUJ7V5d5QNdWG3ZIA1ML-peIc9LQLx2iWHAGy3H7biC9LiPL6H4zNrP4owCz6Ax11CcLUGEmPYRjxQ&usqp=CAE",
        price: 60,
      },
      {
        id: 270,
        name: "Philippe Model Sneakers Dames Beige",
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToAhv8BKGKQYnB1K4JO8gIJYAnlhN6LbnmDGOL2ShHtXYxMu6oNEnrbGNBsx-BuKAP2dAlnkEqFcGCSjAflglDOq1ISpcpkvRaKung7CD5uqAmtiRlF7ReGQ&usqp=CAE",
        price: 255.95,
      },
    ],
  },
  wonen: {
    id: 7,
    title: "Wonen",
    routeName: "wonen",
    items: [
      {
        id: 301,
        name: "Stoere bijzettafel Miles met in zand gegoten blad.",
        imageUrl:
          "https://cdn.webshopapp.com/shops/93792/files/178361075/345x345x1/vince-design-bijzettafel-miles.jpg",
        price: 37.95,
      },
      {
        id: 302,
        name: "Pepijn dressoir",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkgU9nNBEMfvvEICsFyfphzH0O2ois_l18u7fxGhk7HnNp5dojp_kkOn2dXHp9PGlqgJd0UCdwKDui45EeWfNKmXE-tpuBt0EmjaDgZ8eQ&usqp=CAE",
        price: 599,
      },
      {
        id: 303,
        name: "Zweefdeurkast Subito",
        imageUrl:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPnV5ZVdT6Dp18jH1-ezLIE7q_00T7pSknMWhdzouffTz1apk_SoUqmd2fOPcYcmLyvcsClW0aoBMfqgaCs9W52-IeY5_tcx0wpcgvi0o&usqp=CAE",
        price: 349.99,
      },
      {
        id: 304,
        name: "U bank - Zwart/Antraciet - Stof - PU leer",
        imageUrl: "https://media.s-bol.com/BBg9on7oVr8k/550x330.jpg",
        price: 799,
      },
      {
        id: 305,
        name: "Velours hoekbank Delta - Rechts",
        imageUrl: "https://media.s-bol.com/JqVrJkXKx9Ql/550x340.jpg",
        price: 554.95,
      },
      {
        id: 306,
        name: "Bank Dutch Delight - 3-zits - Cognac",
        imageUrl: "https://media.s-bol.com/mOEZ3OQXO0qr/550x422.jpg",
        price: 649,
      },
      {
        id: 307,
        name:
          "AZ-Home - Ladekast Agnes 60 cm - Wit/Wit Hoogglans - Commode - 3 lades",
        imageUrl: "https://media.s-bol.com/J8DlDMY74jgD/550x550.jpg",
        price: 79.9,
      },
      {
        id: 308,
        name: "VASAGLE Salontafel",
        imageUrl: "https://media.s-bol.com/73gj07VNqyZB/550x550.jpg",
        price: 99.95,
      },
      {
        id: 309,
        name: "Livin24 Lara Industriële Salontafels",
        imageUrl: "https://media.s-bol.com/Z4Mw7N6o9JE5/550x550.jpg",
        price: 189.95,
      },
      {
        id: 310,
        name: "Livin24 Industriële eetkamerstoel Morris",
        imageUrl: "https://media.s-bol.com/APw6xB05p7lp/550x550.jpg",
        price: 59.95,
      },
      {
        id: 311,
        name: "Design Eetkamerstoel Eiffel Wit",
        imageUrl: "https://media.s-bol.com/Yvx6PkG02Y7O/550x422.jpg",
        price: 18.75,
      },
      {
        id: 312,
        name: "Stoel crazy antraciet",
        imageUrl: "https://media.s-bol.com/JZ5RmKkY9gp9/550x549.jpg",
        price: 64,
      },
      {
        id: 313,
        name: "Urban Living Klassieke vlinderstoel ",
        imageUrl: "https://media.s-bol.com/Yox0GEr1YOY/550x713.jpg",
        price: 49.95,
      },
      {
        id: 314,
        name: "Elektrische sta-op stoel donkergrijs F-201",
        imageUrl: "https://media.s-bol.com/BLrw35WG8KVY/550x366.jpg",
        price: 389,
      },
      {
        id: 315,
        name: "TV Meubel Zwart & Eiken - Scandinavisch Design",
        imageUrl: "https://media.s-bol.com/Nk9vD4Nqm5Vm/550x412.jpg",
        price: 139,
      },
      {
        id: 316,
        name: "TV Meubel Zwevend - Zwart - 140 cm",
        imageUrl: "https://media.s-bol.com/xkv9Xj0wG7MP/550x385.jpg",
        price: 179,
      },
      {
        id: 317,
        name: "AZ-Home - Dressoir Stiv V 120 cm",
        imageUrl: "https://media.s-bol.com/YW5ERpJ37W2K/550x599.jpg",
        price: 109.9,
      },
      {
        id: 318,
        name: "Meubella Dressoir Monaco",
        imageUrl: "https://media.s-bol.com/37P0xR8KjjM/550x412.jpg",
        price: 219,
      },
      {
        id: 319,
        name: "Livin24 Lara Industriële Salontafels",
        imageUrl: "https://media.s-bol.com/Z4Mw7N6o9JE5/550x550.jpg",
        price: 189.95,
      },
      {
        id: 320,
        name: "Lucide LORIN Tafellamp",
        imageUrl: "https://media.s-bol.com/1qmY2M2p29R/550x823.jpg",
        price: 22.49,
      },
      {
        id: 321,
        name: "Himalaya Salt Dreams Zoutlamp ",
        imageUrl: "https://media.s-bol.com/BBBllPr9VKjY/550x509.jpg",
        price: 20,
      },
      {
        id: 322,
        name: "Lucide MESH Hanglamp",
        imageUrl: "https://media.s-bol.com/31RRq8RQ93Nn/550x785.jpg",
        price: 31.99,
      },
      {
        id: 323,
        name: "Grote Handgemaakte Dromen Vanger",
        imageUrl: "https://media.s-bol.com/BBoZ6MDOzWON/550x550.jpg",
        price: 8.95,
      },
      {
        id: 324,
        name: "Set Shaolin monniken horen/zien/zwijgen",
        imageUrl: "https://media.s-bol.com/O1WMYGXJE7p/550x364.jpg",
        price: 31.95,
      },
      {
        id: 325,
        name: "Gadgy Vaaslamp ",
        imageUrl: "https://media.s-bol.com/36pj63YnA0mQ/550x550.jpg",
        price: 24.95,
      },
    ],
  },
  tuin: {
    id: 8,
    title: "Tuin",
    routeName: "tuin",
    items: [
      {
        id: 351,
        name: "Balliu Evapro Strandbed",
        imageUrl: "https://media.s-bol.com/Vvm83XJ0qyMB/550x366.jpg",
        price: 189,
      },
      {
        id: 352,
        name: "vidaXL Loungeset",
        imageUrl: "https://media.s-bol.com/3nMYJokLJwn/550x550.jpg",
        price: 450,
      },
      {
        id: 353,
        name: "Steigerhouten hoekbank met chaise longue",
        imageUrl: "https://media.s-bol.com/3BzPMRGBEmM/550x412.jpg",
        price: 450,
      },
      {
        id: 354,
        name: "Benson hangmat - Blauw/Groen",
        imageUrl: "https://media.s-bol.com/JVxBL26v7yo/550x550.jpg",
        price: 17.5,
      },
      {
        id: 355,
        name: "Partytent Feesttent Paviljoen",
        imageUrl: "https://media.s-bol.com/57n7pDKm39LY/550x550.jpg",
        price: 199,
      },
      {
        id: 356,
        name: "Washingtonia robusta",
        imageUrl: "https://media.s-bol.com/qJWJV4xV7M0/550x412.jpg",
        price: 22.99,
      },
      {
        id: 357,
        name: "Mooie volle olijfboom 170cm hoog",
        imageUrl: "https://media.s-bol.com/YWXLyYDvZlPn/550x733.jpg",
        price: 150,
      },
      {
        id: 358,
        name: "Bergenia Cordifolia 'Eroica' ",
        imageUrl: "https://media.s-bol.com/32Zg3BB61xgn/550x550.jpg",
        price: 11.99,
      },
      {
        id: 359,
        name: "Tuinbeeld met hoorn",
        imageUrl: "https://media.s-bol.com/gBoB5Pv6ZPl/550x663.jpg",
        price: 27.95,
      },
      {
        id: 360,
        name: "Tuindoek - 95x130 cm",
        imageUrl: "https://media.s-bol.com/gLwzZR55Mkr3/550x752.jpg",
        price: 59.9,
      },
      {
        id: 361,
        name: "Tuinbeeld -Jongen met bloembak",
        imageUrl: "https://media.s-bol.com/N9Jg1jyY6xOL/550x732.jpg",
        price: 42.95,
      },
      {
        id: 362,
        name: "Boeddha in lotushouding",
        imageUrl: "https://media.s-bol.com/qY47nXx2kvjk/550x825.jpg",
        price: 49.95,
      },
      {
        id: 363,
        name: "3-delige Solar LED Tuinverlichting Set",
        imageUrl: "https://media.s-bol.com/Mwm1BNmg5nwQ/550x550.jpg",
        price: 19.95,
      },
      {
        id: 364,
        name: "Gadgy Oosterse Lantaarn",
        imageUrl: "https://media.s-bol.com/mZQAzzwY73wA/550x550.jpg",
        price: 34.95,
      },
      {
        id: 365,
        name: "VONROC broespistool & spuitstuk set",
        imageUrl: "https://media.s-bol.com/q7z5k3g6o873/550x400.jpg",
        price: 12.95,
      },
      {
        id: 366,
        name: "Powerplus POWEG63703 - Grasmaaier",
        imageUrl: "https://media.s-bol.com/32Z4PX9JgjgO/550x364.jpg",
        price: 51.42,
      },
      {
        id: 367,
        name: "GARDENA Sileno City 250 robotmaaier",
        imageUrl: "https://media.s-bol.com/BKMAZVM06KY/550x366.jpg",
        price: 689,
      },
      {
        id: 368,
        name: "GARDENA Classic snoeischaar",
        imageUrl: "https://media.s-bol.com/VOpmWoXgp4lO/550x366.jpg",
        price: 16.99,
      },
      {
        id: 369,
        name: "VONROC Accu Heggenschaar ",
        imageUrl: "https://media.s-bol.com/xvOvvx8mkG5l/550x334.jpg",
        price: 39.95,
      },
      {
        id: 370,
        name: "VONROC 3-in-1 bladblazer",
        imageUrl: "https://media.s-bol.com/BrL4q2ng7wjx/550x368.jpg",
        price: 38.95,
      },
    ],
  },
};

export default SHOP_DATA;
