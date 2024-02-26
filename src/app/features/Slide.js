"use client"

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/features_style/Slide.module.css';

export default function Slide() {
    const carousel = useRef(null);
    const [indexControl, setIndexControl] = useState(0);

    const images = [
        {
            image: "http://localhost:3000/images/hadwares.jpg"
        },
        {
            image: "http://localhost:3000/images/pcgamer.webp"
        },
        {
            image: "http://localhost:3000/images/tv.jpg"
        },
    ];

    const nextSlide = () => {
        setIndexControl((prevState) => prevState + 1);
        if (indexControl >= images.length - 1) {
            setIndexControl(0)
        }
    }

    const previousSlide = () => {
        // sCarousel.scrollLeft -= wCarousel;
        setIndexControl((prevState) => prevState - 1)
        if (indexControl <= 0) {
            setIndexControl(images.length - 1);
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndexControl((prevState) => prevState + 1);
    //         if (indexControl >= images.length - 1) {
    //             setIndexControl(0)
    //         }
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval)
    //     }
    // });

    console.log("number", indexControl);

    return (
        <>
            <input className={ styles.NextStyle } onClick={ previousSlide } type="image" src="http://localhost:3000/icons/arrow.png" />
            <div ref={ carousel } className={ styles.SlideContainer }>
                <img src={ images[indexControl].image } alt="imagens banner" />
            </div>
            <input className={ styles.PreviusStyle } onClick={ nextSlide } type="image" src="http://localhost:3000/icons/arrow.png" />
        </>
    )
}