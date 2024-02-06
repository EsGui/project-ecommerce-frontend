"use client"

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/features_style/Slide.module.css';

export default function Slide() {
    const carousel = useRef(null);
    const imageWidth = useRef(null);
    const [sCarousel, setSCarousel] = useState(null);
    const [wCarousel, setWCarousel] = useState(null);

    console.log("ref carousel ===>>>", carousel);
    console.log("width carousel ===>>>", wCarousel);

    useEffect(() => {
        setSCarousel(carousel.current)
        setWCarousel(carousel.current.clientWidth);
    }, []);

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
        sCarousel.scrollLeft += wCarousel;
    }

    const previousSlide = () => {
        sCarousel.scrollLeft -= wCarousel;
    }

    return (
        <>
            <input className={ styles.NextStyle } onClick={ previousSlide } type="image" src="http://localhost:3000/icons/arrow.png" />
            <div ref={ carousel } className={ styles.SlideContainer }>
                {
                    images.map(({ image }, index) => (
                        <img ref={ imageWidth } key={index} src={ image } alt="imagens banner" />
                    ))
                }
            </div>
            <input className={ styles.PreviusStyle } onClick={ nextSlide } type="image" src="http://localhost:3000/icons/arrow.png" />
        </>
    )
}