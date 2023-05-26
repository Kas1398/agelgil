// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import tibs12 from '../assets/tibs12.png'
import tibs11 from '../assets/tibs11.png'
import tibs10 from '../assets/tibs10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingTibs = [
    'Shekla Tibs',
    'Kitfo',
    'Kurt Siga',
    'Doro wet',
    'Zilzil Tibs',
    'Beyaynetu'
];

const trendingDrinks = [
    "Bunna/Coffee",
    "Teji",
    "Areqe",
    "Tella",
    "Shay/Tea",
    "Nech Areqe",
]

const cards = [
    {
        imgSrc: tibs12,
        alt: "tibs 12",
        title: "Beyaynetu",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: tibs11,
        alt: "tibs 11",
        title: "Originale Tibs",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: tibs10,
        alt: "tibs 10",
        title: "Doro Wet",
        rating: "4.8",
        price: "$21.00"
    }
];

