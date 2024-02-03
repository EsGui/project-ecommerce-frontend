"use client"

import { useRouter } from "next/navigation"

export default function ProductsAdverts({ dataUser, styles }) {
    const router = useRouter()

    return (
        <>
            <h1>Produtos Anunciados</h1>
            <div className={ styles.DivContainerProductAdverts }>
                {
                    dataUser && dataUser.productUser.map(({
                        id,
                        name,
                        image,
                        price,
                        description
                    }) => (
                        <>
                            <div className={ styles.DivProductsAdverts }>
                                <img onClick={() => {
                                    const formatName = name.toLowerCase();
                                    router.push(`http://localhost:3000/product-especific/${ formatName.replace(/ /gi, "-") }/${ id }`)
                                }}  src={image} alt={ name } />
                                <p>{ name }</p>
                                <p>{ price }</p>
                                <p>{ description }</p>
                                <button type="button">Deletar</button>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}