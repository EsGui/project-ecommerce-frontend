"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styles from "../../styles/product_specific_style/DetailsProduct.module.css"
import MyContext from "@/app/context/MyContext";

export default function DetailsProduct({ slug }) {
    const {
        dataUser
    } = useContext(MyContext)
    const [product, setProduct] = useState(null);

    console.log("Produto especifico ===>>>", product)

    // console.log("slug ===>>", slug.replace(/%20/gi, "-"));

    const saveProductCart = () => {
        axios({
            url: "http://localhost:3001/cart",
            method: "post",
            data: {
                name: product.name,
                price: product.price,
                image: product.image,
                userId: dataUser.id,
                productId: product.id,
                category: product.category,
            }
        })
        console.log("cliquei")
    }

    useEffect(() => {
        const requestProductSpecific = async () => {
            if (slug) {
                axios({
                    method: "post",
                    url: "http://localhost:3001/list-product-especific",
                    data: {
                        slug,
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
                            <button type="button">Comprar</button>
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