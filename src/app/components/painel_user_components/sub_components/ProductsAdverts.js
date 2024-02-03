"use client"

import { useRouter } from "next/navigation"

export default function ProductsAdverts({ dataUser, styles, axios, setRender }) {
    const router = useRouter();

    const deleteProduct = async (id) => {
        await axios({
            url: "http://localhost:3001/delete-product",
            method: "post",
            data: {
                id,
            }
        });
        setRender((prevState) => !prevState);
    }

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
                                <button onClick={ () => deleteProduct(id) } style={{ cursor: "pointer" }} type="button">Deletar</button>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}