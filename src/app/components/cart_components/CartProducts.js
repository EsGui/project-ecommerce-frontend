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

    const incrementProduct = async (id) => {
        const product = dataUser && dataUser.userProductCart.findIndex((data) => data.id == id);
        if (dataUser.userProductCart[product].quantity < dataUser.userProductCart[product].total)
        await axios({
            url: "http://localhost:3001/update-cart",
            method: "post",
            data: {
                id: Number(id),
                quantity: dataUser.userProductCart[product].quantity + 1
            }
        })
        setRender((prevState) => !prevState)
    }

    const decrementProduct = async (id) => {
        const product = dataUser && dataUser.userProductCart.findIndex((data) => data.id == id);
        console.log(dataUser && dataUser.userProductCart[product])
        if (dataUser.userProductCart[product].quantity > 1) {
            await axios({
                url: "http://localhost:3001/update-cart",
                method: "post",
                data: {
                    id: Number(id),
                    quantity: dataUser.userProductCart[product].quantity - 1
                }
            })
        }
        setRender((prevState) => !prevState)
    }

    const calcTotalPrice = () => {
        return dataUser && dataUser.userProductCart.reduce((current, value) => current + (value.price * value.quantity), 0)
    }

    return (
        <>
            <div className={ styles.DivControlCartProduct }>
                <div className={ styles.DivTitleCart }>
                    <img src="http://localhost:3000/icons/online-shopping.png" />
                    <h1>Carrinho de compras</h1>
                </div>
                <div className={ styles.DivCalcProductsCart }>
                    <p>Valor total R$: { calcTotalPrice() }</p>
                </div>
                <div className={ styles.DivContainerCartProduct }>
                    {
                        dataUser && dataUser.userProductCart.length > 0 ? dataUser.userProductCart.map(({
                            id,
                            name,
                            image,
                            quantity,
                            price,
                            total,
                            category
                        }, index) => (
                            <div key={ index } className={ styles.DivCartProduct }>
                                <div className={ styles.DivImageProduct }>
                                    <img src={ image } alt={ name } />
                                </div>
                                <div className={ styles.DivButtonQtdProductCart }>
                                    <button onClick={() => decrementProduct(id)} type="button">{ `-` }</button>
                                    <p>Quantidade: { quantity }</p>
                                    <button onClick={() => incrementProduct(id)} type="button">{ `+` }</button>
                                    <p>Total: { total }</p>
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
                            <div className={ styles.DivEmptyCart }>
                                <img  src="http://localhost:3000/icons/cart-empty.png" />
                                <h1>Sem produtos por aqui!</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
