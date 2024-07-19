import HorizontalCardScroll from "../CardsComponent/HorizontalCardScroll"
import HeroComponent from "../HeroComponent/HeroComponent"

function Home() {

  return (
    <>
    <HeroComponent/>
    <div className="container mx-auto p-4">
      <HorizontalCardScroll />
    </div>
    </>
  )
}

export default Home