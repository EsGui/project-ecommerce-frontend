import styles from '../../styles/home_style/HomeHeader.module.css'

export default function HomeHeader() {
    return (
        <div className={ styles.HomeHeaderContainer }>
            <div className={ styles.HomeHeaderLogo }></div>
            <div className={ styles.HomeHeaderInput }>
                <input type="search" placeholder="Pesquisa"/>
            </div>
            <div className={ styles.HomeHeaderImages }>
                <img src="http://localhost:3000/icons/carrinho-de-compras.png" alt="carrinho" />
                <img src="http://localhost:3000/icons/do-utilizador.png" alt="gravatar" />
            </div>
        </div>
    )
}