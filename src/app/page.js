import Image from 'next/image'
import styles from './page.module.css'
import HomeHeader from './components/home_components/HomeHeader'
import HomeSlider from './components/home_slider/HomeSIider'

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeSlider />
    </main>
  )
}
