"use client"

import { useContext } from 'react'
import styles from '../../styles/home_style/HomeProducts.module.css'
import MyContext from '@/app/context/MyContext'
import { useRouter } from 'next/navigation'

export default function HomeProducts() {
    const router = useRouter();
    
    const {
        products
    } = useContext(MyContext);

    return (
        <div className={ styles.DivContainerHomeProducts }>
            <div className={ styles.DivControlHomeProducts }>
                {
                    products ? products.map(({
                        name, 
                        image, 
                        price,
                        userProduct
                    }, index) => (
                        <div key={index} onClick={ () => {
                            const formatName = name.toLowerCase();
                            router.push(`http://localhost:3000/product-especific/${ formatName.replace(/ /gi, "-") }`)} 
                        } className={ styles.IndividualProduct }>
                            <img src={ image } alt={ name } />
                            <p>{ name }</p>
                            <p>{ price }</p>
                            <div className={ styles.DivUserProduct }>
                                <p>Publicado por: { userProduct.userName }</p>
                            </div>             
                        </div>
                    )) : (
                        <h1>Loading...</h1>
                    )
                }
            </div>
        </div>
    )
}