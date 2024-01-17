import Image from 'next/image'
import styles from './page.module.css'
import HomeHeader from './components/home_components/HomeHeader'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeader />
    </main>
  )
}
