"use client"

import MyContext from "@/app/context/MyContext"
import style from "../../styles/painel_user_style/OptionUser.module.css"
import { useContext, useState } from "react";

export default function OptionUser() {
    const {
        dataUser,
    } = useContext(MyContext);

    const [option, setOption] = useState("Meus dados")

    const dados = () => {
        return (
            <>
                {
                    dataUser ?
                        <h1>Bem vindo {`${dataUser.firstName} ${dataUser.lastName}!`}</h1>
                    :
                        <h1>Loading...</h1>
                }
            </>
        )
    }

    const anuncios = () => {
        return (
            <>
                <h1>Anúncios</h1>
            </>
        )
    }

    const produtosAnunciados = () => {
        return (
            <>
                <h1>Produtos Anunciados</h1>
            </>
        )
    }

    const chat = () => {
        return (
            <>
                <h1>Chat</h1>
            </>
        )
    }

    return (
        <div className={ style.DivContainerOptionUser }>
            <div className={ style.DivOptionUser }>
                <ul>
                    <li onClick={() => setOption("Meus dados")}>Meus dados</li>
                    <li onClick={() => setOption("Anunciar")}>Anunciar</li>
                    <li onClick={() => setOption("Produtos anunciados")}>Produtos Anuciados</li>
                    <li onClick={() => setOption("chat")}>Chat</li>
                </ul>
            </div>
            <div className={ style.DivPainelUser }>
                {
                    option == "Meus dados" ?
                        dados()
                    : option == "Anunciar" ? 
                        anuncios()
                    : option == "Produtos anunciados" ? 
                        produtosAnunciados()
                    :
                        chat()
                }
            </div>
        </div>
    )
}