"use client"

import { useContext, useState } from 'react'
import styles from '../../styles/product_specific_style/CommentsProduct.module.css'
import MyContext from '@/app/context/MyContext'
import axios from 'axios';
import Link from 'next/link';

export default function CommentsProduct({ slug }) {
    const {
        dataUser,
        product,
    } = useContext(MyContext);

    console.log("Comment product ====>>", product)

    const [comment, setComment] = useState("");
    const [toggleResponse, setToggleReponse] = useState(true);
    const [idCompare, setIdCompare] = useState(null)

    const sendCommentsUser = async () => {
        await axios({
            url: "http://localhost:3001/register-comments-product",
            method: "post",
            data: {
                comment,
                userId: dataUser.id,
                productId: Number(slug[1]),
            }
        })
    }

    return (
        <div className={ styles.DivContainerCommentsProduct }>
            {
                dataUser ? (
                    <>
                        <div className={ styles.DivTitleCommentsProduct }>
                            <h2>Perguntas e respostas</h2>
                        </div>
                        <div className={ styles.DivInputAskCommentProducts }>
                            <input onChange={ ({ target: { value } }) =>  setComment(value)} type="text" placeholder="Digite uma pergunta" />
                            <input onClick={ sendCommentsUser } type="image" src="http://localhost:3000/icons/magnifying-glass.png" />
                        </div>            
                        <div className={ styles.DivCommentsUserProduct }>
                            <h1>Comentários dos usuários</h1>
                        </div>
                        <div>
                            {
                                product && product.productComment.map(({
                                    id,
                                    comment,
                                    commentUser
                                }) => (
                                    <div>
                                        <div className={ styles.DivUserComment }>
                                            <p>{ comment }</p>
                                            <p>{ commentUser.userName }</p>
                                        </div>
                                        <div className={ styles.DivButtonReponseComment }>
                                            <p>Responder</p>
                                            {
                                                !(!toggleResponse && id == idCompare) ? (
                                                    <input id={ id } onClick={ ({ target }) => {
                                                        setIdCompare(target.id)
                                                        setToggleReponse(true)
                                                    } } className={ styles.DivArrowUp } src="http://localhost:3000/icons/arrow.png" type="image" />
                                                ) : (!toggleResponse && id == idCompare) ? (
                                                    <>
                                                        <input id={ id } onClick={ ({ target }) => {
                                                            setIdCompare(target.id)
                                                            setToggleReponse(false)
                                                        } } className={ styles.DivArrowDown } src="http://localhost:3000/icons/arrow.png" type="image" />
                                                        <input type="text" placeholder="Digite sua resposta" />
                                                    </>
                                                ) : (
                                                    <></>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <Link href="/login">Cadastre-se ou faça login para fazer uma pergunta</Link>
                )
            } 
        </div>
    )
}