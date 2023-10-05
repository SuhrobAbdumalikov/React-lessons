import ad1Img from "../images/PNG/ads1_img.png";
import ad2Img from "../images/PNG/ads2_img.png";
import royce from "../images/PNG/royce.png";
import crv from "../images/PNG/cr-v.png";
import crv2 from "../images/PNG/cr-v2.png";
import excite from "../images/PNG/excite.png";
import mgzs from "../images/PNG/mgzs.png";
import mgzs2 from "../images/PNG/mgzs2.png";
import mgzx from "../images/PNG/mgzx.png";
import rush from "../images/PNG/rush.png";
import terios from "../images/PNG/terios.png";
import gasStation from "../images/SVG/gas-station.svg";
import carIcon from "../images/SVG/CarCircleIcon.svg";
import profileUser2 from "../images/SVG/profile-2user.svg";

export const CarsData = [
  {
    id: 1,
    name: "Koenigsegg",
    description: "Sport",
    popularCar: true,
    isliked: false,
    img: ad1Img,
    Spesification: [
      {
        icon: gasStation,
        title: "90L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "2 People",
      },
    ],
    dollor: "$99.00/",
    date: "day",
    lastPrice: null,
    button: "Rent Now",
  },
  {
    id: 2,
    name: "Nissan GT - R",
    description: "Sport",
    popularCar: true,
    isliked: false,
    img: ad2Img,
    Spesification: [
      {
        icon: gasStation,
        title: "80L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "2 People",
      },
    ],
    dollor: "$80.00/",
    lastPrice: "$100.00",
    date: "day",
    button: "Rent Now",
  },
  {
    id: 3,
    name: "Rolls - Royce",
    description: "Sedan",
    popularCar: true,
    isliked: false,
    img: royce,
    Spesification: [
      {
        icon: gasStation,
        title: "70L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "4 People",
      },
    ],
    dollor: "$96.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
  {
    id: 4,
    name: "Nissan GT - R",
    description: "Sport",
    popularCar: true,
    isliked: false,
    img: ad2Img,
    Spesification: [
      {
        icon: gasStation,
        title: "80L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "2 People",
      },
    ],
    dollor: "$80.00/",
    lastPrice: "$100.00",
    date: "day",
    button: "Rent Now",
  },
  {
    id: 5,
    isliked: false,
    name: "All New Rush",
    popularCar: false,
    description: "SUV",
    img: rush,
    Spesification: [
      {
        icon: gasStation,
        title: "70L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "6 People",
      },
    ],
    dollor: "$72.00/",
    date: "day",
    lastPrice: "$80.00",
    button: "Rent Now",
  },
  {
    id: 6,
    isliked: false,
    popularCar: false,
    name: "CR  - V",
    description: "SUV",
    img: crv,
    Spesification: [
      {
        icon: gasStation,
        title: "80L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "6 People",
      },
    ],
    dollor: "$80.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
  {
    id: 7,
    name: "All New Terios",
    popularCar: false,
    description: "SUV",
    isliked: false,
    img: terios,
    Spesification: [
      {
        icon: gasStation,
        title: "90L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "6 People",
      },
    ],
    dollor: "$74.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
  {
    id: 8,
    name: "CR  - V",
    popularCar: false,
    description: "SUV",
    isliked: false,
    img: crv2,
    Spesification: [
      {
        icon: gasStation,
        title: "80L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "6 People",
      },
    ],
    dollor: "$80.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
  {
    id: 9,
    name: "MG ZX Exclusice",
    popularCar: false,
    description: "Hatchback",
    isliked: false,
    img: mgzx,
    Spesification: [
      {
        icon: gasStation,
        title: "70L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "4 People",
      },
    ],
    dollor: "$76.00/",
    date: "day",
    lastPrice: "$80.00",
    button: "Rent Now",
  },
  {
    id: 10,
    name: "New MG ZS",
    popularCar: false,
    description: "SUV",
    isliked: false,
    img: mgzs,
    Spesification: [
      {
        icon: gasStation,
        title: "80L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "6 People",
      },
    ],
    dollor: "$80.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
  {
    id: 11,
    name: "MG ZX Excite",
    popularCar: false,
    description: "Hatchback",
    isliked: false,
    img: excite,
    Spesification: [
      {
        icon: gasStation,
        title: "90L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "4 People",
      },
    ],
    dollor: "$74.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
  {
    id: 12,
    name: "New MG ZS",
    popularCar: false,
    description: "SUV",
    isliked: false,
    img: mgzs2,
    Spesification: [
      {
        icon: gasStation,
        title: "80L",
      },
      {
        icon: carIcon,
        title: "Manual",
      },
      {
        icon: profileUser2,
        title: "6 People",
      },
    ],
    dollor: "$80.00/",
    lastPrice: null,
    date: "day",
    button: "Rent Now",
  },
];
