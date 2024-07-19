import Buttoncomponent from "../ButtonComponent/Buttoncomponent"
import MainHeader from "../HeaderComponent/MainHeader"
import HeroSlider from "../Hero Slider Component/HeroSlider"

function HeroComponent() {
  return (
    <>
    <div className="w-full h-[600px] lg:bg-gradient-to-r from-custom-blue via-custom-purple md:bg-slate-100 sm:bg">
      <MainHeader/>
      <HeroSlider/>
      <div className="w-full h-[80px] flex items-center justify-center flex-col">
      <Buttoncomponent />
      </div>
    </div>
    </>
  )
}

export default HeroComponent