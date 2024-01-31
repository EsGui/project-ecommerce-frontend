"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styles from '../../styles/cart_style/CartProducts.module.css'
import MyContext from "@/app/context/MyContext";

export default function CartProducts() {
    const {
        dataUser
    } = useContext(MyContext)
    const [productsCart, setProductsCart] = useState([]);
    console.log(productsCart)

    useEffect(() => {
        const requestProductsCart = async () => {
            axios("http://localhost:3001/list-cart")
            .then((response) => setProductsCart(response.data.productsInCart))
            .catch((error) => console.log(error));
        }
        requestProductsCart();
    }, []);

    return (
        <>
            <div className={ styles.DivControlCartProduct }>
                <div className={ styles.DivTitleCart }>
                    <img src="http://localhost:3000/icons/online-shopping.png" />
                    <h1>Carrinho de compras</h1>
                </div>
                <div className={ styles.DivContainerCartProduct }>
                    {
                        dataUser && dataUser.userProductCart.map(({
                            name,
                            image,
                            price,
                            category
                        }) => (
                            <div className={ styles.DivCartProduct }>
                                <div className={ styles.DivImageProduct }>
                                    <img src={ image } alt={ name } />
                                </div>
                                <div className={ styles.DivDescriptionProduct }>
                                    <p>{name}</p>
                                    <p>{price}</p>
                                    <p>{category}</p>
                                </div>
                                <div className={ styles.DivButtonIcon }>
                                    <input type="image" src="http://localhost:3000/icons/remove.png" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}