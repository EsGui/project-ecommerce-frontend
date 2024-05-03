import Link from 'next/link'
import styles from '../../styles/home_style/HomeFooter.module.css'

export default function HomeFooter() {
    return (
        <div className={ styles.DivContainerHomeFooter }>
            <Link href="https://github.com/EsGui"><img src="http://localhost:3000/icons/github.png"/></Link>
        </div>
    )
}