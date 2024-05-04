"use client"

import Link from 'next/link'
import styles from '../../styles/home_style/HomeHeader.module.css'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import MyContext from '@/app/context/MyContext'
import axios from 'axios'

export default function HomeHeader() {
    const {
        dataUser,
        setRender,
    } = useContext(MyContext);

    const [textInput, setTextInput] = useState("");

    const router = useRouter();

    console.log(typeof textInput);

    const inputSearchProductClick = async () => {
        if (textInput.length > 0 && (textInput)) {
            router.push(`/search/${ textInput.replace(' ', 'produto-nao-encontrado') }`);
        }
    }

    return (
        <div className={ styles.HomeHeaderContainer }>
            <div className={ styles.HomeHeaderLogo }>
                <Link style={{
                    textDecoration: "none",
                    color: "white",
                }}  href="/"><h3>ecommerce</h3></Link>
            </div>
            <div className={ styles.HomeHeaderInput }>
                <input onChange={({ target }) => setTextInput(target.value)} type="search" placeholder="Pesquisa"/>
                <button type="button" onClick={inputSearchProductClick}><img src="http://localhost:3000/icons/magnifying-glass.png" /></button>
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