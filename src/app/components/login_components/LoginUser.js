import Link from 'next/link'
import styles from '../../styles/login_style/LoginUser.module.css'

export default function LoginUser() {
    return (
        <div className={ styles.LoginUserContainer }>
            <div className={ styles.LoginUserField }>
                <input type="email" placeholder="Digite seu email" />
                <input type="password" placeholder="Digite sua senha" />
                <button type="button">Entrar</button>
                <Link href="/register">Não tem uma conta? cadastre-se aqui</Link>
            </div>
        </div>
    )
}