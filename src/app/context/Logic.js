"use client"

import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

export default function Logic({ children }) {
    const [dataUser, setDataUser] = useState(null);
    const [products, setProducts] = useState(null);
    const [render, setRender] = useState(false);
    // Requisição do cadastro
    console.log("Usuário logado ===>>", dataUser);

    // console.log("Produtos ===>>", products)

    useEffect(() => {
        const requestUser = () => {
            const token = localStorage.getItem("tokenUser");
            if (token) {
                axios({
                    method: "post",
                    url: "http://localhost:3001/persist-login",
                    headers: {
                        authorization: token,
                    }
                }).then((response) => setDataUser(response.data))
                .catch((error) => console.error(error));
            } else {
                setDataUser(null)
            }
        }
        requestUser();
    }, [render]);

    useEffect(() => {
        const requestProducts = () => {
            axios("http://localhost:3001/list-product")
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.log(error));
        }
        requestProducts();
    }, []);

    const obj = {
        dataUser,
        setRender,
        products,
        render
    }

    return (
        <MyContext.Provider value={ obj }>
            { children }
        </MyContext.Provider>
    )
}