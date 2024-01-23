"use client"

import { useEffect, useRef } from 'react';
import styles from '../styles/features_style/Slide.module.css'

export default function Slide() {
    const carousel = useRef(null);

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

    return (
        <div ref={ carousel } className={ styles.SlideContainer }>
            {
                images.map(({ image }, index) => (
                    <img key={index} src={ image } alt="imagens banner" />
                ))
            }
        </div>
    )
}