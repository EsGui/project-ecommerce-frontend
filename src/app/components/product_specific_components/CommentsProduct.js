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
    const [response, setResponse] = useState("");
    const [toggleResponse, setToggleReponse] = useState(false);
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

    const sendResponseUser = async ({ target: { id } }) => {
        await axios({
            url: "http://localhost:3001/register-response-comment",
            method: "post",
            data: {
                response,
                userId: dataUser.id,
                commentId: Number(id),
            }
        });
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
                        <div style={{ width: "100%" }}>
                            {
                                product && product.productComment.map(({
                                    id,
                                    comment,
                                    commentUser,
                                    commentResponse,
                                }) => (
                                    <div>
                                        <div className={ styles.DivUserComment }>
                                            <p style={{ fontWeight: "bold" }}>User: { commentUser.userName }</p>
                                            <p>{ comment }</p>
                                        </div>
                                        <div className={ styles.DivButtonReponseComment }>
                                            <p>Resposta</p>
                                            <div className={ styles.DivResponseAsk }>
                                                <p>{ commentResponse && commentResponse.response }</p>
                                            </div>  
                                            {
                                                !commentResponse && dataUser.id == product.userId? (
                                                    !(toggleResponse && id == idCompare)? (
                                                        <>
                                                            <input id={ id } onClick={ ({ target }) => {
                                                                setIdCompare(target.id)
                                                                setToggleReponse(true)
                                                            } } className={ styles.DivArrowUp } src="http://localhost:3000/icons/arrow.png" type="image" />
                                                        </>
                                                    ) : (
                                                        <div className={ styles.DivReponseAsk }>
                                                            <input id={ id } onClick={ ({ target }) => {
                                                                setIdCompare(target.id)
                                                                setToggleReponse(false)
                                                            } } className={ styles.DivArrowDown } src="http://localhost:3000/icons/arrow.png" type="image" />
                                                            <div className={ styles.DivInputResponseUser }>
                                                                <input onChange={ ({ target: { value } }) => setResponse(value) } type="text" placeholder="Digite sua resposta" />
                                                                <input id={ id } onClick={ sendResponseUser } type="image" src="http://localhost:3000/icons/send.png" />
                                                            </div>
                                                        </div>
                                                    )
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