import './components/Header'
import Header from './components/Header'
import CarouselDefault from "./components/CarouselDefault"
import banner_1 from "./assets/images/banner_1.png"
import banner_2 from "./assets/images/banner_2.jpg"
import banner_3 from "./assets/images/banner_3.jpg"

function App() {
  let slides: string[] = [
    banner_1,
    banner_2,
    banner_3
  ];

  return (
    <>
      <Header />
      <CarouselDefault slides={slides} />
    </>
  )
}

export default App
