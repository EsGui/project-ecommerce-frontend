import Carousel from './components/carousel_components/Carousel'
import HomeFooter from './components/home_components/HomeFooter'
import HomeHeader from './components/home_components/HomeHeader'
import HomeProducts from './components/home_components/HomeProducts'

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <Carousel />
      <HomeProducts />
      <HomeFooter />
    </main>
  )
}
