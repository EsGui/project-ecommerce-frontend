"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styles from '../../styles/cart_style/CartProducts.module.css'
import MyContext from "@/app/context/MyContext";

export default function CartProducts() {
    const {
        dataUser,
        setRender,
    } = useContext(MyContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const formatCart = () => {
            const products = dataUser && dataUser.userProductCart.map((data) => ({ ...data, qtd: 1 }))
            setProducts(products)
        }
        formatCart()
    }, [dataUser]);

    console.log(products);

    console.log(dataUser && dataUser.userProductCart);

    const deleteProduct = async (id) => {
        console.log(id);
        await axios({
            url: "http://localhost:3001/delete-cart",
            method: "post",
            data: {
                id
            }
        });
        setRender((prevState) => !prevState)
    }

    return (
        <>
            <div className={ styles.DivControlCartProduct }>
                <div className={ styles.DivTitleCart }>
                    <img src="http://localhost:3000/icons/online-shopping.png" />
                    <h1>Carrinho de compras</h1>
                </div>
                <div className={ styles.DivCalcProductsCart }>
                    <p>R$: { dataUser && dataUser.userProductCart.reduce((current, value) => current + value.price, 0) }</p>
                </div>
                <div className={ styles.DivContainerCartProduct }>
                    {
                        products && products.length > 0 ? products.map(({
                            id,
                            name,
                            image,
                            price,
                            qtd,
                            total,
                            category
                        }) => (
                            <div className={ styles.DivCartProduct }>
                                <div className={ styles.DivImageProduct }>
                                    <img src={ image } alt={ name } />
                                </div>
                                <div>
                                    <p>{ qtd }</p>
                                    <p>{ total }</p>
                                </div>
                                <div className={ styles.DivDescriptionProduct }>
                                    <p>{name}</p>
                                    <p>{price}</p>
                                    <p>{category}</p>
                                </div>
                                <div className={ styles.DivButtonIcon }>
                                    <input onClick={ () => deleteProduct(id) } type="image" src="http://localhost:3000/icons/remove.png" />
                                </div>
                            </div>
                        )) : (
                            <>
                                <img src="http://localhost:3000/icons/cart-empty.png" />
                                <h1>Sem produtos por aqui!</h1>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
