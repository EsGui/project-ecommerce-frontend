"use client"

import { useContext } from 'react'
import styles from '../../styles/home_style/HomeProducts.module.css'
import MyContext from '@/app/context/MyContext'

export default function HomeProducts() {
    const {
        products
    } = useContext(MyContext)
    return (
        <div className={ styles.DivContainerHomeProducts }>
            <div className={ styles.DivControlHomeProducts }>
                {
                    products.map(({ 
                        name, 
                        image, 
                        price,
                        userProduct
                    }) => (
                        <div className={ styles.IndividualProduct }>
                            <img src={ image } alt={ name } />
                            <p>{ name }</p>
                            <p>{ price }</p>
                            <div className={ styles.DivUserProduct }>
                                <p>Publicado por: { userProduct.userName }</p>
                            </div>             
                        </div>
                    ))
                }
            </div>
        </div>
    )
}