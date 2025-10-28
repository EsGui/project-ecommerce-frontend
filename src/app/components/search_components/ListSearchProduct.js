"use client"

import MyContext from "@/app/context/MyContext"
import axios from "axios";
import { useContext, useEffect } from "react";
import styles from '../../styles/home_style/HomeProducts.module.css'

export default function ListSearchProduct({ slug }) {
    const {
        searchProduct,
        setSearchProduct
    } = useContext(MyContext);

    console.log(slug)

    useEffect(() => {
        (async() => {
            const request = await axios.post("http://localhost:3001/search-product", { nameProduct: slug });
            console.log("Aquiiiii ======>>>>>>", request.data)
            setSearchProduct(request.data);
        })()
    }, []);

    console.log(searchProduct)

    return (
        <div>
            {
                searchProduct.length > 0 ? searchProduct.map(({
                    id,
                    name, 
                    image, 
                    price,
                    userProduct
                }, index) => (
                    <div key={index} onClick={ () => {
                        const formatName = name.toLowerCase();
                        router.push(`http://localhost:3000/product-especific/${ formatName.replace(/ /gi, "-") }/${ id }`)
                    }
                    } className={ styles.IndividualProduct }>
                        <img src={ image } alt={ name } />
                        <p>{ name }</p>
                        <p>{ price }</p>
                        <div className={ styles.DivUserProduct }>
                            <p>Publicado por: { userProduct.userName }</p>
                        </div>     
                    </div>
                )) : (
                    <h1>Nenhum produto encontrado!</h1>
                )
            }
        </div>
    )
}