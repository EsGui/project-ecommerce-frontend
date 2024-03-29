"use client"

import { useState } from 'react'
import styles from '../../styles/register_style/Register.module.css'
import axios from 'axios';

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = () => {
        axios({
            method: "post",
            url: "http://localhost:3001/cadastro",
            data: {
                firstName,
                lastName,
                userName,
                email,
                password,
                confirmPassword
            }
        }).then((response) => alert(response.data.message))
        .catch((error) => alert(error.response.data.message));
    }

    return (
        <div className={ styles.DivRegisterContainer }>
            <div className={ styles.DivRegisterData }>
                <input onChange={ ({ target }) => setFirstName(target.value) } type="text" placeholder="Digite seu nome" />
                <input onChange={ ({ target }) => setLastName(target.value) } type="text" placeholder="Digite seu sobrenome" />
                <input onChange={ ({ target }) => setUserName(target.value) } type="text" placeholder="Digite seu nome de usuário" />
                <input onChange={ ({ target }) => setEmail(target.value) } type="text" placeholder="Digite email" />
                <input onChange={ ({ target }) => setPassword(target.value) } type="password" placeholder="Digite sua senha" />
                <input onChange={ ({ target }) => setConfirmPassword(target.value) } type="password" placeholder="Confirme sua senha" />
                <button onClick={ register } type="button">Cadastrar</button>
            </div>
        </div>
    )
}