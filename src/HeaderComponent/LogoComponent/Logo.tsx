import Gemlogo from './../../assets/image 1.png'
const Logo = () => {

  return (
    <>
    {/*-----logo--Area*/}
    
    <div className="hidden sm:block md:block lg:block xl:block mt-2">
    <div className="flex justify-center">
      <img src={Gemlogo} alt="" />
      </div>
      </div>
      {/*-logo--Area*/}
    </>
  )
}

export default Logo