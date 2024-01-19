"use client"

import styles from '../../styles/home_style/HomeHeader.module.css'
import { useRouter } from 'next/navigation'

export default function HomeHeader() {
    const router = useRouter()

    return (
        <div className={ styles.HomeHeaderContainer }>
            <div className={ styles.HomeHeaderLogo }></div>
            <div className={ styles.HomeHeaderInput }>
                <input type="search" placeholder="Pesquisa"/>
            </div>
            <div className={ styles.HomeHeaderImages }>
                <img src="http://localhost:3000/icons/carrinho-de-compras.png" alt="carrinho" />
                <img onClick={ () => router.push("/login")} src="http://localhost:3000/icons/do-utilizador.png" alt="gravatar" />
            </div>
        </div>
    )
}