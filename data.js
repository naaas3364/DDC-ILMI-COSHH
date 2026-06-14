const chemicals = [
  {
    "id": 1,
    "excelRow": 9,
    "inventoryNo": "1",
    "name": "Intergard 251 HS, Grey, Part A",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "31",
    "batchNo": "3A25005144",
    "expiryDate": "23-Jan-2026",
    "qtyStored": "80",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "https://drive.google.com/file/d/1NTgiIQ4QmKg7_7tnHM13zTGHcndVVSin/view?usp=drive_link"
  },
  {
    "id": 2,
    "excelRow": 10,
    "inventoryNo": "2",
    "name": "Intergard 251 HS,  Grey, Part B",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "32",
    "batchNo": "3A2502033",
    "expiryDate": "10-Feb-2026",
    "qtyStored": "80",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Intergard%20251%20Part%20B%20Curing%20Agent.pdf"
  },
  {
    "id": 3,
    "excelRow": 11,
    "inventoryNo": "3",
    "name": "Thinner GTA220, Clear",
    "hazards": [
      {
        "key": "CORROSIVE",
        "icon": "ghs05-corrosive.png",
        "label": "Corrosion"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "25",
    "batchNo": "3A25002117",
    "expiryDate": "10-Jan-2027",
    "qtyStored": "8",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20GTA%20220%20Thinner.pdf"
  },
  {
    "id": 4,
    "excelRow": 12,
    "inventoryNo": "4",
    "name": "Interchar 212, Grey, Part A",
    "hazards": [
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "106",
    "batchNo": "3A25338275",
    "expiryDate": "15-Jun-2027",
    "qtyStored": "879",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interchar%20212%20Grey%20Part%20A%20Base.pdf"
  },
  {
    "id": 5,
    "excelRow": 13,
    "inventoryNo": "5",
    "name": "Interchar 212, Grey, Part B",
    "hazards": [
      {
        "key": "CORROSIVE",
        "icon": "ghs05-corrosive.png",
        "label": "Corrosion"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "106",
    "batchNo": "3A24334085",
    "expiryDate": "10-Jun-2026",
    "qtyStored": "435",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interchar%20212%20Grey%20Part%20B%20Curing%20Agent.pdf"
  },
  {
    "id": 6,
    "excelRow": 14,
    "inventoryNo": "6",
    "name": "Thinner GTA123, Clear",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "30",
    "batchNo": "3A26013067",
    "expiryDate": "19-Jan-2028",
    "qtyStored": "50",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20GTA%20123%20Thinner.pdf"
  },
  {
    "id": 7,
    "excelRow": 15,
    "inventoryNo": "",
    "name": "Interthane 870, Ral 7035 (Light Grey), Part A",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "35",
    "batchNo": "3A24333195",
    "expiryDate": "04-Dec-2026",
    "qtyStored": "60",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interthane%20870%20RAL9005%20Part%20A%20Base.pdf"
  },
  {
    "id": 8,
    "excelRow": 16,
    "inventoryNo": "7",
    "name": "Interthane 870, Ral 7035 (Light Grey), Part B",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "30",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "60",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interthane%20870%20Part%20B%20Curing%20Agent.pdf"
  },
  {
    "id": 9,
    "excelRow": 17,
    "inventoryNo": "",
    "name": "Interthane 870, Ral 9005 (Black), Part A",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "50",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interthane%20870%20RAL9005%20Part%20A%20Base.pdf"
  },
  {
    "id": 10,
    "excelRow": 18,
    "inventoryNo": "10",
    "name": "Interthane 870, Ral 9005 (Black), Part B",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "50",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interthane%20870%20Part%20B%20Curing%20Agent.pdf"
  },
  {
    "id": 11,
    "excelRow": 19,
    "inventoryNo": "11",
    "name": "Thinner GTA713, Clear",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "50",
    "batchNo": "3A24318031",
    "expiryDate": "20-Nov-2026",
    "qtyStored": "6",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20GTA%20713%20Thinner.pdf"
  },
  {
    "id": 12,
    "excelRow": 20,
    "inventoryNo": "12",
    "name": "Interzinc 22, Grey Part A",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "19",
    "batchNo": "3A24348024",
    "expiryDate": "21-Dec-2025",
    "qtyStored": "6",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interzinc%20%20Part%20A%20Base.pdf"
  },
  {
    "id": 13,
    "excelRow": 21,
    "inventoryNo": "13",
    "name": "Interzinc 22, Grey, Part B",
    "hazards": [
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      }
    ],
    "flashPoint": "499",
    "batchNo": "3A24361185",
    "expiryDate": "09-Jan-2026",
    "qtyStored": "6",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interzinc%2022%20Part%20B%20Curing%20Agent.pdf"
  },
  {
    "id": 14,
    "excelRow": 22,
    "inventoryNo": "14",
    "name": "Lacquer Thinner GP331",
    "hazards": [
      {
        "key": "ACUTE TOXICITY",
        "icon": "ghs06-acute-toxicity.png",
        "label": "Skull and crossbones / Acute toxicity"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "23",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "2",
    "manufacturer": "Ritver",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/RITVER%20GP331%20LACQUER%20THINNER.pdf"
  },
  {
    "id": 15,
    "excelRow": 23,
    "inventoryNo": "15",
    "name": "Interthane 990E Part B",
    "hazards": [
      {
        "key": "CORROSIVE",
        "icon": "ghs05-corrosive.png",
        "label": "Corrosion"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "50",
    "batchNo": "3A25042315",
    "expiryDate": "12-22-2026",
    "qtyStored": "300",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Interthane%20990%20E%20Part%20B%20Hardner.pdf"
  },
  {
    "id": 16,
    "excelRow": 24,
    "inventoryNo": "16",
    "name": "HILTI CFS-S ACR CP 606",
    "hazards": [],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "22",
    "manufacturer": "Hilti",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Hilti%20CFS-S%20ACR;%20CP%20606%20Chemical%20Anchor%20Epoxy%20Resin.pdf"
  },
  {
    "id": 17,
    "excelRow": 25,
    "inventoryNo": "17",
    "name": "BCR E-PLUS 300 COMP A",
    "hazards": [
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Bossong",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/BCR%20E-Plus%20Chemical%20Anchor%20Epoxy%20Resin.pdf"
  },
  {
    "id": 18,
    "excelRow": 26,
    "inventoryNo": "18",
    "name": "ARDROX 800-3",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      }
    ],
    "flashPoint": "-",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "20",
    "manufacturer": "Chemetall",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Ardrox%20800-3%20MPT%20Spray.pdf"
  },
  {
    "id": 19,
    "excelRow": 27,
    "inventoryNo": "19",
    "name": "ARDROX 8901 W",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "-",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "20",
    "manufacturer": "Chemetall",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Ardrox%208901W%20MPT%20Spray.pdf"
  },
  {
    "id": 20,
    "excelRow": 28,
    "inventoryNo": "20",
    "name": "AS-90 WELDERS SPRAY",
    "hazards": [
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "180",
    "manufacturer": "Action Can",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Action%20Can%20AS-90%20Welder%20Multiuse%20Spray.pdf"
  },
  {
    "id": 21,
    "excelRow": 29,
    "inventoryNo": "21",
    "name": "Magnaflux SKC-S",
    "hazards": [
      {
        "key": "GAS UNDER PRESSURE",
        "icon": "ghs04-gas-under-pressure.png",
        "label": "Gas cylinder / Gas under pressure"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Magnaflux",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Magnaflux%20SKC-S%20DPT%20Aerosol.pdf"
  },
  {
    "id": 22,
    "excelRow": 30,
    "inventoryNo": "22",
    "name": "Magnaflux SKD-S2",
    "hazards": [
      {
        "key": "GAS UNDER PRESSURE",
        "icon": "ghs04-gas-under-pressure.png",
        "label": "Gas cylinder / Gas under pressure"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Magnaflux",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Magnaflux%20SKD-S2%20DPT%20Aerosol.pdf"
  },
  {
    "id": 23,
    "excelRow": 31,
    "inventoryNo": "23",
    "name": "Magnaflux SKL-SP2",
    "hazards": [
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "108",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Magnaflux",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Magnaflux%20SKL-SP2%20DPT%20Aerosol.pdf"
  },
  {
    "id": 24,
    "excelRow": 32,
    "inventoryNo": "24",
    "name": "Miyagawa 246-R Lubricant",
    "hazards": [
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "174",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "8",
    "manufacturer": "Rex Industries",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/MIYAGAWA%20246-R%20Lubricant.pdf"
  },
  {
    "id": 25,
    "excelRow": 33,
    "inventoryNo": "",
    "name": "Fischer EM Plus 390",
    "hazards": [
      {
        "key": "CORROSIVE",
        "icon": "ghs05-corrosive.png",
        "label": "Corrosion"
      },
      {
        "key": "HAZARDOUS TO ENVIRONMENT",
        "icon": "ghs09-environment.png",
        "label": "Environment / Aquatic hazard"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "100",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "104",
    "manufacturer": "Fischer",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Fischer%20EM%20Plus%20390%20Chemical%20Anchor%20Epoxy%20Resin.pdf"
  },
  {
    "id": 26,
    "excelRow": 34,
    "inventoryNo": "",
    "name": "Petromin Synthetic Engine Oil 5W-30",
    "hazards": [],
    "flashPoint": "226",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "6",
    "manufacturer": "Petromin",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Petromin-A1-Super-Synthetic-5W-30%20Engine%20Oil.pdf"
  },
  {
    "id": 27,
    "excelRow": 35,
    "inventoryNo": "",
    "name": "Petromin Hydraulic Oil AW37",
    "hazards": [],
    "flashPoint": "224",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "11",
    "manufacturer": "Petromin",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Petromin%20Hydraulic%20Oil%20AW-37.pdf"
  },
  {
    "id": 28,
    "excelRow": 36,
    "inventoryNo": "",
    "name": "Petromin Grease MP-2",
    "hazards": [],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "1",
    "manufacturer": "Petromin",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Petromin%20Grease%20MP-2.pdf"
  },
  {
    "id": 29,
    "excelRow": 37,
    "inventoryNo": "",
    "name": "Silicon Sealent",
    "hazards": [],
    "flashPoint": "NA",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "672",
    "manufacturer": "Saafil",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/SAAFSIL%20Silicon%201200.pdf"
  },
  {
    "id": 30,
    "excelRow": 38,
    "inventoryNo": "",
    "name": "Spray Aerosol Paint",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      }
    ],
    "flashPoint": "93",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "59",
    "manufacturer": "Asmaco",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/ASMACO%20Spray%20Paint.pdf"
  },
  {
    "id": 31,
    "excelRow": 39,
    "inventoryNo": "",
    "name": "WD-40 Multi use Lubricant",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "59",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "33",
    "manufacturer": "WD-40",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/WD-440%20Aerosol.pdf"
  },
  {
    "id": 32,
    "excelRow": 40,
    "inventoryNo": "",
    "name": "Interthane 870,  R764, Part A",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "35",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "90",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": ""
  },
  {
    "id": 33,
    "excelRow": 41,
    "inventoryNo": "",
    "name": "Interthane 870,  R764, Part B",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "50",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "90",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": ""
  },
  {
    "id": 34,
    "excelRow": 42,
    "inventoryNo": "",
    "name": "Jotun Penguard Express Comp B",
    "hazards": [
      {
        "key": "CORROSIVE",
        "icon": "ghs05-corrosive.png",
        "label": "Corrosion"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "33",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "4",
    "manufacturer": "Jotun",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Jotun%20Penguard%20Express%20Comp%20B%20Hardner.pdf"
  },
  {
    "id": 35,
    "excelRow": 43,
    "inventoryNo": "",
    "name": "Pyrolite 15",
    "hazards": [
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "-",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "850",
    "manufacturer": "Carboline",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Carboline%20Pyrocrete%20SFRM.pdf"
  },
  {
    "id": 36,
    "excelRow": 44,
    "inventoryNo": "",
    "name": "Thinner GTA007, Clear",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "26",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "2",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20GTA%20007%20Thinner.pdf"
  },
  {
    "id": 37,
    "excelRow": 45,
    "inventoryNo": "1",
    "name": "Intergard 475 HS, Grey, Part A",
    "hazards": [
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "HEALTH HAZARD",
        "icon": "ghs07-health-hazard.png",
        "label": "Exclamation mark / Irritant"
      }
    ],
    "flashPoint": "31",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Intergard%20475HS%20Grey%20Part%20A%20base.pdf"
  },
  {
    "id": 38,
    "excelRow": 46,
    "inventoryNo": "2",
    "name": "Intergard 475 HS, Grey, Part B",
    "hazards": [
      {
        "key": "CORROSIVE",
        "icon": "ghs05-corrosive.png",
        "label": "Corrosion"
      },
      {
        "key": "FLAMMABLE",
        "icon": "ghs02-flammable.png",
        "label": "Flame / Flammable"
      },
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "32",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "10",
    "manufacturer": "Akzo Nobel",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/International%20Paints%20Intergard%20475HS%20Grey%20Part%20B%20Curing%20Agent.pdf"
  },
  {
    "id": 39,
    "excelRow": 47,
    "inventoryNo": "",
    "name": "Monokote MK-6/HY",
    "hazards": [
      {
        "key": "SERIOUS HEALTH HAZARD",
        "icon": "ghs08-serious-health-hazard.png",
        "label": "Health hazard"
      }
    ],
    "flashPoint": "-",
    "batchNo": "",
    "expiryDate": "",
    "qtyStored": "200",
    "manufacturer": "Arabian Vermiculite",
    "msdsStatus": "Yes",
    "coshhStatus": "Yes",
    "briefingRecord": "Yes",
    "sdsCoshhLink": "COSHH%20&%20MSDS/Monokote%20MK-6_HY.pdf"
  }
];


const ghsLegend = [
  { key: "EXPLOSIVE", icon: "ghs01-explosive.png", label: "Explosive" },
  { key: "OXIDIZING", icon: "ghs03-oxidizer.png", label: "Oxidizer" },
  { key: "ACUTE TOXICITY", icon: "ghs06-acute-toxicity.png", label: "Acute toxicity" },
  { key: "CORROSIVE", icon: "ghs05-corrosive.png", label: "Corrosive" },
  { key: "GAS UNDER PRESSURE", icon: "ghs04-gas-under-pressure.png", label: "Gas under pressure" },
  { key: "FLAMMABLE", icon: "ghs02-flammable.png", label: "Flammable" },
  { key: "HAZARDOUS TO ENVIRONMENT", icon: "ghs09-environment.png", label: "Environmental" },
  { key: "SERIOUS HEALTH HAZARD", icon: "ghs08-serious-health-hazard.png", label: "Health hazard" },
  { key: "HEALTH HAZARD", icon: "ghs07-health-hazard.png", label: "Irritant / Harmful" }
];
