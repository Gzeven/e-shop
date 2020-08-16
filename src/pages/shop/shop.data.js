const SHOP_DATA = [
  {
    id: 1,
    title: "Films",
    routeName: "films",
    items: [
      {
        id: 1,
        name: "Avengers: Endgame",
        imageUrl:
          "https://media.kieskeurig.nl/images/01/91/94/ed/33af/422f/b16f/62e194122e06/400x400.jpg",
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
        price: 1699,
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
    ],
  },
  {
    id: 2,
    title: "Games",
    routeName: "games",
    items: [
      {
        id: 1,
        name: "FIFA 21",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76287492/fee_786_587_png/PS4-FIFA-21-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 2,
        name: "F1 2020 Seventy Edition",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74863718/fee_786_587_png/F1-2020-Seventy-Edition-%7C-PlayStation-4",
        price: 56.99,
      },
      {
        id: 3,
        name: "Ghost Of Tsushima",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_73482609/fee_786_587_png/Ghost-Of-Tsushima-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 4,
        name: "GTA V Premium Edition",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70144697/fee_786_587_png/GTA-V-Premium-Edition",
        price: 24.99,
      },
      {
        id: 5,
        name: "Call of Duty: Modern Warfare",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82312374/fee_786_587_png/Call-of-Duty%3A-Modern-Warfare-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 6,
        name: "Red Dead Redemption 2",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77503792/fee_786_587_png",
        price: 29.99,
      },
      {
        id: 7,
        name: "Marvel’s Avengers",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72800316/fee_786_587_png/Marvel%E2%80%99s-Avengers-%7C-PlayStation-4",
        price: 55,
      },
      {
        id: 8,
        name: "The Last Of Us Part II",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74842946/fee_786_587_png/The-Last-Of-Us-Part-II-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 9,
        name: "Need For Speed Heat",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_69826268/fee_786_587_png/Need-For-Speed-Heat",
        price: 59.99,
      },
      {
        id: 10,
        name: "Star Wars: Battlefront II",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-74755730/fee_786_587_png",
        price: 29.99,
      },
      {
        id: 11,
        name: "Mafia Definitive Edition",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75013701/fee_786_587_png/Mafia-Definitive-Edition-%7C-PlayStation-4",
        price: 29.99,
      },
      {
        id: 12,
        name: "Battlefield 5",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70081210/fee_786_587_png/Battlefield-5-%7C-PlayStation-4",
        price: 49.99,
      },
      {
        id: 13,
        name: "God Of War",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70509817/fee_786_587_png",
        price: 19.99,
      },
      {
        id: 14,
        name: "Far Cry 5",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-75393256/fee_786_587_png/Far-Cry-5-%7C-PlayStation-4",
        price: 17.99,
      },
      {
        id: 15,
        name: "MotoGP 20",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72918971/fee_786_587_png/MotoGP-20-%7C-PlayStation-4",
        price: 37.99,
      },
      {
        id: 16,
        name: "Marvel's Spider-Man",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77375113/fee_786_587_png/Marvel%27s-Spider-Man-%7C-PlayStation-4",
        price: 39.99,
      },
      {
        id: 17,
        name: "Crash Bandicoot - Nsane Trilogy",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82254968/fee_786_587_png/Crash-Bandicoot---Nsane-Trilogy-%7C-PlayStation-4",
        price: 29.99,
      },
      {
        id: 18,
        name: "Assassins Creed – Origins",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-75464910/fee_786_587_png/Assassins-Creed-%E2%80%93-Origins-%7C-PlayStation-4",
        price: 17.99,
      },
      {
        id: 19,
        name: "Assassin's Creed Valhalla",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_76012536/fee_786_587_png/Assassin%27s-Creed-Valhalla-%7C-PlayStation-4",
        price: 59.99,
      },
      {
        id: 20,
        name: "Assassins Creed - Odyssey",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77899999/fee_786_587_png/Assassins-Creed---Odyssey-%7C-PlayStation-4",
        price: 24.99,
      },
    ],
  },
  {
    id: 3,
    title: "Boeken",
    routeName: "boeken",
    items: [
      {
        id: 1,
        name: "Grand Hotel Europa ",
        imageUrl:
          "https://mindbooks.blob.core.windows.net/cachestaging/c/e/3/2/a/1/ce32a1799e7b3df137952e10fabed5c5289625b1.jpg",
        price: 26.99,
      },
      {
        id: 2,
        name: "FaçadeEsther",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789044641196?hash=fb22336&width=170",
        price: 19.99,
      },
      {
        id: 3,
        name: "De meeste mensen deugen ",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789082942187?hash=8cb909f&width=170",
        price: 25,
      },
      {
        id: 4,
        name: "De waanzinnige boomhut van 104 verdiepingen ",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789401457620?hash=0da138e&width=170",
        price: 15.99,
      },
      {
        id: 5,
        name: "Simpel",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789059568266?hash=cbb4d05&width=170",
        price: 32,
      },
      {
        id: 6,
        name: "De geschiedenis van Nederland in 100 oude kaarten",
        imageUrl:
          "https://mindbooks.blob.core.windows.net/cachestaging/f/4/d/b/3/c/f4db3cf6620467fbf06656b70005b5e6a59a0579.jpg",
        price: 79,
      },
      {
        id: 7,
        name: "De zeven zussen",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789401609371?hash=73d9f7c&width=170",
        price: 12.99,
      },
      {
        id: 8,
        name: "Otmars zonen",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789403123004?hash=4b8b3a2&width=170",
        price: 27.5,
      },
      {
        id: 9,
        name: "Rinkeldekink",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789025453398?hash=8603816&width=170",
        price: 14.99,
      },
      {
        id: 10,
        name: "De goede zoon",
        imageUrl:
          "https://images.tbr.mindbus.nl/libris/book/cover/9789025453411?hash=272c3e3&width=170",
        price: 21.99,
      },
    ],
  },
  {
    id: 4,
    title: "Computer",
    routeName: "computer",
    items: [
      {
        id: 1,
        name: "ACER Nitro 5",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75865280/fee_786_587_png/ACER-Nitro-5-%28AN517-52-75DN%29",
        price: 1599,
      },
      {
        id: 2,
        name: "MSI GF75",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75303643/fee_786_587_png/MSI-GF75-%2810SDR-227NL%29",
        price: 1277,
      },
      {
        id: 3,
        name: "SAMSUNG Galaxy Tab A",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80745610/fee_786_587_png/SAMSUNG-Galaxy-Tab-A-10.1-2019-32GB-Zwart",
        price: 179,
      },
      {
        id: 4,
        name: "APPLE iPad",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82241188/fee_786_587_png/APPLE-iPad-%282019%29-32GB-WiFi---Space-Gray",
        price: 369,
      },
      {
        id: 5,
        name: "ACER Nitro XV270Pbmiiprx",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72543829/fee_786_587_png/ACER-Nitro-XV270Pbmiiprx",
        price: 243,
      },
      {
        id: 6,
        name: "SAMSUNG LC24F396FHUXEN",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-79402359/fee_786_587_png/SAMSUNG-LC24F396FHUXEN",
        price: 129,
      },
      {
        id: 7,
        name: "HP DeskJet All-in-One",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76350450/fee_786_587_png/HP-DeskJet-2630-All-in-One",
        price: 49,
      },
      {
        id: 8,
        name: "EPSON EcoTank ET-2721",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_71184810/fee_786_587_png/EPSON-EcoTank-ET-2721",
        price: 199,
      },
      {
        id: 9,
        name: "KOBO Libra H20 - Zwart",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-82181337/fee_786_587_png/KOBO-Libra-H20---Zwart",
        price: 179,
      },
      {
        id: 10,
        name: "APPLE MacBook Air",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_73845148/fee_786_587_png/APPLE-MacBook-Air-13.3-%282020%29---Zilver-i3-8GB-256-GB",
        price: 1129,
      },
      {
        id: 11,
        name: "ACER Aspire XC-886",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72615775/fee_786_587_png/ACER-Aspire-XC-886-%28I5424-NL%29",
        price: 599,
      },
      {
        id: 12,
        name: "HP Pavlion Gaming TG01-0450ND",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_72577701/fee_786_587_png/HP-Pavlion-Gaming-TG01-0450ND",
        price: 1129,
      },
      {
        id: 13,
        name: "MICROSOFT Surface Pro",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76130250/fee_786_587_png/MICROSOFT-Surface-Pro-Type-Cover-Zwart",
        price: 142,
      },
      {
        id: 14,
        name: "LOGITECH MK540 Advanced Wireless",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77055702/fee_786_587_png/LOGITECH-MK540-Advanced-Wireless",
        price: 48,
      },
      {
        id: 15,
        name: "TRUST GXT 105",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-73090325/fee_786_587_png/TRUST-GXT-105",
        price: 14.99,
      },
      {
        id: 16,
        name: "LOGITECH Ergonomische Muis",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78392221/fee_786_587_png/LOGITECH-MX-Vertical-Ergonomische-Muis",
        price: 70.99,
      },
      {
        id: 17,
        name: "HYPERX Cloud II Zilver",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-70148911/fee_786_587_png/HYPERX-Cloud-II-Zilver",
        price: 85.99,
      },
      {
        id: 18,
        name: "LOGITECH PC Speakerset",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-74133970/fee_786_587_png/LOGITECH-Z333-Multimedia-PC-Speakerset",
        price: 59.99,
      },
      {
        id: 19,
        name: "TRUST Webcam",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77980619/fee_786_587_png/TRUST-GXT-1160-Vero-Streaming-Webcam",
        price: 59.99,
      },
      {
        id: 20,
        name: "TP-LINK TL-WR940N",
        imageUrl:
          "https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77521441/fee_786_587_png/TP-LINK-TL-WR940N",
        price: 29.95,
      },
    ],
  },
  {
    id: 5,
    title: "Kleding",
    routeName: "kleding",
    items: [
      {
        id: 1,
        name: "Borsalino hoed",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      {
        id: 2,
        name: "Blauwe Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
      },
      {
        id: 3,
        name: "Bruine Cowboyhoed",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grijze Brim hoed",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Groene Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palmboom Pet",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Rode Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Pet",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blauwe Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
      {
        id: 10,
        name: "Zwarte Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 11,
        name: "Blauwe Denim Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 12,
        name: "Grijze Denim Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 13,
        name: "Bruine Lammy",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 14,
        name: "Bruine Trenchcoat",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
      {
        id: 15,
        name: "Blauwe Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 16,
        name: "Bloemenprint Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 17,
        name: "Bloemenprint Jurk",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 18,
        name: "Rode Jurk met Witte Stippen",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 19,
        name: "Gestreepte Trui",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 20,
        name: "Gele Trainingspak",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 21,
        name: "Witte Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
      {
        id: 22,
        name: "Cameo Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 23,
        name: "Bloemenprint T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 24,
        name: "Zwart & Witte  Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 25,
        name: "Roze T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 26,
        name: "Jeans Longsleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 27,
        name: "Polkadot T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
  {
    id: 6,
    title: "Schoenen",
    routeName: "schoenen",
    items: [
      {
        id: 1,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 2,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 3,
        name: "zwarte Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 4,
        name: "Nike witte AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 5,
        name: "Nike rode High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 6,
        name: "Nike bruine High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 7,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 8,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 7,
    title: "Wonen",
    routeName: "wonen",
    items: [
      {
        id: 1,
        name: "Hoekbank",
        imageUrl: "https://media.s-bol.com/Z63gBR0K5j7Q/550x458.jpg",
        price: 599,
      },
      {
        id: 2,
        name: "vidaXL Driezitsbank",
        imageUrl: "https://media.s-bol.com/Jy69EplBgGOg/550x550.jpg",
        price: 322,
      },
      {
        id: 3,
        name: "Lucide Tafellamp",
        imageUrl: "https://media.s-bol.com/kKJwzjzqG6x/418x840.jpg",
        price: 36,
      },
      {
        id: 4,
        name: "Himalaya Salt Dreams Zoutlamp",
        imageUrl: "https://media.s-bol.com/q7wA6gvMkk23/522x840.jpg",
        price: 20,
      },
      {
        id: 5,
        name: "Ladekast 120 cm",
        imageUrl: "https://media.s-bol.com/qQRMGPY9AQVy/550x550.jpg",
        price: 119,
      },
      {
        id: 6,
        name: "Houten ladekast - 4 lades",
        imageUrl: "https://media.s-bol.com/qj6yN4k8wDM0/550x785.jpg",
        price: 76,
      },
      {
        id: 7,
        name: "WOOOD Bruno Eettafel",
        imageUrl: "https://media.s-bol.com/R6WJ89pxl0YY/550x425.jpg",
        price: 229,
      },
      {
        id: 8,
        name: "Muurmandje van Zeegras",
        imageUrl: "https://media.s-bol.com/g5GNvE5mDmJl/550x540.jpg",
        price: 21,
      },
    ],
  },
  {
    id: 8,
    title: "Tuin",
    routeName: "tuin",
    items: [
      {
        id: 1,
        name: "Lifetime partytent",
        imageUrl: "https://media.s-bol.com/6R7G0XykkPNV/550x487.jpg",
        price: 34.99,
      },
      {
        id: 2,
        name: "vidaXL Loungeset",
        imageUrl: "https://media.s-bol.com/3nMYJokLJwn/550x550.jpg",
        price: 450,
      },
      {
        id: 3,
        name: "Benson hangmat",
        imageUrl: "https://media.s-bol.com/R6YXNKnoBO2q/550x493.jpg",
        price: 16,
      },
      {
        id: 4,
        name: "Maxx 2x aluminium tuinstoel",
        imageUrl: "https://media.s-bol.com/YWNyxoqWXyk2/550x530.jpg",
        price: 99,
      },
      {
        id: 5,
        name: "Hangstoel Sturdy",
        imageUrl: "https://media.s-bol.com/E9ZJyKJ4Y61m/391x840.jpg",
        price: 285,
      },
      {
        id: 6,
        name: "Loungset Punta Cana",
        imageUrl: "https://media.s-bol.com/qjOBwky2PvGp/550x550.jpg",
        price: 379,
      },
      {
        id: 7,
        name: "Ligbed met zonneluifel",
        imageUrl: "https://media.s-bol.com/J6Z6YWz4Kw4J/550x467.jpg",
        price: 125,
      },
      {
        id: 8,
        name: "Tuinset compleet Florence",
        imageUrl: "https://media.s-bol.com/NkkyrV6G63oL/550x372.jpg",
        price: 139,
      },
    ],
  },
];

export default SHOP_DATA;
