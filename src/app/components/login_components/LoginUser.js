"use client"

import Link from 'next/link'
import styles from '../../styles/login_style/LoginUser.module.css'
import axios from 'axios'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import MyContext from '@/app/context/MyContext'

export default function LoginUser() {
    const {
        setRender
    } = useContext(MyContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const authUser = async () => {
        await axios({
            method: 'post',
            url: "http://localhost:3001/login",
            data: {
                email,
                password,
            }
        }).then((response) => {
            setRender((prevState) => !prevState)
            localStorage.setItem("tokenUser", response.data.token)
            router.push("/");
        })
        .catch((error) => alert(error.response.data.message));
    }

    return (
        <div className={ styles.LoginUserContainer }>
            <div className={ styles.LoginUserField }>
                <input onChange={ ({ target }) => setEmail(target.value) } type="email" placeholder="Digite seu email" />
                <input onChange={ ({ target }) => setPassword(target.value) } type="password" placeholder="Digite sua senha" />
                <button onClick={ authUser } type="button">Entrar</button>
                <Link href="/register">Não tem uma conta? cadastre-se aqui</Link>
            </div>
        </div>
    )
}