"use client"

import MyContext from "@/app/context/MyContext"
import styles from "../../styles/painel_user_style/OptionUser.module.css"
import { useContext, useState, useRef, useEffect } from "react";
import InputsAdverts from "./sub_components/InputsAdverts";
import Welcome from "./sub_components/Welcome";
import ProductsAdverts from "./sub_components/ProductsAdverts";
import axios from "axios";

export default function OptionUser() {
    const {
        dataUser,
        setRender
    } = useContext(MyContext);
    const [option, setOption] = useState("Meus dados");
    const [toggle, setToggle] = useState(false);

    const toggleMenuBurguer = () => setToggle((prevState) => !prevState);

    const myData = useRef(null);
    const myAnnounce = useRef(null);
    const myAnnounced = useRef(null);

    useEffect(() => {
        const arrayTagsSelect = [myData.current, myAnnounce.current, myAnnounced.current];
        arrayTagsSelect.map((element) => {
            if (element.id == option) {
                element.style.backgroundColor = "rgb(237,237,237)"
                element.style.color = "black"
            } else {
                element.style.backgroundColor = "rgb(40, 40, 41)"
                element.style.color = "white"
            }
        })
    }, [option]);

    return (
        <div className={ styles.DivContainerOptionUser }>
            {/* Menu burguer -> ariefStudio vector icons */}
            <div className={ styles.DivMenuBurguer }>
                {
                    !toggle ? (
                        <img onClick={ toggleMenuBurguer } className={ styles.MenuBurguer } src="http://localhost:3000/icons/menu.png" alt="ariefstudio burguer" />
                    ) : (
                        <div>
                            <img onClick={ toggleMenuBurguer } className={ styles.MenuBurguer } src="http://localhost:3000/icons/menu.png" alt="ariefstudio burguer" />
                            <ul>
                                <li onClick={() => {
                                    setOption("Meus dados");
                                    toggleMenuBurguer();
                                }}>Meus dados</li>
                                <li onClick={() => {
                                    setOption("Anunciar");
                                    toggleMenuBurguer();
                                }}>Anunciar</li>
                                <li onClick={() => {
                                    setOption("Produtos anunciados");
                                    toggleMenuBurguer();
                                }}>Produtos Anuciados</li>
                            </ul>
                        </div>
                    )
                }
            </div>
            <div className={ styles.DivOptionUser }>
                <ul>
                    <li id="Meus dados" ref={myData} onClick={() => {
                        setOption("Meus dados");
                    }}>Meus dados</li>
                    <li id="Anunciar" ref={myAnnounce} onClick={() => {
                        setOption("Anunciar");
                    }}>Anunciar</li>
                    <li id="Produtos anunciados" ref={myAnnounced} onClick={() => {
                        setOption("Produtos anunciados");
                    }}>Produtos Anuciados</li>
                </ul>
            </div>
            <div className={ styles.DivPainelUser }>
                {
                    option == "Meus dados" ?
                        <Welcome styles={ styles } dataUser={ dataUser } />
                    : option == "Anunciar" ? 
                        <InputsAdverts styles={ styles } axios={ axios } useState={ useState } dataUser={ dataUser }  setRender={ setRender } />
                    :
                        <ProductsAdverts styles={ styles } axios={ axios } useState={ useState } dataUser={ dataUser } setRender={ setRender } />
                }
            </div>
        </div>
    )
}