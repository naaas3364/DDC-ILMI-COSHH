const ghsPictograms = {
  "explosive": {
    "label": "Explosive",
    "image": "assets/ghs01-explosive.png"
  },
  "oxidizer": {
    "label": "Oxidizer",
    "image": "assets/ghs03-oxidizer.png"
  },
  "acute_toxicity": {
    "label": "Acute Toxicity",
    "image": "assets/ghs06-acute-toxicity.png"
  },
  "corrosive": {
    "label": "Corrosive",
    "image": "assets/ghs05-corrosive.png"
  },
  "gas_under_pressure": {
    "label": "Gas Under Pressure",
    "image": "assets/ghs04-gas-under-pressure.png"
  },
  "flammable": {
    "label": "Flammable",
    "image": "assets/ghs02-flammable.png"
  },
  "environment": {
    "label": "Hazardous to Environment",
    "image": "assets/ghs09-environment.png"
  },
  "serious_health_hazard": {
    "label": "Serious Health Hazard",
    "image": "assets/ghs08-serious-health-hazard.png"
  },
  "health_hazard": {
    "label": "Health Hazard / Irritant",
    "image": "assets/ghs07-health-hazard.png"
  }
};

const chemicals = [
  {
    "id": 1,
    "registerNo": 1,
    "name": "Intergard 251 HS, Grey, Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "80",
    "flashPoint": "31",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "environment",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 2,
    "registerNo": 2,
    "name": "Intergard 251 HS,  Grey, Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "80",
    "flashPoint": "32",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 3,
    "registerNo": 3,
    "name": "Thinner GTA220, Clear",
    "manufacturer": "Akzo Nobel",
    "qty": "8",
    "flashPoint": "25",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "flammable",
      "environment",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 4,
    "registerNo": 4,
    "name": "Interchar 212, Grey, Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "879",
    "flashPoint": "106",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "environment",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 5,
    "registerNo": 5,
    "name": "Interchar 212, Grey, Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "435",
    "flashPoint": "106",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "environment",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 6,
    "registerNo": 6,
    "name": "Thinner GTA123, Clear",
    "manufacturer": "Akzo Nobel",
    "qty": "50",
    "flashPoint": "30",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 7,
    "registerNo": "",
    "name": "Interthane 870, Ral 7035 (Light Grey), Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "60",
    "flashPoint": "35",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 8,
    "registerNo": 7,
    "name": "Interthane 870, Ral 7035 (Light Grey), Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "60",
    "flashPoint": "30",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 9,
    "registerNo": "",
    "name": "Interthane 870, Ral 9005 (Black), Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "10",
    "flashPoint": "50",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "environment",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 10,
    "registerNo": 10,
    "name": "Interthane 870, Ral 9005 (Black), Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "10",
    "flashPoint": "50",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "environment",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 11,
    "registerNo": 11,
    "name": "Thinner GTA713, Clear",
    "manufacturer": "Akzo Nobel",
    "qty": "6",
    "flashPoint": "50",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 12,
    "registerNo": 12,
    "name": "Interzinc 22, Grey Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "6",
    "flashPoint": "19",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 13,
    "registerNo": 13,
    "name": "Interzinc 22, Grey, Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "6",
    "flashPoint": "499",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "environment"
    ],
    "pdf": ""
  },
  {
    "id": 14,
    "registerNo": 14,
    "name": "Lacquer Thinner GP331",
    "manufacturer": "Ritver",
    "qty": "2",
    "flashPoint": "23",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "acute_toxicity",
      "flammable",
      "serious_health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 15,
    "registerNo": "",
    "name": "Interthane 990E Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "300",
    "flashPoint": "50",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "flammable",
      "environment",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 16,
    "registerNo": 15,
    "name": "Interthane 990E Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "300",
    "flashPoint": "50",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "flammable",
      "environment",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 17,
    "registerNo": 16,
    "name": "HILTI CFS-S ACR CP 606",
    "manufacturer": "Hilti",
    "qty": "22",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [],
    "pdf": ""
  },
  {
    "id": 18,
    "registerNo": 17,
    "name": "BCR E-PLUS 300 COMP A",
    "manufacturer": "Bossong",
    "qty": "10",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "environment",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 19,
    "registerNo": 18,
    "name": "ARDROX 800-3",
    "manufacturer": "Chemetall",
    "qty": "20",
    "flashPoint": "-",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable"
    ],
    "pdf": ""
  },
  {
    "id": 20,
    "registerNo": 19,
    "name": "ARDROX 8901 W",
    "manufacturer": "Chemetall",
    "qty": "20",
    "flashPoint": "-",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 21,
    "registerNo": 20,
    "name": "AS-90 WELDERS SPRAY",
    "manufacturer": "Action Can",
    "qty": "180",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "serious_health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 22,
    "registerNo": 21,
    "name": "Magnaflux SKC-S",
    "manufacturer": "Magnaflux",
    "qty": "10",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "gas_under_pressure",
      "flammable",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 23,
    "registerNo": 22,
    "name": "Magnaflux SKD-S2",
    "manufacturer": "Magnaflux",
    "qty": "10",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "gas_under_pressure",
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 24,
    "registerNo": 23,
    "name": "Magnaflux SKL-SP2",
    "manufacturer": "Magnaflux",
    "qty": "10",
    "flashPoint": "108",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "serious_health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 25,
    "registerNo": 24,
    "name": "Miyagawa 246-R Lubricant",
    "manufacturer": "Rex Industries",
    "qty": "8",
    "flashPoint": "174",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "serious_health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 26,
    "registerNo": "",
    "name": "Fischer EM Plus 390",
    "manufacturer": "Fischer",
    "qty": "104",
    "flashPoint": "100",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "environment",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 27,
    "registerNo": "",
    "name": "Petromin Synthetic Engine Oil 5W-30",
    "manufacturer": "Petromin",
    "qty": "6",
    "flashPoint": "226",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [],
    "pdf": ""
  },
  {
    "id": 28,
    "registerNo": "",
    "name": "Petromin Hydraulic Oil AW37",
    "manufacturer": "Petromin",
    "qty": "11",
    "flashPoint": "224",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [],
    "pdf": ""
  },
  {
    "id": 29,
    "registerNo": "",
    "name": "Petromin Grease MP-2",
    "manufacturer": "Petromin",
    "qty": "1",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [],
    "pdf": ""
  },
  {
    "id": 30,
    "registerNo": "",
    "name": "Silicon Sealent",
    "manufacturer": "Saafil",
    "qty": "672",
    "flashPoint": "NA",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [],
    "pdf": ""
  },
  {
    "id": 31,
    "registerNo": "",
    "name": "Spray Aerosol Paint",
    "manufacturer": "Asmaco",
    "qty": "59",
    "flashPoint": "93",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable"
    ],
    "pdf": ""
  },
  {
    "id": 32,
    "registerNo": "",
    "name": "WD-40 Multi use Lubricant",
    "manufacturer": "WD-40",
    "qty": "33",
    "flashPoint": "59",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 33,
    "registerNo": "",
    "name": "Interthane 870,  R764, Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "90",
    "flashPoint": "35",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 34,
    "registerNo": "",
    "name": "Interthane 870,  R764, Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "90",
    "flashPoint": "50",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 35,
    "registerNo": "",
    "name": "Jotun Penguard Express Comp B",
    "manufacturer": "Jotun",
    "qty": "4",
    "flashPoint": "33",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 36,
    "registerNo": "",
    "name": "Pyrolite 15",
    "manufacturer": "Carboline",
    "qty": "850",
    "flashPoint": "-",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "serious_health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 37,
    "registerNo": "",
    "name": "Thinner GTA007, Clear",
    "manufacturer": "Akzo Nobel",
    "qty": "2",
    "flashPoint": "26",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "serious_health_hazard",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 38,
    "registerNo": 1,
    "name": "Intergard 475 HS, Grey, Part A",
    "manufacturer": "Akzo Nobel",
    "qty": "10",
    "flashPoint": "31",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "flammable",
      "health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 39,
    "registerNo": 2,
    "name": "Intergard 475 HS, Grey, Part B",
    "manufacturer": "Akzo Nobel",
    "qty": "10",
    "flashPoint": "32",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "corrosive",
      "flammable",
      "serious_health_hazard"
    ],
    "pdf": ""
  },
  {
    "id": 40,
    "registerNo": "",
    "name": "Monokote MK-6/HY",
    "manufacturer": "Arabian Vermiculite",
    "qty": "200",
    "flashPoint": "-",
    "msds": "Yes",
    "coshh": "Yes",
    "ghs": [
      "serious_health_hazard"
    ],
    "pdf": ""
  }
];
