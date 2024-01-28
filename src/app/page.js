import HomeHeader from './components/home_components/HomeHeader'
import HomeProducts from './components/home_components/HomeProducts'
import HomeSlider from './components/home_slider/HomeSIider'

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeSlider />
      <HomeProducts />
    </main>
  )
}
