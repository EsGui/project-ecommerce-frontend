export default function ProductsAdverts({ dataUser, styles }) {
    return (
        <>
            <h1>Produtos Anunciados</h1>
            {
                dataUser && dataUser.productUser.map(({
                    name,
                    image,
                    price,
                    description
                }) => (
                    <div className={ styles.DivProductsAdverts }>
                        <img src={image} alt={ name } />
                        <p>{ name }</p>
                        <p>{ price }</p>
                        <p>{ description }</p>
                    </div>
                ))
            }
        </>
    )
}