"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import styles from "../../styles/product_specific_style/DetailsProduct.module.css"

export default function DetailsProduct({ slug }) {
    const [product, setProduct] = useState(null);

    console.log("Produto especifico ===>>>", product)

    // console.log("slug ===>>", slug.replace(/%20/gi, "-"));

    const saveProductCart = async () => {
        await axios.post({
            url: "http://localhost:3001/cart",
            body: {

            }
        })
    }

    useEffect(() => {
        const requestProductSpecific = async() => {
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
                            <button type="button">Adicionar ao carrinho</button>
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