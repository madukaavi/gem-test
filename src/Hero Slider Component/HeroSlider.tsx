import ImageSlider from './../Hero Slider Component/ImageSlider';

const HeroSlider = () => {
    const images = [
        'src/assets/3.png',
        'src/assets/1.png',
        'src/assets/2.png',
      ];
  return (
    <>
    <div className="app relative top-10 flex items-center justify-center ">
      <ImageSlider images={images} />
    </div>
    </>
  )
}

export default HeroSlider