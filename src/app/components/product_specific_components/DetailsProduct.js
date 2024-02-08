"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styles from "../../styles/product_specific_style/DetailsProduct.module.css"
import MyContext from "@/app/context/MyContext";

export default function DetailsProduct({ slug }) {
    const {
        dataUser,
        setRender,
        setProduct,
        product,
    } = useContext(MyContext)

    const saveProductCart = async () => {
        await axios({
            url: "http://localhost:3001/cart",
            method: "post",
            data: {
                name: product.name,
                price: product.price,
                qtd: product.qtd,
                total: product.total,
                quantity: 1,
                image: product.image,
                userId: dataUser.id,
                productId: product.id,
                category: product.category,
            }
        })
        setRender((prevState) => !prevState);
    }

    useEffect(() => {
        const requestProductSpecific = async () => {
            if (slug) {
                await axios({
                    method: "post",
                    url: "http://localhost:3001/list-product-especific",
                    data: {
                        id: Number(slug[1]),
                        slug: slug[0]
                    }
                }).then((response) => setProduct(response.data.product))
                .catch((error) => {
                    console.log(error.response.data.error);
                })
            }
        }
        requestProductSpecific()
    }, []);

    return (
        <div className={ styles.DivComponent }>
            {
                product ? (
                    <div className={ styles.DivContainer }>
                        <div className={ styles.DivProduct }>
                            <img src={ product.image } />
                            <p>{ product.name }</p>
                            <p>{ product.price }</p>
                        </div>
                        <div className={ styles.DivDescription }>
                            <p>{ product.description }</p>
                        </div>
                        <div className={ styles.DivButton }>
                            <button onClick={ saveProductCart } type="button">Adicionar ao carrinho</button>
                            <p>Vendido por: { product.userProduct.userName }</p>
                        </div>        
                    </div>
                ) : (
                    <div>
                        <h1>Produto não encontrado</h1>
                    </div>
                )
            }
        </div>
    )
}
