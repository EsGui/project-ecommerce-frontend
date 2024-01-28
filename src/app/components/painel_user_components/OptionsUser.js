"use client"

import MyContext from "@/app/context/MyContext"
import styles from "../../styles/painel_user_style/OptionUser.module.css"
import { useContext, useState } from "react";
import InputsAdverts from "./sub_components/InputsAdverts";
import Welcome from "./sub_components/Welcome";
import ProductsAdverts from "./sub_components/ProductsAdverts";
import Chat from "./sub_components/Chat";
import axios from "axios";

export default function OptionUser() {
    const {
        dataUser,
        setRender
    } = useContext(MyContext);
    const [option, setOption] = useState("Meus dados")

    return (
        <div className={ styles.DivContainerOptionUser }>
            <div className={ styles.DivOptionUser }>
                <ul>
                    <li onClick={() => setOption("Meus dados")}>Meus dados</li>
                    <li onClick={() => setOption("Anunciar")}>Anunciar</li>
                    <li onClick={() => setOption("Produtos anunciados")}>Produtos Anuciados</li>
                    <li onClick={() => setOption("chat")}>Chat</li>
                </ul>
            </div>
            <div className={ styles.DivPainelUser }>
                {
                    option == "Meus dados" ?
                        <Welcome dataUser={ dataUser } />
                    : option == "Anunciar" ? 
                        <InputsAdverts styles={ styles } axios={ axios } useState={ useState } dataUser={ dataUser }  setRender={ setRender } />
                    : option == "Produtos anunciados" ? 
                        <ProductsAdverts styles={ styles } axios={ axios } useState={ useState } dataUser={ dataUser } />
                    :
                        <Chat />
                }
            </div>
        </div>
    )
}