"use client"

import Link from 'next/link'
import styles from '../../styles/home_style/HomeHeader.module.css'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import MyContext from '@/app/context/MyContext'

export default function HomeHeader() {
    const {
        dataUser,
        setRender,
    } = useContext(MyContext);

    const router = useRouter()

    return (
        <div className={ styles.HomeHeaderContainer }>
            <div className={ styles.HomeHeaderLogo }>
                <Link style={{
                    textDecoration: "none",
                    color: "white",
                }}  href="/"><h3>ecommerce</h3></Link>
            </div>
            <div className={ styles.HomeHeaderInput }>
                <input type="search" placeholder="Pesquisa"/>
            </div>
            <div className={ styles.HomeHeaderImages }>
                <img onClick={ () => {
                    if (!dataUser) {
                        router.push("/login")
                    } else {
                        router.push("/cart")
                    }
                }} src="http://localhost:3000/icons/carrinho-de-compras.png" alt="carrinho" />
                {
                    dataUser ? (
                        <>
                            <img onClick={ () => {{
                                setRender((prevState) => !prevState);
                                localStorage.removeItem("tokenUser");
                                router.push("/")
                            }} } src="http://localhost:3000/icons/conecte-se.png" alt="Sair da conta" />
                            <Link style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold"
                            }} href="/painel-user">{ dataUser.firstName }</Link>
                        </>
                    ) : (
                        <img onClick={ () => router.push("/login")} src="http://localhost:3000/icons/do-utilizador.png" alt="gravatar" />
                    )
                }
            </div>
        </div>
    )
}