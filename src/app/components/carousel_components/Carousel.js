"use client"

import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/carousel_style/Carousel.module.css';

export default function Carousel() {
    const [position, setPosition] = useState(0);
    const refImages = useRef(null);
    const refDivSubContainer = useRef(null);
    const imagesCarousel = [
        {image: "http://localhost:3000/images/hadwares.jpg"},
        {image: "http://localhost:3000/images/tv.jpg"}
    ];

    useEffect(() => {
        const slide = () => {
            const listTags = refDivSubContainer.current.childNodes;
            listTags[position].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            })
        }
        slide();
    }, [position]);

    /*
    useEffect(() => {
        const loop = setInterval(() => {
            const listTags = refDivSubContainer.current.childNodes;
            console.log(listTags.length - 1);
            if (position < listTags.length - 1) {
                setPosition((prevState) => prevState + 1);
            } else {
                setPosition(0);
            }
        }, 5000)
        return () => {
            clearInterval(loop);
        }
    })
    */

    const next = () => {
        const listTags = refDivSubContainer.current.childNodes;
        console.log(listTags.length - 1);
        if (position < listTags.length - 1) {
            setPosition((prevState) => prevState + 1);
        } else {
            setPosition(0);
        }
    }

    const previous = () => {
        const listTags = refDivSubContainer.current.childNodes;
        if (position > 0) {
            setPosition((prevState) => prevState -= 1);
        } else {
            setPosition(listTags.length - 1)
        }
    }

    return (
        <div className={ styles.DivContainerCarousel }>
            <button onClick={ previous } className={ styles.ButtonPrevious } type="button">◄</button>
            <div ref={refDivSubContainer} className={ styles.DivSubContainerCarousel }>
                {
                    imagesCarousel.map(({ image }, index) => (
                        <img ref={refImages} src={image} key={index} className={ styles.ImagensCarrossel } />
                    ))
                }
            </div>
            <button onClick={ next } className={ styles.ButtonNext } type="button">►</button>
        </div>
    )
}
